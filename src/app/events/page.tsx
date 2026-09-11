"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { EventDetailModal } from "@/components/EventsSection";
import { events, type EventItem } from "@/data/events";

// Same-shape "today" comparison as EventsSection — see the comment there on
// why this is computed directly in render (a layout decision: which events
// render greyed-out) rather than deferred to an effect.
const TODAY_ISO = new Date().toISOString().slice(0, 10);

const TimeIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PinIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

function EventCard({
  item,
  isPast,
  onSelect,
}: {
  item: EventItem;
  isPast: boolean;
  onSelect: (item: EventItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(item)}
      className={`group flex flex-col text-left rounded-2xl sm:rounded-3xl border bg-white overflow-hidden transition-all duration-300 cursor-pointer ${
        isPast
          ? "border-gray-200/60 opacity-60 grayscale hover:opacity-100 hover:grayscale-0"
          : "border-gray-200/80 hover:border-[#274193]/30 hover:shadow-lg hover:-translate-y-0.5"
      }`}
    >
      <div className="relative h-44 sm:h-48 shrink-0 overflow-hidden bg-gray-100">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

        <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
          {item.tag}
        </span>
        {isPast && (
          <span className="absolute top-3 right-3 text-[10px] font-mono font-semibold uppercase tracking-wider text-white bg-gray-950/60 backdrop-blur-sm px-2.5 py-1 rounded-full">
            Past
          </span>
        )}

        {/* Same bold date-badge treatment as the homepage polaroid timeline. */}
        <span className="absolute bottom-3 left-3 flex flex-col items-center justify-center leading-none bg-white text-gray-950 rounded-md px-2 py-1 shadow-sm">
          <span className="text-[8px] font-bold uppercase tracking-wider text-gray-500">{item.month}</span>
          <span className="text-base font-black">{item.day}</span>
        </span>
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mt-2 line-clamp-2 flex-1">
          {item.description}
        </p>

        <div className="flex flex-col gap-1.5 mt-4 text-xs sm:text-sm text-gray-500 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <TimeIcon />
            {item.time}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <PinIcon />
            {item.location}
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-bold text-[#274193] group-hover:text-[#1e3478] transition-colors w-fit">
          <span>{isPast ? "See what happened" : "Details & RSVP"}</span>
          <ArrowIcon />
        </span>
      </div>
    </button>
  );
}

export default function EventsPage() {
  const [activeTag, setActiveTag] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const tags = useMemo(
    () => ["All", ...Array.from(new Set(events.map((e) => e.tag))).sort()],
    []
  );

  const filtered = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return events.filter((e) => {
      const matchesTag = activeTag === "All" || e.tag === activeTag;
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q);
      return matchesTag && matchesSearch;
    });
  }, [activeTag, searchQuery]);

  const sorted = [...filtered].sort((a, b) => a.dateISO.localeCompare(b.dateISO));
  const upcoming = sorted.filter((e) => e.dateISO >= TODAY_ISO);
  const past = [...sorted.filter((e) => e.dateISO < TODAY_ISO)].reverse();

  return (
    <div className="min-h-screen bg-white text-gray-950 flex flex-col selection:bg-[#274193] selection:text-white">
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 sm:pb-28">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            All <span className="text-[#274193]">events</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed mt-3 max-w-md">
            Everything NACOS Nile has run and what&apos;s still coming up — past events shown greyed out.
          </p>
        </div>

        {/* CONTROLS: TAG FILTER PILLS + SEARCH BAR — same pattern as /featured */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeTag === tag
                    ? "bg-[#274193] text-white shadow-sm"
                    : "bg-[#F6F6F6] text-gray-600 hover:bg-gray-200/80 hover:text-gray-950"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 shrink-0">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events, venues..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F6F6F6] border border-transparent focus:border-gray-300 focus:bg-white text-xs sm:text-sm text-gray-900 placeholder:text-gray-500 outline-none transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-800 text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {sorted.length === 0 ? (
          <div className="text-center py-20 bg-[#F6F6F6] rounded-3xl p-8">
            <p className="text-base font-bold text-gray-800">No events found matching your search.</p>
            <p className="text-xs text-gray-500 mt-1">Try searching for a different keyword or select another tag.</p>
            <button
              type="button"
              onClick={() => {
                setActiveTag("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#274193] text-white text-xs font-bold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <div className="mb-12 sm:mb-16">
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-500 font-bold mb-5 sm:mb-6">
                  Upcoming
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {upcoming.map((item) => (
                    <EventCard key={item.id} item={item} isPast={false} onSelect={setSelectedEvent} />
                  ))}
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-500 font-bold mb-5 sm:mb-6">
                  Past
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {past.map((item) => (
                    <EventCard key={item.id} item={item} isPast={true} onSelect={setSelectedEvent} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />

      <EventDetailModal item={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
