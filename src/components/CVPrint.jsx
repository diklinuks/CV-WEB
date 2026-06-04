import { Link } from "react-router-dom";
import cvPhoto from "../assets/cv-photo.png";

const LIVE_URL = "https://diklinuks.github.io/CV-WEB/";

const INK = "#16161c";
const SUB = "#3c3c46";
const MUT = "#6b6b77";
const ACCENT = "#5b3fb4";
const SIDE = "#f3f2f8";
const LINE = "#e4e3ec";

const skills = [
  ["Generative AI & LLM agents", "LLMs, RAG, AI agents, multi-agent systems, LangChain, LangGraph, CrewAI, MCP, n8n, prompt engineering, Gemini / GPT / Claude / Grok, pgvector, ChromaDB"],
  ["Machine Learning & CV", "PyTorch, scikit-learn, YOLOv8, OpenCV, object detection, explainable AI (SHAP), pandas, NumPy"],
  ["Engineering & Data", "Python, JavaScript, FastAPI, PostgreSQL, SQL, Docker, Git, Linux, Streamlit, REST APIs"],
];

const clientProjects = [
  {
    name: "Laméco — Generative AI compliance tool",
    meta: "GenAI semester · team of 2 · 2026",
    bullets: [
      "Built a tool that checks a website's cookie use against GDPR and flags the violations.",
      "Reads an existing report or crawls the site itself, catching cookies that load before consent.",
      "Generates a written analysis and emails it back. Specifics under confidentiality.",
    ],
  },
  {
    name: "Brunel — Recruitment-campaign analytics",
    meta: "ML semester · team · 2025–2026",
    bullets: [
      "For each job title, analyses the ad-campaign data and recommends which platform to advertise on, and why.",
      "Compared several model approaches across platforms. Specifics under confidentiality.",
    ],
  },
];

const personalProjects = [
  {
    name: "Betsy — Autonomous procurement agent",
    meta: "Generative AI · live demo",
    bullets: [
      <>Runs purchasing for a small manufacturer across a <b>90-day</b> simulation; reorders before stockouts.</>,
      "Scores suppliers, places orders with the best, tracks KPIs, and pauses for human approval on big decisions.",
      "LLM proposes; the caps, decisions and database writes are enforced in code.",
    ],
  },
  {
    name: "Eva — Multi-agent marketing team",
    meta: "Generative AI · live demo",
    bullets: [
      "A team of specialised agents builds a whole marketing campaign together, instead of one model doing everything.",
    ],
  },
  {
    name: "Floating Waste Detection",
    meta: "Computer vision · live demo",
    bullets: [
      "Detects floating waste in water; runs live in the browser, scoring video frame by frame.",
      <>Custom dataset of ~<b>9,000</b> images; compared <b>seven</b> models and chose the best (<b>mAP@50 ≈ 0.87</b>).</>,
    ],
  },
  {
    name: "Amsterdam Airbnb — price & market analysis",
    meta: "ML + data analysis · live demo",
    bullets: [
      <>Predicting prices for ~<b>7,800</b> listings was not supportable (<b>R² ≈ 0.23</b>), shown with SHAP.</>,
      <>Pivoted to clustering the listings into <b>five</b> market segments on an interactive map.</>,
    ],
  },
];

function SideHeading({ children }) {
  return <h2 className="mb-2 mt-5 text-[9px] font-semibold uppercase tracking-[0.16em] first:mt-0" style={{ color: ACCENT }}>{children}</h2>;
}
function MainHeading({ children }) {
  return (
    <h2 className="mb-2.5 mt-5 border-b pb-1 text-[10px] font-semibold uppercase tracking-[0.16em]" style={{ color: ACCENT, borderColor: LINE }}>
      {children}
    </h2>
  );
}
function Entry({ name, meta, bullets }) {
  return (
    <div className="mb-3 break-inside-avoid">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[11.5px] font-semibold" style={{ color: INK }}>{name}</span>
        <span className="shrink-0 text-[8.5px]" style={{ color: MUT }}>{meta}</span>
      </div>
      <ul className="mt-1 flex flex-col gap-0.5">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-1.5 text-[10px] leading-snug" style={{ color: SUB }}>
            <span aria-hidden="true" className="mt-[5px] h-[2px] w-[2px] shrink-0 rounded-full" style={{ background: ACCENT }} />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactRow({ label, children }) {
  return (
    <li className="text-[9.5px] leading-snug" style={{ color: SUB }}>
      <span className="font-semibold" style={{ color: INK }}>{label}: </span>
      {children}
    </li>
  );
}

export default function CVPrint({ preview = false }) {
  const wrapCls = preview
    ? "min-h-[100dvh] block overflow-y-auto bg-white"
    : "hidden print:block";

  return (
    <div data-cvprint className={wrapCls}>
      {preview && (
        <div className="sticky top-0 z-10 border-b px-4 py-2.5 text-center text-[11px]" style={{ borderColor: LINE, background: SIDE, color: SUB }}>
          PDF preview — check layout here, then print from the CV page with <strong>Download PDF</strong> or{" "}
          <kbd className="rounded border px-1" style={{ borderColor: LINE }}>⌘P</kbd>.{" "}
          <Link to="/cv" className="underline" style={{ color: ACCENT }}>Back to CV page</Link>
        </div>
      )}
      <div
        className="mx-auto flex w-full max-w-[860px] overflow-hidden"
        style={{ background: "#ffffff", color: INK, WebkitPrintColorAdjust: "exact", printColorAdjust: "exact" }}
      >
        <aside className="w-[33%] shrink-0 p-6" style={{ background: SIDE }}>
          <img
            src={cvPhoto}
            alt="Tymur Abdurakhmanov"
            className="mb-4 aspect-[3/4] w-full max-w-[148px] rounded-md object-cover object-top"
          />

          <SideHeading>Contact</SideHeading>
          <ul className="flex flex-col gap-1.5">
            <ContactRow label="Phone">+31 6 16 95 82 82</ContactRow>
            <ContactRow label="Email">abdurakhmanovtimur472@gmail.com</ContactRow>
            <ContactRow label="LinkedIn">linkedin.com/in/tymur-abdurakhmanov-129343356</ContactRow>
            <ContactRow label="GitHub">github.com/diklinuks</ContactRow>
            <li className="mt-2 text-[9px] leading-snug" style={{ color: MUT }}>
              Full portfolio with live demos of my projects:
            </li>
            <li className="text-[9.5px] leading-snug" style={{ color: SUB }}>
              <a href={LIVE_URL} className="underline" style={{ color: ACCENT }}>{LIVE_URL.replace(/^https:\/\//, "")}</a>
            </li>
          </ul>

          <SideHeading>Details</SideHeading>
          <ul className="flex flex-col gap-1 text-[9.5px]" style={{ color: SUB }}>
            <li>Born 29 Nov 2004</li>
            <li>Available Sep 2026 – Feb 2027</li>
            <li>Eindhoven, NL</li>
            <li>Willing to relocate within NL</li>
            <li>Nuffic-eligible</li>
          </ul>

          <SideHeading>Skills</SideHeading>
          <div className="flex flex-col gap-2">
            {skills.map(([group, list]) => (
              <div key={group}>
                <p className="text-[9px] font-semibold" style={{ color: INK }}>{group}</p>
                <p className="text-[9px] leading-snug" style={{ color: MUT }}>{list}</p>
              </div>
            ))}
          </div>

          <SideHeading>Languages</SideHeading>
          <ul className="flex flex-col gap-0.5 text-[9.5px]" style={{ color: SUB }}>
            <li>Ukrainian — native</li>
            <li>Russian — native</li>
            <li>English — full professional</li>
          </ul>

          <SideHeading>Education</SideHeading>
          <p className="text-[9.5px] font-semibold" style={{ color: INK }}>HBO-ICT, BSc</p>
          <p className="text-[9px]" style={{ color: MUT }}>Fontys University of Applied Sciences, Eindhoven · 2024–2028</p>
          <p className="mt-1 text-[9px] leading-snug" style={{ color: MUT }}>
            Software Engineering, then Machine Learning, then Generative AI.
          </p>
        </aside>

        <main className="flex-1 p-7">
          <h1 className="text-[26px] font-bold leading-none tracking-[-0.01em]" style={{ color: INK }}>Tymur Abdurakhmanov</h1>
          <p className="mt-1.5 text-[12px] font-medium" style={{ color: ACCENT }}>
            Generative AI / LLM Engineer Intern
            <span style={{ color: MUT }}> · also open to Machine Learning Engineer</span>
          </p>

          <MainHeading>Profile</MainHeading>
          <p className="text-[10.5px] leading-snug" style={{ color: SUB }}>
            Second-year HBO-ICT student at Fontys, focused on generative AI / LLM agents and machine learning. I put as
            much effort into the research side of a project as into the building: reading into a problem, comparing
            options, and writing down why I chose what I did. I pick up new tools quickly, communicate clearly, and I'm
            comfortable leading a team and taking responsibility for my work.
          </p>

          <MainHeading>Industry &amp; Client Projects</MainHeading>
          {clientProjects.map((p) => <Entry key={p.name} {...p} />)}

          <MainHeading>Personal Projects</MainHeading>
          {personalProjects.map((p) => <Entry key={p.name} {...p} />)}
        </main>
      </div>
    </div>
  );
}
