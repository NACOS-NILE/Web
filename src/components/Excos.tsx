import { EXCOS } from "@/data/content";
import Portrait from "./Portrait";
import SectionLabel from "./SectionLabel";

export default function Excos() {
  const leads = EXCOS.filter((p) => p.lead);
  const rest = EXCOS.filter((p) => !p.lead);

  return (
    <section
      id="excos"
      className="scroll-mt-24 border-b border-hairline bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <SectionLabel index="04">Executive council</SectionLabel>
          <p className="label text-ink-faint">Nine offices</p>
        </div>

        <h2 className="reveal mt-10 max-w-2xl text-[1.9rem] leading-[1.2] text-ink sm:text-[2.6rem]">
          The people accountable for it.
        </h2>

        {/* Three lead offices are set larger — a real hierarchy, and also the
            three highest-resolution photographs in the set. Centred, so the
            narrower block sits under the middle of the full-width roster
            below rather than hanging off its left edge. */}
        <ul className="mx-auto mt-16 grid max-w-3xl gap-x-9 gap-y-12 sm:grid-cols-3">
          {leads.map((p, i) => (
            <li
              key={p.slug}
              className="reveal"
              style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            >
              <Portrait
                slug={p.slug}
                lead
                alt={`${p.name}, ${p.role}`}
                className="w-full max-w-[12rem] object-cover sm:max-w-none"
              />
              <h3 className="mt-6 text-[1.35rem] leading-snug text-ink">
                {p.name}
              </h3>
              <p className="label mt-2 text-royal-600 dark:text-royal-300">
                {p.role}
              </p>
              <p className="mt-3 max-w-[17rem] text-[1rem] leading-[1.65] text-ink-muted">
                {p.bio}
              </p>
            </li>
          ))}
        </ul>

        {/* The remaining six run denser, as a roster rather than more cards. */}
        <ul className="mt-20 grid gap-x-12 border-t border-hairline sm:grid-cols-2">
          {rest.map((p, i) => (
            <li
              key={p.slug}
              className="reveal flex items-start gap-5 border-b border-hairline py-7"
              style={{ ["--reveal-delay" as string]: `${Math.min(i, 3) * 55}ms` }}
            >
              <Portrait
                slug={p.slug}
                alt={`${p.name}, ${p.role}`}
                wrapperClassName="shrink-0"
                className="h-[4.25rem] w-[4.25rem] object-cover sm:h-[5.25rem] sm:w-[5.25rem]"
              />
              <div className="min-w-0">
                <h3 className="text-[1.15rem] leading-snug text-ink">
                  {p.name}
                </h3>
                <p className="label mt-1.5 text-royal-600 dark:text-royal-300">
                  {p.shortRole}
                </p>
                <p className="mt-2 text-[0.95rem] leading-[1.6] text-ink-muted">
                  {p.bio}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
