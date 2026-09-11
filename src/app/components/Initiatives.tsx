const initiatives = [
  {
    number: "01",
    title: "Tech Bootcamps",
    description:
      "Build practical skills through coding workshops and hands-on technology learning designed for students.",
    label: "LEARN",
  },
  {
    number: "02",
    title: "Hackathon & Tech Week",
    description:
      "Explore ideas, solve problems, collaborate with other students, and experience technology beyond the classroom.",
    label: "CREATE",
  },
  {
    number: "03",
    title: "Industry Mentorship",
    description:
      "Gain perspective through mentorship opportunities, career conversations, and exposure to professionals in technology.",
    label: "CONNECT",
  },
  {
    number: "04",
    title: "Academic Tutorials",
    description:
      "Learn together through tutorials and study groups that encourage academic support and peer-to-peer growth.",
    label: "GROW",
  },
];

export default function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-heading"
      className="relative overflow-hidden bg-[#0d1733] py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-blue-600/[0.08] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#274193]/10 blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                What We Do
              </span>
            </div>

            <h2
              id="initiatives-heading"
              className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
            >
              Opportunities to learn,
              <span className="block text-slate-400">
                connect, and build.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400 lg:pb-1">
            From technical workshops to academic support and career
            conversations, NACOS Nile creates spaces for students to grow
            together.
          </p>
        </div>

        {/* Initiative cards */}
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {initiatives.map((initiative, index) => (
            <article
              key={initiative.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20 sm:p-8"
            >
              {/* Background number */}
              <span
                aria-hidden="true"
                className="absolute -right-4 -top-10 text-[10rem] font-bold leading-none tracking-[-0.08em] text-white/[0.025] transition-colors duration-300 group-hover:text-blue-400/[0.05]"
              >
                {initiative.number}
              </span>

              {/* Top row */}
              <div className="relative flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-blue-400">
                  {initiative.number}
                </span>

                <span className="rounded-full border border-blue-400/15 bg-blue-400/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.15em] text-blue-300">
                  {initiative.label}
                </span>
              </div>

              {/* Icon */}
              <div className="relative mt-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300 transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-400/10">
                {index === 0 && (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M8 6h8M8 10h8M8 14h5M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {index === 1 && (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="m12 3 2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}

                {index === 2 && (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="9"
                      cy="8"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="17"
                      cy="9"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.5 20c.5-3.5 2.3-5.2 5.5-5.2s5 1.7 5.5 5.2M14 15.5c.8-.5 1.7-.7 2.7-.7 2.2 0 3.5 1.2 3.8 3.7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}

                {index === 3 && (
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Content */}
              <div className="relative mt-7 max-w-lg">
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {initiative.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {initiative.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="relative mt-8 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-500/30 transition-all duration-300 group-hover:w-16 group-hover:bg-blue-400/60" />

                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-600 transition-colors duration-300 group-hover:text-slate-400">
                  NACOS Nile
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}