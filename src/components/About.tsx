import { Cpu, Layers, ShieldCheck, Server, Database, BrainCircuit } from "lucide-react";

const disciplines = [
  {
    icon: Cpu,
    name: "Computer Science",
    detail: "Algorithms, systems, and the theory that underpins everything else.",
  },
  {
    icon: Layers,
    name: "Software Engineering",
    detail: "Building and shipping applications that hold up under real use.",
  },
  {
    icon: ShieldCheck,
    name: "Cyber Security",
    detail: "Defending systems, auditing risk, and thinking like an attacker.",
  },
  {
    icon: Server,
    name: "Information Technology",
    detail: "Infrastructure, networks, and the tools that keep organizations running.",
  },
  {
    icon: Database,
    name: "Information Systems",
    detail: "Where business processes and technology decisions meet.",
  },
  {
    icon: BrainCircuit,
    name: "Data Science",
    detail: "Turning raw data into models, forecasts, and decisions.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border-hairline bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-nacos-navy sm:text-4xl">
            One association, six disciplines
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-body">
            NACOS Nile is the Nile University chapter of the{" "}
            <a
              href="https://nacos.org.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-nacos-blue underline decoration-nacos-blue/30 underline-offset-2 hover:decoration-nacos-blue"
            >
              Nigeria Association of Computing Students
            </a>
            , formally established in 2023. We represent every computing
            student on campus, run the events that build technical skill
            outside the classroom, and give members a direct line to
            mentorship, internships, and each other.
          </p>
        </div>

        <div id="disciplines" className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((d, i) => {
            const Icon = d.icon;
            const isGreen = i % 2 === 1;
            return (
              <div
                key={d.name}
                className={`group rounded-xl border border-border-hairline bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
                  isGreen
                    ? "hover:border-nacos-green/40 hover:shadow-nacos-green/5"
                    : "hover:border-nacos-blue/40 hover:shadow-nacos-blue/5"
                }`}
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors ${
                    isGreen
                      ? "bg-nacos-green/10 text-nacos-green group-hover:bg-nacos-green group-hover:text-white"
                      : "bg-nacos-blue/10 text-nacos-blue group-hover:bg-nacos-blue group-hover:text-white"
                  }`}
                >
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-semibold text-nacos-navy">
                  {d.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-body">{d.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
