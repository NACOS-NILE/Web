const initiatives = [
  {
    number: "01",
    title: "Tech Bootcamps",
    description:
      "Hands-on learning sessions designed to help students develop practical technical skills beyond the classroom.",
    tag: "LEARNING",
  },
  {
    number: "02",
    title: "Hackathon & Tech Week",
    description:
      "Collaborate, compete, and turn ambitious ideas into working technology during our flagship technical events.",
    tag: "BUILD",
  },
  {
    number: "03",
    title: "Industry & Career Talks",
    description:
      "Connect with professionals and gain practical insight into careers, opportunities, and life in the technology industry.",
    tag: "CAREER",
  },
  {
    number: "04",
    title: "Tutorials & Study Groups",
    description:
      "Learn together with fellow students through academic tutorials, collaborative study sessions, and peer support.",
    tag: "ACADEMICS",
  },
];

export default function Initiatives() {
  return (
    <section
      id="initiatives"
      className="relative overflow-hidden bg-[#0d1733] px-6 py-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#274193]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            What we do
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn.
            <span className="text-blue-400"> Build.</span>
            <br />
            <span className="text-slate-500">Connect.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            From technical workshops to career conversations, NACOS Nile
            creates opportunities for students to develop skills and
            experience together.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">

          {initiatives.map((initiative) => (
            <article
              key={initiative.number}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">

                <span className="text-sm font-medium text-blue-400">
                  {initiative.number}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-400">
                  {initiative.tag}
                </span>

              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold">
                  {initiative.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">
                  {initiative.description}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm font-medium text-blue-300">
                Explore initiative
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </article>
          ))}

        </div>

        {/* Bottom statement */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="text-sm text-slate-500">
            Built by students. Powered by curiosity. Driven by technology.
          </p>
        </div>

      </div>
    </section>
  );
}
