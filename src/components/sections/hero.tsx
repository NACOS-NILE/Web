import Image from "next/image";
import { CircuitField } from "./circuit-field";

export function Hero() {
  return (
    <section className="relative isolate overflow-clip py-[clamp(3.5rem,9vw,7rem)] pb-[clamp(3rem,7vw,5.5rem)]">
      <Image
        src="/brand/nacos-seal-light-192.webp"
        alt=""
        width={192}
        height={192}
        aria-hidden="true"
        className="seal-ghost-spin pointer-events-none absolute right-[-6%] top-1/2 -z-10 hidden w-[min(46vw,520px)] -translate-y-1/2 opacity-[.055] saturate-0 md:block"
      />
      <div
        className="pointer-events-none absolute inset-[-10%_-5%_0] -z-10 opacity-85"
        style={{ maskImage: "radial-gradient(120% 80% at 60% 40%, #000 30%, transparent 78%)" }}
        aria-hidden="true"
      >
        <CircuitField />
      </div>

      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <span className="font-mono mb-[1.6rem] inline-flex items-center gap-[.6rem] text-[.7rem] uppercase tracking-[.18em] text-signal before:h-px before:w-[26px] before:bg-signal">
          Nile University of Nigeria · Faculty of Computing
        </span>

        <h1 className="max-w-[16ch] text-balance text-[clamp(2.6rem,7.4vw,5.4rem)] font-bold leading-[.96] tracking-[-.035em]">
          Where Nile builds <em className="text-signal not-italic">what&apos;s next.</em>
        </h1>

        <p className="mt-[1.6rem] max-w-[52ch] text-[clamp(1rem,1.5vw,1.16rem)] leading-[1.6] text-muted">
          The Nigeria Association of Computing Students, Nile University chapter — six
          disciplines, one community, and the people building Nigeria&apos;s software.
        </p>

        <div className="mt-[2.4rem] flex flex-wrap gap-[.8rem]">
          <a
            href="#community"
            className="font-mono group inline-flex items-center gap-[.6rem] rounded-[2px] bg-signal px-[1.4rem] py-[.95rem] text-[.78rem] font-semibold uppercase tracking-[.06em] text-[#07240A] no-underline transition-transform duration-200 [transition-timing-function:var(--ease)] hover:-translate-y-0.5"
          >
            Join the community
            <span className="transition-transform duration-200 [transition-timing-function:var(--ease)] group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#about"
            className="font-mono inline-flex items-center gap-[.6rem] rounded-[2px] border border-white/20 px-[1.4rem] py-[.95rem] text-[.78rem] font-semibold uppercase tracking-[.06em] text-ink no-underline transition-transform duration-200 [transition-timing-function:var(--ease)] hover:-translate-y-0.5 hover:border-signal hover:text-signal"
          >
            Explore the chapter
          </a>
        </div>

        <div className="font-mono mt-[3rem] flex flex-wrap gap-[2.2rem] text-[.7rem] uppercase tracking-[.1em] text-muted">
          <span>
            <b className="mb-[.2rem] block font-sans text-[1.9rem] font-semibold tracking-[-.02em] text-ink">6</b>
            Disciplines
          </span>
          <span>
            <b className="mb-[.2rem] block font-sans text-[1.9rem] font-semibold tracking-[-.02em] text-ink">9</b>
            Executives
          </span>
        </div>
      </div>
    </section>
  );
}
