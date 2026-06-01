import { useEffect, useRef } from "react";

// Rainbow light-wave shader for the hero (the one bit of colour on the site).
// A flowing band with a white-hot core that disperses into a rainbow, glowing
// over black. three.js is dynamically imported (separate chunk, never blocks
// first paint). Respects reduced-motion; fails gracefully to plain black.
export default function ShaderWave() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    let renderer, material, geometry, scene, camera, frameId, ro;
    let disposed = false;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      let THREE;
      try { THREE = await import("three"); } catch { return; }
      if (disposed || !container) return;
      try {
        scene = new THREE.Scene();
        camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

        const size = () => {
          const w = container.clientWidth || 1;
          const h = container.clientHeight || 1;
          renderer.setSize(w, h, false);
          if (material) material.uniforms.iResolution.value.set(w, h);
        };

        material = new THREE.ShaderMaterial({
          transparent: true,
          blending: THREE.AdditiveBlending,
          depthTest: false,
          depthWrite: false,
          uniforms: {
            iTime: { value: 0 },
            iResolution: { value: new THREE.Vector2(1, 1) },
          },
          vertexShader: `void main(){ gl_Position = vec4(position,1.0); }`,
          fragmentShader: `
            precision highp float;
            uniform float iTime;
            uniform vec2 iResolution;

            vec3 hsv2rgb(vec3 c){
              vec3 p = abs(fract(c.xxx + vec3(1.0, 2.0/3.0, 1.0/3.0)) * 6.0 - 3.0);
              return c.z * mix(vec3(1.0), clamp(p - 1.0, 0.0, 1.0), c.y);
            }

            void main(){
              vec2 uv = gl_FragCoord.xy / iResolution.xy;
              float t = iTime;

              // flowing multi-octave wave, baseline in the lower third
              float base = 0.36;
              float w = base
                + 0.085 * sin(uv.x * 3.0 + t * 0.8)
                + 0.045 * sin(uv.x * 6.3 - t * 0.55)
                + 0.022 * sin(uv.x * 12.0 + t * 1.3);

              float d = uv.y - w;
              float dist = abs(d);

              float glow = 0.018 / (dist + 0.015);
              float band = exp(-pow(d * 6.0, 2.0));
              glow *= (0.45 + band);

              float core = smoothstep(0.045, 0.0, dist);

              float hue = fract(uv.x * 0.55 + t * 0.035 + d * 0.6);
              vec3 col = hsv2rgb(vec3(hue, 0.9, 1.0));
              col = mix(col, vec3(1.0), core * 0.85);

              vec3 outc = col * glow;
              float a = clamp(max(outc.r, max(outc.g, outc.b)), 0.0, 1.0);
              gl_FragColor = vec4(outc, a);
            }
          `,
        });

        geometry = new THREE.PlaneGeometry(2, 2);
        scene.add(new THREE.Mesh(geometry, material));
        container.appendChild(renderer.domElement);
        Object.assign(renderer.domElement.style, { width: "100%", height: "100%", display: "block" });
        size();
        ro = new ResizeObserver(size);
        ro.observe(container);

        if (reduced) {
          material.uniforms.iTime.value = 8.0;
          renderer.render(scene, camera);
        } else {
          const animate = () => {
            material.uniforms.iTime.value += 0.016;
            renderer.render(scene, camera);
            frameId = requestAnimationFrame(animate);
          };
          animate();
        }
      } catch { /* leave black */ }
    })();

    return () => {
      disposed = true;
      if (frameId) cancelAnimationFrame(frameId);
      if (ro) ro.disconnect();
      try {
        renderer?.domElement?.remove();
        renderer?.dispose();
        geometry?.dispose();
        material?.dispose();
      } catch { /* noop */ }
    };
  }, []);

  return <div ref={ref} className="absolute inset-0 h-full w-full" aria-hidden />;
}
