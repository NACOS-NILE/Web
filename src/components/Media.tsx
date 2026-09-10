import React from 'react';
import { MessageSquare, Send, Share2,  ArrowUpRight } from 'lucide-react';

export default function CommunitySection() {
  const socialChannels = [
    { name: "Discord", icon: <MessageSquare className="w-5 h-5" />, href: "https://discord.gg/example", desc: "For live dev chats & study channels" },
    { name: "WhatsApp", icon: <Send className="w-5 h-5" />, href: "https://chat.whatsapp.com/example", desc: "For official announcements & updates" },
    { name: "Telegram", icon: <Share2 className="w-5 h-5" />, href: "https://t.me/example", desc: "For community discussion & resources" },
  ];

  return (
    <section id="community" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-slate-800/60 bg-[#090d16]">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
          Get Connected
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Join the Student Community
        </h2>
        <p className="text-slate-400 text-lg">
          Connect with peer developers, stay updated on upcoming events, ask questions, and share projects across our social channels.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {socialChannels.map((channel, idx) => (
          <a
            key={idx}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-emerald-500/40 hover:bg-slate-800/40 transition-all duration-300 flex items-start gap-4"
          >
            <div className="p-3 rounded-xl bg-slate-800 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
              {channel.icon}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {channel.name}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" />
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {channel.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}