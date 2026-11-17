import React from 'react';
import { Heart, ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenListBusiness: () => void;
  onOpenSignIn: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenListBusiness,
  onOpenSignIn
}) => {
  return (
    <footer className="bg-[#153D35] text-white pt-16 pb-12 border-t border-[#0e2b25]">
      <div className="app-container">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#23866B] flex items-center justify-center text-white shadow-soft-sm">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" opacity="0.3"/>
                  <path d="M12 5.5c-1.3 0-2.4 1.1-2.4 2.4s1.1 2.4 2.4 2.4 2.4-1.1 2.4-2.4-1.1-2.4-2.4-2.4zm-4.5 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm9 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 5.5c-1.4 0-3.5.9-3.5 2.5 0 1.9 2.5 3.5 6 3.5s6-1.6 6-3.5c0-1.6-2.1-2.5-3.5-2.5h-5z"/>
                </svg>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight">
                  practo<span className="text-emerald-300 font-light ml-1 text-lg">for Animals</span>
                </span>
                <span className="block text-[11px] text-slate-300 tracking-wider uppercase font-medium">
                  Every Paw Deserves Better Care
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              India's dedicated animal healthcare discovery platform. Connecting pet parents, animal rescuers and veterinary doctors with transparent, audited care information.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-300" />
                Bengaluru, Karnataka • Serving Pan-India
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-300" />
                care@practoforanimals.demo
              </p>
            </div>
          </div>

          {/* Col 1: Discover Care */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              Discover Care
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('discover')} className="hover:text-white transition-colors">
                  Veterinary Clinics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('discover')} className="hover:text-white transition-colors">
                  24/7 Animal Hospitals
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('discover')} className="hover:text-white transition-colors">
                  Diagnostic Labs & X-Ray
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('discover')} className="hover:text-white transition-colors">
                  Pet Boarding & Daycare
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('discover')} className="hover:text-white transition-colors">
                  Animal Ambulance Corps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('passport')} className="hover:text-white transition-colors flex items-center gap-1">
                  <span>PawCare Passport</span>
                  <span className="text-[10px] bg-[#23866B] px-1 rounded font-bold">New</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: For Providers */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
              For Providers
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={onOpenListBusiness} className="hover:text-white transition-colors font-medium text-emerald-200">
                  + List Your Practice (Free)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('providers')} className="hover:text-white transition-colors">
                  Verification Process
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('providers')} className="hover:text-white transition-colors">
                  Partner Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-white transition-colors">
                  Submit Data Correction
                </button>
              </li>
              <li>
                <button onClick={onOpenSignIn} className="hover:text-white transition-colors">
                  Provider Portal Login
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Emergency & Trust */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F28C75] mb-4">
              Emergency & Trust
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => onNavigate('emergency')} className="text-[#F28C75] hover:text-white font-bold transition-colors">
                  24/7 Emergency Directory
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('emergency')} className="hover:text-white transition-colors">
                  Pre-Transit First Aid
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-white transition-colors">
                  3-Step Verification
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-white transition-colors">
                  Community Standards
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('trust')} className="hover:text-white transition-colors">
                  Animal Welfare NGOs
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Legal Notice */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400 leading-relaxed border-b border-white/10 space-y-2">
          <p>
            <strong className="text-slate-300">Important Medical Notice:</strong> Practo for Animals is an independent animal healthcare discovery and directory platform designed to facilitate connection between pet guardians, rescuers and certified care providers. In life-threatening emergencies, do not wait for online communication — transport your animal directly to the nearest 24/7 veterinary trauma center immediately.
          </p>
          <p>
            All provider ratings, equipment listings, and hours displayed are demonstrative or community-maintained. We do not manufacture certifications or endorse unverified treatments.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Practo for Animals. All rights reserved. Built for compassionate animal care.</p>
          
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-200 cursor-pointer">Community Guidelines</span>
            <span className="hover:text-slate-200 cursor-pointer">Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
