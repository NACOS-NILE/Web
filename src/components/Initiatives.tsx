import React from 'react';
import { Terminal, Trophy, Briefcase, BookOpen, ArrowUpRight } from 'lucide-react';

export default function InitiativesSection() {
  const initiatives = [
    {
      badge: "Hands-on Training",
      icon: <Terminal className="w-6 h-6 text-emerald-400" />,
      title: "Tech Bootcamps & Coding Workshops",
      description: "Intensive, practical sessions covering full-stack web development, cloud computing, cybersecurity basics, and mobile app development led by experienced student devs and guests.",
      tag: "Skill Building"
    },
    {
      badge: "Flagship Event",
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      title: "Annual Hackathon & Tech Week",
      description: "Our signature annual event featuring a 48-hour continuous hackathon, project showcases, keynotes, panel discussions, and competitive rewards for innovative solutions.",
      tag: "Competition & Showcase"
    },
    {
      badge: "Career Growth",
      icon: <Briefcase className="w-6 h-6 text-blue-400" />,
      title: "Industry Mentorship & Career Talks",
      description: "Connecting students directly with software engineers, tech founders, and industry leaders to guide resume building, internship preparation, and career pathing.",
      tag: "Networking"
    },
    {
      badge: "Peer Support",
      icon: <BookOpen className="w-6 h-6 text-purple-400" />,
      title: "Academic Tutorials & Study Groups",
      description: "Curated peer-led study circles for core computing courses, exam review sessions, and algorithm problem-solving practice to support academic excellence.",
      tag: "Academics"
    }
  ];

  return (
    <section id="events" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800/60 bg-[#090d16]">
      <div className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          What We Do
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Key Initiatives, Events &amp; Programs
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl">
          Designed to bridge the gap between classroom theory and industry readiness through continuous learning and collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {initiatives.map((item, index) => (
          <article 
            key={index} 
            className="group relative bg-slate-900/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white">
                  {item.icon}
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700/50">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {item.description}
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500">
              <span>{item.tag}</span>
              <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
                Learn more <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}