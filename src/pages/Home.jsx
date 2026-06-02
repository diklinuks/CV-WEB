import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ShaderWave from "../components/ShaderWave";

// The three destinations, laid out horizontally above the line.
// Colours map to the prism: CV = red, Work = green, Contact = blue.
const dests = [
  { to: "/cv", label: "CV", color: "#ff5757" },
  { to: "/projects", label: "Work", color: "#3ddc84" },
  { to: "/contact", label: "Contact", color: "#4aa3ff" },
];

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const up = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#0a0a0b] text-white">
      {/* white -> RGB prism line, hugging the bottom */}
      <ShaderWave />

      {/* TOP: name + short intro, left-aligned */}
      <motion.div
        variants={wrap}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-wide flex-1 px-6 pt-28 md:px-10 md:pt-36"
      >
        <motion.p variants={up} className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/50">
          AI &amp; Machine Learning · Eindhoven, NL
        </motion.p>
        <motion.h1
          variants={up}
          className="mb-6 text-[clamp(2.6rem,8vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.03em]"
        >
          Tymur<br />Abdurakhmanov
        </motion.h1>
        <motion.p variants={up} className="max-w-[40ch] text-[1.05rem] leading-relaxed text-white/60">
          AI &amp; ML student, building with generative AI. Looking for a
          September 2026 internship in the Netherlands.
        </motion.p>
      </motion.div>

      {/* BOTTOM: the three destinations, horizontal, above the line */}
      <motion.nav
        variants={wrap}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto mb-28 w-full max-w-wide px-6 md:mb-32 md:px-10"
      >
        <div className="grid grid-cols-3 gap-3 border-t border-white/15 pt-5">
          {dests.map((d, i) => (
            <motion.div key={d.to} variants={up}>
              <Link to={d.to} className="cursor-grow group block">
                <span className="mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                  <span className="font-mono text-[0.66rem] text-white/40">0{i + 1}</span>
                </span>
                <span className="flex items-center justify-between gap-2">
                  <span
                    className="text-[clamp(1.3rem,4vw,2.4rem)] font-bold leading-none tracking-[-0.02em] text-white transition-colors"
                    style={{ "--c": d.color }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = d.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {d.label}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.nav>
    </section>
  );
}
