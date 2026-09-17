import { ArrowRight, ArrowUpRight } from "lucide-react";

const stack = [
  { code: "CSC", name: "Computer Science" },
  { code: "SWE", name: "Software Engineering" },
  { code: "CYB", name: "Cyber Security" },
  { code: "IFT", name: "Information Technology" },
  { code: "INS", name: "Information Systems" },
  { code: "DTS", name: "Data Science" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border-hairline bg-surface">
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-nacos-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-nacos-green-light/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28 lg:px-8">
        <div>
          <p
            className="animate-rise-in text-sm font-medium text-nacos-blue"
            style={{ animationDelay: "0ms" }}
          >
            Nile University of Nigeria &middot; Abuja, FCT
          </p>
          <h1
            className="animate-rise-in mt-5 max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-nacos-navy sm:text-5xl"
            style={{ animationDelay: "80ms" }}
          >
            Where Nile&rsquo;s computing students{" "}
            <span className="bg-gradient-to-r from-nacos-blue to-nacos-green bg-clip-text text-transparent">
              learn, build, and grow
            </span>{" "}
            together
          </h1>
          <p
            className="animate-rise-in mt-6 max-w-lg text-lg leading-relaxed text-text-body"
            style={{ animationDelay: "160ms" }}
          >
            NACOS Nile is the home base for every computing student on
            campus — across six disciplines — with the workshops, mentors,
            and hands-on projects that turn a degree into a career.
          </p>
          <div
            className="animate-rise-in mt-9 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#community"
              className="group inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-nacos-blue to-nacos-green px-5 py-3 text-sm font-medium text-white shadow-lg shadow-nacos-blue/20 transition-shadow hover:shadow-nacos-green/30"
            >
              Join community
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#disciplines"
              className="inline-flex items-center gap-2 rounded-md border border-border-hairline px-5 py-3 text-sm font-medium text-nacos-navy transition-colors hover:border-nacos-blue"
            >
              Explore disciplines
            </a>
          </div>
        </div>

        <div
          className="animate-rise-in relative rounded-xl border border-border-hairline bg-surface-muted p-6 shadow-xl shadow-nacos-navy/5"
          style={{ animationDelay: "200ms" }}
        >
          <div className="absolute inset-x-0 -top-px h-1 rounded-t-xl bg-gradient-to-r from-nacos-blue to-nacos-green" />
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-nacos-navy">
              Nile computing disciplines
            </span>
            <span className="text-xs text-text-muted">6 tracks</span>
          </div>
          <ul className="mt-5 divide-y divide-border-hairline">
            {stack.map((item) => (
              <li key={item.code} className="group flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-12 items-center justify-center rounded border border-border-hairline bg-surface text-xs font-semibold text-nacos-blue">
                    {item.code}
                  </span>
                  <span className="text-sm text-text-body">{item.name}</span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-nacos-blue"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
