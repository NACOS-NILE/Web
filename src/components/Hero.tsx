import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function HeroAmbience() {
  return (
    <div
      aria-hidden="true"
      className="hero-orbit absolute left-1/2 top-1/2 aspect-square w-[440px] max-w-[86vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full"
    >
      <div className="glow-field absolute inset-0" />
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-stage relative flex min-h-[100svh] items-center justify-center overflow-hidden border-b border-border px-5 pb-20 pt-28"
    >
      <div aria-hidden="true" className="grid-fade absolute inset-0 opacity-25" />
      <div aria-hidden="true" className="hero-beam absolute inset-0" />
      <HeroAmbience />
      <div className="hero-content rise-in relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center text-center">
        <Image
          src="/logo.svg"
          alt="Nigeria Association of Computing Students, Nile University Chapter crest"
          className="hero-brand mb-8 h-14 w-auto md:h-16"
          width={80}
          height={38}
          priority
        />
        <p className="hero-kicker eyebrow mb-8 text-[10px] text-primary md:text-[11px]">
          Nile University · Computing Community
        </p>
        <h1 className="hero-title text-[clamp(2.1rem,7vw,8rem)] font-extrabold uppercase leading-[0.86]">
          Learn &amp; Build
          <span className="hero-title-outline block">Grow Together</span>
        </h1>
        <p className="hero-summary mx-auto mt-12 max-w-xl text-[15px] leading-7 text-muted-foreground md:text-lg md:leading-8">
          NACOS Nile is the community operating system for computing students. Discover, build and
          lead your technology journey today.
        </p>
        <div className="hero-actions mt-10 flex flex-wrap justify-center gap-3">
          <Button
            asChild
            size="lg"
            data-magnetic="0.22"
            className="hero-cta rounded-full px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.12em]"
          >
            <a href="#join">
              Join Community <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            data-magnetic="0.16"
            variant="outline"
            className="rounded-full px-8 font-sans text-[13px] font-semibold uppercase tracking-[0.12em]"
          >
            <a href="#programs">Explore Programs</a>
          </Button>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-8 hidden h-24 w-px bg-border-strong md:block"
      />
      <a
        aria-label="Scroll to about"
        href="#about"
        className="scroll-cue absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}
