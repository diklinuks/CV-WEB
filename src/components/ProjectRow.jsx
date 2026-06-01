import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Ledger-style project row with a sliding arrow on hover.
export default function ProjectRow({ project, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/projects/${project.slug}`}
        className="group grid grid-cols-[1.8rem_1fr] items-baseline gap-4 border-b border-line px-2 py-6 transition-[background-color,padding] hover:bg-elevated hover:pl-4 md:grid-cols-[2.5rem_1fr_auto]"
      >
        <span className="font-mono text-[0.8rem] text-accent-ink">{num}</span>
        <span className="min-w-0">
          <span className="mb-2 block font-serif text-[1.6rem] leading-tight text-ink">
            {project.name}
          </span>
          <span className="block max-w-[60ch] text-[0.98rem] text-ink-soft">
            {project.tagline}
          </span>
          <span className="mt-3 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded border border-line px-2 py-0.5 font-mono text-[0.68rem] text-ink-muted"
              >
                {t}
              </span>
            ))}
            {project.demo && (
              <span className="rounded border border-accent/40 bg-accent-soft px-2 py-0.5 font-mono text-[0.68rem] text-accent-ink">
                Live demo
              </span>
            )}
          </span>
        </span>
        <span className="hidden self-center text-accent-ink transition-transform group-hover:translate-x-1 md:block">
          <ArrowRight size={20} />
        </span>
      </Link>
    </motion.div>
  );
}
