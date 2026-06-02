import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ShaderWave from "../components/ShaderWave";

// Page 2 — choose a section. Clean horizontal links (no boxes), prism line.
// Colours map to the prism left->right: CV red, Work green, Contact blue.
const dests = [
  { to: "/cv", label: "CV", desc: "Education, skills, who I am", color: "#ff5757" },
  { to: "/projects", label: "Work", desc: "Projects & live demos", color: "#3ddc84" },
  { to: "/contact", label: "Contact", desc: "Email · LinkedIn · GitHub", color: "#4aa3ff" },
];

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const up = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hub() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#0a0a0b] text-white">
      <ShaderWave mode="prism" />

      <motion.div variants={wrap} initial="hidden" animate="show" className="relative z-10 mx-auto w-full max-w-wide px-6 py-20 md:px-10">
        <motion.div variants={up} className="mb-12 flex items-center justify-between">
          <Link to="/" className="cursor-grow font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/45 hover:text-white">
            Tymur Abdurakhmanov
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/35">Pick a section</span>
        </motion.div>

        <div className="grid gap-3 border-t border-white/15 pt-6 md:grid-cols-3">
          {dests.map((d, i) => (
            <motion.div key={d.to} variants={up}>
              <Link to={d.to} className="cursor-grow group block border-b border-white/10 py-6 transition-[padding] hover:pl-3 md:border-b-0">
                <span className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: d.color, boxShadow: `0 0 10px ${d.color}` }} />
                  <span className="font-mono text-[0.66rem] text-white/40">0{i + 1}</span>
                </span>
                <span className="flex items-center justify-between gap-2">
                  <span className="text-[clamp(1.8rem,5vw,3rem)] font-bold leading-none tracking-[-0.02em] text-white">
                    {d.label}
                  </span>
                  <ArrowUpRight size={22} className="shrink-0 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span className="mt-3 block text-sm text-white/45">{d.desc}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
