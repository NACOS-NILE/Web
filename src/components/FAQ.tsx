"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Who is eligible to become an active member of NACOS Nile?",
    answer:
      "All registered undergraduate and postgraduate students in the Faculty of Natural and Applied Sciences (FNAS) across our 6 computing disciplines (Computer Science, Software Engineering, Cyber Security, Information Technology, Information Systems, and Data Science) are automatically eligible for membership, voting rights, and program access.",
    category: "Membership",
  },
  {
    question: "Can 100L freshmen participate in hackathons and technical bootcamps?",
    answer:
      "Absolutely. Our Director of Training & Development (DTD) curates tiered tracks starting with 'Zero-to-One' workshops in Python and modern web fundamentals, pairing junior students with senior mentors during hackathons so everyone can build and contribute from their first semester.",
    category: "Activities",
  },
  {
    question: "How do departmental dues and student member benefits work?",
    answer:
      "Departmental dues directly fund student hackathons, laboratory equipment, exam revision circles, and guest speaker sessions. Members who excel in collegiate challenges, hackathons, and executive service are eligible for official chapter dues waivers and merit awards.",
    category: "Dues & Membership",
  },
  {
    question: "How can I access study circles and past exam revision materials?",
    answer:
      "Revision circles are conducted both in physical Nile lecture theatres and virtually prior to midterms and exams. Verified past questions, lab code templates, and notes are continuously maintained inside our official Telegram and Discord study channels.",
    category: "Academics",
  },
  {
    question: "Where is the physical NACOS Nile secretariat located on campus?",
    answer:
      "The physical chapter hub is located within the Faculty of Natural and Applied Sciences (FNAS) Building, Nile University of Nigeria, Plot 681 Cadastral Zone C-OO, Research & Institution Area, Jabi Airport Bypass, Abuja.",
    category: "Campus Secretariat",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#060b19] border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#75b947] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Student Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-normal">
            Essential information regarding membership, dues waivers, campus hackathons, and academic revision clinics.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "bg-[#0b1429] border-[#75b947]/40 shadow-lg"
                    : "bg-[#0b1429]/50 border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-[#75b947]">
                      {faq.category}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-full bg-white/[0.04] text-slate-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#75b947]" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.answer}
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
