import { motion } from "framer-motion";
import KineticHeading from "../components/KineticHeading";
import ContactList from "../components/ContactList";

export default function Contact() {
  return (
    <>
      <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-content flex-col justify-center px-6 py-28">
        <div className="mx-auto w-full max-w-xl">
          <div className="mb-6"><span className="eyebrow">Get in touch</span></div>
          <KineticHeading
            as="h1"
            text="Let's talk."
            className="font-fraunces text-[clamp(2.4rem,7vw,4rem)] font-semibold leading-[1] tracking-[-0.02em]"
          />
          <motion.p
            initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-[46ch] text-[1.02rem] leading-relaxed text-ink-soft"
          >
            Looking for a September 2026 internship in the Netherlands. The fastest way to reach me is email — I read everything.
          </motion.p>
          <div className="mt-10">
            <ContactList />
          </div>
        </div>
      </div>
    </>
  );
}
