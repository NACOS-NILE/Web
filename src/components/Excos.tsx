import { ExcoCard } from "@/components/ExcoCard";
import { excos } from "@/lib/site-data";

export function Excos() {
  return (
    <section
      id="excos"
      data-reveal
      className="reveal-section border-b border-border px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-12 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-7 text-[11px] text-primary">LEADERSHIP</p>
            <h2 className="text-5xl font-light uppercase leading-[.9] tracking-[-0.04em] md:text-7xl">
              Meet the
              <br />
              <strong className="font-bold">Executive Council</strong>
            </h2>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            The students leading NACOS Nile
            <br />
            through the current session
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {excos.map((exco) => (
            <ExcoCard key={exco.name} {...exco} />
          ))}
        </div>
      </div>
    </section>
  );
}
