import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const PILLARS = [
  {
    label: "Our mission",
    body: "To represent every computing student at Nile University, and to turn a shared timetable into a genuine community — one where knowledge, opportunities and encouragement move freely between levels.",
  },
  {
    label: "Our vision",
    body: "A chapter whose members graduate not just with a degree, but with shipped projects, real mentors and the confidence to compete anywhere in the world.",
  },
  {
    label: "How we work",
    body: "Student-led and practical. Every programme we run is built by executives who are still in the lecture halls, so it answers what members actually need this semester.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative border-b border-brand-900/10 bg-brand-50/50 py-20 sm:py-28 dark:border-white/10 dark:bg-brand-900/30"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="about-heading"
          eyebrow="About the chapter"
          title="A student body for everyone who builds with a computer"
          description="NACOS Nile is the Nile University of Nigeria chapter of the Nigeria Association of Computing Students — the recognised voice of computing undergraduates on campus, and the engine behind our academic, technical and social life."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.label} delay={i * 110} variant="slide-left" as="article">
              <div className="h-full rounded-2xl border border-brand-900/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-xl hover:shadow-brand-600/10 dark:border-white/10 dark:bg-brand-950/60 dark:hover:border-brand-400/40">
                <span
                  aria-hidden="true"
                  className="block h-1 w-10 rounded-full bg-gradient-to-r from-brand-600 to-accent"
                />
                <h3 className="mt-5 text-lg font-bold text-brand-900 dark:text-white">
                  {pillar.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-pretty text-brand-900/65 dark:text-brand-100/65">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
