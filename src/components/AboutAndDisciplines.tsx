const disciplines = [
  {
    title: "Computer Science",
    code: "CMP",
    icon: "💻",
    description:
      "Focusing on computational theory, advanced algorithms, software systems, artificial intelligence, and cutting-edge hardware-software interfaces.",
    skills: ["Algorithms", "Data Structures", "AI & Machine Learning", "Systems Architecture"],
    color: "from-blue-600/20 to-indigo-600/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Software Engineering",
    code: "SEN",
    icon: "⚡",
    description:
      "Mastering modern software development lifecycles, scalable cloud infrastructure, fullstack architectures, and production-grade engineering principles.",
    skills: ["Cloud Computing", "Full-Stack Dev", "DevOps & CI/CD", "Software Architecture"],
    color: "from-cyan-600/20 to-blue-600/10",
    border: "group-hover:border-cyan-500/50",
  },
  {
    title: "Cyber Security",
    code: "CYB",
    icon: "🛡️",
    description:
      "Safeguarding digital assets, defensive operations, ethical hacking, digital forensics, cryptography, and resilient network defense architectures.",
    skills: ["Penetration Testing", "Threat Intel", "Cryptography", "Network Security"],
    color: "from-red-600/20 to-amber-600/10",
    border: "group-hover:border-rose-500/50",
  },
  {
    title: "Data Science",
    code: "DAT",
    icon: "📊",
    description:
      "Transforming massive datasets into predictive insights through machine learning, probabilistic modeling, deep learning, and advanced analytics pipelines.",
    skills: ["Predictive Modeling", "Big Data", "Deep Learning", "Data Visualization"],
    color: "from-emerald-600/20 to-teal-600/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    title: "Information Technology",
    code: "IFT",
    icon: "🌐",
    description:
      "Implementing enterprise network infrastructures, cloud solutions, systems administration, and dependable business technology ecosystems.",
    skills: ["Cloud Systems", "Enterprise Networks", "Systems Admin", "IT Governance"],
    color: "from-purple-600/20 to-indigo-600/10",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Information Systems",
    code: "IFS",
    icon: "🏢",
    description:
      "Bridging the vital gap between technological innovation, organizational strategy, data workflows, and modern digital enterprise management.",
    skills: ["Business Analysis", "ERP Solutions", "Product Management", "Strategic IT"],
    color: "from-amber-600/20 to-yellow-600/10",
    border: "group-hover:border-amber-500/50",
  },
];

export default function AboutAndDisciplines() {
  return (
    <section id="disciplines" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: About NACOS Nile */}
        <div id="about" className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            <span>ABOUT NACOS NILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            Pioneering Computing Excellence at Nile University
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The Nile University Chapter of the Nigeria Association of Computing Students (NACOS) is dedicated to fostering technical leadership, academic excellence, peer collaboration, and career readiness for every computing student on campus.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/40 transition duration-300">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Our Mission</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To cultivate an inclusive, supportive, and cutting-edge ecosystem where Nile computing students are equipped with modern tech proficiencies, mentorship, leadership acumen, and global industry opportunities.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/40 transition duration-300">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span>Our Vision</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To be the premier student computing chapter in Africa—recognized internationally for producing pioneering software engineers, ethical researchers, cyber defense experts, and visionary tech entrepreneurs.
            </p>
          </div>
        </div>

        {/* Disciplines Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Six Accredited Disciplines, One Dynamic Family
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            NACOS Nile encompasses all departments under computing, preparing students with specialized knowledge while enabling interdisciplinary tech projects.
          </p>
        </div>

        {/* Disciplines Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((item) => (
            <div
              key={item.title}
              className={`glass-card p-7 rounded-2xl glass-card-hover group border border-blue-900/30 ${item.border} relative flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl p-2.5 rounded-xl bg-slate-900/70 border border-slate-700/50 inline-block shadow-sm">
                    {item.icon}
                  </span>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-500/20">
                    {item.code}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Key Focus Areas
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
