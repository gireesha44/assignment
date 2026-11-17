import React from 'react';
import { 
  X, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  Award, 
  Info,
  BookOpen
} from 'lucide-react';
import { Programme } from '../types';

interface ProgrammeModalProps {
  programme: Programme | null;
  onClose: () => void;
  onApply: (programmeId: string) => void;
}

export const ProgrammeModal: React.FC<ProgrammeModalProps> = ({
  programme,
  onClose,
  onApply
}) => {
  if (!programme) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full border border-violet/25 shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Header with Darker Brand Background */}
        <div className="bg-midnight p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-midnight-800 text-slate-300 hover:text-white hover:bg-midnight-700 flex items-center justify-center transition-colors border border-violet/20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet/20 border border-violet/40 text-lavender text-xs font-mono font-semibold mb-3">
            <span>{programme.categoryLabel}</span>
            {programme.badge && (
              <>
                <span className="text-violet-light">•</span>
                <span className="text-skyblue">{programme.badge}</span>
              </>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            {programme.title}
          </h3>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {programme.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-lavender/90">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-950/80 border border-violet/20">
              <Clock className="w-3.5 h-3.5 text-skyblue" />
              <span>{programme.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-950/80 border border-violet/20">
              <Layers className="w-3.5 h-3.5 text-violet-light" />
              <span>{programme.difficulty}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-midnight-950/80 border border-violet/20">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              <span>Project Deliverable Included</span>
            </div>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          
          {/* Capstone Project Outcome Banner */}
          <div className="p-5 rounded-2xl bg-lavender/60 border border-violet/25">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-violet mb-1">
                  Capstone Portfolio Deliverable
                </h4>
                <p className="text-midnight-900 font-semibold text-sm sm:text-base">
                  {programme.projectOutcome}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  You build, test, document, and deploy this project to public hosting with a verified GitHub repository.
                </p>
              </div>
            </div>
          </div>

          {/* Week by Week Curriculum Breakdown */}
          <div>
            <h4 className="text-base font-bold text-midnight tracking-tight mb-4 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-violet" />
              <span>Curriculum Breakdown (Illustrative Milestones)</span>
            </h4>
            <div className="space-y-3">
              {programme.weeklyBreakdown.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-offwhite border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-20 px-2 py-1 rounded bg-midnight text-white text-[11px] font-mono font-semibold text-center shrink-0">
                      {item.week}
                    </span>
                    <span className="text-xs font-semibold text-midnight">
                      {item.topic}
                    </span>
                  </div>
                  <div className="text-xs text-slate-600 font-medium sm:text-right pl-7 sm:pl-0">
                    <span className="text-slate-400">Deliverable: </span>
                    <span className="text-violet font-semibold">{item.deliverable}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Libraries Learned */}
          <div>
            <h4 className="text-base font-bold text-midnight tracking-tight mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-violet" />
              <span>Technologies & Tools Mastered</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {programme.toolsLearned.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-midnight-800 shadow-sm flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-violet" />
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Prerequisites & Suitability */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Prerequisites
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {programme.prerequisites}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                Learning Format
              </h5>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {programme.learningFormat}
              </p>
            </div>
          </div>

          {/* Honest Notice */}
          <div className="p-3.5 rounded-xl bg-slate-100/80 border border-slate-200/80 text-[11px] text-slate-600 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <span>
              <strong>Note on transparency:</strong> Nexora focuses exclusively on skill acquisition through building actual software. We do not offer accredited academic degrees or fictitious employment guarantees.
            </span>
          </div>

        </div>

        {/* Modal Footer / CTA */}
        <div className="bg-slate-50 px-6 sm:px-8 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Questions before applying? Speak to an advisor.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-white transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onApply(programme.id);
                onClose();
              }}
              className="px-5 py-2.5 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs font-bold transition-all shadow-glow-violet flex items-center justify-center gap-2 w-1/2 sm:w-auto"
            >
              <span>Apply for this Track</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
