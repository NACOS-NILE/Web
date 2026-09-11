export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Grid Pattern Accent */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-medium mb-6 shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping" />
              <span>Nile University of Nigeria • Chapter</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Empowering the Next Generation of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Tech Leaders & Innovators
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Welcome to the digital home of the <strong>Nigeria Association of Computing Students</strong> at Nile University. We build, innovate, compete, and inspire across six cutting-edge computing disciplines.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#community"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#274193] via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-900/50 hover:shadow-blue-600/40 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span>Join Our Community</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#disciplines"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/70 border border-slate-700/60 hover:border-blue-400/50 hover:bg-slate-800/80 transition-all duration-200 text-center"
              >
                Explore Disciplines
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 sm:gap-8 w-full">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">6</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Computing Degrees</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">1,200+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Students & Alumni</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">100%</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Innovation Driven</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Tech Terminal Visual */}
          <div className="lg:col-span-5 relative w-full max-w-lg mx-auto lg:max-w-none">
            {/* Ambient Background Box Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-cyan-500/30 rounded-2xl blur-xl opacity-75" />

            <div className="relative rounded-2xl glass-card overflow-hidden shadow-2xl border border-blue-500/20">
              {/* Terminal Header */}
              <div className="bg-[#0b132b] px-4 py-3 border-b border-blue-900/40 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  nacos-nile@terminal:~
                </span>
                <span className="text-[11px] text-blue-400 font-mono">v2026.1</span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm space-y-3.5 bg-[#060b18]/80 backdrop-blur-md">
                <div className="text-slate-400">
                  <span className="text-emerald-400 font-semibold">$</span> nacos status --chapter
                </div>
                <div className="text-blue-300 pl-4 border-l-2 border-blue-500/30 space-y-1">
                  <p>📍 Location: Nile University of Nigeria, Abuja</p>
                  <p>🏛️ Faculty: Computing & Applied Sciences</p>
                  <p>🚀 Active Programs: Hackathons, Bootcamps, Mentorship</p>
                </div>

                <div className="text-slate-400 pt-2">
                  <span className="text-emerald-400 font-semibold">$</span> nacos list-disciplines
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-slate-300 pl-4 border-l-2 border-emerald-500/30 text-[11px] sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Computer Science
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Software Eng.
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Cyber Security
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Data Science
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Info Technology
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-blue-400">▹</span> Info Systems
                  </span>
                </div>

                <div className="pt-2 text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">$</span>
                  <span className="text-slate-200">join community --interactive</span>
                  <span className="w-2 h-4 bg-blue-400 inline-block animate-pulse" />
                </div>

                {/* Nile Badge in Terminal */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-slate-400">Build • Code • Lead</span>
                  <span className="text-blue-400 font-semibold">NACOS NILE ⚡</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
