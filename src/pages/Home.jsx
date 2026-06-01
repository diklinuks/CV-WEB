import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ShaderBackground from "../components/ShaderBackground";

// Landing = a hub. One screen, no scroll. Click a destination to go there.
const nav = [
  { to: "/projects", label: "Work", desc: "Agents, computer vision & ML — with live demos" },
  { to: "/cv", label: "CV", desc: "Education, skills, the full picture" },
  { to: "/contact", label: "Contact", desc: "Email, LinkedIn, GitHub" },
];

const wrap = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } };
const up = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#070708] text-white">
      <ShaderBackground />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(130% 120% at 80% 10%, transparent 0%, rgba(7,7,8,0.6) 55%, rgba(7,7,8,0.94) 100%)" }}
      />

      <motion.div
        variants={wrap}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-wide px-6 py-24 md:px-10"
      >
        <motion.p variants={up} className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-white/70">
          <span className="mr-2 inline-block h-2 w-2 translate-y-[1px] rounded-full" style={{ background: "linear-gradient(110deg,#7c5cff,#19e3ff,#ff5ca8)" }} />
          Tymur Abdurakhmanov · AI &amp; ML · Eindhoven, NL
        </motion.p>

        <motion.h1
          variants={up}
          className="mb-10 max-w-[16ch] text-[clamp(2.6rem,9vw,6.5rem)] font-bold leading-[0.98] tracking-[-0.03em]"
        >
          Building with{" "}
          <span className="grad-text">generative AI</span>.
        </motion.h1>

        {/* HUB: click to go */}
        <nav className="border-t border-white/15">
          {nav.map((item, i) => (
            <motion.div key={item.to} variants={up}>
              <Link
                to={item.to}
                className="cursor-grow group flex items-center justify-between gap-6 border-b border-white/15 py-5 transition-[padding] hover:pl-3"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-white/40">0{i + 1}</span>
                  <span className="text-[clamp(1.8rem,6vw,3.5rem)] font-bold leading-none tracking-[-0.02em] text-white transition-colors group-hover:grad-text">
                    {item.label}
                  </span>
                </span>
                <span className="hidden items-center gap-4 sm:flex">
                  <span className="font-mono text-xs text-white/45">{item.desc}</span>
                  <ArrowUpRight className="text-white/60 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" size={22} />
                </span>
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </section>
  );
}
