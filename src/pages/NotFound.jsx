import MagneticButton from "../components/MagneticButton";
import { ArrowRight } from "lucide-react";

// 404 — sits over the app-level shader background.
export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="relative z-10 flex flex-col items-center">
        <p className="grad-ink font-fraunces text-[clamp(5rem,18vw,11rem)] font-semibold leading-none">404</p>
        <h1 className="mt-2 font-clash text-2xl text-ink">Lost in space</h1>
        <p className="mt-3 max-w-[40ch] text-ink-soft">That page doesn't exist — or doesn't exist yet.</p>
        <div className="mt-8">
          <MagneticButton to="/menu" icon={ArrowRight}>Back to menu</MagneticButton>
        </div>
      </div>
    </section>
  );
}
