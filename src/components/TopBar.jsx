import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Inner-page chrome: back-to-index on the left, theme toggle beside it.
// No right-side menu (hub-and-spoke navigation).
export default function TopBar() {
  return (
    <div className="no-print fixed left-4 top-4 z-[60] flex items-center gap-2 md:left-6 md:top-6">
      <Link
        to="/menu"
        className="cursor-grow inline-flex items-center gap-2 rounded-full border border-line-strong bg-elevated/70 px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted backdrop-blur transition-colors hover:border-ink hover:text-ink"
      >
        <ArrowLeft size={14} /> Menu
      </Link>
      <ThemeToggle />
    </div>
  );
}
