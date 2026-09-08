import Reveal from "@/components/Reveal";
import { disciplines } from "@/lib/data";

export default function Disciplines() {
  return (
    <section id="disciplines" className="bg-mist dark:bg-mist-dark">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand">02 / Disciplines</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl dark:text-white">
            Six paths, one community.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate dark:text-white/70">
            NACOS Nile covers every computing programme at the university. Wherever
            you sit in the faculty, you belong here.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {disciplines.map((d, i) => (
            <Reveal
              as="li"
              key={d.code}
              delay={(i % 3) * 70}
              className="group bg-white p-7 transition-colors hover:bg-navy dark:bg-surface-dark dark:hover:bg-navy"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 font-mono text-sm font-semibold text-brand transition-colors group-hover:bg-white/10 group-hover:text-sky">
                  {d.code}
                </span>
                <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-white dark:text-white">
                  {d.name}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-7 text-slate transition-colors group-hover:text-white/70 dark:text-white/60">
                {d.blurb}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
