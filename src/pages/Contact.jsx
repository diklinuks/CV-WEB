import { motion } from "framer-motion";
import ContactList from "../components/ContactList";

export default function Contact() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-6">
      <section className="border-b border-line py-16 md:py-20">
        <p className="mono-label mb-5">Get in touch</p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-[clamp(2.4rem,7vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink"
        >
          Let's <span className="grad-text">talk</span>.
        </motion.h1>
        <p className="max-w-[52ch] text-[1.08rem] text-ink-soft">
          Looking for a September 2026 internship in the Netherlands. The fastest
          way to reach me is email — I read everything.
        </p>
      </section>

      <section className="py-10 md:py-12">
        <ContactList />
      </section>
    </div>
  );
}
