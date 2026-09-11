'use client';
import Image from 'next/image';
import { motion } from 'motion/react';

const excos = [
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

export default function ExcosSection() {
  return (
    <section id="excos" className="py-16 sm:py-32 bg-[#F9F8F6] dark:bg-black">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 sm:mb-32 flex flex-col items-center text-center"
        >
          <h2 className="text-4xl sm:text-7xl lg:text-[7rem] font-serif font-bold text-black dark:text-white leading-[1.1] sm:leading-[1] tracking-tight max-w-5xl">
            Meet the NACOS Nile <span className="italic font-light text-gray-400">Executives</span>
          </h2>
          <p className="mt-6 sm:mt-10 text-lg sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl">
            The dedicated team working behind the scenes to make NACOS Nile great.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-x-12 lg:gap-y-24">
          {excos.map((exco, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative w-full aspect-[3/4] rounded-t-[10rem] rounded-b-3xl overflow-hidden bg-gray-200 mb-8 border border-black/5 dark:border-white/5 shadow-sm transition-shadow duration-500 group-hover:shadow-2xl">
                <Image
                  src={exco.image}
                  alt={`${exco.name} - ${exco.role} of NACOS Nile University`}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transform translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </div>
              
              <div className="transform transition-transform duration-500 group-hover:-translate-y-2 pl-2 border-l-[3px] border-transparent group-hover:border-black dark:group-hover:border-white transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase">{exco.role}</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-black dark:text-white mb-3">
                  {exco.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {exco.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
