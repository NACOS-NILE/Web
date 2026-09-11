import Image from "next/image";
import { ArrowRightIcon } from "@/components/Icons";
import HeroTerminal from "@/components/HeroTerminal";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white pt-28 pb-20 sm:pt-36 sm:pb-28 dark:bg-brand-950"
    >
      {/* Decorative background: a faint engineering grid, nothing more. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(39,65,147,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(39,65,147,0.07)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-10">
        <div>
          <Reveal>
            {/*
              The live dot carries the "active chapter" signal on its own — the
              capsule around it only added weight, and at 320px the label could
              not fit inside one without spilling past the edge.
            */}
            <p className="flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.18em] text-brand-700 uppercase sm:text-xs dark:text-brand-200">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-leaf" />
              </span>
              Nigeria Association of Computing Students
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-heading"
              className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight text-balance text-brand-900 sm:text-5xl lg:text-6xl dark:text-white"
            >
              The home of computing{" "}
              <span className="bg-gradient-to-r from-brand-600 via-accent to-accent-soft bg-clip-text text-transparent">
                at Nile University
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-brand-900/70 dark:text-brand-100/75">
              We are the students who write the code, secure the networks and read the data — six
              disciplines, one community. NACOS Nile exists so that nobody here has to build alone.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#community"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-brand-600/25 transition hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-600/40"
              >
                Join Community
                <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#events"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-900/15 bg-white/70 px-7 py-3.5 text-base font-semibold text-brand-800 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-600/40 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-brand-50 dark:hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>
          </Reveal>
        </div>

        {/* Hero graphic */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative animate-float rounded-3xl border border-white/10 bg-brand-900 p-1.5 shadow-2xl shadow-brand-900/40">
              <div className="rounded-[1.15rem] bg-brand-950/90 ring-1 ring-white/10">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-red-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">chapter.ts</span>
                </div>
                <HeroTerminal />
              </div>
            </div>

            {/* Floating brand chip */}
            <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-brand-900/10 bg-white/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 dark:border-white/15 dark:bg-brand-900/90">
              <Image src="/logo.svg" alt="" width={80} height={38} className="h-8 w-auto" />
              <div className="leading-tight">
                <p className="text-sm font-bold text-brand-900 dark:text-white">NACOS Nile</p>
                <p className="text-xs text-brand-900/60 dark:text-brand-100/60">
                  Abuja &middot; FCT, Nigeria
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
