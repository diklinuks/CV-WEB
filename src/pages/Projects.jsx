import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectRow from "../components/ProjectRow";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-6">
      <section className="border-b border-line py-16 md:py-20">
        <p className="mono-label mb-5">
          <Link to="/" className="hover:text-ink">Index</Link> <span className="text-line-strong">/</span> Work
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink"
        >
          Selected <span className="grad-text">work</span>
        </motion.h1>
        <p className="max-w-[54ch] text-[1.08rem] text-ink-soft">
          Things I'm building or have shipped. Each opens its own page with the
          full story, the stack, links, and — where it exists — a live demo you
          can run right here.
        </p>
      </section>

      <section className="py-8 md:py-10">
        <div className="border-t border-line">
          {projects.map((p, i) => (
            <ProjectRow key={p.slug} project={p} index={i} />
          ))}
        </div>

        <p className="my-10 rounded-md border-l-2 border-accent bg-accent-soft px-6 py-4 text-[0.95rem] text-ink-soft">
          <strong className="text-ink">More on the way.</strong> First internship
          lands September 2026, and a few projects are in progress (some I can't
          share publicly yet). <Link to="/contact">Get in touch</Link> and I'll
          walk you through them.
        </p>
      </section>
    </div>
  );
}
