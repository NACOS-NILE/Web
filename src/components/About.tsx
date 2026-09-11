'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

const disciplines = [
  {
    title: "Computer Science",
    shape: "rounded-full aspect-square",
    image: "/disciplines/Computer-Science.png"
  },
  {
    title: "Software Engineering",
    shape: "rounded-t-[10rem] rounded-b-[1rem] aspect-[3/4]",
    image: "/disciplines/Software-Engineering.png"
  },
  {
    title: "Cyber Security",
    shape: "rounded-full aspect-square",
    image: "/disciplines/Cyber-Security.png"
  },
  {
    title: "Information Technology",
    shape: "rounded-t-[10rem] rounded-b-[1rem] aspect-[3/4]",
    image: "/disciplines/Information-Technology.png"
  },
  {
    title: "Information Systems",
    shape: "rounded-full aspect-square",
    image: "/disciplines/Information-System.png"
  },
  {
    title: "Data Science",
    shape: "rounded-t-[10rem] rounded-b-[1rem] aspect-[3/4]",
    image: "/disciplines/Data-Science.png"
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#F9F8F6] dark:bg-black overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mb-32"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="w-10 h-[1px] bg-black dark:bg-white"></span>
            <span className="text-xs font-bold tracking-widest text-black dark:text-white uppercase">About</span>
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-serif font-bold text-black dark:text-white leading-[1] tracking-tight">
            About NACOS <span className="italic font-light text-gray-400">Nile</span>
          </h2>
          <p className="mt-12 text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light leading-relaxed">
            We are a vibrant community of computing students dedicated to innovation, learning, and collaboration. Our mission is to foster a dynamic environment that empowers students to excel in various tech fields.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center justify-between"
        >
          <h3 className="text-3xl font-serif italic text-black dark:text-white">Core Computing Disciplines</h3>
          <span className="hidden sm:block text-sm font-semibold tracking-wider text-gray-500 uppercase">01 / 04</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 items-start">
          {disciplines.map((discipline, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="relative w-full max-w-[320px]">
                <div className="absolute inset-0 rounded-[50%] border-[1px] border-black/5 dark:border-white/10 scale-[1.15] pointer-events-none transition-transform duration-700 group-hover:scale-[1.2] group-hover:rotate-6" />
                <div className={`relative w-full overflow-hidden ${discipline.shape} bg-gray-200 dark:bg-gray-900 transition-all duration-500 group-hover:shadow-2xl`}>
                  <Image 
                    src={discipline.image} 
                    alt={discipline.title}
                    fill
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </div>

              <div className="mt-12 text-center transform transition-transform duration-500 group-hover:-translate-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-black dark:text-white">
                  {discipline.title}
                </h3>
                <div className="w-0 h-[2px] bg-black dark:bg-white mx-auto mt-4 transition-all duration-500 group-hover:w-12"></div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
