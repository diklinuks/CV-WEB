import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LivingVine from "../components/LivingVine";
import StaggerCards from "../components/StaggerCards";

const sections = [
  { id: "cv", title: "CV", subtitle: "Education, skills, who I am", color: "#ff5757", meta: "01", to: "/cv" },
  { id: "work", title: "Work", subtitle: "Projects & live demos", color: "#3ddc84", meta: "02", to: "/projects" },
  { id: "contact", title: "Contact", subtitle: "Email · LinkedIn · GitHub", color: "#4aa3ff", meta: "03", to: "/contact" },
];

export default function Hub() {
  const navigate = useNavigate();
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#08080a] text-white">
      <LivingVine rgb="120,230,180" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto w-full max-w-wide px-6 py-20"
      >
        <div className="mb-10 flex items-center justify-between">
          <Link to="/" className="cursor-grow font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/45 hover:text-white">
            Tymur Abdurakhmanov
          </Link>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/35">Pick a section</span>
        </div>

        <StaggerCards items={sections} onActivate={(item) => navigate(item.to)} />
      </motion.div>
    </section>
  );
}
