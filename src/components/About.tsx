import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel index="01">The chapter</SectionLabel>

        {/* A single statement carries this section; the supporting prose is
            deliberately set narrow and offset rather than centred. */}
        <h2 className="reveal mt-10 max-w-4xl text-[1.9rem] leading-[1.22] text-ink sm:text-[2.6rem]">
          NACOS Nile is the Nile University chapter of the national association
          for computing students — and the reason a first year with a broken
          build has somebody to ask.
        </h2>

        <div className="mt-16 grid gap-x-16 gap-y-10 border-t border-hairline pt-12 md:grid-cols-12">
          <p className="reveal text-ink-muted md:col-span-5 md:col-start-1">
            We exist for students across six computing departments on this
            campus, from first years writing their first loop to finalists
            defending capstone projects. Membership is the whole of that
            spread, not the top of it.
          </p>
          <p
            className="reveal text-ink-muted md:col-span-5 md:col-start-7"
            style={{ ["--reveal-delay" as string]: "80ms" }}
          >
            What we are accountable for is unglamorous and specific: sessions
            that start on time, tutorials scheduled before the exams that need
            them, and an executive council whose names and offices are on this
            page.
          </p>
        </div>
      </div>
    </section>
  );
}
