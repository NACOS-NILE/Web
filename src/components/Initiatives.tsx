import React from "react";
import ScrollReveal from "./ScrollReveal";

interface Initiative {
  id: string;
  step: string;
  title: string;
  description: string;
  tag: string;
  icon: React.ReactNode;
}

const INITIATIVES: Initiative[] = [
  {
    id: "bootcamps",
    step: "01",
    title: "Tech Bootcamps & Coding Workshops",
    tag: "Hands-on Skills",
    description:
      "Student-led technical sessions covering web development, cloud computing, mobile application development, and software engineering tools used in industry.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        <path d="m8 10 2 2-2 2" />
        <path d="M12 14h4" />
      </svg>
    ),
  },
  {
    id: "hackathon",
    step: "02",
    title: "Annual Hackathon & Tech Week",
    tag: "Flagship Innovation",
    description:
      "The annual computing competition bringing Nile University student teams together to prototype software solutions for real challenges facing Nigerian tech.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    ),
  },
  {
    id: "mentorship",
    step: "03",
    title: "Industry Mentorship & Career Talks",
    tag: "Career Guidance",
    description:
      "Direct interactive sessions with Nile alumni, software engineers, and industry professionals offering career guidance, resume reviews, and internship advice.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
        <path d="M12 12h.01" />
      </svg>
    ),
  },
  {
    id: "academics",
    step: "04",
    title: "Academic Tutorials & Study Groups",
    tag: "Course Revision",
    description:
      "Peer tutorial circles organized before midterms and final exams to review difficult topics across Computer Science and Software Engineering courses.",
    icon: (
      <svg
        className="w-6 h-6 text-nacos-accent-light"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function Initiatives() {
  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 bg-nacos-dark px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Header with Distinctive Typography */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-nacos-accent-light">
              Student Programs Roadmap
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            A structured annual timeline of technical activities organized by NACOS Nile student committees to complement classroom lectures.
          </p>
        </ScrollReveal>

        {/* Roadmap / Timeline Layout with Connecting Path Line */}
        <div className="relative space-y-10 sm:space-y-12 before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-gradient-to-b before:from-nacos-accent/80 before:via-nacos-blue/60 before:to-nacos-accent/30">
          {INITIATIVES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className={`relative flex flex-col sm:flex-row items-start ${
                  isEven ? "sm:flex-row-reverse" : ""
                } justify-between gap-6 sm:gap-12 group`}
              >
                {/* Roadmap Node Card */}
                <div className="w-full sm:w-[calc(50%-2.5rem)] ml-12 sm:ml-0 p-6 sm:p-8 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-nacos-accent/40 transition-all duration-300 shadow-lg group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-nacos-blue/20 border border-nacos-accent/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                      {item.icon}
                    </div>
                    <span className="text-xs font-semibold text-nacos-accent-light bg-nacos-blue/15 border border-nacos-accent/25 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-nacos-accent-light transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Center Node Marker */}
                <div className="absolute left-0 sm:left-1/2 -translate-x-1/2 top-6 w-10 h-10 rounded-full bg-nacos-dark border-2 border-nacos-accent flex items-center justify-center text-xs font-bold text-nacos-accent-light shadow-lg shadow-nacos-accent/20 z-10">
                  {item.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
