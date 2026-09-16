import { Code2, Trophy, Users, BookOpen } from "lucide-react";

const programs = [
  {
    icon: Code2,
    cadence: "Every semester",
    title: "Tech bootcamps & coding workshops",
    detail:
      "Hands-on sessions in Python, React, AI, and ethical hacking — covering the tools and languages members need for coursework and side projects, led by senior students and Excos.",
  },
  {
    icon: Trophy,
    cadence: "Once a year",
    title: "Hackathon & Tech Week",
    detail:
      "A week of build challenges, talks, and competitions that closes with a hackathon judged by industry guests — this website's competition is part of that tradition.",
  },
  {
    icon: Users,
    cadence: "Ongoing",
    title: "Industry mentorship & career talks",
    detail:
      "Alumni and professionals in software, security, and data share how they broke into the industry, plus direct mentorship for members who ask.",
  },
  {
    icon: BookOpen,
    cadence: "Around exams",
    title: "Academic tutorials & study groups",
    detail:
      "Peer-led revision sessions for the courses students find hardest, organized ahead of tests and exams across all six disciplines.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="border-b border-border-hairline bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-nacos-navy sm:text-4xl">
            What we run through the year
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            Four kinds of programming, spaced across the academic calendar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {programs.map((p, i) => {
            const Icon = p.icon;
            const isGreen = i % 2 === 1;
            return (
              <div
                key={p.title}
                className={`group relative overflow-hidden rounded-xl border border-border-hairline bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  isGreen
                    ? "hover:border-nacos-green/40 hover:shadow-nacos-green/5"
                    : "hover:border-nacos-blue/40 hover:shadow-nacos-blue/5"
                }`}
              >
                <span
                  className={`pointer-events-none absolute -right-3 -top-3 text-7xl font-bold text-surface-muted transition-colors ${
                    isGreen ? "group-hover:text-nacos-green/10" : "group-hover:text-nacos-blue/10"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className={`relative flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                    isGreen
                      ? "bg-nacos-green/10 text-nacos-green group-hover:bg-nacos-green group-hover:text-white"
                      : "bg-nacos-blue/10 text-nacos-blue group-hover:bg-nacos-blue group-hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <p
                  className={`relative mt-5 text-sm font-medium ${
                    isGreen ? "text-nacos-green" : "text-nacos-blue"
                  }`}
                >
                  {p.cadence}
                </p>
                <h3 className="relative mt-1 text-lg font-semibold text-nacos-navy">
                  {p.title}
                </h3>
                <p className="relative mt-2 max-w-md text-sm leading-relaxed text-text-body">
                  {p.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
