import { useEffect, useRef, useState } from "react";

// Custom cursor: a small dot that tracks tightly + a larger ring that lags
// behind and grows over interactive elements. White with mix-blend-difference,
// so it inverts cleanly over black, white, and the colorful shader.
// Adapted from a 21st.dev "Cursor Follower" component. Disabled on touch.
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-on");

    const mouse = { x: innerWidth / 2, y: innerHeight / 2 };
    const dot = { ...mouse };
    const ring = { ...mouse };
    let raf;

    const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const isInteractive = (el) =>
      el && el.closest && el.closest("a, button, [role='button'], input, textarea, select, label, .cursor-grow");
    const onOver = (e) => { if (isInteractive(e.target)) ring.hover = true; };
    const onOut = (e) => { if (isInteractive(e.target)) ring.hover = false; };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    const lerp = (a, b, n) => a + (b - a) * n;
    const tick = () => {
      dot.x = lerp(dot.x, mouse.x, 0.35);
      dot.y = lerp(dot.y, mouse.y, 0.35);
      ring.x = lerp(ring.x, mouse.x, 0.16);
      ring.y = lerp(ring.y, mouse.y, 0.16);
      const s = ring.hover ? 1.8 : 1;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${dot.x}px, ${dot.y}px) translate(-50%, -50%)`;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${s})`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("cursor-on");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-[100]" style={{ mixBlendMode: "difference" }} aria-hidden>
      <div ref={dotRef} className="absolute left-0 top-0 h-2 w-2 rounded-full bg-white" />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-white transition-[width,height] duration-200"
      />
    </div>
  );
}
