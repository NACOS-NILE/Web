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
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeader
            index="01"
            label="Community"
            title="The digital home for Nile's computing students."
            description="NACOS Nile brings together students across Computer Science, Software Engineering, Cyber Security, IT, Information Systems, and Data Science — to learn, connect, build, and grow as one community."
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-nacos-dark/10 bg-nacos-blue/[0.03] p-5 transition-colors duration-300 hover:border-nacos-blue/25 hover:bg-nacos-blue/[0.06] dark:border-white/10 dark:bg-white/3 dark:hover:border-nacos-accent/40 dark:hover:bg-white/6">
                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-nacos-blue/10 text-nacos-blue transition-colors group-hover:bg-nacos-blue group-hover:text-white dark:bg-nacos-accent/15 dark:text-nacos-accent-light">
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mb-1.5 text-base font-semibold text-nacos-dark dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-nacos-dark/60 dark:text-white/60">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
