import React from "react";
import Image from "next/image";
import {
  MessageSquare,
  Send,
  Share2,
  ArrowUpRight,
  Camera,
} from "lucide-react";

export default function CommunitySection() {
  const socialChannels = [
    {
      name: "Discord",
      icon: <MessageSquare className="h-5 w-5 text-[#60a5fa]" />,
      href: "https://discord.gg/example",
      desc: "For live dev chats & study channels",
    },
    {
      name: "WhatsApp",
      icon: <Send className="h-5 w-5 text-[#34d399]" />,
      href: "https://chat.whatsapp.com/example",
      desc: "For official announcements & updates",
    },
    {
      name: "Telegram",
      icon: <Share2 className="h-5 w-5 text-[#a78bfa]" />,
      href: "https://t.me/example",
      desc: "For community discussion & resources",
    },
  ];

  const dinnerPhotos = [
    "MOE03021-1.jpg",
    "MOE03093.jpg",
    "MOE03138.jpg",
    "MOE03158.jpg",
    "MOE03191.jpg",
    "MOE03273.jpg",
    "MOE03300.jpg",
    "MOE03297.jpg",
    "MOE03305.jpg",
  ];

  return (
    <section
      id="community"
      className="relative w-full overflow-hidden bg-[#16255A]"
    >
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#60a5fa]/20 bg-[#274193]/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
            Get Connected
          </div>

          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Join the Student Community
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            Connect with peer developers, stay updated on upcoming events, ask
            questions, and share projects across our social channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-[#274193] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#2d4ba3]"
            >
              <div className="rounded-xl border border-white/10 bg-[#1d3272] p-3 transition-colors duration-300 group-hover:bg-[#203979]">
                {channel.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-white">
                    {channel.name}
                  </h3>

                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-white" />
                </div>

                <p className="mt-1 text-xs leading-relaxed text-white/65">
                  {channel.desc}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#60a5fa]">
                <Camera className="h-3.5 w-3.5" />
                Photo Gallery
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Dinner Night Highlights
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/65">
                A selection of moments from the NACOS Nile Dinner &amp; Awards
                Night.
              </p>
            </div>

            <a
              href="https://dhmedia270.pixieset.com/acolorsshownacosnilechapter/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#304994] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#3a56ab]"
            >
              View Full Gallery
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {dinnerPhotos.map((photo, index) => (
              <a
                key={photo}
                href={`https://dhmedia270.pixieset.com/acolorsshownacosnilechapter/`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#274193] ${
                  index === 0 ? "col-span-2 row-span-2 min-h-[320px]" : "min-h-[180px]"
                }`}
                aria-label="Open the full Dinner Night photo gallery"
              >
                <Image
                  src={`/dinner-night/${photo}`}
                  alt="NACOS Nile Dinner Night"
                  fill
                  sizes={
                    index === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1733]/55 via-transparent to-transparent opacity-70" />
              </a>
            ))}
          </div>

          {/* <p className="mt-4 text-xs text-white/45">
            Full album available on Pixieset. Download PIN: 2501.
          </p> */}
        </div>
      </div>
    </section>
  );
}
