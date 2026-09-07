import {
  BookOpen,
  Terminal,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import { PROGRAMS, type Program } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const ICONS: Record<Program["icon"], LucideIcon> = {
  terminal: Terminal,
  trophy: Trophy,
  users: Users,
  book: BookOpen,
};

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="bg-grid relative overflow-hidden bg-nacos-dark py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-nacos-dark via-nacos-dark to-nacos-blue/15"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-14">
          <SectionHeader
            index="03"
            label="Programs"
            title="What NACOS Nile actually does."
            description="Structured, hands-on activities built to grow real technical and professional skill."
            tone="dark"
          />
        </div>

        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {PROGRAMS.map((program, i) => {
            const Icon = ICONS[program.icon];

            return (
              <Reveal key={program.title} delay={i * 0.06}>
                <div
                  className={`flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:gap-10 sm:py-10 `}
                >
                  <span className="font-mono text-4xl font-semibold text-white/15 sm:text-5xl">
                    {program.index}
                  </span>

                  <div className="flex-1">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-nacos-accent/15 text-nacos-accent-light">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        {program.title}
                      </h3>
                    </div>
                    <p className="max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
                      {program.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
