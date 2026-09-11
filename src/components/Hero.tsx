export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#0d1733]">
      
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#274193]/30 blur-[140px]" />
      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:60px_60px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-8 lg:px-12">
        <div className="max-w-4xl">

          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300">
              NACOS Nile University Chapter
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Where
            <span className="block bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              technology
            </span>
            meets ambition.
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            NACOS Nile is a community of computing students building,
            learning, and creating the future together. Explore our
            disciplines, initiatives, leaders, and opportunities.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#community"
              className="rounded-xl bg-[#274193] px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:bg-blue-600"
            >
              Join the Community →
            </a>

            <a
              href="#about"
              className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Discover NACOS
            </a>
          </div>

          {/* Stats */}
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">6+</p>
              <p className="text-xs text-slate-400">Computing Disciplines</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">9</p>
              <p className="text-xs text-slate-400">Executive Council Members</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">∞</p>
              <p className="text-xs text-slate-400">Ideas to Build</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0d1733] to-transparent" />
    </section>
  );
}
