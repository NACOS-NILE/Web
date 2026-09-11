'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[85vh] min-h-[500px] sm:min-h-[600px] flex items-center bg-black overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 w-full h-full"
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
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F9F8F6] dark:to-black" />
      </motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-12 pt-20">
        <div className="max-w-4xl pointer-events-none">
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
            className="mt-6 sm:mt-8 text-lg sm:text-2xl text-gray-200 font-medium max-w-2xl"
          >
            The digital front door for the Nigeria Association of Computing Students at Nile University of Nigeria. Explore our community, events, and opportunities in tech.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
