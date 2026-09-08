import Reveal from "@/components/Reveal";
import { initiatives } from "@/lib/data";

export default function Programs() {
  return (
    <section id="programs" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-brand">03 / Programs</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-navy sm:text-4xl dark:text-white">
            What actually happens here.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="max-w-sm text-base leading-7 text-slate dark:text-white/70">
            The chapter runs on a steady rhythm of building, learning, and
            looking out for each other — a full year of it.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {initiatives.map((item, i) => (
          <Reveal
            as="article"
            key={item.title}
            delay={(i % 2) * 90}
            className="relative flex flex-col rounded-2xl border border-line bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-navy/5 dark:border-white/10 dark:bg-surface-dark dark:hover:shadow-black/20"
          >
            <span className="inline-flex w-fit items-center rounded-full bg-brand/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand">
              {item.tag}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-navy dark:text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-[15px] leading-7 text-slate dark:text-white/60">{item.body}</p>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-7 top-7 font-mono text-sm text-line dark:text-white/10"
            >
              0{i + 1}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
