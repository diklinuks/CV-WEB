import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto max-w-content px-5 pb-10 pt-12 md:px-6">
        <div className="mb-4 flex flex-wrap gap-5">
          {[
            { to: "/", label: "Index" },
            { to: "/cv", label: "CV" },
            { to: "/projects", label: "Work" },
            { to: "/contact", label: "Contact" },
          ].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-muted hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <p className="font-mono text-[0.72rem] leading-relaxed text-ink-muted">
          © 2026 Tymur Abdurakhmanov · Built with React, Vite &amp; Framer Motion ·
          Eindhoven, NL
        </p>
      </div>
    </footer>
  );
}
