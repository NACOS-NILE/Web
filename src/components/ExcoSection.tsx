import { EXCOS } from "@/lib/data";
import { ExcoCard } from "./ExcoCard";
import { FeaturedExco } from "./FeaturedExco";
import { SectionHeader } from "./SectionHeader";

export function ExcoSection() {
  const president = EXCOS.find((e) => e.featured);
  const rest = EXCOS.filter((e) => !e.featured);

  return (
    <section id="excos" className="bg-nacos-blue/3 py-20 sm:py-28 dark:bg-white/3">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <SectionHeader
            index="05"
            label="Leadership"
            title="Meet the Executive Council."
            description="The team leading NACOS Nile's programs, events, and community."
          />
        </div>

        <div className="mb-8">{president ? <FeaturedExco exco={president} /> : null}</div>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {rest.map((exco, i) => (
            <ExcoCard key={exco.name} exco={exco} delay={(i % 3) * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
