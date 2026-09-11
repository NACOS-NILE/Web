"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function QuoteBanner() {
  return (
    <section className="relative py-14 sm:py-20 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative p-6 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center shadow-xl overflow-hidden">
            {/* Ambient Accent Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-nacos-accent/10 rounded-full blur-3xl pointer-events-none" />

            {/* Subtle Quote Mark */}
            <div className="text-4xl sm:text-5xl font-serif text-nacos-accent-light/40 leading-none select-none mb-3">
              “
            </div>

            {/* Moderate & Elegant Quote Text */}
            <blockquote className="text-base sm:text-xl text-gray-200 font-normal leading-relaxed max-w-2xl mb-6">
              Every line of code, every project, and every build session is a step toward who we become in technology.
            </blockquote>

            {/* Clean Author Line */}
            <div className="pt-4 border-t border-white/10 w-full max-w-xs flex justify-center">
              <span className="text-xs text-gray-400 font-medium">
                NACOS Nile Student Community
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
