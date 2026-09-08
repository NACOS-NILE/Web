import Reveal from "@/components/Reveal";
import JoinModal from "@/components/JoinModal";
import { socials } from "@/lib/data";
import { SocialIcon } from "@/components/icons";

export default function Community() {
  return (
    <section id="community" className="relative overflow-hidden bg-navy text-white">
      <div className="grid-veil pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(117,185,71,0.5) 0%, rgba(13,23,51,0) 70%)",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-32">
        <Reveal>
          <span className="eyebrow text-sky">05 / Community</span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Come build with us.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-8 text-white/70">
            Every announcement, study group, and event starts in one of these
            channels. The WhatsApp group is where the day-to-day happens — it&apos;s
            members-only, so tap it to see how to get in.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <ul className="grid gap-3 sm:grid-cols-2">
            <li className="sm:col-span-2">
              <JoinModal />
            </li>
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.icon === "mail" ? undefined : "_blank"}
                  rel={s.icon === "mail" ? undefined : "noopener noreferrer"}
                  style={{ "--bc": s.color } as React.CSSProperties}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/25 hover:bg-white/10"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white transition-colors group-hover:bg-white group-hover:text-[var(--bc)]">
                    <SocialIcon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">
                      {s.name}
                    </span>
                    <span className="block truncate text-xs text-white/50">
                      {s.handle}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
