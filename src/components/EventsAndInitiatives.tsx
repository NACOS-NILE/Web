const initiatives = [
  {
    title: "Nile Tech Week & Hackathon",
    category: "Annual Flagship",
    description:
      "A week-long celebration of computing featuring keynotes, workshops, and a collaborative 36-hour hackathon where Nile students build functional software solutions.",
    metrics: "Prizes, mentorship & project demos",
  },
  {
    title: "Technical Workshops & Bootcamps",
    category: "Skill Development",
    description:
      "Hands-on coding bootcamps covering Web & Mobile Engineering, Cloud Infrastructure, AI & Machine Learning, and Cybersecurity tools taught by experienced peers.",
    metrics: "Interactive labs & peer guidance",
  },
  {
    title: "Industry Mentorship & Career Series",
    category: "Career Preparation",
    description:
      "Interactive sessions with alumni and tech professionals working at global companies and startups, sharing actionable insights on CVs, interviews, and internships.",
    metrics: "Direct Q&A & alumni network",
  },
  {
    title: "Academic Tutorials & Study Circles",
    category: "Academic Support",
    description:
      "Student-run study circles covering core computing coursework including Algorithms, Discrete Math, Database Systems, and Operating Systems for 100L through 400L.",
    metrics: "100L to 400L course revision",
  },
];

export default function EventsAndInitiatives() {
  return (
    <section id="events" className="py-28 relative bg-[#060b18] border-y border-slate-800/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Programs Designed for Your Growth
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From your first semester to your final year project, our activities support your academic success and career readiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((item) => (
            <div
              key={item.title}
              className="glass-card p-8 rounded-2xl border border-slate-800 glass-card-hover relative flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-medium text-blue-400 uppercase tracking-wider mb-3">
                  {item.category}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  {item.metrics}
                </span>
                <a
                  href="#community"
                  className="font-semibold text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
                >
                  Join Activity →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

