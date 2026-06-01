import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { to: "/", label: "Index", end: true },
  { to: "/cv", label: "CV" },
  { to: "/projects", label: "Work" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="no-print sticky top-0 z-20 border-b border-line bg-paper/85 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex max-w-content items-center justify-between gap-4 px-5 py-4 md:px-6">
        <Link
          to="/"
          className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink hover:text-accent-ink md:text-[0.78rem]"
        >
          Tymur Abdurakhmanov
        </Link>
        <nav aria-label="Primary" className="flex gap-4 md:gap-5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className="relative font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink md:text-[0.74rem]"
            >
              {({ isActive }) => (
                <>
                  <span className={isActive ? "text-ink" : ""}>{l.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-[6px] left-0 right-0 h-[2px] bg-accent"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
