import { Badge } from "./Badge";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { DisciplinesMarquee } from "./DisciplinesMarquee";
import { Reveal } from "./Reveal";
import { DISCIPLINES, EXCOS, PROGRAMS } from "@/lib/data";

const STATS = [
  { value: DISCIPLINES.length, label: "Computing disciplines" },
  { value: PROGRAMS.length, label: "Core programs" },
  { value: EXCOS.length, label: "Executive Council members" },
  { value: 1, label: "Community, every discipline" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="bg-grid relative overflow-hidden bg-nacos-dark pt-36 pb-24 sm:pt-48 sm:pb-32 lg:pt-56 lg:pb-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-nacos-blue/25 via-nacos-dark to-nacos-dark"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-7 px-4 text-center sm:px-6">
        <Reveal>
          <Badge className="border-nacos-accent-light/50 bg-nacos-accent/25 text-white">
            <BrandMark size="xs" tone="dark" nileVariant="icon" decorative />
            Nigeria Association of Computing Students • Nile University Chapter
          </Badge>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Where Nile&apos;s Computing Community Builds the Future.
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
            The official community for Nile University&apos;s computing students
            — a place to learn beyond the curriculum, connect across
            disciplines, build real projects, and grow into the careers
            you&apos;re studying for.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="flex flex-row flex-wrap justify-center gap-3 pt-2">
            <Button href="#community" className="px-5 sm:px-6">
              Join Community
            </Button>
            <Button href="#programs" variant="ghost" className="px-5 sm:px-6">
              Explore Programs
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="w-full">
          <DisciplinesMarquee items={DISCIPLINES.map((discipline) => discipline.name)} />
        </Reveal>

        <Reveal delay={0.36} className="w-full">
          <div className="mt-4 grid w-full grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-white/50 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
