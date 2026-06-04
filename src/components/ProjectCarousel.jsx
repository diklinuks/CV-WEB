import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight, Github, Play } from "lucide-react";
import { projects } from "../data/projects";

const ACCENTS = ["var(--cyan)", "var(--violet)", "var(--magenta)"];

// Horizontal, snap-scrolling project showcase (boxes, not a list).
// Drag / wheel / arrow controls; each card opens its ProjectDetail.
export default function ProjectCarousel() {
  const trackRef = useRef(null);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">Drag, scroll, or use the arrows</p>
        <div className="flex gap-2">
          <button onClick={() => nudge(-1)} aria-label="Previous project"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button onClick={() => nudge(1)} aria-label="Next project"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted transition-colors hover:border-ink hover:text-ink">
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:-mx-10 md:px-10"
      >
        {projects.map((p, i) => (
          <motion.article
            key={p.slug}
            data-card
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative w-[86vw] shrink-0 snap-start sm:w-[420px]"
          >
            <Link
              to={`/projects/${p.slug}`}
              className="block rounded-[2rem] bg-white/5 p-1.5 ring-1 ring-white/10 transition-transform duration-500 ease-fluid hover:-translate-y-1.5"
            >
              <div className="glass relative flex flex-col overflow-hidden rounded-[1.6rem] p-7" style={{ minHeight: "clamp(360px,52vh,460px)" }}>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-75"
                  style={{ background: ACCENTS[i % ACCENTS.length] }}
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-ink-muted">0{i + 1} · {p.year}</span>
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-all duration-500 ease-fluid group-hover:rotate-45 group-hover:border-ink group-hover:text-ink">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="mt-6 font-fraunces text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em]">{p.name}</h3>
                  <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{p.tagline}</p>

                  <div className="mt-auto pt-6">
                    <div className="mb-4 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.68rem] text-ink-muted">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      {p.demo && (
                        <span className="inline-flex items-center gap-1.5 font-medium" style={{ color: ACCENTS[i % ACCENTS.length] }}>
                          <Play size={13} strokeWidth={1.5} /> Live demo
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-ink-muted">
                        <Github size={13} strokeWidth={1.5} /> Code
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}

        {/* end cap */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex w-[70vw] shrink-0 snap-start items-center sm:w-[340px]"
        >
          <div className="glass rounded-[2rem] p-8">
            <p className="font-fraunces text-2xl font-semibold">More on the way.</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              First internship lands September 2026; a few projects are in progress — some I can't share publicly yet.
            </p>
            <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm text-cyan transition-opacity hover:opacity-80">
              Get in touch <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
