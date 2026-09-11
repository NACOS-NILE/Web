import { Instagram, Linkedin, MessageSquare, Phone, Send, Twitter } from "lucide-react";
import { communityChannels } from "@/lib/site-data";

const icons = { MessageSquare, Phone, Send, Twitter, Instagram, Linkedin } as const;

export function Community() {
  return (
    <section
      id="community"
      data-reveal
      className="reveal-section border-b border-border bg-surface px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-[1360px]">
        <div className="flex flex-col justify-between gap-8 border-b border-border pb-12 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-7 text-[11px] text-primary">STAY CONNECTED</p>
            <h2 className="text-5xl font-light uppercase leading-[.9] tracking-[-0.04em] md:text-7xl">
              Join the
              <br />
              <strong className="font-bold">community</strong>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-muted-foreground md:text-base">
            NACOSites stay in touch across every channel. Pick whichever fits how you already talk
            to people — updates, resources and opportunities land in all of them.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {communityChannels.map(({ label, href, icon }) => {
            const Icon = icons[icon];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                data-cursor="surface"
                className="benefit-card flex items-center gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary">
                  <Icon className="h-5 w-5 text-primary" />
                </span>
                <span className="text-base font-semibold">{label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
