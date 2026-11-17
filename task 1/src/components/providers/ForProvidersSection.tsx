import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  FileCheck2, 
  Edit3, 
  PlusCircle, 
  ArrowRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

interface ForProvidersSectionProps {
  onOpenListBusiness: () => void;
  onOpenGeneralCorrection: () => void;
  onNotify: (title: string, message?: string, type?: 'success' | 'info' | 'error') => void;
}

export const ForProvidersSection: React.FC<ForProvidersSectionProps> = ({
  onOpenListBusiness,
  onOpenGeneralCorrection,
  onNotify
}) => {
  return (
    <section id="providers" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="app-container">
        
        <div className="bg-gradient-to-br from-[#153D35] to-[#1e5247] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-soft-xl relative overflow-hidden">
          
          {/* Subtle background graphic */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#23866B]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                Provider Ecosystem
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Are you an animal-care provider?
              </h2>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl font-normal leading-relaxed">
                Connect directly with responsible pet owners, animal rescuers and veterinary colleagues. List your practice, showcase your clinical specialists, and build verifiable trust.
              </p>

              {/* 3 Action Buttons Required by Specification */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={onOpenListBusiness}
                  className="px-6 py-3 rounded-xl bg-[#23866B] hover:bg-[#1d6f58] text-white font-bold text-sm shadow-soft-md transition-all flex items-center gap-2 hover:shadow-green-glow"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>List Your Business (Free)</span>
                </button>

                <button
                  onClick={() => onNotify('Update Listing Portal', 'Please select your provider card or contact partner desk to refresh your operating hours or staff roster.', 'info')}
                  className="px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold text-sm backdrop-blur-md transition-colors flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4 text-emerald-300" />
                  <span>Update Your Listing</span>
                </button>

                <button
                  onClick={onOpenGeneralCorrection}
                  className="px-4 py-3 rounded-xl bg-transparent hover:bg-white/10 text-slate-300 hover:text-white font-semibold text-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Submit a Correction</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Value Pillars */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 text-emerald-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Verified Badge</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Earn our clinical accreditation seal by confirming your veterinary council registration and facility standards.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 text-emerald-300">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Direct Pet Discovery</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Showcase your surgical suites, lab devices and doctors to pet parents searching in your immediate neighbourhood.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 text-emerald-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Rescue & NGO Network</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Partner with local animal welfare organizations to support subsidized stray animal ABC surgeries and trauma relief.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3 text-emerald-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Unfiltered Reputation</h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Receive verified pet parent reviews and protect your clinic’s standing with transparent communication.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
