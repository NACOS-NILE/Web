'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Initiatives() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="initiatives" className="py-16 sm:py-32 bg-[#F9F8F6] dark:bg-black">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-32 items-end mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-10 h-[1px] bg-black dark:bg-white"></span>
              <span className="text-xs font-bold tracking-wider text-black dark:text-white uppercase">Initiatives</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-[5rem] font-serif font-bold text-black dark:text-white leading-[1.1] sm:leading-[1] tracking-tight">
              Key Initiatives & Events
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="pb-0 sm:pb-4"
          >
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 font-light max-w-md mb-8 sm:mb-10 leading-relaxed">
              Discover the programs we run to supercharge your tech journey. Connect, build, and innovate.
            </p>
            <button className="group relative overflow-hidden rounded-full border border-black dark:border-white px-8 py-3 text-sm font-semibold text-black dark:text-white transition-all hover:border-transparent">
              <span className="absolute inset-0 bg-black dark:bg-white translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"></span>
              <span className="relative flex items-center gap-2 group-hover:text-white dark:group-hover:text-black transition-colors duration-500">
                Explore events <span className="text-lg leading-none transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              </span>
            </button>
          </motion.div>
        </div>

        <div ref={containerRef} className="relative w-full aspect-[16/9] lg:aspect-[2.5/1] rounded-[2rem] sm:rounded-[3rem] overflow-hidden bg-gray-200 group">
          <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
            <Image 
              src="/initiatives-group.jpg" 
              alt="NACOS Experiences"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
          

        </div>

      </div>
    </section>
  );
}
