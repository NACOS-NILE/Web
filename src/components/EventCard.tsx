import { Briefcase, Code, PartyPopper, Trophy, Users2, type LucideIcon } from "lucide-react";
import type { EventCategory, SampleEvent } from "@/lib/data";
import { Reveal } from "./Reveal";

const CATEGORY_ICONS: Record<EventCategory, LucideIcon> = {
  Workshop: Code,
  Hackathon: Trophy,
  Social: PartyPopper,
  Academic: Users2,
  Career: Briefcase,
};

export function EventCard({ event, delay = 0 }: { event: SampleEvent; delay?: number }) {
  const Icon = CATEGORY_ICONS[event.category];

  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col rounded-2xl border border-nacos-dark/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-nacos-blue/30 hover:shadow-lg hover:shadow-nacos-blue/10 dark:border-white/10 dark:bg-white/3 dark:hover:border-nacos-accent/40 dark:hover:shadow-black/20">
        <div className="mb-4 flex items-center justify-between">
          <span className="flex items-center gap-1.5 rounded-full bg-nacos-blue/8 px-3 py-1 text-xs font-semibold text-nacos-blue dark:bg-nacos-accent/15 dark:text-nacos-accent-light">
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {event.category}
          </span>
          <span className="font-mono text-[11px] tracking-wide text-nacos-dark/40 uppercase dark:text-white/40">
            Date TBA
          </span>
        </div>
        <h3 className="mb-2 text-lg font-semibold text-nacos-dark dark:text-white">{event.title}</h3>
        <p className="text-sm leading-relaxed text-nacos-dark/60 dark:text-white/60">
          {event.description}
        </p>
      </article>
    </Reveal>
  );
}
