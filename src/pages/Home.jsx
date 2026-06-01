import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { Block } from "../components/primitives";
import ProjectRow from "../components/ProjectRow";
import { projects } from "../data/projects";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="mx-auto max-w-content px-5 md:px-6">
        {/* WORK */}
        <Block num="01" label="Selected work" id="work">
          <div className="border-t border-line">
            {projects.map((p, i) => (
              <ProjectRow key={p.slug} project={p} index={i} />
            ))}
          </div>
          <p className="mt-6">
            <Link to="/projects" className="font-mono text-sm hover:underline">
              All projects →
            </Link>
          </p>
        </Block>

        {/* ABOUT */}
        <Block num="02" label="About">
          <div className="flex max-w-[64ch] flex-col gap-4 text-ink-soft">
            <p>
              I study Artificial Intelligence and Machine Learning at Fontys
              University of Applied Sciences in Eindhoven. My focus is generative
              AI — LLM agents, retrieval-augmented systems, and the engineering
              around them.
            </p>
            <p>
              For the full picture see <Link to="/cv">my CV</Link>, or jump
              straight to <Link to="/projects">what I'm building</Link>.
            </p>
          </div>
        </Block>

        {/* CONTACT */}
        <Block num="03" label="Contact" id="contact">
          <ContactList />
        </Block>
      </div>
    </>
  );
}

export function ContactList() {
  const rows = [
    { icon: Mail, label: "Email", value: "abdurakhmanovtimur472@gmail.com", href: "mailto:abdurakhmanovtimur472@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", value: "/in/diklinuks", href: "https://www.linkedin.com/in/diklinuks/" },
    { icon: Github, label: "GitHub", value: "@diklinuks", href: "https://github.com/diklinuks" },
  ];
  return (
    <div className="border-t border-line">
      {rows.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="group grid grid-cols-[1.5rem_5rem_1fr] items-center gap-3 border-b border-line px-2 py-4 text-ink transition-[background-color,padding] hover:bg-elevated hover:pl-4 md:grid-cols-[1.5rem_6rem_1fr]"
        >
          <Icon size={16} className="text-ink-muted" />
          <span className="font-mono text-[0.74rem] uppercase tracking-[0.1em] text-ink-muted">{label}</span>
          <span className="truncate font-mono text-[0.88rem] text-ink group-hover:text-accent-ink">{value}</span>
        </a>
      ))}
    </div>
  );
}
