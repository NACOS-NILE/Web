import { Terminal, Code, ShieldCheck, Laptop, Database, LineChart } from "lucide-react";

export default function Disciplines() {
  const disciplines = [
    {
      title: "Computer Science",
      desc: "Algorithms, computation theory, AI, and systems engineering foundations.",
      icon: Terminal,
    },
    {
      title: "Software Engineering",
      desc: "Scalable architecture, clean code standards, full-stack dev, and DevOps.",
      icon: Code,
    },
    {
      title: "Cyber Security",
      desc: "Threat intelligence, network penetration testing, and digital forensics.",
      icon: ShieldCheck,
    },
    {
      title: "Information Technology",
      desc: "Cloud platforms, hardware virtualization, and modern system operations.",
      icon: Laptop,
    },
    {
      title: "Information Systems",
      desc: "Business workflows, enterprise databases, and technological infrastructure.",
      icon: Database,
    },
    {
      title: "Data Science",
      desc: "Machine learning models, predictive statistics, and big data visualization.",
      icon: LineChart,
    },
  ];

  return (
    <section id="disciplines" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold mb-3">
            Academic Fields
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Our Core Disciplines
          </p>
          <p className="text-gray-400 mt-4 text-sm sm:text-base">
            Representing the diverse departments within Nile University&apos;s computing body.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#0d1733]/40 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:bg-[#0d1733]/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-900/30 text-blue-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-100 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}