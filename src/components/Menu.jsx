import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Index", n: "01" },
  { to: "/projects", label: "Work", n: "02" },
  { to: "/cv", label: "CV", n: "03" },
  { to: "/contact", label: "Contact", n: "04" },
];

const overlay = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.06, delayChildren: 0.12 } },
  exit: { opacity: 0, transition: { duration: 0.25, staggerChildren: 0.04, staggerDirection: -1 } },
};
const lineV = {
  hidden: { y: "110%", opacity: 0 },
  show: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  exit: { y: "-110%", opacity: 0, transition: { duration: 0.3 } },
};

export default function Menu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]); // close on navigate
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* fixed controls — no header bar, just a menu toggle + theme toggle */}
      <div className="no-print fixed right-4 top-4 z-[60] flex items-center gap-2 md:right-6 md:top-6">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="cursor-grow grid h-10 w-10 place-items-center rounded-full border border-line-strong bg-elevated/70 backdrop-blur transition-colors hover:border-ink"
        >
          <div className="relative h-3 w-4">
            <motion.span
              animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="absolute left-0 top-0 block h-[2px] w-4 bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute left-0 top-[5px] block h-[2px] w-4 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="absolute left-0 top-[10px] block h-[2px] w-4 bg-ink"
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="show"
            exit="exit"
            className="no-print fixed inset-0 z-50 flex flex-col justify-center bg-paper/95 px-6 backdrop-blur-xl md:px-16"
          >
            <nav className="mx-auto w-full max-w-wide">
              {links.map((l) => (
                <div key={l.to} className="overflow-hidden">
                  <motion.div variants={lineV}>
                    <Link
                      to={l.to}
                      className="group flex items-baseline gap-4 py-1 md:gap-8"
                    >
                      <span className="font-mono text-sm text-accent-ink">{l.n}</span>
                      <span
                        className={`font-sans text-[15vw] font-bold leading-[1.05] tracking-[-0.02em] transition-colors md:text-[8vw] ${
                          pathname === l.to ? "grad-text" : "text-ink group-hover:grad-text"
                        }`}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.p variants={lineV} className="mono-label mx-auto mt-10 w-full max-w-wide">
              Eindhoven, NL · Available September 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
