import PageHeader from "../components/PageHeader";
import ProjectCarousel from "../components/ProjectCarousel";
import usePageTitle from "../hooks/usePageTitle";

export default function Projects() {
  usePageTitle("Projects — Tymur Abdurakhmanov");
  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-wide px-6 md:px-10">
        <PageHeader
          eyebrow="Work"
          title="What I've built"
          lead="Things I'm building or have shipped. Open any card for the full story: the stack, the links, the code, and a live demo you can run right here."
        />
        <section className="py-12 md:py-16">
          <ProjectCarousel />
        </section>
      </div>
    </>
  );
}
