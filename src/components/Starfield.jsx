import { useEffect, useRef } from "react";

// Starfield inspired by aliimam/starfield-1: 3D stars flying toward the viewer,
// with mouse parallax and a "warp" burst. Cosmic-tinted, perf- and
// reduced-motion-aware (pauses when tab hidden, caps DPR, static fallback).
const TINTS = ["255,255,255", "180,232,255", "200,182,255", "255,200,235"]; // white, cyan, violet, magenta

export default function Starfield({ warping = false, className = "" }) {
  const canvasRef = useRef(null);
  const warpTarget = useRef(0);

  useEffect(() => {
    warpTarget.current = warping ? 1 : 0;
  }, [warping]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, cx = 0, cy = 0, dpr = 1, stars = [], raf = 0, warp = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

    const spawn = () => ({
      x: (Math.random() * 2 - 1) * w,
      y: (Math.random() * 2 - 1) * h,
      z: Math.random() * w,
      pz: 0,
      t: TINTS[(Math.random() * TINTS.length) | 0],
    });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.width = Math.floor(window.innerWidth * dpr);
      h = canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      cx = w / 2; cy = h / 2;
      const count = Math.min(520, Math.floor((window.innerWidth * window.innerHeight) / 4200));
      stars = Array.from({ length: count }, spawn);
    };

    const onMove = (e) => {
      mouse.tx = e.clientX / window.innerWidth - 0.5;
      mouse.ty = e.clientY / window.innerHeight - 0.5;
    };

    const drawStatic = () => {
      ctx.fillStyle = "#06060a";
      ctx.fillRect(0, 0, w, h);
      for (const s of stars) {
        const k = 140 / s.z;
        const sx = cx + s.x * k, sy = cy + s.y * k;
        const depth = 1 - s.z / w;
        ctx.globalAlpha = 0.4 + depth * 0.6;
        ctx.fillStyle = `rgb(${s.t})`;
        ctx.beginPath();
        ctx.arc(sx, sy, Math.max(0.5, depth * 1.8) * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = () => {
      warp += (warpTarget.current - warp) * 0.06;
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      const speed = 1.6 + warp * 36;
      const ox = mouse.x * 90 * dpr, oy = mouse.y * 90 * dpr;

      // motion-trail fade (longer trails as warp increases)
      ctx.fillStyle = `rgba(6,6,10,${0.38 - warp * 0.24})`;
      ctx.fillRect(0, 0, w, h);

      for (const s of stars) {
        s.pz = s.z;
        s.z -= speed;
        if (s.z < 1) { Object.assign(s, spawn()); s.z = w; s.pz = w; continue; }
        const k = 140 / s.z, pk = 140 / s.pz;
        const sx = cx + s.x * k + ox, sy = cy + s.y * k + oy;
        const px = cx + s.x * pk + ox, py = cy + s.y * pk + oy;
        const depth = 1 - s.z / w;
        ctx.strokeStyle = `rgba(${s.t},${0.32 + depth * 0.68})`;
        ctx.lineWidth = Math.max(0.5, depth * 2.2) * dpr;
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.stroke();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove);

    if (reduce) {
      drawStatic();
      return () => {
        window.removeEventListener("resize", resize);
        window.removeEventListener("pointermove", onMove);
      };
    }

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden) raf = requestAnimationFrame(frame);
    };
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-0 h-full w-full ${className}`}
    />
  );
}
