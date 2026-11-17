import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Globe, 
  Target, 
  Sliders, 
  MessageSquare,
  HelpCircle,
  Zap,
  Info
} from 'lucide-react';
import { Audience, ContentObjective, Platform, Tone } from '../../types';
import { useApp } from '../../context/AppContext';
import { generateMockAiContent } from '../../data/mockAiGenerator';

interface Step1IdeaInputProps {
  onProceed: () => void;
}

export const Step1IdeaInput: React.FC<Step1IdeaInputProps> = ({ onProceed }) => {
  const { activeProject, updateActiveProject, addToast } = useApp();

  const [rawIdea, setRawIdea] = useState(activeProject.rawIdea || '');
  const [platform, setPlatform] = useState<Platform>(activeProject.platform || 'both');
  const [audience, setAudience] = useState<Audience>(activeProject.audience || 'Students');
  const [tone, setTone] = useState<Tone>(activeProject.tone || 'Educational');
  const [slideCount, setSlideCount] = useState<number>(activeProject.slideCount || 9);
  const [language, setLanguage] = useState<string>(activeProject.language || 'English (US)');
  const [objective, setObjective] = useState<ContentObjective>(activeProject.objective || 'Educational Value');
  const [isGenerating, setIsGenerating] = useState(false);

  const presetExamples = [
    {
      label: '5 AI tools every college student should know in 2026.',
      audience: 'Students' as Audience,
      tone: 'Educational' as Tone,
      slides: 9
    },
    {
      label: 'Why 90% of early-stage B2B pitches fail in the first 90 seconds.',
      audience: 'Founders' as Audience,
      tone: 'Bold' as Tone,
      slides: 7
    },
    {
      label: 'The 6-step cold outreach system that booked 42 enterprise demos.',
      audience: 'Professionals' as Audience,
      tone: 'Professional' as Tone,
      slides: 8
    },
    {
      label: '3 subtle mental traps secretly destroying founder productivity in 2026.',
      audience: 'General' as Audience,
      tone: 'Conversational' as Tone,
      slides: 6
    }
  ];

  const handleGenerate = () => {
    if (!rawIdea.trim()) {
      addToast('Idea Needed', 'Please enter your core idea or pick a preset prompt.', 'warning');
      return;
    }

    setIsGenerating(true);

    // Simulate AI generation process with progress
    setTimeout(() => {
      const generated = generateMockAiContent({
        rawIdea,
        platform,
        audience,
        tone,
        slideCount,
        language,
        objective
      });

      updateActiveProject({
        title: rawIdea.slice(0, 50).trim() + (rawIdea.length > 50 ? '...' : ''),
        rawIdea,
        platform,
        audience,
        tone,
        slideCount,
        language,
        objective,
        research: generated.research,
        slides: generated.slides,
        currentStep: 2,
        status: 'draft'
      });

      setIsGenerating(false);
      addToast('AI Generation Complete', 'Synthesized research and sequence outline.', 'success');
      onProceed();
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Step Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Step 1 of 6: Raw Idea Ingestion</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          What do you want to talk about today?
        </h1>
        <p className="text-sm text-[#A3A8B8] max-w-xl mx-auto">
          Type an unpolished thought, study framework, product takeaway, or thesis. Our AI workflow will transform it into a structured, high-retention carousel.
        </p>
      </div>

      {/* Main Textarea Card */}
      <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4 shadow-xl">
        <div className="space-y-2">
          <label className="text-xs font-bold text-white flex items-center justify-between">
            <span>Your Core Idea or Concept</span>
            <span className="text-[11px] font-mono text-[#A3A8B8]">
              {rawIdea.length} characters
            </span>
          </label>
          <textarea
            value={rawIdea}
            onChange={(e) => setRawIdea(e.target.value)}
            placeholder="e.g. 5 AI tools every college student should know in 2026. Focus on real academic productivity, study leverage, ethical research, and avoiding generic plagiarism..."
            rows={5}
            className="w-full p-4 rounded-xl bg-[#11131B] border border-[#222633] focus:border-[#8B72FF] text-white placeholder-slate-500 text-sm leading-relaxed outline-none transition-all resize-none font-medium"
          />
        </div>

        {/* Preset suggestions */}
        <div className="space-y-2">
          <span className="text-[11px] font-bold text-[#A3A8B8] uppercase tracking-wider">
            Quick Prompts
          </span>
          <div className="flex flex-wrap gap-2">
            {presetExamples.map((preset, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setRawIdea(preset.label);
                  setAudience(preset.audience);
                  setTone(preset.tone);
                  setSlideCount(preset.slides);
                }}
                className="px-3 py-1.5 rounded-lg bg-[#222633]/80 hover:bg-[#222633] border border-white/5 hover:border-[#8B72FF]/40 text-xs text-[#A3A8B8] hover:text-white transition-all text-left"
              >
                "{preset.label}"
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Controls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Target Platform */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <Target className="w-4 h-4 text-[#8B72FF]" />
            <span>Target Platform</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['instagram', 'linkedin', 'both'] as Platform[]).map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatform(p)}
                className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all border ${
                  platform === p
                    ? 'bg-[#8B72FF]/20 border-[#8B72FF] text-white shadow-sm'
                    : 'bg-[#222633]/60 border-transparent text-[#A3A8B8] hover:text-white'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Target Audience */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-[#5AA9FF]" />
            <span>Target Audience</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['Students', 'Professionals', 'Founders', 'General'] as Audience[]).map((a) => (
              <button
                key={a}
                type="button"
                onClick={() => setAudience(a)}
                className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border truncate ${
                  audience === a
                    ? 'bg-[#5AA9FF]/20 border-[#5AA9FF] text-white shadow-sm'
                    : 'bg-[#222633]/60 border-transparent text-[#A3A8B8] hover:text-white'
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Tone Selection */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <Sliders className="w-4 h-4 text-emerald-400" />
            <span>Tone of Voice</span>
          </label>
          <div className="grid grid-cols-4 gap-2">
            {(['Educational', 'Conversational', 'Professional', 'Bold'] as Tone[]).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTone(t)}
                className={`py-2 px-2 rounded-xl text-xs font-bold transition-all border truncate ${
                  tone === t
                    ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 shadow-sm'
                    : 'bg-[#222633]/60 border-transparent text-[#A3A8B8] hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Number of Slides (5 to 10) */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Number of Slides (5–10)</span>
            </label>
            <span className="text-xs font-mono font-bold text-amber-300 px-2 py-0.5 rounded bg-amber-500/15 border border-amber-500/30">
              {slideCount} Slides
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={5}
              max={10}
              step={1}
              value={slideCount}
              onChange={(e) => setSlideCount(Number(e.target.value))}
              className="w-full accent-[#8B72FF] h-2 bg-[#222633] rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* Content Objective */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span>Content Objective</span>
          </label>
          <select
            value={objective}
            onChange={(e) => setObjective(e.target.value as ContentObjective)}
            className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs font-medium outline-none focus:border-[#8B72FF]"
          >
            <option value="Educational Value">Educational Value (High Saves)</option>
            <option value="Brand Authority">Brand Authority (Executive Positioning)</option>
            <option value="Lead Generation">Lead Generation (Inbound DMs)</option>
            <option value="Viral Growth">Viral Growth (Broad Reach)</option>
            <option value="Community Engagement">Community Engagement (Comment Discussions)</option>
          </select>
        </div>

        {/* Output Language */}
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <label className="text-xs font-bold text-white flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#5AA9FF]" />
            <span>Language</span>
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs font-medium outline-none focus:border-[#8B72FF]"
          >
            <option value="English (US)">English (US)</option>
            <option value="English (UK)">English (UK)</option>
            <option value="Spanish">Spanish (Español)</option>
            <option value="French">French (Français)</option>
            <option value="German">German (Deutsch)</option>
            <option value="Portuguese">Portuguese (Português)</option>
          </select>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#222633]">
        <div className="flex items-center gap-2 text-xs text-[#A3A8B8]">
          <Info className="w-4 h-4 text-[#8B72FF]" />
          <span>Generates research citations, slide copy, and layout structure</span>
        </div>

        <button
          type="button"
          onClick={handleGenerate}
          disabled={isGenerating || !rawIdea.trim()}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white font-bold text-sm shadow-glow-violet hover:shadow-glow-blue transition-all disabled:opacity-50 disabled:pointer-events-none hover:scale-[1.02] active:scale-[0.98]"
        >
          {isGenerating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Synthesizing Research & Structure...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Generate My Carousel</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
