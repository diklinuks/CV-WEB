import { motion, useReducedMotion } from "framer-motion";

// Word-staggered blur-rise reveal for display headings (Fraunces).
// Accessible: real text exposed via aria-label, animated spans hidden from AT.
export default function KineticHeading({ text, as = "h1", className = "", delay = 0 }) {
  const reduce = useReducedMotion();
  const Tag = as;

  if (reduce) return <Tag className={className}>{text}</Tag>;

  const words = String(text).split(" ");
  const container = { hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } };
  const word = {
    hidden: { opacity: 0, y: "0.45em", filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  const MotionTag = motion[as] || motion.h1;

  return (
    <MotionTag variants={container} initial="hidden" animate="show" className={className} aria-label={text}>
      {words.map((wd, i) => (
        <span key={i} className="inline-block align-bottom pb-[0.12em]" aria-hidden="true">
          <motion.span variants={word} className="inline-block">
            {wd}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
