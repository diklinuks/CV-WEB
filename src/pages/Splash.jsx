import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShaderWave from "../components/ShaderWave";

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
const up = {
  hidden: { opacity: 0, y: 18, filter: "blur(7px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Page 1 — minimal, calm. White line. Name + short note + Enter.
export default function Splash() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0a0a0b] px-6 text-center text-white">
      <ShaderWave mode="white" />

      <motion.div variants={wrap} initial="hidden" animate="show" className="relative z-10 flex flex-col items-center">
        <motion.h1 variants={up} className="text-[clamp(2.4rem,7vw,5rem)] font-bold leading-[1.0] tracking-[-0.03em]">
          Tymur Abdurakhmanov
        </motion.h1>

        <motion.p variants={up} className="mt-7 max-w-[46ch] text-[1.05rem] leading-relaxed text-white/65">
          This is my CV. I build software and ship real projects, and I'm
          looking for an internship to learn fast and do good work.
        </motion.p>

        <motion.div variants={up} className="mt-12">
          <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/menu"
              className="cursor-grow inline-flex items-center gap-2 rounded-full border border-white/70 px-9 py-3.5 font-mono text-[0.82rem] tracking-wide text-white transition-colors hover:bg-white hover:text-[#0a0a0b]"
            >
              Enter <ArrowRight size={15} />
            </Link>
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
