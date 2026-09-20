import type { ComponentType, SVGProps } from "react";
import { SOCIALS, type Social } from "@/lib/data";
import {
  ArrowRightIcon,
  DiscordIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/Icons";
import HoverHeading from "@/components/HoverHeading";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const ICONS: Record<Social["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  discord: DiscordIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="bg-white py-20 sm:py-28 dark:bg-brand-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="community-heading"
          eyebrow="Join the community"
          title="Pick a channel and say hello"
          description="Announcements, past questions, internship leads, project partners and a lot of late-night debugging. Every channel is free and open to all Nile computing students."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SOCIALS.map((social, i) => {
            const Icon = ICONS[social.icon];
            const external = social.href.startsWith("http");

            return (
              <Reveal key={social.name} delay={(i % 3) * 90} variant="scale" as="li">
                <a
                  href={social.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-brand-900/10 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-600/30 hover:shadow-xl hover:shadow-brand-600/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40"
                >
                  <span
                    className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md transition group-hover:scale-110"
                    style={{ backgroundColor: social.accent }}
                  >
                    <Icon className="size-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold text-brand-900 dark:text-white">
                      {social.name}
                    </span>
                    <span className="mt-0.5 block truncate text-sm text-brand-900/60 dark:text-brand-100/60">
                      {social.handle}
                    </span>
                  </span>
                  <ArrowRightIcon className="size-5 shrink-0 text-brand-900/30 transition-transform group-hover:translate-x-1 group-hover:text-brand-600 dark:text-brand-100/30 dark:group-hover:text-brand-200" />
                </a>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={140}>
          <div className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-accent px-8 py-12 text-center shadow-2xl shadow-brand-600/25 sm:px-14 sm:py-16">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_55%)]"
            />
            <div className="relative mx-auto max-w-2xl">
              <HoverHeading
                as="h3"
                // White on a blue panel: green reads, blue would not.
                glow="var(--color-leaf)"
                className="text-2xl font-extrabold tracking-tight text-balance text-white sm:text-3xl"
              >
                New to Nile? Start here.
              </HoverHeading>
              <p className="mt-4 text-base leading-relaxed text-pretty text-brand-50/90">
                Freshers get a course guide, a study group and a senior colleague who has already
                survived the semester you are about to start.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Get involved
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#events"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See what is on
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
