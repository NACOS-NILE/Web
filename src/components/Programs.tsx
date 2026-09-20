import { ArrowRightIcon } from "@/components/Icons";
import ParallaxLayer from "@/components/ParallaxLayer";
import ProgramMatrix from "@/components/ProgramMatrix";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Programs() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <ParallaxLayer
          speed={0.3}
          className="absolute top-1/4 -left-24 size-96 rounded-full bg-brand-600/25 blur-3xl"
        />
        <ParallaxLayer
          speed={0.16}
          className="absolute -right-24 bottom-0 size-96 rounded-full bg-accent/15 blur-3xl"
        />
        {/* Two more washes in the matrix's other accents, so the glow behind
            it carries the colours of the quadrants in front of it. */}
        <ParallaxLayer
          speed={0.22}
          className="absolute -top-10 right-1/4 size-80 rounded-full bg-violet-500/10 blur-3xl"
        />
        <ParallaxLayer
          speed={0.12}
          className="absolute bottom-1/4 left-1/3 size-80 rounded-full bg-cyan-500/10 blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="events-heading"
          tone="dark"
          eyebrow="Initiatives & events"
          title="What we actually run, every session"
          description="Programmes designed around one question: what would have helped us most in our first year?"
        />

        <Reveal className="mt-14 lg:mt-16">
          <ProgramMatrix />
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-brand-600/30 to-accent/20 p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-xl font-bold text-white">Got an idea for an event?</h3>
              <p className="mt-1.5 text-sm text-brand-100/75">
                Members propose workshops, talks and competitions every semester — and we help you
                run them.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              Pitch it to the excos
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
