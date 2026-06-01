import { Link } from "react-router-dom";
import { Btn } from "../components/primitives";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-content px-5 md:px-6">
      <section className="py-24 text-center">
        <p className="font-serif text-[6rem] leading-none text-accent-ink">404</p>
        <h1 className="mb-4 font-serif text-[1.8rem] text-ink">Page not found</h1>
        <p className="mb-8 text-ink-soft">That page doesn't exist — or doesn't exist yet.</p>
        <div className="flex justify-center gap-3">
          <Btn to="/" variant="primary">Go to index</Btn>
          <Btn to="/projects">See the work</Btn>
        </div>
      </section>
    </div>
  );
}
