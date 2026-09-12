"use client";

import { motion } from 'framer-motion';
import DataRibbon from './DataRibbon';

export default function Hero() {
  return (
    <>
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden transition-colors duration-300">
        
        <DataRibbon />

        <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center mt-10">
        <motion.div 
            className="flex flex-col items-center justify-center w-full mb-12"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[100px] md:text-[200px] font-extrabold tracking-tight text-transparent [-webkit-text-stroke:2px_#2563eb] dark:[-webkit-text-stroke:2px_#3b82f6] leading-none z-10 relative pointer-events-none">
              NACOS
            </h1>
            <h1 className="text-[80px] md:text-[160px] font-extrabold tracking-tight text-slate-900 dark:text-white leading-none z-0 relative transition-colors duration-300 -mt-12 md:-mt-28">
              NILE
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg md:text-xl text-slate-800 dark:text-slate-300 max-w-2xl mb-10 z-20 leading-relaxed font-medium transition-colors duration-300 backdrop-blur-md bg-white/40 dark:bg-black/40 p-5 rounded-2xl border border-white/60 dark:border-white/10 shadow-xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The official community for tech builders and engineers at Nile University. Push code, drop ideas, and shape the culture.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 z-20"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button 
              onClick={() => document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-lg font-medium transition-colors duration-500 flex items-center justify-center gap-2 shadow-lg"
            >
              Join the Community <span>&rarr;</span>
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}