import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// Stacked carousel (adapted from 21st.dev "stagger testimonials").
// One card centered/highlighted, others fanned behind. Click a side card to
// bring it to center; click the centered card to activate it.
// items: [{ id, title, subtitle, color, meta? }]
export default function StaggerCards({ items, onActivate }) {
  const [list, setList] = useState(items);
  const [size, setSize] = useState(330);

  useEffect(() => {
    const f = () => setSize(window.matchMedia("(min-width: 640px)").matches ? 330 : 250);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  const move = (steps) => {
    const nl = [...list];
    if (steps > 0) for (let i = steps; i > 0; i--) nl.push(nl.shift());
    else for (let i = steps; i < 0; i++) nl.unshift(nl.pop());
    setList(nl);
  };

  return (
    <div className="relative w-full" style={{ height: size + 150 }}>
      {list.map((item, index) => {
        const position = list.length % 2 ? index - (list.length + 1) / 2 : index - list.length / 2;
        const isCenter = position === 0;
        return (
          <div
            key={item.id}
            onClick={() => (isCenter ? onActivate?.(item) : move(position))}
            className="cursor-grow absolute left-1/2 top-1/2 flex flex-col justify-between rounded-3xl border p-7 transition-all duration-500 ease-in-out"
            style={{
              width: size,
              height: size,
              zIndex: isCenter ? 10 : 5 - Math.abs(position),
              background: isCenter ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.015)",
              borderColor: isCenter ? item.color : "rgba(255,255,255,0.12)",
              boxShadow: isCenter ? `0 20px 60px -20px ${item.color}` : "none",
              opacity: isCenter ? 1 : Math.max(0.32, 1 - Math.abs(position) * 0.28),
              backdropFilter: "blur(2px)",
              transform: `
                translate(-50%, -50%)
                translateX(${(size / 1.6) * position}px)
                translateY(${isCenter ? -18 : position % 2 ? 14 : -14}px)
                rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
                scale(${isCenter ? 1 : 0.94})
              `,
            }}
          >
            <span className="flex items-center justify-between">
              <span className="font-mono text-xs text-white/45">{item.meta}</span>
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }} />
            </span>
            <span className="block">
              <span className="block text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none tracking-[-0.02em] text-white">
                {item.title}
              </span>
              <span className="mt-3 block text-sm text-white/55">{item.subtitle}</span>
            </span>
            <span className={`flex items-center gap-1.5 font-mono text-[0.72rem] tracking-wide transition-opacity ${isCenter ? "text-white opacity-100" : "opacity-0"}`}>
              Open <ArrowUpRight size={14} />
            </span>
          </div>
        );
      })}

      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
        <button
          onClick={() => move(-1)}
          aria-label="Previous"
          className="cursor-grow grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => move(1)}
          aria-label="Next"
          className="cursor-grow grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:text-white"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
