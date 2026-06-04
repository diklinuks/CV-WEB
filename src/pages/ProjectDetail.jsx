import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { getProject } from "../data/projects";
import KineticHeading from "../components/KineticHeading";
import DemoEmbed from "../components/DemoEmbed";
import MagneticButton from "../components/MagneticButton";
import Reveal from "../components/Reveal";

function Section({ s }) {
  if (s.type === "h") return <h3 className="mt-8 font-clash text-[1.5rem] font-semibold tracking-[-0.01em] text-ink">{s.text}</h3>;
  if (s.type === "p") return <p className="max-w-[64ch] leading-relaxed text-ink-soft">{s.text}</p>;
  if (s.type === "ul")
    return (
      <ul className="flex max-w-[64ch] list-disc flex-col gap-2 pl-6 text-ink-soft">
        {s.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    );
  if (s.type === "code")
    return (
      <pre className="overflow-x-auto rounded-2xl border border-line bg-sunken p-4 font-mono text-[0.82rem] text-ink-soft">
        <code>{s.text}</code>
      </pre>
    );
  return null;
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-content px-6 md:px-8">
        <section className="border-b border-line pb-12 pt-28 md:pt-32">
          <p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-muted">
            <Link to="/projects" className="hover:text-ink">Work</Link>
            <span className="mx-2 text-line-strong">/</span>
            {project.name}
          </p>
          <KineticHeading
            as="h1"
            text={project.name}
            className="font-fraunces text-[clamp(2.4rem,7vw,4.6rem)] font-semibold leading-[1] tracking-[-0.02em]"
          />
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="mt-5 max-w-[56ch] text-[1.08rem] text-ink-soft"
          >
            {project.lead}
          </motion.p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[0.72rem] text-ink-muted">{t}</li>
            ))}
          </ul>
        </section>

        <div className="py-12">
          {project.demo && project.demoEmbed !== false && (
            <DemoEmbed src={project.demo} title={`${project.name} live demo`} label={project.demoLabel} />
          )}

          <div className="mb-3 flex flex-wrap gap-3">
            {project.demo && project.demoEmbed === false && (
              <MagneticButton href={project.demo} variant="primary">Open live demo</MagneticButton>
            )}
            {project.repo && <MagneticButton href={project.repo} variant="ghost">Code on GitHub</MagneticButton>}
            {project.docs && <MagneticButton href={project.docs} variant="ghost">Documentation</MagneticButton>}
          </div>
          {project.demoNote && <p className="text-[0.8rem] text-ink-muted">{project.demoNote}</p>}
          <div className="mb-10" />

          <article className="flex flex-col gap-4">
            {project.sections.map((s, i) => (
              <Reveal key={i}>
                <Section s={s} />
              </Reveal>
            ))}
          </article>

          <p className="mt-14">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink">
              <ArrowLeft size={15} strokeWidth={1.5} /> Back to all work
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
