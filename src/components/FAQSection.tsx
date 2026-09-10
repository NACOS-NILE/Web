"use client";

import React, { useState } from "react";
import { FAQS } from "@/data/faq";
import { ChevronDown, ChevronUp, MessageCircleQuestion, ArrowUpRight } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "General", "Membership", "Academic", "Events"];

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory === "All") return true;
    return faq.category === activeCategory;
  });

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#070913] border-t border-white/10 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-mono text-[#c1b3ff] uppercase tracking-widest block">
            05 / Common Queries
          </span>
          <h2 className="font-rector text-3xl sm:text-5xl font-normal text-white uppercase tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-zinc-300 max-w-lg mx-auto">
            Everything you need to know about NACOS Nile membership, dues waivers, code bootcamps, and hackathons.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`cut-corner-sm px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                activeCategory === cat
                  ? "bg-[#c1b3ff] text-[#0c0f1d]"
                  : "bg-white/5 text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="cut-corner bg-[#0c0f1d] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </span>
                  <div className="p-1 cut-corner-sm bg-white/5 text-[#c1b3ff] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                    <p>{faq.answer}</p>
                    <div className="mt-4">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 text-[#c1b3ff] cut-corner-sm">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help */}
        <div className="mt-12 p-6 cut-corner bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 cut-corner-sm bg-[#c1b3ff]/10 flex items-center justify-center shrink-0">
              <MessageCircleQuestion className="w-5 h-5 text-[#c1b3ff]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white uppercase">Have a specific question?</h4>
              <p className="text-xs text-zinc-400">Reach out directly to the Secretariat team on Discord.</p>
            </div>
          </div>
          <a
            href="https://discord.gg/nacos-nile"
            target="_blank"
            rel="noopener noreferrer"
            className="cut-corner inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-[#c1b3ff] hover:text-[#0c0f1d] text-xs font-bold uppercase tracking-wider text-white transition-colors whitespace-nowrap"
          >
            <span>Ask on Discord</span>
            <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
          </a>
        </div>

      </div>
    </section>
  );
}
