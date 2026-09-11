"use client";

import { motion } from 'framer-motion';
import { Terminal, Trophy, Briefcase, BookOpen } from 'lucide-react';

const programs = [
  {
    title: "Tech Bootcamps & Workshops",
    description: "Hands-on coding sessions designed to take you from beginner to advanced in modern frameworks, languages, and tools.",
    icon: Terminal,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500"
  },
  {
    title: "Annual Hackathon & Tech Week",
    description: "Compete, collaborate, and build innovative solutions in our flagship 48-hour coding marathon. Win prizes and get noticed by recruiters.",
    icon: Trophy,
    color: "from-nacos-accent/20 to-nacos-accent/5",
    iconColor: "text-nacos-accent"
  },
  {
    title: "Industry Mentorship & Career Talks",
    description: "Connect with seasoned professionals and alumni. Get resume reviews, interview prep, and insider advice on navigating the tech industry.",
    icon: Briefcase,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500"
  },
  {
    title: "Academic Tutorials & Study Groups",
    description: "Ace your core computing courses with peer-led study sessions, exam prep tutorials, and collaborative resource sharing.",
    icon: BookOpen,
    color: "from-emerald-500/20 to-emerald-500/5",
    iconColor: "text-emerald-500"
  }
];

export default function Programs() {
  return (
    <section id="programs" className="w-full py-24 relative z-10 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="mb-16 text-center md:text-left md:flex md:items-end md:justify-between">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight"
            >
              Initiatives & <span className="text-transparent bg-clip-text bg-gradient-to-r from-nacos-accent-light to-blue-500">Programs</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-gray-400 text-lg"
            >
              We provide the ecosystem you need to grow from a computing student into a world-class professional.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-8 hover:border-nacos-accent/50 dark:hover:border-white/30 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 ${program.iconColor}`}>
                    <IconComponent size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{program.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 leading-relaxed font-medium group-hover:text-slate-800 dark:group-hover:text-gray-200 transition-colors">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}