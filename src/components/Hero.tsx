import { ArrowRight } from "@/components/icons";

const stats = [
  { value: "6", label: "Disciplines" },
  { value: "9", label: "Executives" },
  { value: "1", label: "Community" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy text-white"
    >
      {/* quiet dotted veil + a single soft brand glow, top-right */}
      <div className="grid-veil pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.55) 0%, rgba(13,23,51,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-28 lg:pt-40">
        {/* Left — the message */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
            Nile University of Nigeria · Abuja Chapter
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            The computing
            <br />
            community of{" "}
            <span className="text-sky">Nile University</span>.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            NACOS Nile brings together every computing student on campus,
            across all six disciplines, to learn from each other, build real
            things, and grow into the engineers, analysts, and founders they
            came here to become.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#community"
              className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-navy transition-colors hover:bg-sky hover:text-navy"
            >
              Join the Community
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#disciplines"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Disciplines
            </a>
          </div>

          <dl className="mt-12 flex gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-white">
                  {s.value}
                  <span className="ml-2 text-sm font-medium text-white/50">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — an editor-style manifest, not a stock illustration */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-navy-800/80 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="h-3 w-3 rounded-full bg-white/20" />
              <span className="ml-3 font-mono text-xs text-white/40">
                nacos-nile / chapter.ts
              </span>
            </div>
            <pre className="overflow-x-auto px-5 py-5 font-mono text-[13px] leading-6 text-white/80">
              <code>
                <span className="text-sky">export const</span> chapter = {"{"}
                {"\n"}
                {"  "}name: <span className="text-leaf">
                  &quot;NACOS Nile&quot;
                </span>
                ,{"\n"}
                {"  "}campus: <span className="text-leaf">
                  &quot;Nile University, Abuja&quot;
                </span>
                ,{"\n"}
                {"  "}disciplines: [<span className="text-leaf">6</span>],{"\n"}
                {"  "}mission: <span className="text-leaf">
                  &quot;learn · build · grow&quot;
                </span>
                ,{"\n"}
                {"  "}open: <span className="text-sky">true</span>,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>

          {/* small floating tag — subtle depth without clutter */}
          <div className="absolute -bottom-4 -left-3 hidden rounded-xl border border-white/10 bg-white px-4 py-3 text-navy shadow-xl sm:block">
            <p className="font-mono text-[11px] uppercase tracking-wider text-brand">
              Learn · Build · Grow
            </p>
            <p className="text-sm font-semibold">Since day one on campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}
