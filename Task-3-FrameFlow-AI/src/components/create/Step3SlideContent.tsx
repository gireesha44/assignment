import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Copy, 
  ChevronUp, 
  ChevronDown, 
  FileText, 
  Check, 
  Edit3,
  Lightbulb,
  Palette
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Slide, SlideType } from '../../types';

interface Step3SlideContentProps {
  onBack: () => void;
  onProceed: () => void;
}

export const Step3SlideContent: React.FC<Step3SlideContentProps> = ({ onBack, onProceed }) => {
  const { activeProject, updateActiveProject, addToast } = useApp();
  const [slides, setSlides] = useState<Slide[]>(activeProject.slides || []);
  const [editingSlideId, setEditingSlideId] = useState<string>(slides[0]?.id || '');

  const handleUpdateSlide = (id: string, updates: Partial<Slide>) => {
    const updated = slides.map(s => (s.id === id ? { ...s, ...updates } : s));
    setSlides(updated);
    updateActiveProject({ slides: updated });
  };

  const handleAddSlide = (afterIndex: number) => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      slideNumber: afterIndex + 2,
      type: 'framework',
      badge: 'ADDITIONAL INSIGHT',
      headline: 'New Key Insight or Strategy',
      body: 'Synthesize the main point here with clear, concise language.',
      supportingDetail: 'Actionable tactical takeaway for the reader.',
      visualSuggestion: 'Comparison chart or high-impact diagram',
      layoutStyle: 'standard',
      textAlign: 'left',
      fontSize: 'md'
    };

    const next = [...slides];
    next.splice(afterIndex + 1, 0, newSlide);
    // Renumber
    const renumbered = next.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    updateActiveProject({ slides: renumbered });
    setEditingSlideId(newSlide.id);
    addToast('Slide Added', `Inserted at position ${afterIndex + 2}.`, 'success');
  };

  const handleDeleteSlide = (id: string) => {
    if (slides.length <= 3) {
      addToast('Cannot Remove', 'Carousels need at least 3 slides to maintain flow.', 'warning');
      return;
    }
    const filtered = slides.filter(s => s.id !== id);
    const renumbered = filtered.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    updateActiveProject({ slides: renumbered });
    if (editingSlideId === id) {
      setEditingSlideId(renumbered[0]?.id || '');
    }
    addToast('Slide Removed', 'Slide deleted and sequence updated.', 'info');
  };

  const handleDuplicateSlide = (index: number) => {
    const source = slides[index];
    const duplicated: Slide = {
      ...JSON.parse(JSON.stringify(source)),
      id: `slide-${Date.now()}`,
      slideNumber: index + 2,
      headline: `${source.headline} (Copy)`
    };

    const next = [...slides];
    next.splice(index + 1, 0, duplicated);
    const renumbered = next.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    updateActiveProject({ slides: renumbered });
    setEditingSlideId(duplicated.id);
    addToast('Slide Duplicated', 'Duplicated slide created.', 'success');
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= slides.length) return;

    const next = [...slides];
    const temp = next[index];
    next[index] = next[targetIdx];
    next[targetIdx] = temp;

    const renumbered = next.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    updateActiveProject({ slides: renumbered });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Edit3 className="w-3.5 h-3.5" />
          <span>Step 3 of 6: Slide-by-Slide Content Editing</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Fine-Tune Copy & Visual Directions
        </h1>
        <p className="text-sm text-[#A3A8B8] max-w-xl mx-auto">
          Review the AI-generated copy for each slide. Edit headlines, adjust supporting details, or add and reorder slides before applying visual design.
        </p>
      </div>

      {/* Slide Stack */}
      <div className="space-y-4">
        {slides.map((slide, index) => {
          const isExpanded = editingSlideId === slide.id;

          return (
            <div
              key={slide.id}
              className={`rounded-2xl transition-all border ${
                isExpanded
                  ? 'bg-[#171923] border-[#8B72FF] shadow-glow-violet'
                  : 'bg-[#171923]/70 border-[#222633] hover:border-[#8B72FF]/30'
              }`}
            >
              {/* Header Bar */}
              <div
                onClick={() => setEditingSlideId(isExpanded ? '' : slide.id)}
                className="p-4 flex items-center justify-between cursor-pointer select-none"
              >
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-lg bg-[#222633] text-white flex items-center justify-center font-mono font-bold text-xs border border-white/10">
                    {index + 1}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white truncate max-w-sm sm:max-w-md">
                        {slide.headline || 'Untitled Slide'}
                      </span>
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#8B72FF]/20 text-[#8B72FF] border border-[#8B72FF]/30">
                        {slide.type}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#A3A8B8] truncate max-w-md mt-0.5">
                      {slide.body}
                    </p>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => handleMove(index, 'up')}
                    disabled={index === 0}
                    className="p-1.5 rounded hover:bg-[#222633] text-[#A3A8B8] hover:text-white disabled:opacity-20"
                    title="Move slide up"
                  >
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleMove(index, 'down')}
                    disabled={index === slides.length - 1}
                    className="p-1.5 rounded hover:bg-[#222633] text-[#A3A8B8] hover:text-white disabled:opacity-20"
                    title="Move slide down"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDuplicateSlide(index)}
                    className="p-1.5 rounded hover:bg-[#222633] text-[#A3A8B8] hover:text-[#5AA9FF]"
                    title="Duplicate slide"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteSlide(slide.id)}
                    disabled={slides.length <= 3}
                    className="p-1.5 rounded hover:bg-rose-500/20 text-[#A3A8B8] hover:text-rose-400 disabled:opacity-20"
                    title="Delete slide"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Expanded Edit Form */}
              {isExpanded && (
                <div className="p-5 border-t border-[#222633] space-y-4 bg-[#11131B]/50 rounded-b-2xl animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Slide Headline */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white flex items-center justify-between">
                        <span>Slide Headline</span>
                        <span className="text-[10px] text-[#A3A8B8]">Hook & Skimmable</span>
                      </label>
                      <input
                        type="text"
                        value={slide.headline}
                        onChange={(e) => handleUpdateSlide(slide.id, { headline: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs font-medium focus:border-[#8B72FF] outline-none"
                      />
                    </div>

                    {/* Slide Type & Badge */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white">Slide Role</label>
                        <select
                          value={slide.type}
                          onChange={(e) => handleUpdateSlide(slide.id, { type: e.target.value as SlideType })}
                          className="w-full p-2.5 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs font-medium focus:border-[#8B72FF] outline-none"
                        >
                          <option value="hook">Hook (Slide 1)</option>
                          <option value="problem">Problem / Agitation</option>
                          <option value="tool">Tool / Resource</option>
                          <option value="framework">Framework / Step</option>
                          <option value="takeaway">Key Takeaway</option>
                          <option value="cta">Call to Action (Last Slide)</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-white">Category Badge</label>
                        <input
                          type="text"
                          value={slide.badge || ''}
                          placeholder="e.g. 2026 GUIDE"
                          onChange={(e) => handleUpdateSlide(slide.id, { badge: e.target.value })}
                          className="w-full p-2.5 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs font-medium focus:border-[#8B72FF] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white">Body Copy</label>
                    <textarea
                      rows={3}
                      value={slide.body}
                      onChange={(e) => handleUpdateSlide(slide.id, { body: e.target.value })}
                      className="w-full p-3 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs leading-relaxed focus:border-[#8B72FF] outline-none resize-none font-medium"
                    />
                  </div>

                  {/* Supporting Detail & Visual Suggestion */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Supporting Detail / Pro Tip</span>
                      </label>
                      <input
                        type="text"
                        value={slide.supportingDetail || ''}
                        placeholder="Actionable tip, stat, or citation..."
                        onChange={(e) => handleUpdateSlide(slide.id, { supportingDetail: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs font-medium focus:border-[#8B72FF] outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-white flex items-center gap-1.5">
                        <Lightbulb className="w-3.5 h-3.5 text-[#5AA9FF]" />
                        <span>Visual Suggestion</span>
                      </label>
                      <input
                        type="text"
                        value={slide.visualSuggestion || ''}
                        placeholder="e.g. High-contrast typography with swipe indicator"
                        onChange={(e) => handleUpdateSlide(slide.id, { visualSuggestion: e.target.value })}
                        className="w-full p-2.5 rounded-xl bg-[#171923] border border-[#222633] text-white text-xs font-medium focus:border-[#8B72FF] outline-none"
                      />
                    </div>
                  </div>

                  {/* If Tool type, show Tool Name & Category */}
                  {slide.type === 'tool' && (
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-[#171923] border border-[#5AA9FF]/30">
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-[#5AA9FF]">Tool Name</label>
                        <input
                          type="text"
                          value={slide.toolName || ''}
                          placeholder="e.g. NotebookLM"
                          onChange={(e) => handleUpdateSlide(slide.id, { toolName: e.target.value })}
                          className="w-full p-2 rounded-lg bg-[#11131B] border border-[#222633] text-white text-xs"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-[#5AA9FF]">Tool Category</label>
                        <input
                          type="text"
                          value={slide.toolCategory || ''}
                          placeholder="e.g. Source-Grounded Notebook"
                          onChange={(e) => handleUpdateSlide(slide.id, { toolCategory: e.target.value })}
                          className="w-full p-2 rounded-lg bg-[#11131B] border border-[#222633] text-white text-xs"
                        />
                      </div>
                    </div>
                  )}

                  {/* Add Slide button after this one */}
                  <div className="pt-2 flex justify-end">
                    <button
                      type="button"
                      onClick={() => handleAddSlide(index)}
                      className="text-xs font-semibold text-[#8B72FF] hover:text-white flex items-center gap-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Insert Slide Below</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-4 border-t border-[#222633]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-[#A3A8B8] hover:text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Structure</span>
        </button>

        <button
          onClick={onProceed}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all hover:scale-105"
        >
          <span>Select Visual Theme</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
