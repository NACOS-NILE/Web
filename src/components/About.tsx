import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <span className="eyebrow text-brand">01 / About</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl dark:text-white">
            One chapter for every computing student on campus.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="space-y-6 text-lg leading-8 text-slate dark:text-white/70">
            <p>
              The Nigeria Association of Computing Students (NACOS) is the
              national body for students in computing fields. The{" "}
              <span className="font-medium text-navy dark:text-white">Nile chapter</span> is our
              home for it — a student-run community at Nile University of
              Nigeria, Abuja, that exists to make sure no one goes through their
              degree alone.
            </p>
            <p>
              Our mission is simple: create the space and the support for
              computing students to become genuinely good at what they do.
              Whether that&apos;s your first &quot;hello world&quot; or your
              final-year project, there&apos;s a room, a group chat, and a
              senior who&apos;s been there.
            </p>

            <div className="grid gap-6 border-t border-line pt-8 sm:grid-cols-2 dark:border-white/10">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                  Mission
                </h3>
                <p className="mt-2 text-base leading-7 text-slate dark:text-white/60">
                  Help every member learn faster, build more, and leave campus
                  ready for real work in tech.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand">
                  Vision
                </h3>
                <p className="mt-2 text-base leading-7 text-slate dark:text-white/60">
                  A computing community at Nile that people are proud to belong
                  to — and that employers notice.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
