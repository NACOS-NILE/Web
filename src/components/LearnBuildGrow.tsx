import { BookOpen, Hammer, TrendingUp } from "lucide-react";

const pillars = [
  {
    word: "LEARN",
    icon: BookOpen,
    description:
      "Coding workshops, technical tutorials, study groups, and hands-on learning sessions designed to sharpen your skills.",
    items: ["Coding Workshops", "Tech Tutorials", "Study Groups", "Peer Learning"],
  },
  {
    word: "BUILD",
    icon: Hammer,
    description:
      "Real projects, hackathons, and collaborative development experiences that turn ideas into working solutions.",
    items: ["Hackathons", "Tech Week", "Team Projects", "Build Sprints"],
  },
  {
    word: "GROW",
    icon: TrendingUp,
    description:
      "Mentorship, career talks, networking events, and professional development opportunities that prepare you for industry.",
    items: ["Mentorship", "Career Talks", "Networking", "Industry Exposure"],
  },
];

export default function LearnBuildGrow() {
  return (
    <section className="bg-nacos-900 section-padding relative overflow-hidden" aria-label="Learn Build Grow">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container-nacos relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="eyebrow text-nacos-400 mb-4">What We Do</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Learn. Build. Grow.
          </h2>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            Three pillars that define the NACOS Nile experience — from your
            first line of code to your first industry role.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.word}
                className="group relative bg-white/[0.04] border border-white/10 rounded-sm p-8 lg:p-10 hover:bg-white/[0.08] hover:border-nacos-500/30 transition-all duration-500"
              >
                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-black text-white/[0.04] group-hover:text-nacos-500/10 transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="w-12 h-12 bg-nacos-600/20 rounded-sm flex items-center justify-center mb-6 group-hover:bg-nacos-600/30 transition-colors duration-500">
                  <Icon size={24} className="text-nacos-400" />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
                  {pillar.word}
                </h3>

                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-white/40"
                    >
                      <span className="w-1 h-1 bg-nacos-500 rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}