import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-nacos-900"
      aria-label="Hero"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-nacos-600/20 rounded-full blur-[120px]" aria-hidden="true" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-nacos-500/15 rounded-full blur-[100px]" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-nacos-700/10 rounded-full blur-[150px]" aria-hidden="true" />

      {/* Decorative lines */}
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-nacos-500/10 to-transparent" aria-hidden="true" />

      <div className="container-nacos relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="animate-fade-in">
            <p className="eyebrow text-nacos-400 mb-6">
              Nile University of Nigeria
            </p>
          </div>

          {/* Main headline */}
          <h1 className="animate-slide-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tighter">
            WHERE
            <br />
            NILE{"'"}S TECH
            <br />
            <span className="text-nacos-400">MINDS</span> UNITE.
          </h1>

          {/* Subheadline */}
          <p
            className="animate-slide-up mt-8 max-w-xl text-lg sm:text-xl text-white/60 leading-relaxed text-balance"
            style={{ animationDelay: "0.2s" }}
          >
            NACOS Nile is the computing student community at Nile University
            — where future technologists learn, build, and grow together.
          </p>

          {/* CTAs */}
          <div
            className="animate-slide-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#community" className="btn-primary group">
              Join Community
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#about" className="btn-ghost">
              Explore NACOS
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}