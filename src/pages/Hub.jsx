import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Starfield from "../components/Starfield";

// Page 2 — choose a section. HORIZONTAL carousel (snap + drag/scroll + arrows + dots),
// smaller transparent glass cards. Instant navigation (no warp).
const dests = [
  { to: "/cv", label: "CV", desc: "Education, skills, who I am.", n: "01", accent: "var(--cyan)" },
  { to: "/projects", label: "Work", desc: "Projects & live demos.", n: "02", accent: "var(--violet)" },
  { to: "/contact", label: "Contact", desc: "Email · LinkedIn · GitHub.", n: "03", accent: "var(--magenta)" },
];

export default function Hub() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const goTo = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const idx = Math.max(0, Math.min(dests.length - 1, i));
    const card = el.querySelectorAll("[data-card]")[idx];
    if (card) el.scrollTo({ left: card.offsetLeft - (el.clientWidth - card.clientWidth) / 2, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let best = 0, bd = Infinity;
    el.querySelectorAll("[data-card]").forEach((c, i) => {
      const cc = c.offsetLeft + c.clientWidth / 2;
      const d = Math.abs(cc - center);
      if (d < bd) { bd = d; best = i; }
    });
    setActive(best);
  };

  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden">
      <Starfield />

      <div className="relative z-10 w-full py-16 md:py-20">
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 flex w-full max-w-wide items-center justify-between gap-4 px-6 md:mb-10 md:px-10"
        >
          <Link
            to="/"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink"
          >
            <ArrowLeft size={13} strokeWidth={1.5} /> Back to start
          </Link>
          <span className="eyebrow">Choose a section</span>
        </motion.header>

        <div
          ref={trackRef}
          onScroll={onScroll}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[8vw] pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-[18vw]"
        >
          {dests.map((d, i) => (
            <motion.div
              key={d.to}
              data-card
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group w-[78vw] shrink-0 snap-center sm:w-[52vw] md:w-[32vw]"
            >
              <Link
                to={d.to}
                className="block rounded-[2rem] bg-white/[0.015] p-1.5 ring-1 ring-white/[0.06] transition-transform duration-500 ease-fluid hover:-translate-y-1.5"
              >
                <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.6rem] border border-white/5 p-7 backdrop-blur-sm" style={{ minHeight: "clamp(210px,30vh,290px)" }}>
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: d.accent }}
                  />
                  <div className="relative flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-muted">{d.n}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-all duration-500 ease-fluid group-hover:rotate-45 group-hover:border-ink group-hover:text-ink">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="relative">
                    <h2 className="font-fraunces text-[clamp(1.9rem,4.5vw,2.8rem)] font-semibold leading-none tracking-[-0.02em]">{d.label}</h2>
                    <p className="mt-3 text-ink-soft">{d.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-wide items-center justify-center gap-4 px-6">
          <button onClick={() => goTo(active - 1)} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-2">
            {dests.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${dests[i].label}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-ink" : "w-2 bg-line-strong"}`}
              />
            ))}
          </div>
          <button onClick={() => goTo(active + 1)} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
