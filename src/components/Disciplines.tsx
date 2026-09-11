"use client";

import { motion } from 'framer-motion';
import { Code2, ShieldAlert, Cpu, Database, Server, Network } from 'lucide-react';

const disciplines = [
  {
    title: "Software Engineering",
    description: "Architect, build, and scale robust software systems. From low-level C++ algorithms to high-performance React web applications, master the complete lifecycle of product development, quality assurance, and deployment.",
    icon: Code2,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "group-hover:border-blue-500/50",
    tags: ["React", "C++", "Java", "Next.js"],
    className: "md:col-span-2 md:row-span-2 flex flex-col justify-between p-8" 
  },
  {
    title: "Cyber Security",
    description: "Defend networks and protect data from modern threats. Master cryptography, ethical hacking, and secure system architecture.",
    icon: ShieldAlert,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
    borderColor: "group-hover:border-red-500/50",
    tags: ["Kali", "Cryptography", "Network Sec"],
    className: "md:col-span-1 md:row-span-1 p-6"
  },
  {
    title: "Computer Science",
    description: "Master the theoretical foundations of computation. Dive deep into complex algorithms, data structures, and computational logic.",
    icon: Cpu,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "group-hover:border-purple-500/50",
    tags: ["Algorithms", "AI", "Logic Design"],
    className: "md:col-span-1 md:row-span-1 p-6"
  },
  {
    title: "Data Science",
    description: "Extract actionable insights from vast datasets using machine learning, statistical modeling, and complex data visualization.",
    icon: Database,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "group-hover:border-emerald-500/50",
    tags: ["Python", "SQL", "TensorFlow"],
    className: "md:col-span-1 md:row-span-1 p-6"
  },
  {
    title: "Information Tech",
    description: "Manage and deploy enterprise-level technology infrastructures. Architect cloud solutions and ensure seamless technical operations.",
    icon: Server,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "group-hover:border-orange-500/50",
    tags: ["AWS", "Linux", "SysAdmin"],
    className: "md:col-span-1 md:row-span-1 p-6"
  },
  {
    title: "Information Systems",
    description: "Bridge the gap between business processes and technology. Design enterprise solutions that optimize workflows and drive efficiency.",
    icon: Network,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "group-hover:border-cyan-500/50",
    tags: ["ERP", "Business Intel", "Agile"],
    className: "md:col-span-1 md:row-span-1 p-6"
  }
];

export default function Disciplines() {
  return (
    // 1. REMOVED the solid background color here so the global cursor glow can be seen!
    <section className="w-full py-24 relative z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        
        <div className="mb-12 border-b border-slate-200 dark:border-white/5 pb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight"
          >
            Core <span className="text-nacos-accent">Disciplines</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl text-lg"
          >
            Explore the diverse fields of computing offered at Nile University. Our community encompasses every aspect of the modern digital landscape.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-fr gap-4">
          {disciplines.map((item, index) => {
            const Icon = item.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                // 2. Upgraded cards to Frosted Glass: Added backdrop-blur-md, made backgrounds semi-transparent, added hover lift (-translate-y-1) and deep shadows
                className={`group relative overflow-hidden rounded-xl bg-white/60 dark:bg-slate-900/40 backdrop-blur-md border border-white/60 dark:border-slate-800 shadow-sm transition-all duration-300 ${item.className} ${item.borderColor} hover:-translate-y-1 hover:shadow-2xl dark:hover:bg-slate-900/60`}
              >
                
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>

                <Icon 
                  size={160} 
                  className={`absolute -bottom-10 -right-10 opacity-5 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 ${item.color}`}
                  strokeWidth={1}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${item.bgColor} ${item.color} border border-transparent group-hover:border-current/20 transition-colors shadow-sm`}>
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        // Tags also get a slightly frosted look to match the card
                        className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 group-hover:border-slate-300 dark:group-hover:border-slate-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}