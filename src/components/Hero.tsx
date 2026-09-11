'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-[#F9F8F6] dark:bg-black pt-28 pb-10 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full aspect-[4/5] sm:aspect-[2/1] lg:aspect-[2.5/1] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-black flex flex-col justify-center px-8 sm:px-16 lg:px-24 group"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image 
              src="/faculty.png" 
              alt="Faculty of Computing"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s] ease-out"
              priority
            />
          </motion.div>
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-3xl mt-10 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold tracking-tight text-white leading-[1.05]"
            >
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 italic font-light">NACOS Nile</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-lg sm:text-2xl text-gray-300 font-medium max-w-2xl"
            >
              The digital front door for the Nigeria Association of Computing Students at Nile University of Nigeria. Explore our community, events, and opportunities in tech.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
