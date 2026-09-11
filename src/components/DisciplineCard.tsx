import { BarChart3, Code2, Cpu, Layers3, Network, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Discipline } from "@/lib/data";
import { Reveal } from "./Reveal";

const ICONS: Record<Discipline["icon"], LucideIcon> = {
  code: Code2,
  layers: Layers3,
  shield: ShieldCheck,
  cpu: Cpu,
  network: Network,
  chart: BarChart3,
};

export function DisciplineCard({ discipline, delay = 0 }: { discipline: Discipline; delay?: number }) {
  const Icon = ICONS[discipline.icon];

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group relative h-full overflow-hidden rounded-2xl border border-nacos-dark/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nacos-blue/30 hover:shadow-lg hover:shadow-nacos-blue/10 dark:border-white/10 dark:bg-white/3 dark:hover:border-nacos-accent/40 dark:hover:shadow-black/20">
        <div
          aria-hidden="true"
          className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-nacos-blue/5 transition-transform duration-300 group-hover:scale-125 dark:bg-nacos-accent/10"
        />
        <span className="relative mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-nacos-blue text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="relative mb-2 text-lg font-semibold text-nacos-dark dark:text-white">
          {discipline.name}
        </h3>
        <p className="relative text-sm leading-relaxed text-nacos-dark/60 dark:text-white/60">
          {discipline.description}
        </p>
      </article>
    </Reveal>
  );
}
