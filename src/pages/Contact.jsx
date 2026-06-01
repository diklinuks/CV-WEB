import { motion } from "framer-motion";
import { ContactList } from "./Home";

export default function Contact() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-6">
      <section className="border-b border-line py-16 md:py-20">
        <p className="mono-label mb-5">Get in touch</p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-serif text-[clamp(2rem,5.5vw,3.4rem)] leading-tight tracking-[-0.01em] text-ink"
        >
          Let's <em className="italic text-accent-ink">talk</em>.
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
