"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is eligible to be a member of NACOS Nile?",
    a: "Every student matriculated under any of the six computing disciplines (Computer Science, Software Engineering, Cyber Security, Data Science, Information Technology, and Information Systems) at Nile University of Nigeria is automatically an esteemed member of NACOS Nile.",
  },
  {
    q: "Can 100L or first-year students participate in hackathons and workshops?",
    a: "Absolutely! We actively encourage freshers to join our coding bootcamps, academic study circles, and tech hackathons. We often have dedicated junior categories, beginner-friendly tracks, and senior student mentors to guide you every step of the way.",
  },
  {
    q: "How do I pay my departmental dues or confirm my dues waiver?",
    a: "Departmental dues payment details and receipts are coordinated with the Financial Secretary (Amira Ibrahim). If you are participating in NACOS hackathons or contests like the landing page competition, winning teams receive their official NACOS Nile dues waiver directly.",
  },
  {
    q: "Where are academic tutorials and tech sessions held on campus?",
    a: "In-person sessions take place primarily in the Nile Faculty of Computing computer labs and designated tutorial lecture theatres. Virtual workshops, recordings, and revision links are broadcast across our official WhatsApp and Discord servers.",
  },
  {
    q: "How can I volunteer or join an executive committee?",
    a: "We open recruitment calls for sub-committees (Logistics, Media & PR, Welfare, Technical, and Socials) at the start of each semester. Keep an eye on our WhatsApp announcement community and official Instagram handles!",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-4">
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Everything you need to know about NACOS Nile membership, activities, and campus life.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`glass-card rounded-xl border transition-colors duration-200 overflow-hidden ${
                  isOpen ? "border-blue-500/50 bg-[#0d1733]/90" : "border-blue-900/30 hover:border-blue-500/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <span
                    className={`text-xl text-blue-400 transform transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-blue-900/20 pt-3">
                    {faq.a}
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
