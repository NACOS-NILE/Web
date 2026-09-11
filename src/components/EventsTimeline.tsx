"use client";

import React, { useState } from "react";
import {
  MapPin,
  Award,
  ChevronDown,
  ChevronUp,
  CalendarPlus,
  Check,
} from "lucide-react";
import { CHAPTER_EVENTS, ChapterEvent } from "@/data/nacosData";

export default function EventsTimeline() {
  const [expandedEventId, setExpandedEventId] = useState<string>("annual-hackathon");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [downloadedId, setDownloadedId] = useState<string>("");

  const toggleExpand = (id: string) => {
    setExpandedEventId((prev) => (prev === id ? "" : id));
  };

  const downloadIcs = (event: ChapterEvent, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!event.calendarData) return;
    const { startDate, endDate, summary, description, location, filename } =
      event.calendarData;
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//NACOS Nile Chapter//Nile University//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${event.id}-2026@nacos-nile.org`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
      `DTSTART:${startDate}`,
      `DTEND:${endDate}`,
      `SUMMARY:${summary}`,
      `DESCRIPTION:${description}`,
      `LOCATION:${location}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadedId(event.id);
    setTimeout(() => setDownloadedId(""), 2500);
  };

  const categories = ["All", "Hackathon", "Competition", "Workshop", "Mentorship"];

  const filteredEvents =
    activeCategory === "All"
      ? CHAPTER_EVENTS
      : CHAPTER_EVENTS.filter((e) => e.category === activeCategory);

  const getStatusBadge = (status: ChapterEvent["status"]) => {
    switch (status) {
      case "Active Now":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#75b947]/20 text-[#75b947] border border-[#75b947]/40">
            <span className="w-2 h-2 rounded-full bg-[#75b947] animate-ping" />
            ACTIVE NOW
          </span>
        );
      case "Upcoming":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#3b82f6]/15 text-[#60a5fa] border border-[#60a5fa]/30">
            UPCOMING
          </span>
        );
      case "Annual Flagship":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/20 text-purple-400 border border-purple-500/40">
            ANNUAL FLAGSHIP
          </span>
        );
    }
  };

  return (
    <section id="events" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#75b947]" />
              <span>Calendar & Contests</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Where the Community Comes Alive
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed">
              Hackathons, coding challenges, masterclasses, and executive mixers. Track the live milestones shaping the Nile computing ecosystem.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all focus:outline-none ${
                  activeCategory === cat
                    ? "bg-[#274193] text-white border border-[#75b947]/50 shadow-md"
                    : "bg-white/[0.04] text-slate-400 border border-white/[0.08] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Sophisticated Event Timeline Cards */}
        <div className="space-y-6">
          {filteredEvents.map((event) => {
            const isExpanded = expandedEventId === event.id;
            return (
              <div
                key={event.id}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  event.status === "Active Now"
                    ? "bg-[#0b1429] border-[#75b947]/40 shadow-xl shadow-[#75b947]/5"
                    : "bg-[#0b1429]/60 border-white/[0.08] hover:border-white/[0.15]"
                }`}
              >
                {/* Event Summary Row */}
                <div
                  onClick={() => toggleExpand(event.id)}
                  className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    {/* Date Block */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-center min-w-[140px] flex-shrink-0">
                      <span className="text-xs font-mono uppercase text-[#75b947] block mb-1">
                        TIMELINE
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white block">
                        {event.date}
                      </span>
                    </div>

                    {/* Title & Metadata */}
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        {getStatusBadge(event.status)}
                        <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded bg-white/[0.04]">
                          {event.category}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                        {event.title}
                      </h3>

                      <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Action & Expand Trigger */}
                  <div className="flex flex-wrap items-center justify-between lg:justify-end gap-3 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/[0.06]">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mr-2">
                      <MapPin className="w-3.5 h-3.5 text-[#3b82f6]" />
                      <span className="max-w-[180px] truncate">{event.location}</span>
                    </div>

                    {event.calendarData && (
                      <button
                        onClick={(e) => downloadIcs(event, e)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-[#75b947]/20 border border-white/[0.08] hover:border-[#75b947]/40 text-xs font-mono text-slate-300 hover:text-white transition-all focus:outline-none"
                        title="Download .ics calendar event"
                      >
                        {downloadedId === event.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#75b947]" />
                            <span className="text-[#75b947]">Added ✓</span>
                          </>
                        ) : (
                          <>
                            <CalendarPlus className="w-3.5 h-3.5 text-[#75b947]" />
                            <span>Add to Calendar</span>
                          </>
                        )}
                      </button>
                    )}

                    <button
                      className="p-2 rounded-xl bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors focus:outline-none"
                      aria-label="Toggle event schedule"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Itinerary & Prizes Detail */}
                {isExpanded && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/[0.06] bg-[#070e22]/70">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
                      {/* Schedule Timeline Steps */}
                      <div className="md:col-span-8">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#75b947] block mb-4">
                          {"// Program Schedule & Milestones"}
                        </span>
                        <div className="space-y-4 relative pl-4 border-l border-white/[0.1]">
                          {event.timelineSteps.map((step, idx) => (
                            <div key={idx} className="relative">
                              <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#75b947]" />
                              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                                <span className="text-xs font-mono font-bold text-white min-w-[80px]">
                                  {step.time}
                                </span>
                                <span className="text-sm text-slate-300">
                                  {step.activity}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Prizes / Perks if applicable */}
                      {event.prizes && (
                        <div className="md:col-span-4 p-5 rounded-2xl bg-white/[0.03] border border-[#75b947]/30">
                          <div className="flex items-center gap-2 text-xs font-mono text-[#75b947] mb-2 font-bold">
                            <Award className="w-4 h-4" />
                            <span>PRIZES & RECOGNITION</span>
                          </div>
                          <p className="text-xs sm:text-sm font-mono text-white leading-relaxed">
                            {event.prizes}
                          </p>
                          <span className="mt-3 block text-[11px] text-slate-400 font-mono">
                            Nile University Student ID required for prize eligibility.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
