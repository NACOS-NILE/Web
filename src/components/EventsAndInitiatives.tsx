const initiatives = [
  {
    title: "Nile Tech Week & Hackathon",
    category: "Flagship Annual Event",
    badge: "Flagship",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "A 5-day celebration of computing featuring keynotes, product pitch battles, workshops, and an intense 36-hour hackathon where Nile students build real solutions for real impact.",
    metrics: "₦1,000,000+ in prizes • 50+ project demos",
    icon: "🏆",
  },
  {
    title: "Tech Bootcamps & Hands-on Coding",
    category: "Skill Acceleration",
    badge: "Active",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    description:
      "Weekly and semester-long technical workshops covering Full-stack Web Development, Mobile Dev with Flutter/React Native, Cloud DevOps, AI engineering, and Cybersecurity pentesting.",
    metrics: "Hands-on projects • Industry mentors",
    icon: "⚡",
  },
  {
    title: "Industry Mentorship & Career Talks",
    category: "Professional Growth",
    badge: "Quarterly",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    description:
      "Direct fireside chats with alumni and engineering leaders from top tech giants, global startups, and local unicorns sharing insights into internships, resumes, and technical interviews.",
    metrics: "Direct networking • Internship pipeline",
    icon: "🤝",
  },
  {
    title: "Academic Tutorials & Study Circles",
    category: "Academic Support",
    badge: "Weekly",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    description:
      "Peer-to-peer revision classes led by top-performing senior students to demystify complex computing coursework including Algorithms, Discrete Math, Operating Systems, and Database Design.",
    metrics: "100L - 400L modules • Exam prep materials",
    icon: "📚",
  },
];

export default function EventsAndInitiatives() {
  return (
    <section id="initiatives" className="py-24 relative bg-[#090f24]/50 border-y border-blue-900/20">
      {/* Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            <span>PROGRAMS & ACTIVITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Empowering You Inside & Outside the Classroom
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From beginners writing their first lines of code to seasoned developers shipping production apps, our initiatives are tailored to accelerate your technical journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-2xl glass-card-hover border border-blue-900/30 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2 rounded-xl bg-[#060b18] border border-blue-500/20 inline-block">
                    {item.icon}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>
                <div className="text-xs font-medium text-blue-400 mb-1">{item.category}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {item.metrics}
                </span>
                <a
                  href="#community"
                  className="text-xs font-semibold text-blue-300 hover:text-white transition flex items-center gap-1"
                >
                  Get Involved →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
