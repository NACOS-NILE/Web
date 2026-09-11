const disciplines = [
  {
    number: "01",
    title: "Computer Science",
    description:
      "Explore algorithms, computation, software, and the foundations behind modern technology.",
  },
  {
    number: "02",
    title: "Software Engineering",
    description:
      "Design, develop, test, and maintain software that solves real-world problems.",
  },
  {
    number: "03",
    title: "Cyber Security",
    description:
      "Learn how to protect systems, networks, applications, and information in an evolving digital world.",
  },
  {
    number: "04",
    title: "Information Technology",
    description:
      "Build and manage the infrastructure and technologies that power organizations.",
  },
  {
    number: "05",
    title: "Information Systems",
    description:
      "Connect technology, people, and processes to create smarter information-driven organizations.",
  },
  {
    number: "06",
    title: "Data Science",
    description:
      "Turn data into meaningful insights using analytical and computational techniques.",
  },
];

export default function Disciplines() {
  return (
    <section
      id="disciplines"
      className="bg-slate-50 px-6 py-28 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#274193]">
              What we study
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-[#0d1733] sm:text-5xl">
              Six disciplines.
              <span className="block text-slate-400">
                One community.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            NACOS Nile brings together students across the major computing
            disciplines at Nile University.
          </p>

        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {disciplines.map((discipline) => (
            <article
              key={discipline.number}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#274193]/30 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="flex items-start justify-between">

                <span className="text-sm font-medium text-[#274193]">
                  {discipline.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-hover:border-[#274193] group-hover:bg-[#274193] group-hover:text-white">
                  ↗
                </span>

              </div>

              <h3 className="mt-12 text-xl font-bold text-[#0d1733]">
                {discipline.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {discipline.description}
              </p>

              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#274193]/5 transition group-hover:scale-150" />
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
