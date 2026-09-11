"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PhotoWall({ photoFiles = [] }: { photoFiles: string[] }) {
  const displayPhotos = photoFiles.slice(0, 24);

  return (
    <section className="w-full pt-24 pb-0 relative z-10 bg-slate-50 dark:bg-nacos-dark transition-colors duration-300">
      
      <div className="container mx-auto px-4 mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
        >
          Community <span className="text-nacos-accent">Moments</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto mt-4"
        >
          Real people, real code, real impact.
        </motion.p>
      </div>

      <div className="relative w-full">
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayPhotos.map((filename, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden bg-slate-200 dark:bg-slate-800 transform-gpu"
            >
              <Image
                src={`/Nacosphotos/${filename}`}
                alt={`Community Moment ${index + 1}`}
                fill
                quality={50}
                sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                className="object-cover object-top group-hover:scale-110 transition-transform duration-500 will-change-transform"
                loading={index < 6 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-nacos-accent/20 transition-colors duration-300 pointer-events-none mix-blend-overlay"></div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center w-48 h-48 md:w-64 md:h-64 rounded-full bg-white dark:bg-nacos-dark border-4 border-slate-100 dark:border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] pointer-events-auto"
          >
            <Image 
              src="/logo.svg" 
              alt="NACOS Nile Logo" 
              width={80} 
              height={80} 
              className="w-20 h-20 md:w-28 md:h-28 drop-shadow-xl mb-2" 
              priority
            />
            <span className="font-extrabold text-lg md:text-xl tracking-widest text-slate-900 dark:text-white uppercase">
              NACOS <span className="text-nacos-accent">NILE</span>
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}