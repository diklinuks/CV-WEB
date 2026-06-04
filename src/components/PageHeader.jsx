import { motion } from "framer-motion";
import KineticHeading from "./KineticHeading";


export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <header className="border-b border-line pb-12 pt-28 md:pt-32">
      {eyebrow && (
        <div className="mb-6">
          <span className="eyebrow">{eyebrow}</span>
        </div>
      )}
      <KineticHeading
        as="h1"
        text={title}
        className="font-fraunces text-[clamp(2.6rem,8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
      />
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-[58ch] text-[1.08rem] leading-relaxed text-ink-soft"
        >
          {lead}
        </motion.p>
      )}
    </header>
  );
}
