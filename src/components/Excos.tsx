"use client";

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const executives = [
  {
    name: "Zikora Fortune Nwafor",
    role: "President",
    bio: "Passionate about building active student communities.",
    image: "/excos-pics/president.jpg"
  },
  {
    name: "Abdullah Ali Ahmad",
    role: "Vice President",
    bio: "Advocating for student welfare and academic excellence.",
    image: "/excos-pics/vp.jpg"
  },
  {
    name: "Sheila Jato",
    role: "Secretary General",
    bio: "Keeping the engines running smoothly.",
    image: "/excos-pics/sg.jpg"
  },
  {
    name: "Amira Ibrahim",
    role: "Financial Secretary",
    bio: "Making the important financial decisions.",
    image: "/excos-pics/fc.jpg"
  },
  {
    name: "Elvis Francis",
    role: "Public Relations Officer",
    bio: "Applying creativity to communication.",
    image: "/excos-pics/pro.jpg"
  },
  {
    name: "Ivoke Kamsi",
    role: "Director of Training & Development (DTD)",
    bio: "Driving technical growth and leading coding workshops for Nile computing students.",
    image: "/excos-pics/dtd.jpg"
  },
  {
    name: "Zubaida Abdulazeez",
    role: "Provost",
    bio: "Managing the day-to-day operations of NACOS Nile.",
    image: "/excos-pics/provost.jpg"
  },
  {
    name: "Saidat Ahmed",
    role: "Director of Socials",
    bio: "Prioritizing social activities and events.",
    image: "/excos-pics/socials.jpg"
  },
  {
    name: "Danielle Ekunwe",
    role: "Director of Welfare",
    bio: "Your well-being is my priority.",
    image: "/excos-pics/welfare.jpg"
  }
];

export default function Excos() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextExco = () => {
    setActiveIndex((prev) => (prev === executives.length - 1 ? 0 : prev + 1));
  };

  const prevExco = () => {
    setActiveIndex((prev) => (prev === 0 ? executives.length - 1 : prev - 1));
  };

  return (
    <section id="executives" className="w-full py-24 relative z-10 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nacos-accent to-nacos-accent-light">Executives</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            The dedicated team leading the NACOS Nile University Chapter, committed to fostering growth, innovation, and community.
          </p>
        </div>

        <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
          
          <div className="absolute inset-0 flex items-center justify-between z-20 px-4 md:px-10 pointer-events-none">
            <button onClick={prevExco} className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all">
              <ChevronLeft />
            </button>
            <button onClick={nextExco} className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 dark:bg-black/50 backdrop-blur-md border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-800 dark:text-white hover:bg-white/30 dark:hover:bg-white/20 transition-all">
              <ChevronRight />
            </button>
          </div>

          <div className="relative w-full h-full flex items-center justify-center [perspective:1000px]">
            <AnimatePresence mode="popLayout">
              {executives.map((exco, index) => {
                
                let offset = index - activeIndex;
                if (offset < -Math.floor(executives.length / 2)) offset += executives.length;
                if (offset > Math.floor(executives.length / 2)) offset -= executives.length;

                const isActive = offset === 0;
                const isVisible = Math.abs(offset) <= 2; 

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={exco.name}
                    className="absolute w-[280px] md:w-[350px] h-[400px] md:h-[450px] rounded-3xl overflow-hidden bg-slate-100 dark:bg-nacos-dark cursor-pointer shadow-2xl"
                    initial={false}
                    animate={{
                      x: `${offset * 60}%`,
                      scale: isActive ? 1 : 0.8 - Math.abs(offset) * 0.1,
                      zIndex: 10 - Math.abs(offset),
                      rotateY: offset * -15, 
                      opacity: isActive ? 1 : 0.4 - Math.abs(offset) * 0.1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image 
                      src={exco.image} 
                      alt={exco.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 350px"
                      className="object-cover object-center"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent transition-opacity duration-300 ${isActive ? 'opacity-90' : 'opacity-40'}`}></div>

                    <div className={`absolute bottom-0 left-0 w-full p-6 transition-all duration-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                      <h3 className="text-2xl font-black text-white mb-1 drop-shadow-md">{exco.name}</h3>
                      <p className="text-nacos-accent-light font-bold text-sm mb-3 drop-shadow-md uppercase tracking-wider">{exco.role}</p>
                      <p className="text-gray-200 text-sm leading-relaxed border-t border-white/20 pt-3 mt-2 font-medium">
                        &quot;{exco.bio}&quot;
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}