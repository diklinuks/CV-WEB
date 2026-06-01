import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Block } from "../components/primitives";
import { ContactList } from "./Home";
import { Download } from "lucide-react";

const skills = {
  "AI & ML": ["PyTorch", "LangChain", "LangGraph", "RAG", "YOLO", "OpenCV", "scikit-learn", "pgvector", "MCP"],
  Languages: ["Python", "SQL", "JavaScript"],
  Tools: ["Git", "Linux", "Docker", "FastAPI", "PostgreSQL"],
};

export default function CV() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-6">
      {/* identity */}
      <section className="grid grid-cols-[auto_1fr] items-center gap-6 py-12 md:py-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="grid h-24 w-24 place-items-center overflow-hidden rounded-md border border-line bg-sunken font-serif text-2xl text-ink-muted md:h-28 md:w-28"
        >
          {/* REPLACE: drop /public/assets/profile.jpg and swap the line below for:
              <img src="/CV-WEB/assets/profile.jpg" alt="Tymur Abdurakhmanov" className="h-full w-full object-cover" /> */}
          TA
        </motion.div>
        <div>
          <h1 className="font-serif text-[2.2rem] leading-none tracking-[-0.01em] text-ink">Tymur Abdurakhmanov</h1>
          <p className="mt-1 text-ink-soft">AI &amp; Machine Learning student · Focused on Generative AI</p>
          <p className="mt-2 font-mono text-[0.76rem] tracking-wide text-ink-muted">
            Eindhoven, NL · Nuffic-eligible · Available September 2026
          </p>
        </div>
      </section>

      <p className="no-print mb-4">
        {/* 404s until /public/cv.pdf exists */}
        <a
          href="/CV-WEB/cv.pdf"
          download
          className="inline-flex items-center gap-2 rounded-md border border-ink bg-ink px-5 py-3 font-mono text-[0.8rem] tracking-wide text-paper transition-colors hover:bg-accent hover:border-accent hover:text-white"
        >
          <Download size={15} /> Download PDF
        </a>
      </p>

      <Block num="01" label="Summary">
        <div className="flex max-w-[64ch] flex-col gap-4 text-ink-soft">
          <p>
            AI &amp; ML student at Fontys University of Applied Sciences
            (Eindhoven), focused on generative AI: LLM agents, retrieval-augmented
            systems, and the engineering around them. Currently building Betsy, an
            autonomous procurement agent (LangGraph + MCP + Gemini), a
            browser-based floating-waste detection model, and an Airbnb
            price-prediction model with an interactive map.
          </p>
          <p>
            Looking for a September 2026 internship in the Netherlands, ideally on
            a team doing applied generative AI. Comfortable in English,
            Nuffic-eligible.
          </p>
        </div>
      </Block>

      <Block num="02" label="Education">
        <article>
          <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <p className="font-semibold text-ink">BSc Applied AI &amp; Machine Learning</p>
              <p className="text-[0.95rem] text-ink-muted">Fontys University of Applied Sciences, Eindhoven</p>
            </div>
            <p className="font-mono text-[0.76rem] text-ink-muted">2024 — 2028 (expected)</p>
          </div>
          <p className="max-w-[64ch] text-ink-soft">
            Relevant coursework: machine learning, deep learning, computer vision,
            generative AI, software engineering, data engineering.
          </p>
        </article>
      </Block>

      <Block num="03" label="Experience">
        <p className="italic text-ink-muted">
          First internship coming September 2026. Until then,{" "}
          <Link to="/projects">the work</Link> shows what I've been building.
        </p>
      </Block>

      <Block num="04" label="Skills">
        <dl className="flex flex-col gap-5">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="grid gap-2 md:grid-cols-[7rem_1fr] md:gap-4">
              <dt className="pt-1 font-mono text-[0.76rem] uppercase tracking-[0.08em] text-ink-muted">{group}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded border border-line bg-elevated px-3 py-1 text-[0.82rem] text-ink-soft">
                    {s}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block num="05" label="Languages">
        <dl className="grid gap-1 md:grid-cols-[9rem_1fr] md:gap-x-6 md:gap-y-3">
          {[
            ["English", "Professional working proficiency"],
            ["Dutch", "Learning · A2"],
            ["Russian", "Native"],
          ].map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="mt-3 font-mono text-[0.78rem] text-ink-muted md:mt-0">{k}</dt>
              <dd className="text-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block num="06" label="Contact" id="contact">
        <ContactList />
      </Block>
    </div>
  );
}
