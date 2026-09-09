import { CHANNELS } from "@/data/content";
import { PLATFORM_LOGOS } from "./BrandLogos";
import SectionLabel from "./SectionLabel";

export default function Community() {
  return (
    <section
      id="community"
      className="scroll-mt-24 bg-surface-sunken"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionLabel index="05">Channels</SectionLabel>
            <h2 className="reveal mt-8 text-[1.75rem] leading-[1.25] text-ink sm:text-[2.1rem]">
              Join wherever you already are.
            </h2>
            <p className="reveal mt-5 max-w-xs text-ink-muted">
              Announcements go out on all of them, so nobody misses a workshop
              for picking the wrong app.
            </p>
          </div>

          {/* Rows, not cards: each platform's own mark does the identifying
              work, so no container or icon tile is needed around it. */}
          <ul className="lg:col-span-7 lg:col-start-6">
            {CHANNELS.map((c) => {
              const Logo = PLATFORM_LOGOS[c.id];
              return (
                <li key={c.id} className="reveal border-t border-hairline last:border-b">
                  <a
                    href={c.href}
                    className="group grid grid-cols-[1.5rem_1fr_auto] items-center gap-x-5 py-6 transition-colors duration-200 sm:gap-x-7"
                  >
                    <Logo className="h-[1.15rem] w-[1.15rem] text-ink-faint transition-colors duration-200 group-hover:text-ink" />
                    <span className="min-w-0">
                      <span className="block text-[1.15rem] leading-snug text-ink">
                        {c.name}
                      </span>
                      <span className="mt-1 block text-[0.95rem] leading-[1.6] text-ink-muted">
                        {c.blurb}
                      </span>
                    </span>
                    <span className="ui hidden text-ink-faint transition-colors duration-200 group-hover:text-ink sm:block">
                      {c.handle}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
