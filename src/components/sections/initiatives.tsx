import { initiatives } from "@/content/initiatives";

export function Initiatives() {
  return (
    <section id="initiatives" className="relative z-[2] border-t border-white/[.07] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <span className="font-mono mb-[1rem] inline-flex items-center gap-[.6rem] text-[.7rem] uppercase tracking-[.18em] text-signal before:h-px before:w-[26px] before:bg-signal">
          03 / Initiatives
        </span>
        <h2 className="max-w-[24ch] text-[clamp(1.7rem,3vw,2.3rem)] font-bold leading-[1.06] tracking-[-.025em]">
          What the chapter actually runs.
        </h2>

        <div className="mt-[2.4rem] grid grid-cols-1 gap-px overflow-hidden rounded-[3px] bg-white/[.07] sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((it) => (
            <article key={it.title} className="bg-bg p-[1.6rem_1.4rem]">
              <span className="font-mono mb-[.9rem] inline-block rounded-[2px] bg-signal/10 px-[.5rem] py-[.25rem] text-[.62rem] uppercase tracking-[.12em] text-signal">
                {it.label}
              </span>
              <h3 className="mb-[.55rem] text-[1.05rem] font-semibold leading-[1.3] tracking-[-.01em]">
                {it.title}
              </h3>
              <p className="text-[.88rem] leading-[1.6] text-muted">{it.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
