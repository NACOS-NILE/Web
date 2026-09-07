import { Compass, HeartHandshake, Rocket, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const PILLARS = [
  {
    icon: Users,
    title: "Community",
    description: "A shared home for computing students across every discipline at Nile.",
  },
  {
    icon: Rocket,
    title: "Technical growth",
    description: "Workshops, bootcamps, and projects that build real, practical skill.",
  },
  {
    icon: HeartHandshake,
    title: "Collaboration",
    description: "Peer learning, study groups, and teamwork that make the work lighter.",
  },
  {
    icon: Compass,
    title: "Opportunity",
    description: "Mentorship, career talks, and pathways into the wider tech industry.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28 dark:bg-nacos-dark">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <SectionHeader
            index="01"
            label="Community"
            title="The digital home for Nile's computing students."
            description="NACOS Nile brings together students across Computer Science, Software Engineering, Cyber Security, IT, Information Systems, and Data Science — to learn, connect, build, and grow as one community."
          />
        </div>

        <div className="flex flex-col gap-4">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className="group flex items-center gap-5 rounded-2xl border border-nacos-dark/10 bg-nacos-blue/3 p-5 transition-colors duration-300 hover:border-nacos-blue/25 hover:bg-nacos-blue/6 sm:gap-6 sm:p-6 dark:border-white/10 dark:bg-white/3 dark:hover:border-nacos-accent/40 dark:hover:bg-white/6">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-nacos-blue/10 text-nacos-blue transition-colors group-hover:bg-nacos-blue group-hover:text-white sm:h-14 sm:w-14 dark:bg-nacos-accent/15 dark:text-nacos-accent-light">
                  <pillar.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-nacos-dark sm:text-lg dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-nacos-dark/60 sm:text-base dark:text-white/60">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
