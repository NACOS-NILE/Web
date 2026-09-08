import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden bg-nacos-dark px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Main Headline */}
        <ScrollReveal>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-normal text-white max-w-4xl leading-tight mb-6 font-display">
            The Official Computing Student Chapter at{" "}
            <span className="text-nacos-accent-light inline-block whitespace-nowrap">
              {["N", "i", "l", "e"].map((char, index) => (
                <span
                  key={`${char}-${index}`}
                  className="inline-block"
                  style={{
                    animation: `nileLetterEntry 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${
                      300 + index * 45
                    }ms forwards`,
                    opacity: 0,
                  }}
                >
                  <span
                    className="inline-block"
                    style={{
                      animation: `nileLetterIdle 3.2s ease-in-out ${
                        950 + index * 150
                      }ms infinite`,
                    }}
                  >
                    {char}
                  </span>
                </span>
              ))}
            </span>{" "}
            University of Nigeria
          </h1>
        </ScrollReveal>

        {/* Embedded Style for Nile Split-Text Wave Animations */}
        <style>{`
          @keyframes nileLetterEntry {
            0% {
              opacity: 0;
              transform: translateY(22px) scale(0.85) rotate(-4deg);
            }
            65% {
              opacity: 1;
              transform: translateY(-5px) scale(1.06) rotate(1.5deg);
            }
            85% {
              transform: translateY(1.5px) scale(0.98);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1) rotate(0deg);
            }
          }

          @keyframes nileLetterIdle {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-3.5px);
            }
          }
        `}</style>

        {/* Subheadline */}
        <ScrollReveal delay={100}>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed mb-10 font-normal">
            Uniting undergraduates across Computer Science, Software Engineering, Cybersecurity, Information Technology, Information Systems, and Data Science under the Faculty of Natural &amp; Applied Sciences.
          </p>
        </ScrollReveal>

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
        <div className="mt-16 pt-8 border-t border-white/10 w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-nacos-accent-light">FNAS</span>
            <span className="text-xs text-gray-400 mt-1">Faculty</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-white">COMPUTER SCIENCE</span>
            <span className="text-xs text-gray-400 mt-1">Department</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-nacos-accent-light">6 MAJORS</span>
            <span className="text-xs text-gray-400 mt-1">Undergraduate</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm font-semibold text-white">ABUJA, FCT</span>
            <span className="text-xs text-gray-400 mt-1">Campus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
