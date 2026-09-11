import { programs } from "@/lib/site-data";

export function Programs() {
  return (
    <section id="programs" data-reveal className="reveal-section px-6 py-28 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-12 lg:flex-row lg:items-end">
          <h2 className="text-5xl font-light uppercase leading-[.9] tracking-[-0.04em] md:text-7xl">
            Everything you
            <br />
            <strong className="font-bold">need to grow</strong>
          </h2>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            NACOS Nile provides an active ecosystem
            <br />
            for student development
          </p>
        </div>
        <div>
          {programs.map(({ num, title, tags }) => (
            <article
              key={num}
              data-cursor="surface"
              className="program-row group relative grid min-h-0 items-center gap-3 border-b border-border py-7 md:min-h-40 md:grid-cols-[80px_1fr_auto] md:gap-6 md:py-8"
            >
              <span className="font-mono text-xs text-muted-foreground">{num}</span>
              <h3 className="text-3xl font-light tracking-[-0.04em] md:text-5xl">{title}</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-primary/50 px-2 py-1 font-mono text-[10px] text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
