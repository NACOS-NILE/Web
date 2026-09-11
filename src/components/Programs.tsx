import { Cpu, CalendarDays, Users, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Cpu,
    title: "Tech Bootcamps",
    category: "Training",
    description:
      "Intensive hands-on bootcamps covering modern development tools, frameworks, and emerging technologies.",
  },
  {
    icon: CalendarDays,
    title: "Hackathon & Tech Week",
    category: "Events",
    description:
      "Our flagship annual event — a week of coding challenges, innovation showcases, and competitive problem-solving.",
  },
  {
    icon: Users,
    title: "Industry Mentorship",
    category: "Career",
    description:
      "Connecting students with experienced professionals for guidance, career advice, and real-world industry insights.",
  },
  {
    icon: GraduationCap,
    title: "Academic Tutorials",
    category: "Learning",
    description:
      "Peer-led study groups and tutorial sessions to support coursework, reinforce concepts, and prepare for examinations.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="section-padding bg-white" aria-label="Programs and Initiatives">
      <div className="container-nacos">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="eyebrow mb-4">Programs & Initiatives</p>
          <h2 className="section-heading text-balance">
            Opportunities that shape your journey.
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            From intensive bootcamps to industry mentorship — our programs are
            designed to complement your academic experience with practical,
            career-relevant skills.
          </p>
        </div>

        {/* Programs list */}
        <div className="space-y-4">
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <div
                key={program.title}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 p-6 border border-gray-200 rounded-sm hover:border-nacos-300 hover:bg-nacos-50/30 transition-all duration-300"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 shrink-0">
                  <span className="text-xs font-bold text-nacos-400 tracking-wider">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-11 h-11 bg-nacos-50 rounded-sm flex items-center justify-center group-hover:bg-nacos-100 transition-colors duration-300">
                    <Icon size={20} className="text-nacos-600" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-base font-bold text-nacos-900">
                      {program.title}
                    </h3>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-nacos-500 bg-nacos-50 px-2 py-0.5 rounded-sm">
                      {program.category}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {program.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}