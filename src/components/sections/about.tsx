export function About() {
  return (
    <section id="about" className="relative z-[2] py-[clamp(3.5rem,8vw,6rem)]">
      <div className="mx-auto w-[min(100%-2.5rem,1240px)]">
        <div className="grid grid-cols-1 gap-[clamp(2rem,4vw,3.5rem)] lg:grid-cols-[1fr_1fr]">
          <div>
            <span className="font-mono mb-[1rem] inline-flex items-center gap-[.6rem] text-[.7rem] uppercase tracking-[.18em] text-signal before:h-px before:w-[26px] before:bg-signal">
              01 / About
            </span>
            <h2 className="max-w-[18ch] text-[clamp(1.9rem,3.6vw,2.8rem)] font-bold leading-[1.05] tracking-[-.03em]">
              One faculty, six disciplines, one association.
            </h2>
          </div>
          <div className="flex flex-col gap-[1.6rem] text-[.98rem] leading-[1.7] text-muted">
            <div>
              <h3 className="font-mono mb-[.4rem] text-[.68rem] uppercase tracking-[.14em] text-signal">
                Mission
              </h3>
              <p>[NACOS Nile chapter mission statement]</p>
            </div>
            <div>
              <h3 className="font-mono mb-[.4rem] text-[.68rem] uppercase tracking-[.14em] text-signal">
                Vision
              </h3>
              <p>[NACOS Nile chapter vision statement]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
