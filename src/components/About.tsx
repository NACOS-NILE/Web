import React from "react";

interface Discipline {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DISCIPLINES: Discipline[] = [
  {
    id: "cs",
    title: "Computer Science",
    description: "Algorithmic thinking, computational theory, artificial intelligence, and core computing architecture.",
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
      </svg>
    ),
  },
  {
    id: "se",
    title: "Software Engineering",
    description: "Designing, engineering, and maintaining scalable full-stack web, mobile, and cloud software systems.",
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
        <path d="m18 16 4-4-4-4" />
        <path d="m6 8-4 4 4 4" />
        <path d="m14.5 4-5 16" />
      </svg>
    ),
  },
  {
    id: "cyber",
    title: "Cyber Security",
    description: "Securing modern infrastructure through ethical hacking, cryptography, threat analysis, and digital defense.",
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
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: "it",
    title: "Information Technology",
    description: "Managing enterprise IT infrastructure, cloud deployments, network architecture, and system operations.",
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
        <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
        <line x1="6" x2="6.01" y1="6" y2="6" />
        <line x1="6" x2="6.01" y1="18" y2="18" />
      </svg>
    ),
  },
  {
    id: "is",
    title: "Information Systems",
    description: "Bridging executive business strategy with technological solutions to optimize digital transformation.",
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
        <rect width="8" height="8" x="3" y="3" rx="2" />
        <path d="M7 11v4a2 2 0 0 0 2 2h4" />
        <rect width="8" height="8" x="13" y="13" rx="2" />
      </svg>
    ),
  },
  {
    id: "ds",
    title: "Data Science",
    description: "Unlocking actionable insights through big data analytics, statistical modeling, and predictive intelligence.",
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
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-nacos-dark-alt px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Structured Geometric Dot Pattern & Organic Noise Texture (No Soft Blobs) */}
      <div className="absolute inset-0 pointer-events-none aria-hidden:true">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <div className="absolute inset-0 bg-noise pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Asymmetric Left-Aligned Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20 pb-10 border-b border-white/10">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nacos-blue/15 border border-nacos-accent/25 text-nacos-accent-light text-xs font-mono font-medium">
              // 01. department_programs
            </div>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-normal text-white">
              Computing Degrees at Nile University of Nigeria
            </h2>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl font-normal">
              Organized under the Department of Computer Science (Faculty of Natural &amp; Applied Sciences) at Nile University of Nigeria, NACOS Nile supports students across all six computing degree specializations.
            </p>
          </div>

          <div className="lg:col-span-4 hidden lg:flex justify-end">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 font-mono text-xs text-gray-400 space-y-2 max-w-xs">
              <div className="text-nacos-accent-light font-medium">// department_info</div>
              <div>Faculty: Natural &amp; Applied Sciences</div>
              <div>Dept: Computer Science</div>
              <div>Location: Abuja, FCT, Nigeria</div>
            </div>
          </div>
        </div>

        {/* Disciplines Grid with Simple Background Color Shift Hover (No Border Glow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DISCIPLINES.map((item) => (
            <div
              key={item.id}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] hover:bg-nacos-blue/25 border border-white/10 transition-colors duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-nacos-accent/15 border border-nacos-accent/30 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                {/* Card Title - font-medium */}
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-nacos-accent-light transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Simple Link */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-mono text-nacos-accent-light">
                <span>degree_program // {item.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
