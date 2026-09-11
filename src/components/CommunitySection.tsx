import React from 'react';
import { PLATFORMS } from './community/data';

export default function CommunitySection() {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">JOIN THE NETWORK</h2>
        <p className="text-white/50 mt-4">Six platforms. One community. Pick your entry point.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
        {PLATFORMS.map((platform, i) => (
          <a key={i} href={platform.href} target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center bg-[#0f1419] rounded-3xl p-8 border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-2 group relative overflow-hidden">
            <div className="relative z-10 text-white/50 group-hover:text-blue-400 transition-colors scale-150 mb-6">
              {platform.icon}
            </div>
            <span className="relative z-10 text-xs font-mono tracking-widest text-white/50 group-hover:text-white transition-colors uppercase">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}