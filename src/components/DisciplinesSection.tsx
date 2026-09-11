import { DISCIPLINES } from "@/lib/data";
import { DisciplineCard } from "./DisciplineCard";
import { SectionHeader } from "./SectionHeader";

export function DisciplinesSection() {
  return (
    <section id="disciplines" className="bg-nacos-blue/3 py-20 sm:py-28 dark:bg-white/3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <SectionHeader
            index="02"
            label="Disciplines"
            title="Six disciplines. One computing community."
            description="Whichever path you're on, NACOS Nile is built to represent and support you."
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISCIPLINES.map((discipline, i) => (
            <DisciplineCard key={discipline.name} discipline={discipline} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
