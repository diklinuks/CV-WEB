import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { getProject } from "../data/projects";
import DemoEmbed from "../components/DemoEmbed";
import { Btn } from "../components/primitives";
import { Github, ArrowLeft } from "lucide-react";

function Section({ s }) {
  if (s.type === "h") return <h3 className="mt-6 font-serif text-[1.5rem] tracking-[-0.01em] text-ink">{s.text}</h3>;
  if (s.type === "p") return <p className="max-w-[64ch] text-ink-soft">{s.text}</p>;
  if (s.type === "ul")
    return (
      <ul className="flex max-w-[64ch] list-disc flex-col gap-2 pl-6 text-ink-soft">
        {s.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    );
  if (s.type === "code")
    return (
      <pre className="overflow-x-auto rounded-md border border-line bg-sunken p-4 font-mono text-[0.85rem] text-ink-soft">
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
    <div className="mx-auto max-w-content px-5 md:px-6">
      <section className="border-b border-line py-16 md:py-20">
        <p className="mono-label mb-5">
          <Link to="/" className="hover:text-ink">Index</Link>
          <span className="mx-2 text-line-strong">/</span>
          <Link to="/projects" className="hover:text-ink">Work</Link>
          <span className="mx-2 text-line-strong">/</span>
          {project.name}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 font-serif text-[clamp(2rem,5.5vw,3.2rem)] leading-tight tracking-[-0.01em] text-ink"
        >
          {project.name}
        </motion.h1>
        <p className="max-w-[54ch] text-[1.08rem] text-ink-soft">{project.lead}</p>
      </section>

      <div className="py-10 md:py-12">
        {/* tags */}
        <ul className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="rounded border border-line px-3 py-1 font-mono text-[0.74rem] text-ink-muted">
              {t}
            </li>
          ))}
        </ul>

        {/* live demo */}
        {project.demo && (
          <DemoEmbed src={project.demo} title={`${project.name} — live demo`} label={project.demoLabel} />
        )}

        {/* links */}
        <div className="mb-10 flex flex-wrap gap-3">
          {project.repo && (
            <Btn href={project.repo} variant="primary">
              <Github size={15} /> Code on GitHub
            </Btn>
          )}
        </div>

        {/* body */}
        <article className="flex flex-col gap-4">
          {project.sections.map((s, i) => (
            <Section key={i} s={s} />
          ))}
        </article>

        <p className="mt-12">
          <Link to="/projects" className="inline-flex items-center gap-2 font-mono text-sm hover:underline">
            <ArrowLeft size={15} /> Back to all work
          </Link>
        </p>
      </div>
    </div>
  );
}
