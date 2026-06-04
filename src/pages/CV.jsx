import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, MapPin, Plane, Calendar, Phone, Mail, Linkedin, Github, Globe, BadgeCheck, CalendarClock, Languages } from "lucide-react";
import KineticHeading from "../components/KineticHeading";
import Reveal from "../components/Reveal";
import CVPrint from "../components/CVPrint";

const LIVE_URL = "https://diklinuks.github.io/CV-WEB/";

const contactGroups = [
  {
    label: "Location",
    items: [
      { label: "Eindhoven, NL", icon: MapPin },
      { label: "Willing to relocate within NL", icon: Plane },
    ],
  },
  {
    label: "Details",
    items: [
      { label: "Born 29 Nov 2004", icon: Calendar },
      { label: "Nuffic-eligible", icon: BadgeCheck },
      { label: "Available Sep 2026 – Feb 2027", icon: CalendarClock },
      { label: "Works in English", icon: Languages },
    ],
  },
  {
    label: "Contact",
    items: [
      { label: "+31 6 16 95 82 82", href: "tel:+31616958282", icon: Phone },
      { label: "abdurakhmanovtimur472@gmail.com", href: "mailto:abdurakhmanovtimur472@gmail.com", icon: Mail },
    ],
  },
  {
    label: "Links",
    items: [
      { label: "in/tymur-abdurakhmanov", href: "https://www.linkedin.com/in/tymur-abdurakhmanov-129343356/", icon: Linkedin },
      { label: "@diklinuks", href: "https://github.com/diklinuks", icon: Github },
      { label: "diklinuks.github.io/CV-WEB", href: LIVE_URL, icon: Globe },
    ],
  },
];

const skills = {
  "Generative AI & LLM agents": ["LLMs", "RAG", "AI agents", "Multi-agent systems", "LangChain", "LangGraph", "CrewAI", "MCP", "n8n", "Prompt engineering", "Gemini", "GPT", "Claude", "Grok", "pgvector", "ChromaDB"],
  "Machine Learning & Computer Vision": ["PyTorch", "scikit-learn", "YOLOv8", "OpenCV", "Object detection", "Explainable AI (SHAP)", "pandas", "NumPy"],
  "Engineering & Data": ["Python", "JavaScript", "FastAPI", "PostgreSQL", "SQL", "Docker", "Git", "Linux", "Streamlit", "REST APIs"],
};
const SKILL_ACCENT = {
  "Generative AI & LLM agents": "var(--violet)",
  "Machine Learning & Computer Vision": "var(--cyan)",
  "Engineering & Data": "var(--magenta)",
};

const clientProjects = [
  {
    name: "Laméco — Generative AI compliance tool",
    meta: "GenAI semester · team of 2 · 2026",
    bullets: [
      "Built a tool that automatically checks a website's cookie use against GDPR and flags the violations.",
      "Reads an existing cookie report or crawls the site itself, catching cookies that load before the visitor consents.",
      "Generates a written analysis and emails it back when a report is sent in.",
      "Specifics under confidentiality.",
    ],
  },
  {
    name: "Brunel — Recruitment-campaign analytics",
    meta: "Machine Learning semester · team project · 2025–2026",
    note: "Brunel is an international recruitment company.",
    bullets: [
      "Built an application that, for each job title, analyses the job-advertising campaign data and recommends which platform to advertise on, and why.",
      "Compared several model approaches and analysed how the platforms performed across campaigns.",
      "Specifics under confidentiality.",
    ],
  },
];

const selectedProjects = [
  {
    name: "Betsy — Autonomous procurement agent",
    to: "/projects/betsy",
    meta: "Generative AI · live demo",
    bullets: [
      "As much research as code: domain and technical research first, then architecture, decision logs, design and test scenarios before building.",
      <>Runs purchasing for a small manufacturer across a <strong>90-day</strong> simulation.</>,
      "Monitors stock and reorders before items hit their threshold, preventing stockouts.",
      "Scores and ranks suppliers by performance, places orders with the best, and tracks KPIs throughout.",
      "Learns from rejected orders and sudden events; pauses for human approval on the bigger decisions.",
      "Every rule is explained in the docs and enforced in the code.",
    ],
  },
  {
    name: "Eva — Multi-agent marketing team",
    meta: "Generative AI · live demo",
    bullets: [
      "Give it something to market (a product, a book, a service) and a team of specialised AI agents collaborates on the whole campaign — audience, strategy, copy, creative — instead of one model doing everything.",
      "Currently building and testing how the agents split the work and hand off to each other.",
    ],
  },
  {
    name: "Floating Waste Detection",
    to: "/projects/waste-detection",
    meta: "Computer vision · live demo",
    bullets: [
      "Detects floating waste (bottles, cans, cartons, plastic, paper) in water; runs live in the browser and scores video frame by frame.",
      <>Built a custom dataset of ~<strong>9,000</strong> images.</>,
      <>Trained and compared <strong>seven</strong> models (Random Forest and SVM up to YOLO) and selected the best (<strong>mAP@50 ≈ 0.87</strong>).</>,
    ],
  },
  {
    name: "Amsterdam Airbnb — price & market analysis",
    to: "/projects/airbnb-ml",
    meta: "Machine learning + data analysis · live demo",
    bullets: [
      <>Set out to predict nightly prices for ~<strong>7,800</strong> Amsterdam listings; the data couldn't support it (best model <strong>R² ≈ 0.23</strong>).</>,
      "Used explainability tools (SHAP) to show why the features fall short.",
      <>Switched to clustering the listings into <strong>five</strong> market segments, shown on an interactive map.</>,
    ],
  },
];

function Block({ num, label, children }) {
  return (
    <Reveal>
      <section className="grid gap-5 border-t border-line py-12 md:grid-cols-[11rem_1fr] md:gap-10 md:py-14">
        <div className="md:sticky md:top-24 md:self-start">
          <div className="flex items-baseline gap-3 md:flex-col md:gap-1.5">
            <span className="font-mono text-sm text-cyan">{num}</span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-muted">{label}</span>
          </div>
        </div>
        <div className="min-w-0">{children}</div>
      </section>
    </Reveal>
  );
}

function Entry({ name, to, meta, note, bullets }) {
  return (
    <article className="print:break-inside-avoid">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        {to ? (
          <Link to={to} className="font-semibold text-ink transition-colors hover:text-cyan">{name}</Link>
        ) : (
          <span className="font-semibold text-ink">{name}</span>
        )}
        <span className="font-mono text-[0.72rem] text-ink-muted">{meta}</span>
      </div>
      {note && <p className="mt-1 text-[0.9rem] text-ink-muted">{note}</p>}
      <ul className="mt-3 flex flex-col gap-1.5 text-[0.95rem] text-ink-soft">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2.5">
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function CV() {
  useEffect(() => {
    const prev = document.title;
    document.title = "Tymur Abdurakhmanov CV";
    return () => { document.title = prev; };
  }, []);

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-content px-6 md:px-8 print:hidden">
        <header className="flex flex-col gap-7 pb-10 pt-28 md:pt-32">
          <div><span className="eyebrow">Curriculum Vitae</span></div>
          <div className="flex flex-wrap items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="glass grid h-24 w-24 shrink-0 place-items-center rounded-2xl text-2xl font-semibold text-ink-muted md:h-28 md:w-28"
            >
              TA
            </motion.div>
            <div>
              <KineticHeading
                as="h1"
                text="Tymur Abdurakhmanov"
                className="font-fraunces text-[clamp(2.2rem,6vw,3.6rem)] font-semibold leading-[1] tracking-[-0.02em]"
              />
              <p className="mt-2 font-clash text-ink">
                Generative AI / LLM Engineer Intern
                <span className="text-ink-muted"> · also open to Machine Learning Engineer</span>
              </p>
            </div>
          </div>

          {/* contact details — grouped into labelled rows, stacked with spacing */}
          <div className="flex flex-col gap-4">
            {contactGroups.map((g) => (
              <div key={g.label} className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="shrink-0 pt-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-ink-muted sm:w-16">{g.label}</span>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((c) => {
                    const Icon = c.icon;
                    const cls = "inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 font-mono text-[0.7rem] text-ink-soft";
                    const inner = (
                      <>
                        <Icon size={13} strokeWidth={1.5} className="shrink-0 text-ink-muted" />
                        <span>{c.label}</span>
                      </>
                    );
                    return c.href ? (
                      <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={`${cls} transition-colors hover:border-line-strong hover:text-ink`}>{inner}</a>
                    ) : (
                      <span key={c.label} className={cls}>{inner}</span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="group inline-flex items-center gap-3 rounded-full border border-transparent bg-ink py-2.5 pl-6 pr-2 text-sm font-medium text-bg transition-[background-color,color,border-color] duration-500 ease-fluid hover:border-line-strong hover:bg-transparent hover:text-ink"
            >
              Download PDF
              <span className="grid h-8 w-8 place-items-center rounded-full bg-black/10 transition-colors group-hover:bg-white/10">
                <Download size={15} strokeWidth={1.5} className="text-bg group-hover:text-ink" />
              </span>
            </button>
          </div>
        </header>

        <Block num="01" label="Profile">
          <p className="max-w-[68ch] text-ink-soft">
            Second-year HBO-ICT student at Fontys, focused on generative AI / LLM agents and machine learning. I put as
            much effort into the research side of a project as into the building: reading into a problem, comparing
            options, and writing down why I chose what I did. I pick up new tools quickly, I'm easy to get along with
            and communicate clearly, and I'm comfortable leading a team and taking responsibility for my work.
          </p>
        </Block>

        <Block num="02" label="Skills">
          <dl className="flex flex-col gap-5">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group} className="grid gap-3 md:grid-cols-[13rem_1fr] md:gap-6">
                <dt className="pt-1 font-mono text-[0.72rem] uppercase tracking-[0.08em]" style={{ color: SKILL_ACCENT[group] }}>
                  {group}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span key={s} className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-[0.8rem] text-ink-soft">
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block num="03" label="Industry & Client Projects">
          <p className="mb-6 max-w-[64ch] text-[0.92rem] italic text-ink-muted">
            Real companies, delivered through Fontys semester programmes, in teams where I often took the lead.
          </p>
          <div className="flex flex-col gap-8">
            {clientProjects.map((p) => <Entry key={p.name} {...p} />)}
          </div>
        </Block>

        <Block num="04" label="Personal Projects">
          <p className="mb-6 max-w-[64ch] text-[0.92rem] italic text-ink-muted">
            Personal and academic builds; each one has a live demo you can run.
          </p>
          <div className="flex flex-col gap-8">
            {selectedProjects.map((p) => <Entry key={p.name} {...p} />)}
          </div>
          <p className="mt-6 text-[0.92rem] text-ink-muted">
            Full write-ups and live demos on <Link to="/projects" className="text-cyan hover:underline">the work</Link>.
          </p>
        </Block>

        <Block num="05" label="Education">
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="font-semibold text-ink">HBO-ICT, BSc</p>
              <p className="text-[0.95rem] text-ink-muted">Fontys University of Applied Sciences, Eindhoven</p>
            </div>
            <p className="font-mono text-[0.76rem] text-ink-muted">2024 — 2028 (expected)</p>
          </div>
          <p className="max-w-[64ch] text-ink-soft">
            Software Engineering in the first year, Machine Learning in the first half of the second year, and
            Generative AI in the second half.
          </p>
        </Block>

        <Block num="06" label="Languages">
          <dl className="grid gap-1 md:grid-cols-[9rem_1fr] md:gap-x-6 md:gap-y-3">
            {[
              ["Ukrainian", "Native"],
              ["Russian", "Native"],
              ["English", "Full professional — all studies and projects in English"],
            ].map(([k, v]) => (
              <div key={k} className="contents">
                <dt className="mt-3 font-mono text-[0.78rem] text-ink-muted md:mt-0">{k}</dt>
                <dd className="text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <div className="py-16" />
      </div>
      <CVPrint />
    </>
  );
}
