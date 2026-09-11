const disciplines = [
  {
    title: "Computer Science",
    code: "CMP",
    description:
      "Focusing on computational theory, advanced algorithms, software systems, artificial intelligence, and cutting-edge hardware-software interfaces.",
    skills: ["Algorithms", "Data Structures", "AI & Machine Learning", "Systems Architecture"],
  },
  {
    title: "Software Engineering",
    code: "SEN",
    description:
      "Mastering modern software development lifecycles, scalable cloud infrastructure, fullstack architectures, and production-grade engineering principles.",
    skills: ["Cloud Computing", "Full-Stack Dev", "DevOps & CI/CD", "Software Architecture"],
  },
  {
    title: "Cyber Security",
    code: "CYB",
    description:
      "Safeguarding digital assets, defensive operations, ethical hacking, digital forensics, cryptography, and resilient network defense architectures.",
    skills: ["Penetration Testing", "Threat Intel", "Cryptography", "Network Security"],
  },
  {
    title: "Data Science",
    code: "DAT",
    description:
      "Transforming massive datasets into predictive insights through machine learning, probabilistic modeling, deep learning, and advanced analytics pipelines.",
    skills: ["Predictive Modeling", "Big Data", "Deep Learning", "Data Visualization"],
  },
  {
    title: "Information Technology",
    code: "IFT",
    description:
      "Implementing enterprise network infrastructures, cloud solutions, systems administration, and dependable business technology ecosystems.",
    skills: ["Cloud Systems", "Enterprise Networks", "Systems Admin", "IT Governance"],
  },
  {
    title: "Information Systems",
    code: "IFS",
    description:
      "Bridging the vital gap between technological innovation, organizational strategy, data workflows, and modern digital enterprise management.",
    skills: ["Business Analysis", "ERP Solutions", "Product Management", "Strategic IT"],
  },
];


export default function AboutAndDisciplines() {
  return (
    <section id="disciplines" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: About NACOS Nile */}
        <div id="about" className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
            A Supportive Community for Every Nile Tech Student
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            The Nile University Chapter of the Nigeria Association of Computing Students brings together learners, builders, and aspiring researchers. We focus on peer mentorship, practical project experience, and preparing you for industry.
          </p>
        </div>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="glass-card p-8 sm:p-9 rounded-2xl relative border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Our Mission
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To cultivate an inclusive and active student environment where Nile computing students build practical technical skills, access alumni mentorship, and discover real-world tech opportunities.
            </p>
          </div>

          <div className="glass-card p-8 sm:p-9 rounded-2xl relative border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Our Vision
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To be a model student tech association across Nigerian universities—recognized for student-led innovation, high-impact hackathons, ethical computing, and career-ready graduates.
            </p>
          </div>
        </div>


        {/* Disciplines Section */}
        <div className="text-center max-w-2xl mx-auto mb-14">
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
              className="glass-card p-7 rounded-2xl glass-card-hover border border-slate-800 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-end mb-4">
                  <span className="text-[11px] text-slate-500 font-medium">B.Sc. Degree</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2.5">
                  Core Competencies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-[#060b18] text-slate-300 border border-slate-800/80"
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
