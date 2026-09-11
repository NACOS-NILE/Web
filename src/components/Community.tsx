"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { FaXTwitter, FaInstagram, FaLinkedin, FaFacebook, FaGithub, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import type { IconType } from 'react-icons'; // <-- ADD THIS IMPORT

type Social = {
  name: string;
  handle: string;
  description: string;
  icon: IconType; // <-- CHANGE 'any' TO 'IconType'
  href?: string;
  active: boolean;
  tag?: string;
  isPopup?: boolean;
};

const socials: Social[] = [
  {
    name: "Instagram",
    handle: "@nacosnileuni",
    description: "Event highlights, tech week photos, and campus culture.",
    icon: FaInstagram,
    href: "https://www.instagram.com/nacosnileuni",
    active: true
  },
  {
    name: "LinkedIn",
    handle: "NACOS Nile University",
    description: "Professional networking, alumni connections, and tech opportunities.",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/company/nacos-nile-university-of-nigeria-chapter/",
    active: true
  },
  {
    name: "X (Twitter)",
    handle: "@NacosNileUni",
    description: "Real-time updates, tech news, and community threads.",
    icon: FaXTwitter,
    href: "https://x.com/NacosNileUni",
    active: true
  },
  {
    name: "Facebook",
    handle: "Innovation Summit",
    description: "Summit events, tech groups, and community discussions.",
    icon: FaFacebook,
    href: "https://www.facebook.com/events/nile-university-of-nigeria/nacos-innovation-and-software-summit/1632656686939532/",
    active: true
  },
  {
    name: "TikTok",
    handle: "nacosnileuni",
    description: "Short-form tech content, day-in-the-life, and campus trends.",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@nacosnileuni",
    active: true,
  },
  {
    name: "GitHub",
    handle: "nacos-nile",
    description: "Open source chapter projects and collaborative codebases.",
    icon: FaGithub,
    href: "https://github.com/NACOS-NILE",
    active: true,
  },
  {
    name: "WhatsApp",
    handle: "Class Groups",
    description: "Join your official group for announcements, assignments, and onboarding.",
    icon: FaWhatsapp,
    active: true,
    isPopup: true, 
  }
];

export default function Community() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="community" className="w-full py-16 relative z-10 bg-slate-50 dark:bg-black/10 border-y border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              Community Network
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-gray-400 mt-2 max-w-xl text-base"
            >
              Connect with the collective. Follow our digital footprint across the web.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            
            return (
              <motion.a
                key={index}
                href={social.isPopup ? undefined : (social.active ? social.href : undefined)}
                target={social.isPopup ? undefined : (social.active ? "_blank" : undefined)}
                rel={social.isPopup ? undefined : "noreferrer"}
                onClick={(e) => {
                  if (social.isPopup) {
                    e.preventDefault();
                    setShowPopup(true);
                  }
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group flex flex-col justify-between p-6 rounded-lg border transition-all duration-200 
                  ${social.active 
                    ? "bg-white dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md cursor-pointer" 
                    : "bg-slate-50 dark:bg-slate-900/30 border-dashed border-slate-300 dark:border-slate-800 cursor-not-allowed opacity-75"
                  }
                `}
              >
                
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 transition-colors ${social.active ? 'group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200 dark:group-hover:bg-blue-900/30 dark:group-hover:text-blue-400 dark:group-hover:border-blue-800' : ''}`}>
                    <Icon size={18} />
                  </div>
                  
                  {social.active ? (
                    <span className="text-slate-400 group-hover:text-blue-500 transition-colors font-mono text-lg leading-none">
                      {social.isPopup ? "💬" : "↗"}
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-500 bg-white dark:bg-black">
                      {social.tag}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                    {social.name}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-mono text-xs mb-3">{social.handle}</p>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">
                    {social.description}
                  </p>
                </div>

              </motion.a>
            );
          })}
        </div>

      </div>

      {/* WhatsApp Popup Modal */}
      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 max-w-sm w-full shadow-2xl border border-slate-200 dark:border-slate-800 relative"
            >
              <button 
                onClick={() => setShowPopup(false)} 
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-5">
                <FaWhatsapp size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Join the WhatsApp Group
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Please contact your <strong className="text-slate-900 dark:text-white">course representative</strong>. They will guide you through the onboarding process and securely add you to the official NACOS group.
              </p>
              
              <button 
                onClick={() => setShowPopup(false)} 
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-sm"
              >
                Got it, thanks!
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}