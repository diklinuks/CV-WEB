import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";

// Click-to-load live demo. Heavy ML demo loads only on click, keeping the page fast.
export default function DemoEmbed({ src, title, label }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-white/[0.03]">
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <span className="flex items-center gap-2 overflow-hidden font-mono text-[0.72rem] text-ink-muted">
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-cyan" />
          <span className="truncate">{label || src}</span>
        </span>
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-1 font-mono text-[0.72rem] text-cyan hover:underline"
        >
          Fullscreen <ExternalLink size={12} />
        </a>
      </div>

      <div className="relative aspect-[16/10] bg-sunken">
        <AnimatePresence>
          {!loaded && (
            <motion.button
              type="button"
              onClick={() => setLoaded(true)}
              exit={{ opacity: 0 }}
              className="group absolute inset-0 flex flex-col items-center justify-center gap-3 bg-sunken transition-colors hover:bg-white/[0.03]"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-line-strong text-cyan transition-transform duration-500 ease-fluid group-hover:scale-105">
                <Play size={20} strokeWidth={1.5} className="ml-0.5" />
              </span>
              <span className="font-mono text-[0.82rem] tracking-wide text-ink">Load live demo</span>
              <span className="font-mono text-[0.68rem] text-ink-muted">Runs in your browser</span>
            </motion.button>
          )}
        </AnimatePresence>

        {loaded && (
          <iframe
            src={src}
            title={title}
            loading="lazy"
            className="h-full w-full border-0"
            allow="fullscreen; camera; microphone; accelerometer; gyroscope"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-downloads"
          />
        )}
      </div>
    </div>
  );
}
