"use client";

import { useState } from "react";

const channels = [
  {
    name: "Discord",
    short: "DS",
    description: "Community discussions, collaboration, and shared learning.",
    href: null,
    action: "Coming soon",
  },
  {
    name: "WhatsApp",
    short: "WA",
    description:
      "Official announcements and quick chats for verified NACOS Nile students.",
    href: null,
    action: "Request Access",
  },
  {
    name: "Telegram",
    short: "TG",
    description: "Stay connected and keep up with community updates.",
    href: null,
    action: "Coming soon",
  },
  {
    name: "X / Twitter",
    short: "X",
    description: "Follow NACOS Nile for updates and announcements.",
    href: "https://x.com/NacosNileUni",
    action: "Visit platform",
  },
  {
    name: "Instagram",
    short: "IG",
    description:
      "Follow the chapter's activities, events, and community moments.",
    href: "https://www.instagram.com/nacosnileuni",
    action: "Visit platform",
  },
  {
    name: "LinkedIn",
    short: "in",
    description:
      "Connect with NACOS Nile and follow professional updates.",
    href:
      "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
    action: "Visit platform",
  },
  {
    name: "Notion Student Hub",
    short: "N",
    description:
      "Access shared resources and keep up with the NACOS Nile events calendar.",
    href:
      "https://app.notion.com/p/NACOS-NILE-CHAPTER-2e2374d50eeb81969ab6cb677eeb44a8?source=copy_link",
    action: "Open Notion Hub",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/nacosnileuni",
  },
  {
    name: "X / Twitter",
    href: "https://x.com/NacosNileUni",
  },
  {
    name: "LinkedIn",
    href:
      "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
  },
];

export default function Community() {
  const [showWhatsAppInfo, setShowWhatsAppInfo] = useState(false);

  return (
    <section
      id="community"
      className="relative overflow-hidden bg-[#07112a] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Student Community
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
            Stay connected. Keep learning.
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Join the NACOS Nile community, connect with fellow students, access
            shared resources, and stay up to date with events, opportunities,
            and chapter activities.
          </p>
        </div>

        {/* Community channels */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel) => {
            const content = (
              <>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-sm font-bold text-blue-300 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:bg-blue-500/10">
                    {channel.short}
                  </div>

                  {channel.href && (
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-300"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M5 15L15 5M7 5h8v8"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {channel.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {channel.description}
                </p>

                <div className="mt-6 flex items-center text-sm font-medium">
                  {channel.name === "WhatsApp" ? (
                    <button
                      type="button"
                      onClick={() => setShowWhatsAppInfo(true)}
                      className="inline-flex items-center gap-2 text-blue-300 transition-colors duration-300 hover:text-blue-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07112a]"
                    >
                      <span>{channel.action}</span>

                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M4 10h11M11 6l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  ) : (
                    <>
                      <span
                        className={
                          channel.href
                            ? "text-blue-300"
                            : "text-slate-500"
                        }
                      >
                        {channel.action}
                      </span>

                      {channel.href && (
                        <svg
                          aria-hidden="true"
                          className="ml-2 h-4 w-4 text-blue-300 transition-transform duration-300 group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M4 10h11M11 6l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </>
                  )}
                </div>
              </>
            );

            if (channel.href?.startsWith("http")) {
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  {content}
                </a>
              );
            }

            if (channel.href) {
              return (
                <a
                  key={channel.name}
                  href={channel.href}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  {content}
                </a>
              );
            }

            // WhatsApp gets a working "Request Access" button.
            if (channel.name === "WhatsApp") {
              return (
                <div
                  key={channel.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
                >
                  {content}
                </div>
              );
            }

            // Discord and Telegram remain informational until official links
            // are available.
            return (
              <div
                key={channel.name}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
              >
                {content}
              </div>
            );
          })}
        </div>

        {/* Community CTA */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-blue-400/10 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-indigo-500/10 p-7 sm:p-9 lg:p-10">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
                Join the community
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                Your next opportunity could start with a conversation.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                Connect with other NACOS Nile students, discover opportunities,
                and stay informed about what is happening across the chapter.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowWhatsAppInfo(true)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Request Community Access

              <svg
                aria-hidden="true"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4 10h11M11 6l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Social links */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            Follow NACOS Nile across our social platforms.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* WhatsApp access modal */}
      {showWhatsAppInfo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="whatsapp-modal-title"
          onClick={() => setShowWhatsAppInfo(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d1733] p-7 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                  WhatsApp Community
                </p>

                <h3
                  id="whatsapp-modal-title"
                  className="mt-3 text-2xl font-bold tracking-[-0.02em] text-white"
                >
                  Need access?
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setShowWhatsAppInfo(false)}
                aria-label="Close WhatsApp access information"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              To join the official NACOS Nile WhatsApp community, please
              contact your course representative or any NACOS Nile executive
              for the verified group link.
            </p>

            <button
              type="button"
              onClick={() => setShowWhatsAppInfo(false)}
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}