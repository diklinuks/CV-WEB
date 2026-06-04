import {
  CV_PHOTO_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LIVE_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  skills,
} from "../data/cv-meta";

const INK = "#16161c";
const SUB = "#3c3c46";
const MUT = "#6b6b77";
const ACCENT = "#5b3fb4";
const SIDE = "#f3f2f8";
const LINE = "#e4e3ec";

const clientProjects = [
  {
    name: "Laméco — Generative AI compliance tool",
    meta: "GenAI semester · team of two · 2026",
    description: "Built a tool that automatically checks a website's cookie use against GDPR and flags the violations. Reads an existing cookie report or crawls the site itself, catching cookies that load before the visitor consents. Generates a written analysis and emails it back when a report is sent in. Specifics under confidentiality."
  },
  {
    name: "Brunel — Recruitment-campaign analytics",
    meta: "ML semester · team project · 2025–2026",
    description: "Brunel is an international recruitment company. Built an application that, for each job title, analyses the job-advertising campaign data and recommends which advertising platform to use and why. Compared several model approaches and analysed how the different platforms performed across their campaigns. Specifics under confidentiality."
  },
];

const personalProjects = [
  {
    name: "Betsy — Autonomous procurement agent",
    meta: "Generative AI · live demo",
    description: <>As much research as code: did the domain and technical research, then wrote the architecture, decision logs, design and test scenarios before building. Betsy is an AI agent that runs purchasing for a small manufacturer across a <b>90-day</b> simulation. Monitors stock and reorders before items hit their reorder threshold, preventing stockouts. Scores and ranks suppliers by performance, then places orders with the best ones and tracks KPIs throughout. Learns from the orders a human rejects and from sudden events, and pauses for human approval on the bigger decisions. Every rule is explained in the documentation and enforced in the code.</>
  },
  {
    name: "Eva — Multi-agent marketing team",
    meta: "Generative AI · live demo",
    description: "Give it something to market (a product, a book, a service) and a team of specialised AI agents collaborates to produce the whole campaign audience, strategy, copy and creative concepts instead of one model doing everything. Currently building and testing how the agents split the work and hand off to each other."
  },
  {
    name: "Floating Waste Detection",
    meta: "Computer vision · live demo",
    description: <>Detects floating waste (bottles, cans, cartons, plastic, paper) in water; runs live in the browser and scores video frame by frame. Built a custom dataset of ~<b>9,000</b> images. Trained and compared <b>seven</b> models (from Random Forest and SVM up to YOLO) and selected the best (<b>mAP@50 ≈ 0.87</b>).</>
  },
  {
    name: "Amsterdam Airbnb — price & market analysis",
    meta: "ML + data analysis · live demo",
    description: <>Set out to predict nightly prices for ~<b>7,800</b> Amsterdam listings; the data couldn't support it (best model <b>R² ≈ 0.23</b>). Used explainability tools (SHAP) to show why the features fall short. Switched to clustering the listings into <b>five</b> market segments, shown on an interactive map.</>
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

// Компонент Entry изменен: теперь он выводит текст (description) абзацем, а не списком
function Entry({ name, meta, description }) {
  return (
    <div className="mb-3 break-inside-avoid">
      <div className="flex items-baseline justify-between gap-3 mb-1">
        <span className="text-[11.5px] font-semibold" style={{ color: INK }}>{name}</span>
        <span className="shrink-0 text-[8.5px]" style={{ color: MUT }}>{meta}</span>
      </div>
      <p className="text-[10px] leading-snug" style={{ color: SUB }}>
        {description}
      </p>
    </div>
  );
}

function Badge({ children, href }) {
  const cls = "inline-flex px-2 py-1 text-[8.5px] border rounded-full whitespace-nowrap";
  const style = { borderColor: LINE, color: SUB };
  if (href) {
    return (
      <a href={href} className={`${cls} underline decoration-[#5b3fb4]/40 underline-offset-2`} style={{ ...style, color: ACCENT }}>
        {children}
      </a>
    );
  }
  return (
    <span className={cls} style={style}>
      {children}
    </span>
  );
}

function DetailLine({ children }) {
  return (
    <li className="text-[9px] leading-snug" style={{ color: SUB }}>
      {children}
    </li>
  );
}

export default function CVPrint() {
  return (
    <div data-cvprint className="cv-print-root hidden print:block">
      <div
        className="cv-print-grid mx-auto w-[210mm]"
        style={{
          color: INK,
          WebkitPrintColorAdjust: "exact",
          printColorAdjust: "exact",
        }}
      >
        <aside className="cv-print-aside" style={{ background: SIDE }}>
          <img
            src={CV_PHOTO_URL}
            alt="Tymur Abdurakhmanov"
            width={180}
            height={240}
            loading="eager"
            className="mb-4 aspect-[3/4] w-full rounded-md object-cover object-top"
          />

          <SideHeading>Contact</SideHeading>
          <div className="flex flex-wrap gap-1.5">
            <Badge>Phone · {PHONE_DISPLAY}</Badge>
            <Badge>Email · {EMAIL}</Badge>
            <Badge href={LINKEDIN_URL}>LinkedIn · in/tymur-abdurakhmanov</Badge>
            <Badge href={GITHUB_URL}>GitHub · @diklinuks</Badge>
          </div>
          <ul className="mt-2 flex list-none flex-col gap-1.5 p-0">
            <li className="text-[9px] leading-snug" style={{ color: MUT }}>
              Full portfolio with live demos of my projects:
            </li>
            <li className="text-[9.5px] leading-snug" style={{ color: SUB }}>
              <a href={LIVE_URL} className="underline" style={{ color: ACCENT }}>{LIVE_URL.replace(/^https:\/\//, "")}</a>
            </li>
          </ul>

          <SideHeading>Details</SideHeading>
          <ul className="mb-0 flex list-none flex-col gap-1.5 p-0">
            <DetailLine>Born 29 Nov 2004</DetailLine>
            <DetailLine>Available Sep 2026 – Feb 2027</DetailLine>
            <DetailLine>Eindhoven, NL</DetailLine> 
            <DetailLine>Willing to relocate within NL</DetailLine>
            <DetailLine>Nuffic-eligible</DetailLine>
          </ul>

          <SideHeading>Languages</SideHeading>
          <ul className="flex flex-col gap-0.5 text-[9.5px]" style={{ color: SUB }}>
            <li>English — full professional</li>
            <li>Ukrainian — native</li>
            <li>Russian — native</li>
          </ul>

          <SideHeading>Education</SideHeading>
          <p className="text-[9.5px] font-semibold" style={{ color: INK }}>HBO-ICT, BSc</p>
          <p className="text-[9px]" style={{ color: MUT }}>Fontys University of Applied Sciences, Eindhoven · 2024–2028</p>
          <p className="mt-1 text-[9px] leading-snug" style={{ color: MUT }}>
            Software Engineering, then Machine Learning, then Generative AI.
          </p>
        </aside>

        <main className="cv-print-main" style={{ background: "#ffffff" }}>
          <h1 className="text-[26px] font-bold leading-none tracking-[-0.01em]" style={{ color: INK }}>Tymur Abdurakhmanov</h1>
          <p className="mt-1.5 text-[12px] font-medium" style={{ color: ACCENT }}>
            Generative AI / LLM Engineer Intern
            <span style={{ color: MUT }}> · also open to Machine Learning Engineer</span>
          </p>

          <MainHeading>Profile</MainHeading>
          <p className="text-[10.5px] leading-snug" style={{ color: SUB }}>
            Second-year HBO-ICT student at Fontys, focused on generative AI / LLM agents and machine learning. I put as
            much effort into the research side of a project as into the building: reading into a problem, comparing
            options, and writing down why I chose what I did. I pick up new tools quickly, I'm easy to get along with
            and communicate clearly, and I'm comfortable leading a team and taking responsibility for my work.
          </p>

          <MainHeading>Skills</MainHeading>
          <div className="flex flex-col gap-2.5">
            {Object.entries(skills).map(([group, list]) => (
              <div key={group}>
                <p className="text-[10px] font-semibold" style={{ color: ACCENT }}>{group}</p>
                <p className="text-[9.5px] leading-snug" style={{ color: MUT }}>{list.join(", ")}</p>
              </div>
            ))}
          </div>

          <MainHeading>Industry &amp; Client Projects</MainHeading>
          {clientProjects.map((p) => <Entry key={p.name} {...p} />)}

          <MainHeading>Personal Projects</MainHeading>
          {personalProjects.map((p) => <Entry key={p.name} {...p} />)}
        </main>
      </div>
    </div>
  );
}