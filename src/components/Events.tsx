import { TerminalSquare, Trophy, Briefcase, GraduationCap } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Tech Bootcamps & Workshops",
      desc: "Hands-on coding, cloud workshops, and collaborative building sessions led by technical leads.",
      icon: TerminalSquare,
    },
    {
      title: "Annual Hackathon & Tech Week",
      desc: "Competitive coding hackathons bringing students together to solve real problems for prizes.",
      icon: Trophy,
    },
    {
      title: "Industry Mentorship & Talks",
      desc: "Sessions with seasoned tech engineers, startup founders, and global cybersecurity specialists.",
      icon: Briefcase,
    },
    {
      title: "Tutorials & Study Circles",
      desc: "Weekly peer-led study groups focusing on difficult coursework and exam preparation.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="events" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
            What We Do
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Key Programs & Initiatives
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Designed to push you from beginner concepts to production-grade capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event) => {
            const Icon = event.icon;
            return (
              <div
                key={event.title}
                className="bg-[#0d1733]/50 border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#274193]/30 text-blue-400 flex items-center justify-center mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-white">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {event.desc}
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