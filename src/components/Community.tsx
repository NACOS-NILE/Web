"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { COMMUNITY_CHANNELS, CommunityChannel } from "@/data/nacosData";

export default function Community() {
  const [copiedId, setCopiedId] = useState<string>("");

  const copyLink = (channel: CommunityChannel) => {
    navigator.clipboard.writeText(`https://${channel.handle}`);
    setCopiedId(channel.id);
    setTimeout(() => setCopiedId(""), 2500);
  };

  const getPlatformIcon = (type: CommunityChannel["iconType"]) => {
    switch (type) {
      case "message-square":
        return (
          <svg className="w-5 h-5 fill-[#5865F2]" viewBox="0 0 24 24">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
          </svg>
        );
      case "users":
        return (
          <svg className="w-5 h-5 fill-[#25D366]" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.669-.699c.983.538 1.838.82 2.791.82 3.181 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm3.385 8.163c-.145.408-.847.78-1.173.83-.326.05-.758.077-2.18-.513-1.423-.59-2.34-2.025-2.41-2.118-.071-.093-.578-.769-.578-1.467s.365-1.042.496-1.185c.13-.143.285-.179.38-.179.095 0 .19.002.272.006.088.004.205-.033.321.246.12.288.408 1.002.444 1.076.036.074.06.16.012.256-.048.095-.072.155-.144.238-.072.083-.151.185-.216.248-.072.07-.147.146-.063.29.084.143.374.617.803.999.553.492 1.02.644 1.164.716.144.072.228.06.312-.036.084-.096.36-.42.456-.563.096-.144.192-.12.324-.072.132.048.84.396.984.468.144.072.24.108.276.168.036.06.036.348-.109.756z" />
          </svg>
        );
      case "send":
        return (
          <svg className="w-5 h-5 fill-[#229ED9]" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z" />
          </svg>
        );
      case "twitter":
        return (
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5 fill-pink-500" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5 fill-[#0077B5]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      default:
        return <MessageSquare className="w-5 h-5 text-[#75b947]" />;
    }
  };

  return (
    <section id="community" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span>Network & Social Nexus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Connect to the Nile Ecosystem
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
              Whether you want to debug an algorithm in Discord, grab exam notes from Telegram, or celebrate hackathon wins on X—find your peers across our official verified channels.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#75b947]" />
            <div className="text-xs font-mono">
              <span className="text-white font-semibold block">Official NACOS Nile Hubs</span>
              <span className="text-slate-400">Moderated by Student Council</span>
            </div>
          </div>
        </div>

        {/* 6 Official Community Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {COMMUNITY_CHANNELS.map((channel) => (
            <div
              key={channel.id}
              className="group p-6 sm:p-7 rounded-3xl bg-[#0b1429]/80 border border-white/[0.08] hover:border-[#75b947]/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]">
                      {getPlatformIcon(channel.iconType)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-[#75b947] transition-colors">
                        {channel.name}
                      </h3>
                      <span className="text-[11px] font-mono text-[#75b947]">
                        {channel.badgeText}
                      </span>
                    </div>
                  </div>

                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/[0.04] hover:bg-[#75b947] text-slate-400 hover:text-[#060b19] transition-all"
                    aria-label={`Visit NACOS Nile on ${channel.platform}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {channel.description}
                </p>
              </div>

              {/* Card Bottom: Handle & Copy Button */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400 truncate max-w-[170px]">
                  {channel.handle}
                </span>

                <button
                  onClick={() => copyLink(channel)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors focus:outline-none"
                  title="Copy channel invite link"
                >
                  {copiedId === channel.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#75b947]" />
                      <span className="text-[#75b947]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Physical Nexus Box */}
        <div className="p-8 rounded-3xl bg-[#0b1429] border border-white/[0.1] shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-[#274193]/30 border border-[#274193] text-[#3b82f6] flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#75b947] uppercase tracking-widest block mb-1">
                Physical Campus Secretariat
              </span>
              <h4 className="text-lg font-bold text-white mb-1">
                Faculty of Natural and Applied Sciences (FNAS), Nile University of Nigeria
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-mono">
                Plot 681, Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass, Abuja, FCT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#about"
              className="px-5 py-2.5 rounded-xl text-xs font-mono font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-all whitespace-nowrap"
            >
              Academic Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
