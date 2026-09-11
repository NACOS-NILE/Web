import { INITIATIVES } from "@/data/content";
import SectionLabel from "./SectionLabel";

export default function Initiatives() {
  return (
    <section
      id="events"
      className="scroll-mt-24 border-y border-white/10 bg-royal-950 text-royal-100"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionLabel index="03" tone="light">
          Through the year
        </SectionLabel>
        <h2 className="reveal mt-10 max-w-2xl text-[1.9rem] leading-[1.2] text-white sm:text-[2.6rem]">
          Four things the chapter is on the hook for.
        </h2>

        <ol className="mt-16">
          {INITIATIVES.map((item, i) => (
            <li
              key={item.index}
              className="reveal border-t border-white/12 last:border-b"
              style={{ ["--reveal-delay" as string]: `${Math.min(i, 3) * 60}ms` }}
            >
              <div className="grid gap-x-10 gap-y-3 py-9 md:grid-cols-12 md:py-11">
                <p className="label text-royal-400 md:col-span-2">
                  {item.cadence}
                </p>
                <h3 className="text-[1.4rem] leading-[1.25] text-white md:col-span-5 md:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="max-w-lg text-royal-100/70 md:col-span-5">
                  {item.blurb}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
