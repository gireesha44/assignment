import React from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowUpRight
} from 'lucide-react';
import { PROGRAMMES } from '../data/courses';

interface FooterProps {
  onSelectProgrammeId: (id: string) => void;
  onAdvisorClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectProgrammeId, onAdvisorClick }) => {
  return (
    <footer className="bg-midnight-950 text-white border-t border-violet/20 pt-16 pb-12 text-left w-full">
      <div className="site-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-midnight-800">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet flex items-center justify-center text-white shadow-glow-violet font-mono font-black text-lg">
                N
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">NEXORA</span>
                <span className="text-[10px] tracking-wider font-mono text-lavender uppercase">AI ACADEMY</span>
              </div>
            </div>

            <p className="text-sm font-semibold text-lavender">
              Learn AI. Build Real Things. Shape Your Future.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Practical AI, software engineering, and digital-skills education for students, graduates, and young professionals who want to build real capabilities.
            </p>

            {/* Social Placeholder links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-midnight-900 border border-violet/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-midnight-900 border border-violet/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-midnight-900 border border-violet/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet transition-colors"
                aria-label="Twitter / X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-midnight-900 border border-violet/20 flex items-center justify-center text-slate-300 hover:text-white hover:border-violet transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Programme Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Learning Tracks
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {PROGRAMMES.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onSelectProgrammeId(p.id)}
                    className="hover:text-lavender transition-colors text-left flex items-center gap-1 group"
                  >
                    <span className="truncate">{p.title.split(':')[0]}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 group-hover:text-violet opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#path" className="hover:text-white transition-colors">Build-to-Learn Path</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Student Projects</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">Learning Experience</a>
              </li>
              <li>
                <a href="#outcomes" className="hover:text-white transition-colors">Skills & Outcomes</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
              <li>
                <button onClick={onAdvisorClick} className="text-violet hover:underline text-left">
                  Talk to an Advisor
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Policy Placeholders */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              Contact & Support
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-violet" />
                <span>admissions@nexora.academy</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-skyblue" />
                <span>+1 (800) 412-BUILD</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Innovation Hub, Tech District, San Francisco & Remote Worldwide</span>
              </div>
              <div className="pt-2 text-[11px] text-slate-500">
                Admissions Hours: Mon - Fri, 9am - 7pm EST
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Policy & Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} NEXORA AI ACADEMY. All rights reserved.
          </div>

          <div className="flex items-center gap-5">
            <a href="#register" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#register" className="hover:text-slate-300 transition-colors">Terms of Enrollment</a>
            <span className="text-slate-700">•</span>
            <a href="#register" className="hover:text-slate-300 transition-colors">Academic Transparency</a>
            <span className="text-slate-700">•</span>
            <a href="#register" className="hover:text-slate-300 transition-colors">Honor Code</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
