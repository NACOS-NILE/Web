import React from 'react';
import { MapPin, } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 pt-16 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Col 1 & 2: Chapter Address & Info */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm">
              N
            </div>
            <div>
              <p className="font-bold text-white leading-none">NACOS</p>
              <p className="text-xs text-slate-400">Nile University Chapter</p>
            </div>
          </div>
          <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
            Nigeria Association of Computing Students (NACOS) — Nile University Chapter. Empowering computing minds, sparking innovation, and fostering technical excellence.
          </p>
          <div className="flex items-start gap-2 text-slate-400 text-sm">
            <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
            <span>
              Nile University of Nigeria, Plot 681, Cadastral Zone C-OO, Research &amp; Institution Area, Jabi, Abuja, FCT.
            </span>
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
            <li><a href="#disciplines" className="hover:text-emerald-400 transition-colors">Disciplines</a></li>
            <li><a href="#events" className="hover:text-emerald-400 transition-colors">Events &amp; Programs</a></li>
            <li><a href="#excos" className="hover:text-emerald-400 transition-colors">Executive Council</a></li>
            <li><a href="#community" className="hover:text-emerald-400 transition-colors">Community Channels</a></li>
          </ul>
        </div>

        {/* Col 4: Creator Credits & Repo */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Community</h4>
          <p className="text-xs text-slate-500 leading-relaxed mb-4">
            An official chapter under the Department of Computer Science &amp; Information Technology, Nile University of Nigeria.
          </p>
        </div>

      </div>

      {/* Bottom Legal Disclaimer */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© {new Date().getFullYear()} NACOS Nile University Chapter. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Designed &amp; Built with <span className="text-emerald-400">⚡</span> by NACOS Nile Dev Team
        </p>
      </div>
    </footer>
  );
}