import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative overflow-hidden bg-nacos-dark pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-nacos-blue/25 via-nacos-dark to-nacos-dark"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <Badge tone="dark">
              <Image
                src="/logo.svg"
                alt=""
                width={80}
                height={38}
                aria-hidden="true"
                className="h-3.5 w-auto"
              />
              NACOS Nile University of Nigeria
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Where Nile&apos;s computing community builds the future.
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              A community for Nile University&apos;s computing students to learn, connect, build,
              and grow together — across Computer Science, Software Engineering, Cyber Security,
              IT, Information Systems, and Data Science.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <Button href="#community">Join Community</Button>
              <Button href="#programs" variant="ghost">
                Explore Programs
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.15}>
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}
