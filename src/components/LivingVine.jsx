import { useEffect, useRef } from "react";

// Living vine background (adapted from a 21st.dev component).
// Organic vines grow upward (ambient) and from the cursor. Canvas-based, no deps.
// `rgb` is "r,g,b" so the vine can be tinted per section.
export default function LivingVine({ rgb = "45,255,190" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 1, h = 1, raf, destroyed = false;

    const resize = () => {
      w = canvas.clientWidth || 1;
      h = canvas.clientHeight || 1;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const MAX = 140;
    const branches = [];

    class Branch {
      constructor(x, y, angle) {
        this.pts = [{ x, y }];
        this.life = 1;
        this.angle = angle ?? -Math.PI / 2 + (Math.random() - 0.5) * 0.6;
        this.speed = Math.random() * 1.1 + 0.5;
        this.len = 0;
        this.max = Math.random() * 70 + 45;
        this.wob = (Math.random() - 0.5) * 0.3;
      }
      update() {
        if (this.len >= this.max) { this.life -= 0.012; return; }
        this.angle += this.wob * Math.random();
        const last = this.pts[this.pts.length - 1];
        const nx = last.x + Math.cos(this.angle) * this.speed;
        const ny = last.y + Math.sin(this.angle) * this.speed;
        this.pts.push({ x: nx, y: ny });
        this.len++;
        if (branches.length < MAX && this.pts.length > 8 && Math.random() > 0.975) {
          branches.push(new Branch(nx, ny, this.angle + (Math.random() - 0.5) * 1.1));
        }
      }
      draw() {
        ctx.beginPath();
        ctx.moveTo(this.pts[0].x, this.pts[0].y);
        for (let i = 1; i < this.pts.length; i++) ctx.lineTo(this.pts[i].x, this.pts[i].y);
        ctx.strokeStyle = `rgba(${rgb}, ${(this.life * 0.45).toFixed(3)})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    const spawnBottom = () => {
      if (branches.length < MAX) branches.push(new Branch(Math.random() * w, h + 4, -Math.PI / 2 + (Math.random() - 0.5) * 0.5));
    };
    // seed a few so it's alive immediately
    for (let i = 0; i < 5; i++) spawnBottom();

    const onMove = (e) => {
      if (branches.length < MAX && Math.random() > 0.9) {
        const r = canvas.getBoundingClientRect();
        branches.push(new Branch(e.clientX - r.left, e.clientY - r.top, Math.random() * Math.PI * 2));
      }
    };
    window.addEventListener("mousemove", onMove);

    let frame = 0;
    const animate = () => {
      if (destroyed) return;
      ctx.fillStyle = "rgba(8,8,10,0.07)";
      ctx.fillRect(0, 0, w, h);
      frame++;
      if (frame % 28 === 0) spawnBottom();
      for (let i = branches.length - 1; i >= 0; i--) {
        const b = branches[i];
        b.update();
        b.draw();
        if (b.life <= 0) branches.splice(i, 1);
      }
      raf = requestAnimationFrame(animate);
    };

    if (reduced) {
      // a few static branches, no animation
      for (let i = 0; i < 40; i++) branches.forEach((b) => { b.update(); });
      branches.forEach((b) => b.draw());
    } else {
      animate();
    }

    return () => {
      destroyed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [rgb]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 z-0 h-full w-full"
      style={{ background: "#08080a" }}
    />
  );
}
