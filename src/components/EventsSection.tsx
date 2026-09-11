import React from 'react';
import { EVENTS } from './events/data';

export default function EventsSection() {
  return (
    <section className="py-24 px-6 w-full max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">DISCOVER EVENTS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {EVENTS.map((event, i) => (
          <div key={i} className="bg-[#0f1419] rounded-3xl p-6 border border-white/5 hover:border-blue-500/50 transition-colors flex flex-col h-64 justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative z-20">
              <span className="text-blue-400 text-[10px] tracking-widest uppercase font-mono mb-2 block">{event.category}</span>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{event.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}