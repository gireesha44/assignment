import React, { useState } from 'react';
import { 
  AlertTriangle, 
  PhoneCall, 
  Ambulance, 
  Building2, 
  Stethoscope, 
  HeartHandshake, 
  ChevronRight, 
  ShieldAlert,
  ArrowRight,
  Info,
  Clock
} from 'lucide-react';
import { EMERGENCY_GUIDES, EMERGENCY_HOTLINES, EmergencyGuide } from '../../data/emergencyData';
import { ServiceCategory } from '../../types';

interface EmergencySectionProps {
  onTriggerEmergencyFilter: (type: 'vet' | 'ambulance' | 'hospital') => void;
  onNotify: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({
  onTriggerEmergencyFilter,
  onNotify
}) => {
  const [selectedGuide, setSelectedGuide] = useState<EmergencyGuide | null>(EMERGENCY_GUIDES[0]);

  return (
    <section id="emergency" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Background Accent Lines */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDF2F0] rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="app-container">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FDF2F0] border border-[#F28C75]/40 text-[#D95338] text-xs font-bold uppercase tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-[#F28C75] animate-ping" />
            24/7 Rapid Response Network
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#153D35] tracking-tight">
            Need Help Right Now?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            In critical medical crises, time is life. Instantly access verified 24/7 emergency veterinary trauma hospitals, high-flow oxygen animal ambulances, or immediate first-aid protocols.
          </p>
        </div>

        {/* 3 Main Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          
          {/* Action 1: Find Emergency Vet */}
          <div 
            onClick={() => onTriggerEmergencyFilter('vet')}
            className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#F28C75] shadow-soft-sm hover:shadow-soft-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FDF2F0] text-[#F28C75] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Stethoscope className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D95338] block mb-1">
                Immediate Clinical Triage
              </span>
              <h3 className="text-xl font-bold text-[#153D35] group-hover:text-[#D95338] transition-colors">
                Find Emergency Vet
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect with veterinarians available right now for sudden collapse, acute poisoning, seizures, or respiratory distress.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D95338]">
              <span>Search Open Clinics</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 2: Find Animal Ambulance */}
          <div 
            onClick={() => onTriggerEmergencyFilter('ambulance')}
            className="p-6 rounded-3xl bg-white border-2 border-[#F28C75]/40 hover:border-[#F28C75] bg-gradient-to-b from-[#FDF2F0]/30 to-white shadow-soft-sm hover:shadow-coral-glow transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F28C75] text-white flex items-center justify-center mb-4 shadow-coral-glow group-hover:scale-105 transition-transform">
                <Ambulance className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D95338] block mb-1">
                Equipped Mobile Transit
              </span>
              <h3 className="text-xl font-bold text-[#153D35] group-hover:text-[#D95338] transition-colors">
                Find Animal Ambulance
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Dispatch vans fitted with continuous oxygen concentrators, spinal immobilizers, and certified trauma rescue paramedics.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#D95338]">
              <span>Dispatch Ambulance</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Action 3: Locate Nearby Animal Hospital */}
          <div 
            onClick={() => onTriggerEmergencyFilter('hospital')}
            className="p-6 rounded-3xl bg-white border-2 border-slate-200/90 hover:border-[#153D35] shadow-soft-sm hover:shadow-soft-lg transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#E7F4EC] text-[#153D35] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Building2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#23866B] block mb-1">
                24/7 Tertiary Surgery & ICU
              </span>
              <h3 className="text-xl font-bold text-[#153D35] group-hover:text-[#23866B] transition-colors">
                Locate Nearby Hospital
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access full-scale veterinary hospitals with dedicated surgical operating theaters, blood transfusion banks, and overnight ICUs.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#153D35]">
              <span>Locate 24/7 Hospitals</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Hotlines + Emergency First-Aid Triage Guide Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Instant Emergency Hotlines List */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-soft-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 text-[#F28C75]" />
                <h3 className="font-bold text-base text-[#153D35]">Emergency Dispatch Lines</h3>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                Live Numbers
              </span>
            </div>

            <div className="space-y-3">
              {EMERGENCY_HOTLINES.map((hotline, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-slate-200/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#D95338] bg-[#FDF2F0] px-2 py-0.5 rounded-md">
                      {hotline.badge}
                    </span>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 mt-1">{hotline.label}</h4>
                    <p className="text-[11px] text-slate-500">{hotline.subtext}</p>
                  </div>

                  <a
                    href={`tel:${hotline.number}`}
                    className="px-3.5 py-2 rounded-xl bg-[#153D35] hover:bg-[#23866B] text-white font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors shadow-soft-sm"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Call</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-slate-500 leading-relaxed flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Always inform the receiving emergency hospital 10 minutes prior to arrival so the trauma resuscitation crash-cart is primed.
              </span>
            </div>
          </div>

          {/* Right: Critical Pre-Transit First Aid Guides */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/90 shadow-soft-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-base text-[#153D35] flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-[#23866B]" />
                  What to do while en-route (First-Aid Protocols)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Critical guidelines reviewed by emergency veterinary surgeons.</p>
              </div>
            </div>

            {/* Guide Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {EMERGENCY_GUIDES.map((guide, idx) => {
                const isSelected = selectedGuide?.title === guide.title;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedGuide(guide)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#153D35] text-white shadow-soft-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {guide.title.split('/')[0]}
                  </button>
                );
              })}
            </div>

            {/* Selected Guide Details */}
            {selectedGuide && (
              <div className="p-5 rounded-2xl bg-[#FAF9F5] border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm sm:text-base text-slate-900">{selectedGuide.title}</h4>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#FDF2F0] text-[#D95338] border border-[#F28C75]/30">
                    {selectedGuide.urgency}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Watch for Symptoms:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedGuide.symptoms.map((s, i) => (
                      <span key={i} className="text-xs font-medium px-2 py-0.5 bg-white border border-slate-200 rounded-md text-slate-700">
                        • {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-emerald-950">
                    <strong className="block text-emerald-900 mb-0.5">✓ DO IMMEDIATELY:</strong>
                    {selectedGuide.doAction}
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200/80 text-rose-950">
                    <strong className="block text-rose-900 mb-0.5">✕ NEVER DO:</strong>
                    {selectedGuide.dontAction}
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
