import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.12;
      y += (ty - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("pointermove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 opacity-70 will-change-transform print:hidden"
      style={{
        marginLeft: "-320px",
        marginTop: "-320px",
        background:
          "radial-gradient(closest-side, rgba(124,92,255,0.16), rgba(70,224,255,0.07) 42%, transparent 70%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
