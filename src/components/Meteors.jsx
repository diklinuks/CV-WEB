import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

// Falling stars / shooting-star streaks (Aceternity-style, CSS-driven).
// Disabled under reduced-motion.
export default function Meteors({ number = 12 }) {
  const reduce = useReducedMotion();
  const meteors = useMemo(
    () =>
      Array.from({ length: number }, () => ({
        left: Math.floor(Math.random() * 1600 - 200) + "px",
        delay: (Math.random() * 5).toFixed(2) + "s",
        duration: Math.floor(Math.random() * (12 - 5) + 5) + "s",
      })),
    [number]
  );

  if (reduce) return null;

  return (
    <>
      {meteors.map((m, i) => (
        <span
          key={i}
          className="animate-meteor pointer-events-none absolute left-1/2 top-0 h-0.5 w-0.5 rotate-[215deg] rounded-full bg-white/80 shadow-[0_0_0_1px_#ffffff10] before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/50 before:to-transparent before:content-['']"
          style={{ left: m.left, top: 0, animationDelay: m.delay, animationDuration: m.duration }}
        />
      ))}
    </>
  );
}
