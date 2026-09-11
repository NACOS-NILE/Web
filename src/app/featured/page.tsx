"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import projectsData from "@/data/featured-projects.json";

interface Project {
  id: string;
  title: string;
  tagline: string;
  builder: string;
  level: string;
  department: string;
  category: "Web & Cloud" | "AI & ML" | "CyberSec & Systems" | "Mobile" | "Tools & OSS";
  tech: string[];
  description: string;
  metric?: string;
  image: string;
  githubUrl: string;
  liveUrl?: string;
  appStoreUrl?: string;
  featured?: boolean;
}

const projects: Project[] = projectsData as Project[];

const categories = [
  "All",
  "Web & Cloud",
  "AI & ML",
  "CyberSec & Systems",
  "Mobile",
  "Tools & OSS",
] as const;

export default function FeaturedPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.builder.toLowerCase().includes(q) ||
        project.department.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-gray-950 flex flex-col selection:bg-[#274193] selection:text-white">
      {/* FLOATING SIGNATURE FROSTED NAVBAR */}
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-20 sm:pb-28">
        {/* EDITORIAL HERO SECTION */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-950 tracking-[-0.035em] leading-[1.08]">
            Shipped at Nile
          </h1>
          <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed mt-3 max-w-md">
            Projects, apps, and tools built by student engineers
          </p>
        </div>

        {/* CONTROLS: CATEGORY PILLS + SEARCH BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 sm:mb-14">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#274193] text-white shadow-sm"
                    : "bg-[#F6F6F6] text-gray-600 hover:bg-gray-200/80 hover:text-gray-950"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72 shrink-0">
            <svg
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects, stack, builders..."
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

        {/* ALTERNATING BENTO GRID (SEAMLESSLY JOINED IMAGE & TEXT IN ONE CARD) */}
        <h2 className="sr-only">Featured Student Projects</h2>
        {filteredProjects.length > 0 ? (
          <div className="space-y-10 sm:space-y-14 lg:space-y-16">
            {filteredProjects.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className="rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-[#F6F6F6] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch transition-all duration-300 group"
                >
                  {/* TEXT CONTENT (INSIDE SAME CARD) */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      {/* Top Category Tag */}
                      <div className="mb-4">
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#274193]">
                          {project.category}
                        </span>
                      </div>

                      {/* Project Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-950 tracking-tight leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-mono text-gray-500 font-medium mt-1 mb-4">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white text-gray-700 shadow-2xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Divider */}
                      <div className="h-px w-full bg-gray-200/70 mb-5" />

                      {/* Builder Credit & Action Links */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#274193]/10 text-[#274193] font-bold text-xs flex items-center justify-center font-mono">
                            {project.builder[0]}
                          </div>
                          <div className="flex flex-col leading-tight">
                            <span className="text-xs sm:text-sm font-bold text-gray-900">
                              {project.builder}
                            </span>
                            <span className="text-[10px] sm:text-xs text-gray-500 font-medium">
                              {project.department} · {project.level}
                            </span>
                          </div>
                        </div>

                        {/* Action Links */}
                        <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                          {project.appStoreUrl && (
                            <a
                              href={project.appStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gray-950 hover:bg-gray-800 text-white text-xs font-bold transition-all shadow-2xs hover:scale-105 active:scale-95"
                            >
                              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.84c.62-.75 1.04-1.8 1.01-2.84-.96.04-2.13.64-2.79 1.41-.57.66-1.07 1.73-1.02 2.76 1.07.08 2.18-.58 2.8-1.33" />
                              </svg>
                              <span>App Store</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold transition-all shadow-2xs hover:scale-105 active:scale-95"
                            >
                              <span>Live Platform</span>
                              <svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-gray-100 text-gray-900 text-xs font-bold transition-all shadow-2xs hover:scale-105 active:scale-95"
                            >
                              <svg className="w-3.5 h-3.5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                              </svg>
                              <span>GitHub</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SHOWCASE VISUAL: FLOATING BRAND ASSET WITH AMBIENT GLOW */}
                  <div
                    className={`lg:col-span-5 relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-full overflow-hidden flex items-center justify-center p-8 sm:p-12 ${
                      project.id === "refreeg"
                        ? "bg-gradient-to-br from-[#061845] via-[#081b3a] to-[#030a17]"
                        : "bg-gradient-to-br from-[#1b080f] via-[#0e0e14] to-black"
                    } ${isEven ? "lg:order-2" : "lg:order-1"}`}
                  >
                    {/* Atmospheric Ambient Glow */}
                    <div
                      className={`absolute w-64 h-64 rounded-full blur-3xl pointer-events-none ${
                        project.id === "refreeg"
                          ? "bg-[#0A3CB5]/30"
                          : "bg-[#E11D48]/20"
                      }`}
                    />

                    {/* Logo / App Icon Showcase Card */}
                    <div
                      className={`relative overflow-hidden shadow-2xl transition-all duration-500 ease-out group-hover:scale-105 ${
                        project.id === "refreeg"
                          ? "w-60 sm:w-72 h-32 sm:h-38 rounded-[1.8rem] sm:rounded-[2.2rem] bg-white p-6 flex items-center justify-center ring-1 ring-white/40 shadow-[0_20px_50px_-10px_rgba(10,60,181,0.35)]"
                          : "w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-[2.2rem] sm:rounded-[2.8rem] ring-1 ring-white/20 group-hover:shadow-[0_25px_60px_-15px_rgba(225,29,72,0.45)]"
                      }`}
                    >
                      {project.id === "refreeg" ? (
                        <div className="relative w-44 sm:w-52 h-14 sm:h-16 aspect-[202/62]">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={202}
                            height={62}
                            style={{ aspectRatio: "202 / 62" }}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          unoptimized
                          sizes="(max-width: 1024px) 100vw, 42vw"
                          style={{ aspectRatio: "1 / 1" }}
                          className="object-cover object-center"
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-[#F6F6F6] rounded-3xl p-8">
            <p className="text-base font-bold text-gray-800">No projects found matching your search.</p>
            <p className="text-xs text-gray-500 mt-1">Try searching for a different keyword or select another category.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-full bg-[#274193] text-white text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* CALL TO ACTION: SUBMIT YOUR PROJECT */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 md:p-14 rounded-3xl md:rounded-[2.5rem] bg-[#F6F6F6] flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#274193] font-bold block mb-2">
              BUILD WITH NACOS NILE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-950 tracking-tight leading-snug">
              Shipped something at Nile? <br />
              Get your work featured
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mt-3">
              Whether it&apos;s a weekend hackathon demo, a production web service, or an AI research paper, submit your work to inspire the next wave of Nile builders.
            </p>
          </div>

          <a
            href="https://github.com/nacos-nile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#274193] hover:bg-[#1e3478] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <span>Submit a Project</span>
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
