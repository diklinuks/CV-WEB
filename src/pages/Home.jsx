import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShaderWave from "../components/ShaderWave";

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const up = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#0a0a0b] px-5 text-white">
      {/* the one bit of colour: rainbow wave */}
      <ShaderWave />
      {/* gentle top vignette so the headline stays crisp over the glow */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(120% 90% at 50% 25%, rgba(10,10,11,0.65) 0%, rgba(10,10,11,0.15) 45%, transparent 75%)" }}
      />

      {/* thin framed card, centered */}
      <motion.div
        variants={wrap}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full max-w-2xl rounded-2xl border border-white/15 bg-white/[0.015] px-6 py-16 text-center backdrop-blur-[2px] md:px-12 md:py-20"
      >
        <motion.p variants={up} className="mb-6 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/55">
          AI &amp; Machine Learning
        </motion.p>

        <motion.h1
          variants={up}
          className="mb-5 text-[clamp(2.1rem,6vw,3.8rem)] font-bold leading-[1.02] tracking-[-0.03em] text-white"
        >
          Tymur Abdurakhmanov
        </motion.h1>

        <motion.p variants={up} className="mx-auto mb-9 max-w-[42ch] text-[1.02rem] leading-relaxed text-white/65">
          Focused on generative AI — LLM agents, RAG systems, and computer-vision
          pipelines. Two projects with live in-browser demos.
        </motion.p>

        <motion.div variants={up} className="mb-9 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 font-mono text-[0.7rem] tracking-wide text-white/70">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="inline-block h-1.5 w-1.5 rounded-full bg-white"
            />
            Available September 2026 · Eindhoven, NL
          </span>
        </motion.div>

        <motion.div variants={up} className="flex justify-center">
          <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to="/projects"
              className="cursor-grow inline-flex items-center gap-2 rounded-full border border-white/80 px-7 py-3 font-mono text-[0.82rem] tracking-wide text-white transition-colors hover:bg-white hover:text-[#0a0a0b]"
            >
              See my work <ArrowRight size={15} />
            </Link>
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
