import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background glow element */}
      <div 
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[120px]" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-medium mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Nigeria Association of Computing Students — Nile Chapter
        </div>

        {/* Primary Heading (Critical LCP element) */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Empowering the Next Generation of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-teal-300">
            Tech Innovators
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The central hub for computing students at Nile University of Nigeria.
          Connecting aspiring software engineers, cybersecurity specialists, data scientists, and tech visionaries.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#disciplines"
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25"
          >
            Explore Disciplines &rarr;
          </Link>
          <Link
            href="#events"
            className="w-full sm:w-auto px-7 py-3 rounded-xl border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-300 font-medium transition-all duration-200"
          >
            Upcoming Events
          </Link>
        </div>
      </div>
    </section>
  );
}