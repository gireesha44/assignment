import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  BookOpen, 
  Search, 
  AlertCircle, 
  ExternalLink, 
  Layers, 
  ShieldCheck, 
  Check, 
  RefreshCw,
  Lightbulb,
  FileText
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { generateMockAiContent } from '../../data/mockAiGenerator';

interface Step2AiResearchProps {
  onBack: () => void;
  onProceed: () => void;
}

export const Step2AiResearch: React.FC<Step2AiResearchProps> = ({ onBack, onProceed }) => {
  const { activeProject, updateActiveProject, addToast } = useApp();
  const research = activeProject.research;

  const [selectedHeadline, setSelectedHeadline] = useState<string>(
    activeProject.title || research.suggestedHeadlines[0] || 'AI Guide'
  );
  const [isRegenerating, setIsRegenerating] = useState(false);

  const handleSelectHeadline = (hl: string) => {
    setSelectedHeadline(hl);
    updateActiveProject({ title: hl });
  };

  const handleRegenerateAngle = () => {
    setIsRegenerating(true);
    setTimeout(() => {
      const generated = generateMockAiContent({
        rawIdea: activeProject.rawIdea,
        platform: activeProject.platform,
        audience: activeProject.audience,
        tone: activeProject.tone,
        slideCount: activeProject.slideCount,
        language: activeProject.language,
        objective: activeProject.objective
      });

      updateActiveProject({
        research: generated.research,
        slides: generated.slides
      });
      setIsRegenerating(false);
      addToast('Angle Refreshed', 'Generated alternative hooks and research synthesis.', 'success');
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5AA9FF]/15 border border-[#5AA9FF]/30 text-[#5AA9FF] text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Step 2 of 6: AI Research & Strategic Structure</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Narrative Architecture & Research Grounding
        </h1>
        <p className="text-sm text-[#A3A8B8] max-w-xl mx-auto">
          Review the synthesized content angle, fact verification boundary, and structural sequence before generating slide copy.
        </p>
      </div>

      {/* AI Transparency Banner */}
      <div className="p-4 rounded-xl bg-[#1E2230] border border-[#5AA9FF]/30 flex items-start gap-3 text-xs leading-relaxed">
        <ShieldCheck className="w-5 h-5 text-[#5AA9FF] shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-white">Source Verification & AI Grounding Disclosure</p>
          <p className="text-[#A3A8B8] mt-0.5">
            {research.disclaimer || 'Clearly distinguishing AI-generated suggestions from verified sources. Citations below indicate reference benchmarks.'}
          </p>
        </div>
      </div>

      {/* Strategic Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Topic Summary */}
        <div className="md:col-span-2 p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#8B72FF] font-bold">
            Topic Executive Summary
          </span>
          <p className="text-sm text-slate-200 leading-relaxed font-medium">
            {research.topicSummary || 'Synthesizing strategic topic summary...'}
          </p>
        </div>

        {/* Target Audience & Angle */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#5AA9FF] font-bold">
              Target Demographic
            </span>
            <p className="text-xs text-white font-semibold mt-1">
              {research.targetAudience || activeProject.audience}
            </p>
          </div>
          <div className="pt-2 border-t border-[#222633]">
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Content Objective
            </span>
            <p className="text-xs text-white font-semibold mt-1">
              {activeProject.objective}
            </p>
          </div>
        </div>
      </div>

      {/* Content Angle & Hook Formula */}
      <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-amber-300" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Main Content Angle & Psychological Hook
            </h3>
          </div>
          <button
            onClick={handleRegenerateAngle}
            disabled={isRegenerating}
            className="text-xs text-[#8B72FF] hover:text-white flex items-center gap-1 font-semibold transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRegenerating ? 'animate-spin' : ''}`} />
            <span>Regenerate Angle</span>
          </button>
        </div>

        <div className="p-4 rounded-xl bg-[#11131B] border border-[#222633] space-y-2">
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            <span className="text-[#8B72FF] font-bold">Narrative Angle: </span>
            {research.contentAngle}
          </p>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            <span className="text-[#5AA9FF] font-bold">Hook Formula: </span>
            {research.suggestedHookFormula}
          </p>
        </div>

        {/* Suggested Headlines */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-white">
            Choose Preferred Headline Formulation:
          </label>
          <div className="space-y-2">
            {research.suggestedHeadlines?.map((hl, idx) => {
              const isChosen = selectedHeadline === hl;
              return (
                <div
                  key={idx}
                  onClick={() => handleSelectHeadline(hl)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                    isChosen
                      ? 'bg-[#8B72FF]/15 border-[#8B72FF] text-white shadow-sm'
                      : 'bg-[#11131B] border-[#222633] text-[#A3A8B8] hover:text-white hover:bg-[#1E2230]'
                  }`}
                >
                  <span className="text-xs font-semibold">{hl}</span>
                  {isChosen && <Check className="w-4 h-4 text-[#8B72FF]" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Core Takeaways Grounding the Slides</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {research.keyTakeaways?.map((takeaway, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#11131B] border border-[#222633] text-xs text-slate-200 flex items-start gap-2.5"
            >
              <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                ✓
              </div>
              <span className="leading-relaxed">{takeaway}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Sequence Blueprint */}
      <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
        <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-purple-400" />
          <span>Planned Slide Sequence Blueprint ({activeProject.slides.length || activeProject.slideCount} Slides)</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {research.slideSequenceSummary?.map((seq, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-[11px] font-mono text-slate-300"
            >
              <span className="text-[#8B72FF] font-bold block mb-1">Slide {idx + 1}</span>
              <span className="truncate block font-sans">{seq.replace(/^\d+\.\s*/, '')}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Research Sources & Grounding Placeholders */}
      <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-[#5AA9FF]" />
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Research Dossier & Source Placeholders
            </h3>
          </div>
          <span className="text-[10px] text-[#A3A8B8] font-mono">
            Grounding Transparency
          </span>
        </div>

        <div className="space-y-3">
          {research.sources?.map((source, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#11131B] border border-[#222633] space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span>{source.title}</span>
                  {source.isVerified ? (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Verified Reference
                    </span>
                  ) : (
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      AI Extrapolation
                    </span>
                  )}
                </span>

                <span className="text-[10px] text-[#A3A8B8] font-mono">
                  Confidence: <strong className="text-white">{source.confidence}</strong>
                </span>
              </div>
              <p className="text-xs text-[#A3A8B8] leading-relaxed">
                {source.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav Buttons */}
      <div className="flex items-center justify-between pt-4 border-t border-[#222633]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-[#A3A8B8] hover:text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Idea</span>
        </button>

        <button
          onClick={onProceed}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all hover:scale-105"
        >
          <span>Proceed to Slide Copy</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
