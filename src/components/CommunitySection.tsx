"use client";

import React, { useState } from "react";
import { COMMUNITY_CHANNELS } from "@/data/initiatives";
import { STUDENT_RESOURCES } from "@/data/faq";
import { 
  Users, 
  ArrowUpRight, 
  ArrowRight, 
  ExternalLink, 
  Copy, 
  Check 
} from "lucide-react";
import { 
  GithubIcon, 
  LinkedinIcon, 
  TwitterXIcon, 
  DiscordIcon,
  WhatsappIcon,
  TelegramIcon 
} from "./BrandIcons";

type IconComponentType = React.ComponentType<{ className?: string }>;

export default function CommunitySection() {
  const [copiedLink, setCopiedLink] = useState(false);

  const getPlatformIcon = (platform: string): IconComponentType => {
    switch (platform) {
      case "Discord":
        return DiscordIcon;
      case "WhatsApp":
        return WhatsappIcon;
      case "GitHub":
        return GithubIcon;
      case "Telegram":
        return TelegramIcon;
      case "X / Twitter":
        return TwitterXIcon;
      case "LinkedIn":
        return LinkedinIcon;
      default:
        return Users;
    }
  };

  const copyInvite = () => {
    navigator.clipboard.writeText("https://discord.gg/nacos-nile");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <section id="community" className="relative py-24 bg-[#070913] border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Official Student Network Banner Card */}
        <div className="rounded-3xl bg-[#0d1021] border border-white/10 p-8 sm:p-12 mb-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest block">
                Official Student Network
              </span>
              <h2 className="font-rector text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight leading-[1.05]">
                Back The Brave. Build With NACOS Nile.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed">
                Join 2,500+ Nile computing students pushing code, hosting study rooms, preparing for tech interviews, and competing in hackathons.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href="https://discord.gg/nacos-nile"
                target="_blank"
                rel="noopener noreferrer"
                className="cut-corner nacos-btn-primary inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-xs font-bold uppercase tracking-wider !py-3.5 !px-6"
              >
                <span>Join Discord Server</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <button
                onClick={copyInvite}
                className="cut-corner px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-4 h-4 text-[#60a5fa]" />
                    <span>Invite Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#60a5fa]" />
                    <span>Copy Invite Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Channels Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest block mb-2">
              06 / Community Channels
            </span>
            <h2 className="font-rector text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
              Connect With The Chapter
            </h2>
          </div>
          <p className="text-sm text-zinc-300 max-w-md leading-relaxed">
            Follow official channels to stay updated on assignment deadlines, tech week hackathons, and departmental announcements.
          </p>
        </div>

        {/* Channels Grid (Desktop / Tablet) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {COMMUNITY_CHANNELS.map((ch) => {
            const Icon = getPlatformIcon(ch.platform);
            return (
              <a
                key={ch.name}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-corner bg-white/[0.02] border border-white/10 p-8 flex flex-col justify-between group hover:border-[#60a5fa]/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 cut-corner-sm bg-[#60a5fa]/10 text-[#60a5fa] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 bg-white/10 text-zinc-300 cut-corner-sm">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="font-rector text-xl font-normal text-white uppercase tracking-tight group-hover:text-[#60a5fa] transition-colors">
                    {ch.name}
                  </h3>
                  <span className="text-xs font-mono text-[#60a5fa] block mb-2">
                    {ch.memberCount}
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-zinc-400 group-hover:text-white">
                  <span>Open Channel</span>
                  <ArrowUpRight className="w-4 h-4 text-[#60a5fa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Compact Channels List (Mobile - All 6 visible in single screen) */}
        <div className="md:hidden flex flex-col gap-2.5 mt-8">
          {COMMUNITY_CHANNELS.map((ch) => {
            const Icon = getPlatformIcon(ch.platform);
            return (
              <a
                key={ch.name}
                href={ch.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-corner-sm bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 p-3.5 flex items-center justify-between gap-3 group transition-all"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 cut-corner-sm bg-[#60a5fa]/10 text-[#60a5fa] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-rector text-sm text-white uppercase tracking-tight truncate group-hover:text-[#60a5fa] transition-colors">
                      {ch.name}
                    </h3>
                    <span className="text-[11px] font-mono text-[#60a5fa] block truncate">
                      {ch.memberCount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 text-xs font-mono text-zinc-400 group-hover:text-white">
                  <span className="text-[10px] uppercase tracking-wider">Join</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#60a5fa] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Student Resources Vault */}
        <div className="mt-20 pt-16 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono text-[#60a5fa] uppercase tracking-widest block mb-1">
                Student Toolkit
              </span>
              <h3 className="font-rector text-2xl sm:text-3xl font-normal text-white uppercase">
                Resource Vault
              </h3>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm">
              Free tools, lecture archives, and university administrative portals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STUDENT_RESOURCES.map((res) => (
              <a
                key={res.title}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cut-corner-sm p-5 bg-white/[0.02] border border-white/10 hover:border-[#60a5fa]/40 transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase text-zinc-400">
                    {res.tag}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#60a5fa]" />
                </div>
                <h4 className="text-sm font-bold text-white uppercase group-hover:text-[#60a5fa] transition-colors mb-1">
                  {res.title}
                </h4>
                <p className="text-xs text-zinc-400 line-clamp-2">
                  {res.description}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
