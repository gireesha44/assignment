import React from 'react';
import { 
  ShieldCheck, 
  FileCheck, 
  Eye, 
  Users, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles,
  Award,
  RefreshCw,
  Scale
} from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-slate-200/80">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F4EC] border border-[#23866B]/20 text-xs font-bold text-[#153D35] uppercase tracking-wide mb-3">
            <ShieldCheck className="w-4 h-4 text-[#23866B]" />
            Integrity, Safety & Standards
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153D35] tracking-tight">
            Built on Trust, Transparency & Compassion
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Finding care for a vulnerable animal requires total confidence. Here is how our discovery platform ensures accurate, audited information without corporate bias.
          </p>
        </div>

        {/* 3-Step Verification Framework */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-[#153D35]">Our 3-Tier Provider Verification Framework</h3>
            <p className="text-xs text-slate-500 mt-1">Every listing marked with a green checkmark completes these checks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm relative">
              <div className="w-10 h-10 rounded-2xl bg-[#E7F4EC] text-[#23866B] flex items-center justify-center font-extrabold text-sm mb-4">
                01
              </div>
              <h4 className="font-bold text-base text-[#153D35]">Clinical Licensure Check</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                We verify active registration with the relevant State Veterinary Council and the Veterinary Council of India (VCI) for all consulting doctors and surgical directors.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#23866B] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Degrees & Registration Validated</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm relative">
              <div className="w-10 h-10 rounded-2xl bg-[#E7F4EC] text-[#23866B] flex items-center justify-center font-extrabold text-sm mb-4">
                02
              </div>
              <h4 className="font-bold text-base text-[#153D35]">Infrastructure & Safety Standards</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Facilities claiming 24/7 emergency readiness are audited for dedicated surgical OTs, continuous oxygen supplies, backup electricity, and sanitary isolation wards.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#23866B] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Physical Audit Guidelines</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-soft-sm relative">
              <div className="w-10 h-10 rounded-2xl bg-[#E7F4EC] text-[#23866B] flex items-center justify-center font-extrabold text-sm mb-4">
                03
              </div>
              <h4 className="font-bold text-base text-[#153D35]">Continuous Community Feedback</h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Verified pet owners submit real treatment feedback. Multiple unaddressed negative reports or pricing discrepancies trigger an immediate compliance re-audit.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#23866B] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Unfiltered Parent Governance</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Trust Commitments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#153D35] flex items-center justify-center mb-3">
              <Eye className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#153D35]">Transparent Reviews</h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Providers cannot pay to remove or hide negative reviews. Every rating reflects honest pet owner outcomes.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#23866B] flex items-center justify-center mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#153D35]">Community Data Updates</h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Anyone can suggest a phone number or hours correction. Our desk processes edits swiftly to prevent wasted emergency trips.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#F28C75] flex items-center justify-center mb-3">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#153D35]">Welfare & Stray Care</h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Dedicated directory space for non-profit shelters, free vaccination drives and humane community animal birth control (ABC).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-soft-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#153D35] flex items-center justify-center mb-3">
              <Scale className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-sm text-[#153D35]">Neutral & Independent</h4>
            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
              Practo for Animals is an open discovery network. Ranking prioritizes clinical verification, proximity and review reliability.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
