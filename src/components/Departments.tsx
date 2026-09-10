import { DEPARTMENTS } from "@/data/content";
import SectionLabel from "./SectionLabel";

export default function Departments() {
  return (
    <section
      id="departments"
      className="scroll-mt-24 border-t border-hairline bg-surface"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Heading column stays put while the list scrolls past it. */}
          <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <SectionLabel index="02">Departments</SectionLabel>
            <h2 className="reveal mt-8 text-[1.75rem] leading-[1.25] text-ink sm:text-[2.1rem]">
              Six routes through computing.
            </h2>
            <p className="reveal mt-5 max-w-xs text-ink-muted">
              Every member belongs to one of these degrees, and to the same
              chapter regardless of which.
            </p>
          </div>

          {/* A read-down list, not a card grid: the codes align into a column
              so the six scan as one index. */}
          <dl className="lg:col-span-8 lg:col-start-5">
            {DEPARTMENTS.map((d, i) => (
              <div
                key={d.code}
                className="reveal grid grid-cols-[3.25rem_1fr] items-baseline gap-x-5 border-t border-hairline py-7 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr] sm:gap-x-8"
                style={{ ["--reveal-delay" as string]: `${Math.min(i, 3) * 60}ms` }}
              >
                <dt className="label text-royal-600 dark:text-royal-300">
                  {d.code}
                </dt>
                <dd>
                  <h3 className="text-[1.3rem] text-ink sm:text-[1.45rem]">
                    {d.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[1rem] leading-[1.7] text-ink-muted">
                    {d.blurb}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
