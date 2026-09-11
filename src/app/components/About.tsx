import Image from "next/image";
const principles = [
  {
    number: "01",
    title: "Learn",
    description:
      "Grow through academic tutorials, study groups, coding workshops, and practical technology learning.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Build meaningful connections with fellow students, industry professionals, and the wider computing community.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Turn ideas into practical solutions through collaboration, innovation, hackathons, and technology-focused initiatives.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-[#0d1733] py-24 sm:py-28 lg:py-32"
    >
      {/* Decorative glow */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#274193]/15 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-3xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              About NACOS Nile
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-balance text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl"
          >
            More than a student body.
            <span className="block text-slate-400">
              A community built around technology.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            NACOS Nile brings together students across the computing
            disciplines at Nile University, creating a space where students
            can learn, collaborate, explore technology, and turn ideas into
            meaningful projects.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Visual panel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#172b5b] via-[#102044] to-[#0d1733] p-8 sm:p-10">
            {/* Decorative circles */}
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-300/10"
            />

            <div
              aria-hidden="true"
              className="absolute -right-10 -top-10 h-44 w-44 rounded-full border border-blue-300/10"
            />

            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-48 w-48 translate-x-1/3 translate-y-1/3 rounded-full bg-blue-500/10 blur-3xl"
            />

            {/* Logo */}
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white p-2 shadow-xl">
                <Image
  src="/logo.svg"
  alt=""
  aria-hidden="true"
  width={56}
  height={56}
  className="h-full w-full object-contain"
/>
              </div>

              <p className="mt-10 max-w-sm text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
                Learn together.
                <br />
                Build together.
                <br />
                <span className="text-blue-300">Grow together.</span>
              </p>

              <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
                A community where different areas of computing come together
                under one shared interest: technology.
              </p>
            </div>

            {/* Bottom label */}
            <div className="relative mt-12 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex -space-x-2">
                <span className="h-7 w-7 rounded-full border-2 border-[#172b5b] bg-blue-400/20" />
                <span className="h-7 w-7 rounded-full border-2 border-[#172b5b] bg-indigo-400/20" />
                <span className="h-7 w-7 rounded-full border-2 border-[#172b5b] bg-sky-400/20" />
              </div>

              <span className="text-xs text-slate-400">
                One community. Multiple computing disciplines.
              </span>
            </div>
          </div>

          {/* Principles */}
          <div className="grid gap-4">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.045] sm:p-7"
              >
                <div className="flex gap-5">
                  <span className="shrink-0 pt-1 text-xs font-semibold tracking-[0.15em] text-blue-400">
                    {principle.number}
                  </span>

                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {principle.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {principle.description}
                    </p>
                  </div>

                  <div className="ml-auto hidden shrink-0 self-center sm:block">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-500 transition-all duration-300 group-hover:border-blue-400/30 group-hover:text-blue-300">
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10h11M11 5l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}