import { Reveal } from "./Reveal";
import { Button } from "./Button";

export function CommunitySection() {
  return (
    <section
      id="community"
      className="bg-grid relative overflow-hidden bg-nacos-dark py-20 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-nacos-blue/30 via-nacos-dark to-nacos-dark"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <Reveal>
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-white/50 uppercase">
            06 / Community
          </span>
        </Reveal>

        <Reveal delay={0.06}>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Your computing community is waiting.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="text-balance text-base leading-relaxed text-white/65 sm:text-lg">
            Join fellow Nile computing students to learn together, collaborate on projects, get
            support, and stay connected across every channel we run.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <Button href="#footer" className="mt-2">
            Join Community
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
