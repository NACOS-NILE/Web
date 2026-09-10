const disciplines = [
  {
    number: "01",
    title: "Computer Science",
    description:
      "Explore algorithms, software foundations, problem-solving and the ideas behind modern computing.",
    short: "CS",
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Turn ideas into dependable products through design, development, testing and collaboration.",
    short: "SE",
  },
  {
    number: "03",
    title: "Cyber Security",
    description:
      "Build the knowledge to protect systems, networks and data in an increasingly connected world.",
    short: "CY",
  },
  {
    number: "04",
    title: "Information Technology",
    description:
      "Work with the infrastructure, tools and technologies that keep organisations and users connected.",
    short: "IT",
  },
  {
    number: "05",
    title: "Information Systems",
    description:
      "Bridge technology and organisations by understanding how information supports better decisions.",
    short: "IS",
  },
  {
    number: "06",
    title: "Data Science",
    description:
      "Use data, statistics and computational thinking to discover patterns and support smarter choices.",
    short: "DS",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M4.25 10h11.5M10.75 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
      aria-labelledby="disciplines-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d8e1fb] bg-[#f8faff] px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#274193]">
            <span className="h-2 w-2 rounded-full bg-[#3b82f6]" aria-hidden="true" />
            Disciplines
          </p>

          <div className="mt-6 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <h2
              id="disciplines-heading"
              className="max-w-[14ch] text-balance text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0d1733] sm:text-5xl lg:text-[3.45rem]"
            >
              Six paths. One computing community.
            </h2>
            <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              NACOS Nile brings students from across computing disciplines into one community where different skills and perspectives can grow together.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {disciplines.map((discipline) => (
            <article
              key={discipline.number}
              tabIndex={0}
              className="group relative min-h-[255px] overflow-hidden rounded-3xl border border-[#dfe6f7] bg-white p-6 shadow-[0_10px_35px_rgba(39,65,147,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#bfcdf6] hover:shadow-[0_18px_45px_rgba(39,65,147,0.12)] focus-visible:-translate-y-1 focus-visible:border-[#274193] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#3b82f6]/15 sm:p-7"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-[#274193] transition-transform duration-300 group-hover:scale-x-100 group-focus-within:scale-x-100"
                aria-hidden="true"
              />

              <div className="flex items-start justify-between">
                <span className="text-xs font-bold tracking-[0.14em] text-slate-400">
                  {discipline.number}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#dbe4fb] bg-[#f5f8ff] text-xs font-extrabold tracking-[0.12em] text-[#274193] transition-colors duration-300 group-hover:border-[#dce5ff] group-hover:bg-[#274193] group-hover:text-white group-focus-visible:border-[#dce5ff] group-focus-visible:bg-[#274193] group-focus-visible:text-white">
                  {discipline.short}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold tracking-[-0.02em] text-[#0d1733] sm:text-[1.35rem]">
                  {discipline.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-slate-600 sm:text-[0.95rem]">
                  {discipline.description}
                </p>
              </div>

              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#274193]">
                Explore this path
                <ArrowIcon />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
