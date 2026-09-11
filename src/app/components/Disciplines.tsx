const disciplines = [
  {
    number: "01",
    title: "Computer Science",
    description:
      "Explore the foundations of computing, algorithms, programming, and the ideas that shape modern technology.",
    tag: "CS",
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Design, develop, test, and maintain software systems built to solve real-world problems.",
    tag: "SE",
  },
  {
    number: "03",
    title: "Cyber Security",
    description:
      "Understand how digital systems, networks, and information can be protected in an increasingly connected world.",
    tag: "CY",
  },
  {
    number: "04",
    title: "Information Technology",
    description:
      "Work with the technologies and infrastructure that support how organizations manage and use information.",
    tag: "IT",
  },
  {
    number: "05",
    title: "Information Systems",
    description:
      "Explore the intersection of technology, people, processes, and organizations to solve information challenges.",
    tag: "IS",
  },
  {
    number: "06",
    title: "Data Science",
    description:
      "Discover how data, analytical thinking, and computational methods can uncover useful insights.",
    tag: "DS",
  },
];

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      aria-labelledby="disciplines-heading"
      className="relative overflow-hidden bg-[#0d1733] py-24 sm:py-28 lg:py-32"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="absolute right-[-15rem] top-1/4 h-[35rem] w-[35rem] rounded-full bg-blue-600/[0.08] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Computing at Nile
              </span>
            </div>

            <h2
              id="disciplines-heading"
              className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
            >
              Six disciplines.
              <span className="block text-slate-400">
                One technology community.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-400 lg:pb-1">
            NACOS Nile brings together students from different areas of
            computing, creating opportunities to learn across disciplines and
            collaborate beyond the classroom.
          </p>
        </div>

        {/* Discipline cards */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((discipline) => (
            <article
              key={discipline.number}
              className="group relative min-h-[270px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-blue-950/20 sm:p-7"
            >
              {/* Hover glow */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Card header */}
              <div className="relative flex items-start justify-between">
                <span className="text-xs font-semibold tracking-[0.15em] text-blue-400">
                  {discipline.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold tracking-wide text-slate-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-blue-300">
                  {discipline.tag}
                </span>
              </div>

              {/* Card content */}
              <div className="relative mt-12">
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {discipline.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {discipline.description}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:left-7 sm:right-7" />

              {/* Corner arrow */}
              <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-600 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300 sm:bottom-7 sm:right-7">
                <svg
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 15 15 5M7 5h8v8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}