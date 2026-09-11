"use client";

import React, { useState, useEffect } from "react";
import { Search, ArrowRight, X, Users, Calendar, BookOpen, Sparkles, Copy, Check, Camera, Key } from "lucide-react";
import { EXCO_PROFILES, GALA_ALBUM_INFO } from "@/data/nacosData";

interface CommandItem {
  id: string;
  title: string;
  category: "Navigation" | "Action" | "Leadership";
  shortcut?: string;
  action: () => void;
  icon: React.ElementType;
}

export default function CommandPalette({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [copiedAction, setCopiedAction] = useState<string>("");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAction(label);
    setTimeout(() => setCopiedAction(""), 2000);
  };

  const jumpTo = (id: string) => {
    onClose();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const baseCommands: CommandItem[] = [
    {
      id: "nav-about",
      title: "About NACOS Nile & Academic Foundation",
      category: "Navigation",
      action: () => jumpTo("about"),
      icon: BookOpen,
    },
    {
      id: "nav-disciplines",
      title: "6 Nile Computing Disciplines (CSC, SEN, CYB, ITE, IFS, DSC)",
      category: "Navigation",
      action: () => jumpTo("disciplines"),
      icon: Sparkles,
    },
    {
      id: "nav-pillars",
      title: "Signature Triad: LEARN • BUILD • GROW",
      category: "Navigation",
      action: () => jumpTo("pillars"),
      icon: ArrowRight,
    },
    {
      id: "nav-initiatives",
      title: "Flagship Initiatives: Bootcamps, Hackathons, Tutorials",
      category: "Navigation",
      action: () => jumpTo("initiatives"),
      icon: Sparkles,
    },
    {
      id: "nav-leadership",
      title: "Executive Council 2026 (9 Student Leaders)",
      category: "Navigation",
      action: () => jumpTo("leadership"),
      icon: Users,
    },
    {
      id: "nav-events",
      title: "Chapter Events & Hackathons (Nile Tech Week, CTF Challenge)",
      category: "Navigation",
      action: () => jumpTo("events"),
      icon: Calendar,
    },
    {
      id: "nav-gala",
      title: "A Colors Show: Annual Dinner & Awards Gala (160+ Official Photos)",
      category: "Navigation",
      action: () => jumpTo("gala"),
      icon: Camera,
    },
    {
      id: "nav-community",
      title: "Community Channels (Discord, WhatsApp, Telegram, X)",
      category: "Navigation",
      action: () => jumpTo("community"),
      icon: Users,
    },
    {
      id: "act-copy-gala-pin",
      title: `Copy Pixieset Dinner Photos Download PIN (${GALA_ALBUM_INFO.downloadPin})`,
      category: "Action",
      action: () => copyToClipboard(GALA_ALBUM_INFO.downloadPin, "act-copy-gala-pin"),
      icon: Key,
    },
    {
      id: "act-copy-discord",
      title: "Copy Official Discord Guild Invite Link",
      category: "Action",
      action: () => copyToClipboard("https://discord.gg/nacos-nile", "act-copy-discord"),
      icon: Copy,
    },
    {
      id: "act-copy-whatsapp",
      title: "Copy Official WhatsApp Community Link",
      category: "Action",
      action: () => copyToClipboard("https://chat.whatsapp.com/nacos-nile", "act-copy-whatsapp"),
      icon: Copy,
    },
  ];

  // Dynamically add excos as searchable items
  const excoCommands: CommandItem[] = EXCO_PROFILES.map((exco) => ({
    id: `exco-${exco.id}`,
    title: `${exco.name} — ${exco.role} (${exco.department})`,
    category: "Leadership",
    action: () => jumpTo("leadership"),
    icon: Users,
  }));

  const allItems = [...baseCommands, ...excoCommands];

  const filteredItems = query.trim()
    ? allItems.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  const safeSelectedIndex =
    selectedIndex < filteredItems.length ? selectedIndex : 0;

  useEffect(() => {
    const handleNav = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(
          (prev) => (prev - 1 + (filteredItems.length || 1)) % (filteredItems.length || 1)
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredItems[safeSelectedIndex]) {
          filteredItems[safeSelectedIndex].action();
        }
      }
    };
    window.addEventListener("keydown", handleNav);
    return () => window.removeEventListener("keydown", handleNav);
  }, [isOpen, filteredItems, safeSelectedIndex]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/80 backdrop-blur-md animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full rounded-2xl bg-[#0b1429] border border-white/[0.15] shadow-2xl overflow-hidden flex flex-col max-h-[75vh]"
      >
        {/* Search Header */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#070e22]">
          <Search className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
          <input
            type="text"
            placeholder="Type a section, executive, or command..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none font-mono"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] text-xs font-mono"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 space-y-1 divide-y divide-white/[0.04]">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs font-mono text-slate-400">
              No matching sections or executives found for &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isCopied = copiedAction === item.id;
              const isSelected = safeSelectedIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full px-4 py-3 rounded-xl flex items-center justify-between text-left transition-colors group focus:outline-none ${
                    isSelected
                      ? "bg-white/[0.09] border-l-2 border-l-[#75b947]"
                      : "hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-[#75b947]/20 text-[#75b947]"
                          : "bg-white/[0.04] text-slate-400 group-hover:text-[#75b947] group-hover:bg-[#75b947]/10"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white block">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isCopied ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#75b947]">
                        <Check className="w-3.5 h-3.5" />
                        Copied!
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    )}
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#060b19] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-white">ESC</kbd> to close
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] text-white">↵</kbd> to select
            </span>
          </div>
          <span className="text-[#75b947]">NACOS Nile Quick Index</span>
        </div>
      </div>
    </div>
  );
}
