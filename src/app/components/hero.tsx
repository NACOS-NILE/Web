import React from 'react';

export default function Hero() {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  const isInSession =
    (month >= 9 && month <= 11) ||
    (month >= 0 && month <= 6) ||
    (month === 8 && day >= 15);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-4">
      {/* Container with Royal Blue Gradient & Subtle Grid Texture */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#274193] via-[#1d316e] to-[#0d1733] text-white px-6 py-20 md:py-28 text-center shadow-2xl border border-blue-900/40">
        
        {/* Background Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" 
          aria-hidden="true" 
        />

        {/* Ambient Bottom Glow Effect */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t from-blue-500/20 to-transparent blur-2xl pointer-events-none" 
          aria-hidden="true" 
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          
          {/* Top Pill / Event Badge */}
          <div className="inline-block">
            <a
              href="#community"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 text-blue-100 text-xs md:text-sm px-4 py-1.5 rounded-full transition-all duration-200"
            >
              <span>Nile NACOS</span>
              <span className="text-blue-300">•</span>
              <span className="font-medium">The NACOS Nile University of Nigeria Chapter</span>
              <span className="text-blue-300">•</span>
              <span className="underline font-semibold text-white">
                {isInSession ? 'In Session' : 'On Vacation'}
              </span>
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
            NACOS | The Nile University Chapter <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-300">
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed">
            One platform for your apps, agents, and workforce. <br className="hidden sm:inline" />
            Build, secure, and scale without managing infrastructure.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <a
              href="#get-started"
              className="inline-block bg-white hover:bg-gray-100 text-[#0d1733] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
            >
              Be a part of the Community
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}