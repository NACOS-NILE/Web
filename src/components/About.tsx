import { Code2, Map, Rocket, Users } from "lucide-react";
import { benefits, disciplines } from "@/lib/site-data";

const icons = { Map, Code2, Users, Rocket } as const;

export function About() {
  return (
    <>
      <section
        id="about"
        data-reveal
        className="reveal-section border-b border-border px-6 py-28 lg:px-10 lg:py-40"
      >
        <div className="mx-auto max-w-[1360px]">
          <p className="eyebrow mb-10 text-[11px] text-primary">THE CHAPTER</p>
          <div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <h2 className="max-w-2xl text-5xl font-light uppercase leading-[.9] tracking-[-0.04em] md:text-7xl">
              Your community
              <br />
              <strong className="font-bold">for computing</strong>
            </h2>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
              NACOS Nile bridges the gap between academic theory and industry reality. Established
              in 2023, our chapter brings students together through practical learning, social
              engagement and meaningful leadership across Computer Science, Software Engineering,
              Cyber Security, Information Technology, Information Systems and Data Science.
            </p>
          </div>

          <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon, title, body }, i) => {
              const Icon = icons[icon];
              return (
                <article
                  key={title}
                  data-cursor="surface"
                  className="feature-card tilt-depth min-h-64 rounded-2xl border border-border bg-card p-7"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  <Icon className="mt-10 h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-8 text-lg font-semibold">{title}</h3>
                  <p className="mt-3 text-xs leading-6 text-muted-foreground">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-border py-8">
        <div className="marquee-track flex w-max items-center gap-14 whitespace-nowrap">
          {[...disciplines, ...disciplines].map((x, i) => (
            <span
              key={`${x}-${i}`}
              className="discipline-word text-3xl font-light tracking-[-0.04em] text-foreground/20 even:text-primary/80 md:text-6xl"
            >
              {x}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
