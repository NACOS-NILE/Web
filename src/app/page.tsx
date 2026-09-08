import { Container } from "@/components/layout/Container";
import { Grid, Col } from "@/components/layout/Grid";
import { Reveal } from "@/components/animations/Reveal";
import { SplitText } from "@/components/animations/SplitText";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedLink } from "@/components/ui/AnimatedLink";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-between py-12 md:py-20">
      {/* Top Meta Bar */}
      <Container size="default">
        <header className="flex items-center justify-between border-b border-neutral-900/10 pb-6">
          <SectionLabel number="00" label="Foundation / System Preview" showLine />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
            NACOS Nile Chapter
          </span>
        </header>
      </Container>

      {/* Main Editorial Canvas */}
      <Container size="default" className="my-auto py-16 md:py-24">
        <Grid cols={12} gap="lg">
          {/* Left Column: Asymmetrical index marker */}
          <Col span={12} spanMd={4} className="flex flex-col justify-between">
            <div>
              <p className="text-meta mb-4">Architecture</p>
              <p className="text-sm leading-relaxed text-neutral-600 max-w-xs">
                Minimal monochrome editorial foundation. High-impact display typography, restrained UI, and physics-driven motion.
              </p>
            </div>

            <div className="mt-12 md:mt-0 pt-6 border-t border-neutral-900/10 flex flex-col gap-3">
              <span className="text-meta">Interactive Primitives</span>
              <div className="flex flex-wrap gap-4 items-center">
                <AnimatedLink href="#preview" arrow cursorLabel="EXPLORE">
                  Interactive Link
                </AnimatedLink>
                <span className="text-neutral-300">/</span>
                <AnimatedLink href="https://github.com" external arrow cursorLabel="VIEW">
                  External
                </AnimatedLink>
              </div>
            </div>
          </Col>

          {/* Right Column: Editorial Typography Test */}
          <Col span={12} spanMd={8} className="flex flex-col justify-center">
            <Reveal direction="up" delay={0.1}>
              <div className="text-meta mb-3">Core Identity</div>
            </Reveal>

            <SplitText
              text="COMPUTING AT NILE"
              as="h1"
              delay={0.15}
              className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] uppercase text-neutral-900 mb-8"
            />

            <Reveal direction="up" delay={0.35} distance={20}>
              <p className="text-base sm:text-lg leading-relaxed text-neutral-600 max-w-xl mb-10">
                Simple when static. Impressive when in motion. The global design system, typography hierarchy, smooth-scroll coordination, and cursor tracking are operational.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button variant="solid" magnetic cursorLabel="OPEN">
                  Explore System
                </Button>
                <Button variant="outline" cursorLabel="VIEW">
                  Documentation
                </Button>
              </div>
            </Reveal>
          </Col>
        </Grid>
      </Container>

      {/* Bottom Meta Status */}
      <Container size="default">
        <footer className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-neutral-900/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-neutral-400 gap-4">
          <span>Step 01 Complete — Global Foundation Verified</span>
          <span className="font-mono">Next.js 16 • React 19 • Tailwind v4</span>
        </footer>
      </Container>
    </main>
  );
}
