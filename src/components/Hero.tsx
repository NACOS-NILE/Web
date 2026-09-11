import Image from "next/image";

export default function Hero() {

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#060b18]">
      {/* Subtle University Blue Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none -z-10" />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              The Student Computing Community of{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Nile University
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 font-normal">
              Welcome to the official chapter of the <strong>Nigeria Association of Computing Students</strong> at Nile University. We bring together students across six computing departments to learn, build real-world projects, and excel together.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="#community"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-[#274193] via-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-blue-900/40 hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span>Join Our Community</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </a>
              <a
                href="#disciplines"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/70 border border-slate-700/60 hover:border-blue-400/50 hover:bg-slate-800/80 hover:-translate-y-1 transition-all duration-200 text-center"
              >
                Explore Disciplines
              </a>
            </div>

            {/* Highlights Bar with authentic university metrics */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 sm:gap-8 w-full">
              <div className="p-2 rounded-xl hover:bg-blue-900/10 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">6</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Departments</div>
              </div>
              <div className="p-2 rounded-xl hover:bg-blue-900/10 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">1,200+</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Undergraduates &amp; Alumni</div>
              </div>
              <div className="p-2 rounded-xl hover:bg-blue-900/10 transition-colors duration-200">
                <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400">Abuja</div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium">Nile University Campus</div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent NACOS Nile Emblem & University Chapter Brand */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-blue-600/15 rounded-full blur-3xl -z-10 pointer-events-none" />

            <div className="relative flex flex-col items-center justify-center p-8 sm:p-12 w-full max-w-md">
              {/* Decorative Concentric Rings for Institutional Prestige */}
              <div className="absolute inset-0 rounded-full border border-blue-500/10 pointer-events-none" />
              <div className="absolute inset-6 rounded-full border border-blue-500/15 pointer-events-none" />

              {/* Central Logo Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 transition-transform duration-500 hover:scale-105 filter drop-shadow-[0_20px_35px_rgba(39,65,147,0.35)]">
                <Image
                  src="/logo.svg"
                  alt="Nigeria Association of Computing Students - Nile University"
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Sub-label under logo */}
              <div className="mt-6 flex flex-col items-center text-center">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-400 font-mono">
                  Faculty of Computing
                </span>
                <span className="text-sm font-semibold text-slate-300 mt-1">
                  Nile University of Nigeria Chapter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

