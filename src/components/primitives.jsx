import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const baseBtn =
  "cursor-grow inline-flex items-center gap-2 rounded-full border px-6 py-3 font-mono text-[0.8rem] tracking-wide transition-colors";

export function Btn({ to, href, variant = "default", children, className = "", ...rest }) {
  const styles =
    variant === "primary"
      ? "bg-ink text-paper border-ink hover:bg-accent hover:border-accent hover:text-white"
      : "bg-elevated text-ink border-line-strong hover:border-ink";
  const motionProps = {
    whileHover: { y: -2 },
    whileTap: { y: 0, scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };
  const cls = `${baseBtn} ${styles} ${className}`;

  if (to) return <motion.span {...motionProps} className="inline-block"><Link to={to} className={cls} {...rest}>{children}</Link></motion.span>;
  if (href) return <motion.a {...motionProps} href={href} className={cls} target="_blank" rel="noopener noreferrer" {...rest}>{children}</motion.a>;
  return <motion.button {...motionProps} className={cls} {...rest}>{children}</motion.button>;
}

// ===== Scroll-reveal wrapper =====
export function Reveal({ children, delay = 0, y = 18, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ===== Numbered section header (editorial signature) =====
export function SectionHead({ num, label, id }) {
  return (
    <div className="mb-8 flex items-baseline gap-3 md:mb-0 md:block">
      <span className="font-mono text-[0.78rem] tracking-wide text-accent-ink">{num}</span>
      <span id={id} className="mt-1 block font-mono text-[0.78rem] uppercase tracking-[0.14em] text-ink-muted">
        {label}
      </span>
    </div>
  );
}

// ===== Two-column numbered block =====
export function Block({ num, label, id, children }) {
  return (
    <section className="grid gap-4 border-t border-line py-14 md:grid-cols-[8.5rem_1fr] md:gap-8 md:py-16">
      <div className="md:sticky md:top-20 md:self-start">
        <SectionHead num={num} label={label} id={id} />
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}
