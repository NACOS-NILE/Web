import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-nacos-dark px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Flat Background with Structured Dot Pattern & Organic Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Monospace Terminal Badge Motif - Muted Saturation */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nacos-blue/15 border border-nacos-accent/25 mb-8">
          <span className="w-2 h-2 rounded-full bg-nacos-accent animate-ping" />
          <code className="font-mono text-xs font-medium text-nacos-accent-light">
            // nacos.nile.edu.ng --chapter=nile_university
          </code>
          <span className="inline-block w-1.5 h-3.5 bg-nacos-accent animate-blink -ml-0.5 rounded-sm" />
        </div>

        {/* Main Headline - Single Uniform Color, Reduced Size, max font-bold */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-normal text-white max-w-4xl leading-tight mb-6 font-display">
          The Official Computing Student Chapter at Nile University of Nigeria
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mb-10 font-normal">
          Uniting undergraduates across Computer Science, Software Engineering, Cybersecurity, Information Technology, Information Systems, and Data Science under the Faculty of Natural &amp; Applied Sciences.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#community"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-nacos-accent hover:bg-nacos-accent-light text-white font-semibold text-base px-8 py-3.5 rounded-xl shadow-md transition-all duration-200 active:scale-95"
          >
            Join Student Community
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center border border-white/20 hover:border-nacos-accent-light text-gray-200 hover:text-white bg-white/5 hover:bg-white/10 font-semibold text-base px-8 py-3.5 rounded-xl transition-all duration-200 active:scale-95"
          >
            Explore Department
          </a>
        </div>

        {/* Departmental Info Banner */}
        {/* TODO: replace with real NACOS Nile numbers once verified */}
        <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-mono">
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-nacos-accent-light">FNAS</span>
            <span className="text-xs text-gray-400 mt-1">Faculty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-white">COMPUTER SCIENCE</span>
            <span className="text-xs text-gray-400 mt-1">Department</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-nacos-accent-light">6 MAJORS</span>
            <span className="text-xs text-gray-400 mt-1">Undergraduate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-bold text-white">ABUJA, FCT</span>
            <span className="text-xs text-gray-400 mt-1">Campus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
