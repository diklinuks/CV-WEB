import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ShaderWave from "../components/ShaderWave";

// Page 2 — the colored prism line + three boxes (not a list). Click to enter.
const boxes = [
  { to: "/cv", label: "CV", desc: "Education, skills, who I am", color: "#ff5757" },
  { to: "/projects", label: "Work", desc: "Projects & live demos", color: "#3ddc84" },
  { to: "/contact", label: "Contact", desc: "Email · LinkedIn · GitHub", color: "#4aa3ff" },
];

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } } };
const up = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hub() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#0a0a0b] px-6 text-white">
      <ShaderWave mode="prism" />

      <motion.div variants={wrap} initial="hidden" animate="show" className="relative z-10 mx-auto w-full max-w-wide py-24">
        <motion.div variants={up} className="mb-10 flex items-center justify-between">
          <Link to="/" className="cursor-grow font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/45 hover:text-white">
            Tymur Abdurakhmanov
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/35">Choose a section</span>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {boxes.map((b, i) => (
            <motion.div key={b.to} variants={up}>
              <Link
                to={b.to}
                className="cursor-grow group flex min-h-[42svh] flex-col justify-between rounded-2xl border border-white/12 bg-white/[0.015] p-6 transition-all hover:border-white/40 hover:bg-white/[0.04]"
              >
                <span className="flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-transform group-hover:scale-150"
                    style={{ background: b.color, boxShadow: `0 0 12px ${b.color}` }}
                  />
                </span>
                <span className="block">
                  <span className="block text-[clamp(1.8rem,4vw,2.6rem)] font-bold leading-none tracking-[-0.02em] text-white">
                    {b.label}
                  </span>
                  <span className="mt-3 flex items-center gap-1.5 text-sm text-white/50">
                    {b.desc}
                    <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
