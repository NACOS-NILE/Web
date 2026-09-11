"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Send, MessageSquare, Lightbulb } from 'lucide-react';

const faqs = [
  { question: "What is NACOS Nile?", answer: "NACOS Nile is the official Computing Students' Organization at Nile University, providing a platform to connect, learn, and build real-world tech." },
  { question: "Do I have to pay dues?", answer: "Yes, departmental dues are mandatory for all computing students to fund workshops, events, and community initiatives." },
  { question: "What sort of events hold if I pay dues?", answer: "We host tech bootcamps, hackathons, networking mixers, and the annual NACOS Tech Week." },
  { question: "Can I join if I am in 100 level?", answer: "Absolutely! The earlier you join the community, the faster you will grow your skills." }
];

export default function Support() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'question' | 'suggestion'>('question');

  return (
    <section className="w-full py-24 relative z-10 bg-slate-50 dark:bg-black/10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Support & <span className="text-nacos-accent">FAQ</span>
          </h2>
          <p className="text-slate-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Got questions about the chapter or a brilliant idea for our next event? Let us know.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: FAQ Accordion */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/50 rounded-2xl overflow-hidden transition-colors">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-900 dark:text-white font-semibold"
                >
                  {faq.question}
                  <ChevronDown className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180 text-nacos-accent' : 'text-slate-400'}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="p-5 pt-0 text-slate-600 dark:text-gray-400 leading-relaxed border-t border-slate-100 dark:border-white/5">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Column: Tabbed Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
            
            {/* Tabs */}
            <div className="flex border-b border-slate-200 dark:border-white/10 mb-8">
              <button 
                onClick={() => setActiveTab('question')}
                className={`flex-1 pb-4 flex items-center justify-center gap-2 font-semibold transition-colors relative ${activeTab === 'question' ? 'text-nacos-accent' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <MessageSquare size={18} /> Ask a Question
                {activeTab === 'question' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-nacos-accent" />}
              </button>
              <button 
                onClick={() => setActiveTab('suggestion')}
                className={`flex-1 pb-4 flex items-center justify-center gap-2 font-semibold transition-colors relative ${activeTab === 'suggestion' ? 'text-nacos-accent' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
              >
                <Lightbulb size={18} /> Suggestion Box
                {activeTab === 'suggestion' && <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-nacos-accent" />}
              </button>
            </div>

            {/* Form */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-nacos-accent focus:ring-1 focus:ring-nacos-accent transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-nacos-accent focus:ring-1 focus:ring-nacos-accent transition-all" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <select className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-nacos-accent focus:ring-1 focus:ring-nacos-accent transition-all appearance-none cursor-pointer">
                  {activeTab === 'question' ? (
                    <>
                      <option>Academic Inquiry</option>
                      <option>Membership / Dues</option>
                      <option>Event Information</option>
                    </>
                  ) : (
                    <>
                      <option>Event Idea</option>
                      <option>Community Improvement</option>
                      <option>Other Suggestion</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea rows={4} placeholder={activeTab === 'question' ? "How can we help you?" : "Share your brilliant idea with the team..."} className="w-full bg-slate-50 dark:bg-black/20 border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:border-nacos-accent focus:ring-1 focus:ring-nacos-accent transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-nacos-accent hover:bg-blue-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all">
                <Send size={18} /> Send Message
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
}