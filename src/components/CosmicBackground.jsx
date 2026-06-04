import { useEffect, useRef } from "react";
import * as THREE from "three";

// Animated shader background — the diagonal aurora/meteor-streak look from the
// user's 21st.dev "Animated Shader Background" reference (AnoAI shader), adapted
// to our stack: capped DPR, paused when hidden, static under reduced-motion.
// `ctanh` polyfills tanh (not built into WebGL1/GLSL ES 1.0).
export default function CosmicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const dpr = window.innerWidth < 768 ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
    renderer.setPixelRatio(dpr);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const material = new THREE.ShaderMaterial({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      },
      vertexShader: "void main(){ gl_Position = vec4(position, 1.0); }",
      fragmentShader: `
        uniform float iTime;
        uniform vec2 iResolution;
        #define NUM_OCTAVES 3
        float rand(vec2 n){ return fract(sin(dot(n, vec2(12.9898,4.1414)))*43758.5453); }
        float noise(vec2 p){
          vec2 ip=floor(p); vec2 u=fract(p); u=u*u*(3.0-2.0*u);
          float res=mix(mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
                        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
          return res*res;
        }
        float fbm(vec2 x){
          float v=0.0; float a=0.3; vec2 shift=vec2(100);
          mat2 rot=mat2(cos(0.5),sin(0.5),-sin(0.5),cos(0.5));
          for(int i=0;i<NUM_OCTAVES;++i){ v+=a*noise(x); x=rot*x*2.0+shift; a*=0.4; }
          return v;
        }
        vec4 ctanh(vec4 x){ vec4 e=exp(2.0*x); return (e-1.0)/(e+1.0); }
        void main(){
          vec2 shake=vec2(sin(iTime*1.2)*0.005, cos(iTime*2.1)*0.005);
          vec2 p=((gl_FragCoord.xy + shake*iResolution.xy)-iResolution.xy*0.5)/iResolution.y*mat2(6.0,-4.0,4.0,6.0);
          vec2 v; vec4 o=vec4(0.0);
          float f=2.0+fbm(p+vec2(iTime*5.0,0.0))*0.5;
          for(float i=0.0;i<35.0;i++){
            v=p+cos(i*i+(iTime+p.x*0.08)*0.025+i*vec2(13.0,11.0))*3.5+vec2(sin(iTime*3.0+i)*0.003,cos(iTime*3.5-i)*0.003);
            float tailNoise=fbm(v+vec2(iTime*0.5,i))*0.3*(1.0-(i/35.0));
            vec4 auroraColors=vec4(
              0.1+0.3*sin(i*0.2+iTime*0.4),
              0.3+0.5*cos(i*0.3+iTime*0.5),
              0.7+0.3*sin(i*0.4+iTime*0.3),
              1.0);
            vec4 currentContribution=auroraColors*exp(sin(i*i+iTime*0.8))/length(max(v,vec2(v.x*f*0.015,v.y*1.5)));
            float thinnessFactor=smoothstep(0.0,1.0,i/35.0)*0.6;
            o+=currentContribution*(1.0+tailNoise*0.8)*thinnessFactor;
          }
          o=ctanh(pow(o/100.0, vec4(1.6)));
          gl_FragColor=o*1.5;
        }`,
    });

    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
    scene.add(mesh);

    let frameId = 0;
    const animate = () => {
      material.uniforms.iTime.value += 0.016;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    const onVis = () => {
      cancelAnimationFrame(frameId);
      if (!document.hidden) frameId = requestAnimationFrame(animate);
    };

    if (reduce) {
      material.uniforms.iTime.value = 8.0;
      renderer.render(scene, camera);
    } else {
      document.addEventListener("visibilitychange", onVis);
      animate();
    }

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      material.uniforms.iResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement.parentNode) renderer.domElement.parentNode.removeChild(renderer.domElement);
      mesh.geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden print:hidden" style={{ background: "#06060a" }}>
      <div ref={containerRef} className="absolute inset-0" />
      {/* darken + vignette for text legibility */}
      <div className="absolute inset-0" style={{ background: "rgba(6,6,10,0.5)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(125% 100% at 50% 0%, transparent 42%, rgba(6,6,10,0.55) 100%)" }} />
    </div>
  );
}
