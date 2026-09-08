"use client";

import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function MembershipCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="join" className="relative py-14 sm:py-20 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden scroll-mt-20">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-30" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="relative p-6 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 text-center flex flex-col items-center shadow-xl overflow-hidden">
            {/* Headline */}
            <h2 className="text-xl sm:text-3xl font-semibold tracking-tight text-white mb-2">
              Join NACOS Nile
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed font-normal mb-6">
              Get upcoming workshop links, event announcements, and tech resources sent to your inbox.
            </p>

            {/* Form Input Container */}
            {submitted ? (
              <div className="bg-nacos-accent/15 border border-nacos-accent/40 text-nacos-accent-light px-5 py-3 rounded-xl text-sm font-semibold max-w-md w-full animate-in fade-in duration-300">
                ✓ You're on the list! We'll keep you posted.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-md"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your student email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-nacos-accent transition-all text-sm font-normal"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-nacos-accent hover:bg-nacos-accent-light text-nacos-dark font-semibold text-sm shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>Subscribe</span>
                  <span className="text-base font-bold">↗</span>
                </button>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
