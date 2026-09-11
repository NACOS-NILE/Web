import { EXCOS } from "@/lib/data";
import ExcoCard from "@/components/ExcoCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Excos() {
  return (
    <section
      id="excos"
      aria-labelledby="excos-heading"
      className="border-y border-brand-900/10 bg-brand-50/50 py-20 sm:py-28 dark:border-white/10 dark:bg-brand-900/30"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="excos-heading"
          eyebrow="Executive council"
          title="The people serving this session"
          description="Nine executives elected by computing students, for computing students. Find them on campus — they would rather hear from you than not."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXCOS.map((exco, i) => (
            <Reveal key={exco.name} delay={(i % 3) * 100} as="li">
              <ExcoCard exco={exco} priority={i < 3} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
