import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";


export default function TopBar() {
  return (
    <div className="no-print fixed left-4 top-4 z-[60] flex items-center gap-2 md:left-6 md:top-6">
      <Link
        to="/menu"
        className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={14} strokeWidth={1.5} /> Menu
      </Link>
      <Link
        to="/"
        aria-label="Back to start"
        title="Back to start"
        className="glass grid h-9 w-9 place-items-center rounded-full text-ink-muted transition-colors hover:text-ink"
      >
        <Home size={14} strokeWidth={1.5} />
      </Link>
    </div>
  );
}
