import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Starfield from "../components/Starfield";
import KineticHeading from "../components/KineticHeading";
import MagneticButton from "../components/MagneticButton";


export default function Splash() {
  const [warping, setWarping] = useState(false);
  const navigate = useNavigate();

  const enter = () => {
    if (warping) return;
    setWarping(true);
    setTimeout(() => navigate("/menu"), 760);
  };

  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <Starfield warping={warping} />

      <motion.div
        animate={{ opacity: warping ? 0 : 1, scale: warping ? 1.08 : 1, filter: warping ? "blur(6px)" : "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 -mt-[5vh] flex flex-col items-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="eyebrow mb-7"
        >
          AI &amp; ML · Fontys Eindhoven
        </motion.span>

        <KineticHeading
          as="h1"
          text="Tymur Abdurakhmanov"
          delay={0.15}
          className="font-fraunces text-[clamp(2.6rem,8vw,6rem)] font-semibold leading-[0.98] tracking-[-0.02em]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink-soft"
        >
          I'm an AI &amp; ML student, and this is my CV. I'm looking for a September 2026 internship in the Netherlands. Open it to see my work.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-12"
        >
          <MagneticButton onClick={enter} icon={ArrowRight}>Enter</MagneticButton>
        </motion.div>
      </motion.div>

      {/* vignette for focus */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{ background: "radial-gradient(120% 90% at 50% 50%, transparent 38%, rgba(6,6,10,0.6) 100%)" }}
      />
    </section>
  );
}
