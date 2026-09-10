const values = [
  {
    title: "Learn Together",
    description: "Tutorials, workshops, study groups and knowledge sharing.",
  },
  {
    title: "Build & Create",
    description: "Projects, coding sessions, hackathons and practical experience.",
  },
  {
    title: "Connect & Grow",
    description: "Mentorship, career conversations, collaboration and community.",
  },
];

const communityPanels = [
  {
    title: "Learn",
    description: "Grow your foundations alongside students who share your curiosity.",
  },
  {
    title: "Build",
    description: "Turn new ideas into practical work through shared experiences.",
  },
  {
    title: "Connect",
    description: "Meet peers, mentors and people shaping the industry.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8faff] py-20 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-[#e6eeff] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#d8e1fb] bg-white px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#274193]">
              <span className="h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden="true" />
              About NACOS Nile
            </p>

            <h2
              id="about-heading"
              className="mt-6 max-w-[15ch] text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0d1733] sm:text-5xl lg:text-[3.45rem]"
            >
              A community built for the next generation of computing.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              NACOS Nile brings together students across computing-related disciplines to
              learn, build, collaborate, and connect with industry. It is a place to grow
              practical skills, share ideas, and find people who want to create what comes
              next.
            </p>
          </div>

          <article
            className="relative mx-auto w-full max-w-[540px] rounded-[1.75rem] border border-[#dce5f8] bg-white p-5 shadow-[0_24px_60px_rgba(39,65,147,0.1)] sm:p-7"
            aria-label="How the NACOS Nile community supports students"
          >
            <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#274193]">
                  Our community
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0d1733]">
                  Made for shared progress.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:mt-6">
              {communityPanels.map((panel) => (
                <div
                  key={panel.title}
                  tabIndex={0}
                  aria-label={`${panel.title}: ${panel.description}`}
                  className="group/panel relative overflow-hidden rounded-2xl border border-[#d9e4fb] bg-white p-4 text-[#0d1733] outline-none transition-colors duration-200 hover:border-[#274193] hover:bg-[#274193] focus-visible:border-[#274193] focus-visible:bg-[#274193] focus-visible:ring-2 focus-visible:ring-[#274193]/30 motion-reduce:transition-none sm:p-5"
                >
                  <p className="text-base font-bold tracking-[-0.02em] transition-colors duration-200 group-hover/panel:text-white group-focus-within/panel:text-white motion-reduce:transition-none">{panel.title}</p>
                  <p className="mt-1 max-w-[16rem] text-sm leading-5 text-slate-500 transition-colors duration-200 group-hover/panel:text-blue-100 group-focus-within/panel:text-blue-100 motion-reduce:transition-none">
                    {panel.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16 lg:gap-5">
          {values.map((value) => (
            <article
              key={value.title}
              className="group rounded-2xl border border-[#e0e8f8] bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-[#bfd0f4] hover:shadow-[0_14px_30px_rgba(39,65,147,0.08)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
            >
              <div className="h-1.5 w-9 rounded-full bg-[#60a5fa]" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-[#0d1733]">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
