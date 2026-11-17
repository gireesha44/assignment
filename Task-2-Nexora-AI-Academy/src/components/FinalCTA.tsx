import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExploreClick, onAdvisorClick }) => {
  return (
    <section className="py-20 md:py-32 bg-midnight text-white relative overflow-hidden w-full">
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-skyblue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet/20 border border-violet/30 text-lavender text-xs sm:text-sm font-mono font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-skyblue" />
          <span>Launch Your Builder Journey</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
          Your Ideas Deserve More Than Just Tutorials.
        </h2>

        <p className="mt-6 text-base sm:text-lg xl:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Stop wondering what AI can do. Build production-grade document assistants, predictive classifiers, and modern full-stack web platforms that prove your ability.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-white font-extrabold text-sm sm:text-base bg-violet hover:bg-violet-hover transition-all duration-200 shadow-glow-violet active:scale-95 flex items-center justify-center gap-2.5 group"
          >
            <span>Start Exploring</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onAdvisorClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-lavender font-bold text-sm sm:text-base bg-midnight-800 hover:bg-midnight-700 border border-violet/30 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 text-skyblue" />
            <span>Schedule Advisor Call</span>
          </button>
        </div>

        {/* Feature validation pills */}
        <div className="mt-14 pt-8 border-t border-violet/20 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm text-slate-300 font-mono">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>100% Practical Deliverables</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Verified GitHub Repositories</span>
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Zero Fake Statistics</span>
          </span>
        </div>

      </div>
    </section>
  );
};
