import { motion } from "framer-motion";
import { Btn } from "./primitives";
import { ArrowRight } from "lucide-react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line py-20 md:py-28">
      {/* dot-grid texture, masked to fade */}
      <div
        className="dotgrid pointer-events-none absolute inset-0 opacity-70"
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 80% at 78% 8%, #000 0%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 70% 80% at 78% 8%, #000 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-content px-5 md:px-6"
      >
        <motion.p variants={item} className="mono-label mb-6">
          Nuffic-eligible · Available Sept 2026 · Eindhoven, NL
        </motion.p>

        <motion.h1
          variants={item}
          className="mb-6 max-w-[18ch] font-serif text-[clamp(2.6rem,7vw,4.6rem)] leading-[1.03] tracking-[-0.01em] text-ink"
        >
          AI &amp; Machine Learning student, focused on{" "}
          <em className="italic text-accent-ink">generative AI</em>.
        </motion.h1>

        <motion.p variants={item} className="mb-8 max-w-[46ch] text-[1.1rem] text-ink-soft">
          I build LLM agents, RAG systems, and computer-vision pipelines. Looking
          for a September 2026 internship in the Netherlands.
        </motion.p>

        <motion.div variants={item} className="flex flex-wrap gap-3">
          <Btn to="/projects" variant="primary">
            See the work <ArrowRight size={15} />
          </Btn>
          <Btn to="/cv">Read CV</Btn>
          <Btn to="/contact">Get in touch</Btn>
        </motion.div>
      </motion.div>
    </section>
  );
}
