import { Info } from "lucide-react";
import { SAMPLE_EVENTS } from "@/lib/data";
import { EventCard } from "./EventCard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function EventsSection() {
  return (
    <section id="events" className="bg-white py-20 sm:py-28 dark:bg-nacos-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8">
          <SectionHeader
            index="04"
            label="Events"
            title="A community that's always building something."
            description="A sense of the kind of events NACOS Nile runs across the year."
          />
        </div>

        <Reveal>
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-nacos-blue/15 bg-nacos-blue/5 px-4 py-3.5 text-sm text-nacos-dark/70 dark:border-nacos-accent/20 dark:bg-white/5 dark:text-white/70">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-nacos-blue" aria-hidden="true" />
            <p>
              The events below are illustrative sample content showing our typical format. Exact
              dates, venues, and registration links are announced through NACOS Nile&apos;s
              community channels.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLE_EVENTS.map((event, i) => (
            <EventCard key={event.title} event={event} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
