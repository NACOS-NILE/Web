import React from "react";
import {
  Terminal,
  Trophy,
  Briefcase,
  BookOpen,
  ArrowUpRight,
} from "lucide-react";

export default function InitiativesSection() {
  const initiatives = [
  {
    badge: "Hands-on Training",
    icon: <Terminal className="h-6 w-6 text-[#60a5fa]" />,
    title: "Tech Bootcamps & Coding Workshops",
    description:
      "Intensive, practical sessions covering full-stack web development, cloud computing, cybersecurity basics, and mobile app development led by experienced student devs and guests.",
    tag: "Skill Building",
  },
  {
    badge: "Flagship Event",
    icon: <Trophy className="h-6 w-6 text-[#fbbf24]" />,
    title: "Annual Hackathon & Tech Week",
    description:
      "Our signature annual event featuring a 48-hour continuous hackathon, project showcases, keynotes, panel discussions, and competitive rewards for innovative solutions.",
    tag: "Competition & Showcase",
  },
  {
    badge: "Career Growth",
    icon: <Briefcase className="h-6 w-6 text-[#a78bfa]" />,
    title: "Industry Mentorship & Career Talks",
    description:
      "Connecting students directly with software engineers, tech founders, and industry leaders to guide resume building, internship preparation, and career pathing.",
    tag: "Networking",
  },
  {
    badge: "Peer Support",
    icon: <BookOpen className="h-6 w-6 text-[#34d399]" />,
    title: "Academic Tutorials & Study Groups",
    description:
      "Curated peer-led study circles for core computing courses, exam review sessions, and algorithm problem-solving practice to support academic excellence.",
    tag: "Academics",
  },
];

 return (
  <section id="events" className="relative w-full overflow-hidden">
    {/* Subtle transition from the white Disciplines section */}
    
    <div className="h-8 bg-gradient-to-b from-white via-[#eef2fb] to-[#16255A]" />

    {/* Events section */}
    <div className="bg-[#16255A]">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <div className="mb-14 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#274193]/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
            What We Do
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Key Initiatives, Events &amp; Programs
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-white/70">
            Designed to bridge the gap between classroom theory and industry
            readiness through continuous learning and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {initiatives.map((item) => (
            <article
              key={item.title}
              className="group flex h-full flex-col justify-between rounded-2xl border border-[#3b55a0]/50 bg-[#274193] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#60a5fa]/50 hover:bg-[#2d4ba3]"
            >
              <div>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div className="rounded-xl border border-white/10 bg-[#1d3272] p-3">
                    {item.icon}
                  </div>

                  <span className="rounded-full border border-white/10 bg-[#1d3272] px-2.5 py-1 text-xs font-medium text-white/80">
                    {item.badge}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-white/70">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
                <span>{item.tag}</span>

                <span className="flex items-center gap-1 font-medium text-[#60a5fa] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);
}