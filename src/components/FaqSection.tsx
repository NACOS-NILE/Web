"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is eligible to join NACOS Nile?",
    a: "Every student matriculated in any of the six computing departments (Computer Science, Software Engineering, Cyber Security, Data Science, Information Technology, and Information Systems) at Nile University of Nigeria is automatically a member.",
  },
  {
    q: "Can first-year (100L) students participate in hackathons & workshops?",
    a: "Yes, definitely! We actively encourage 100L and 200L students to join. Our hackathons include beginner-friendly tracks, and senior students provide hands-on mentorship throughout.",
  },
  {
    q: "Where are academic tutorials and tech sessions held?",
    a: "In-person sessions take place in the Faculty of Computing labs and designated lecture theatres. We also host online workshops and revision streams on Discord and WhatsApp.",
  },
  {
    q: "How do I pay departmental dues or claim a hackathon waiver?",
    a: "Dues payment details are coordinated through the Financial Secretary. If your team won a prize or waiver in an official NACOS Nile hackathon, your dues waiver is applied directly.",
  },
  {
    q: "How can I join an organizing committee or volunteer?",
    a: "Recruitment for sub-committees (Logistics, Media & PR, Technical, and Socials) opens at the beginning of each semester. Calls for volunteers are posted in our WhatsApp community.",
  },
  {
    q: "How do I connect with alumni or find internship advice?",
    a: "We regularly host industry fireside chats with Nile computing alumni working in tech across Nigeria and internationally. Join our LinkedIn and Discord channels to participate.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-28 relative scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              Have questions about NACOS Nile membership, tutorials, or events? Here are answers to common questions from Nile computing students.
            </p>
            <div className="p-5 rounded-xl glass-card border border-slate-800 text-left">
              <p className="text-xs text-slate-400 mb-2">Still have a question?</p>
              <a
                href="#community"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 transition flex items-center gap-1"
              >
                Ask on our student community groups →
              </a>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`glass-card rounded-xl border transition-colors duration-200 overflow-hidden ${
                    isOpen ? "border-blue-500/50 bg-[#0c142b]" : "border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white">
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
                    <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
