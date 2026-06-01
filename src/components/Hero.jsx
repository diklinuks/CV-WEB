import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import ShaderBackground from "./ShaderBackground";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const btnBase =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono text-[0.8rem] tracking-wide transition-all";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-[#0c0a07] text-white">
      {/* animated WebGL shader */}
      <ShaderBackground />
      {/* legibility scrims */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(120% 100% at 75% 20%, transparent 0%, rgba(8,6,4,0.55) 60%, rgba(8,6,4,0.9) 100%)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-b from-transparent to-[#0c0a07]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-content px-5 py-24 md:px-6"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/70"
        >
          <span className="mr-2 inline-block h-2 w-2 translate-y-[1px] rounded-full bg-[#ff9a5a]" />
          Nuffic-eligible · Available Sept 2026 · Eindhoven, NL
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-6 max-w-[20ch] font-serif text-[clamp(2.8rem,8vw,5.6rem)] leading-[1.0] tracking-[-0.015em] text-white"
        >
          Tymur Abdurakhmanov
        </motion.h1>

        <motion.p
          variants={item}
          className="mb-9 max-w-[48ch] font-serif text-[clamp(1.3rem,3vw,2rem)] italic leading-snug text-white/85"
        >
          AI &amp; Machine Learning student, focused on{" "}
          <span className="text-[#ffb37a]">generative AI</span>.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/projects" className={`${btnBase} bg-white text-[#0c0a07] hover:bg-[#ffb37a]`}>
              See the work <ArrowRight size={15} />
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/cv" className={`${btnBase} border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15`}>
              Read CV
            </Link>
          </motion.span>
          <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link to="/contact" className={`${btnBase} border border-white/30 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15`}>
              Get in touch
            </Link>
          </motion.span>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-white/50"
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
