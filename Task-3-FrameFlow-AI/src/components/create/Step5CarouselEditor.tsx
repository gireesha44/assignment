import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  Copy, 
  Sliders, 
  Layout, 
  Palette, 
  Type, 
  AlignLeft, 
  AlignCenter, 
  Check, 
  Download,
  Eye,
  Save,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Slide, SlideType } from '../../types';
import { SlideThumbnail } from '../editor/SlideThumbnail';
import { SocialFrameWrapper } from '../editor/SocialFrameWrapper';
import { SlidePreviewCard } from '../editor/SlidePreviewCard';

interface Step5CarouselEditorProps {
  onBack: () => void;
  onProceed: () => void;
}

export const Step5CarouselEditor: React.FC<Step5CarouselEditorProps> = ({ onBack, onProceed }) => {
  const { activeProject, updateActiveProject, brandKit, addToast } = useApp();

  const [slides, setSlides] = useState<Slide[]>(activeProject.slides || []);
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [rightPanelTab, setRightPanelTab] = useState<'content' | 'layout' | 'style'>('content');

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement).tagName.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowLeft') {
        setCurrentSlideIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'ArrowRight') {
        setCurrentSlideIndex(prev => Math.min(prev + 1, slides.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [slides.length]);

  const activeSlide = slides[currentSlideIndex] || slides[0];

  const updateCurrentSlide = (updates: Partial<Slide>) => {
    const updated = slides.map((s, idx) => (idx === currentSlideIndex ? { ...s, ...updates } : s));
    setSlides(updated);
    updateActiveProject({ slides: updated });
  };

  const handleAddSlide = () => {
    const newSlide: Slide = {
      id: `slide-${Date.now()}`,
      slideNumber: slides.length + 1,
      type: 'framework',
      badge: 'NEW INSIGHT',
      headline: 'New Slide Headline',
      body: 'Add your tactical insight or explanation here.',
      supportingDetail: 'Practical rule or metric to support this point.',
      layoutStyle: 'standard',
      textAlign: 'left',
      fontSize: 'md'
    };

    const next = [...slides, newSlide];
    setSlides(next);
    updateActiveProject({ slides: next });
    setCurrentSlideIndex(next.length - 1);
    addToast('Slide Added', `Created slide #${next.length}.`, 'success');
  };

  const handleDeleteSlide = (index: number) => {
    if (slides.length <= 2) {
      addToast('Cannot Delete', 'Carousels need at least 2 slides.', 'warning');
      return;
    }
    const filtered = slides.filter((_, idx) => idx !== index);
    const renumbered = filtered.map((s, idx) => ({ ...s, slideNumber: idx + 1 }));
    setSlides(renumbered);
    updateActiveProject({ slides: renumbered });
    if (currentSlideIndex >= renumbered.length) {
      setCurrentSlideIndex(renumbered.length - 1);
    }
    addToast('Slide Deleted', 'Sequence renumbered automatically.', 'info');
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
    setCurrentSlideIndex(index + 1);
    addToast('Slide Duplicated', 'Switched to new duplicate.', 'success');
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
    setCurrentSlideIndex(targetIdx);
  };

  const accentColorPresets = [
    { label: 'Violet', hex: '#8B72FF' },
    { label: 'Electric Blue', hex: '#5AA9FF' },
    { label: 'Cyan Tech', hex: '#00F5D4' },
    { label: 'Emerald', hex: '#10B981' },
    { label: 'Amber', hex: '#F59E0B' },
    { label: 'Rose Pink', hex: '#F43F5E' },
    { label: 'Purple', hex: '#A855F7' }
  ];

  const bgPresets = [
    { label: 'Theme Gradient', val: undefined },
    { label: 'Deep Ink', val: '#171923' },
    { label: 'Midnight Blue', val: '#0F172A' },
    { label: 'Charcoal Dark', val: '#12131A' },
    { label: 'Radiant Mesh', val: 'radial-gradient(circle at 90% 10%, rgba(139,114,255,0.3), transparent 60%), #171923' }
  ];

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col overflow-hidden bg-[#11131B]">
      {/* Studio Sub-Header */}
      <div className="h-12 bg-[#171923] border-b border-[#222633] px-6 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="text-xs text-[#A3A8B8] hover:text-white flex items-center gap-1 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Theme Selection</span>
          </button>
          <span className="text-white/20">|</span>
          <span className="text-xs font-bold text-white flex items-center gap-1.5">
            <Sliders className="w-3.5 h-3.5 text-[#8B72FF]" />
            <span>Interactive Carousel Studio</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-[#A3A8B8] hidden sm:inline">
            Slide {currentSlideIndex + 1} of {slides.length}
          </span>

          <button
            onClick={() => {
              updateActiveProject({ status: 'publish-ready' });
              addToast('Saved as Ready', 'Carousel marked as publish-ready.', 'success');
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222633] hover:bg-[#2c3244] text-xs font-semibold text-slate-200 border border-white/5 transition-all"
          >
            <Save className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mark Ready</span>
          </button>

          <button
            onClick={onProceed}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Deck</span>
          </button>
        </div>
      </div>

      {/* 3-Panel Studio Layout */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL: Slide Thumbnails */}
        <aside className="w-72 bg-[#171923] border-r border-[#222633] flex flex-col shrink-0 select-none">
          <div className="p-3 border-b border-[#222633] flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A3A8B8]">
              Slides ({slides.length})
            </span>
            <button
              onClick={handleAddSlide}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#8B72FF]/20 hover:bg-[#8B72FF] text-[#8B72FF] hover:text-white text-xs font-bold transition-all border border-[#8B72FF]/40"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Slide</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2.5">
            {slides.map((slide, idx) => (
              <SlideThumbnail
                key={slide.id}
                slide={slide}
                index={idx}
                totalSlides={slides.length}
                isSelected={idx === currentSlideIndex}
                theme={activeProject.theme}
                onSelect={() => setCurrentSlideIndex(idx)}
                onMoveUp={() => handleMove(idx, 'up')}
                onMoveDown={() => handleMove(idx, 'down')}
                onDuplicate={() => handleDuplicateSlide(idx)}
                onDelete={() => handleDeleteSlide(idx)}
              />
            ))}
          </div>
        </aside>

        {/* CENTER PANEL: Social Frame Simulator Preview */}
        <main className="flex-1 overflow-y-auto p-6 flex flex-col items-center justify-center bg-[#11131B]">
          <SocialFrameWrapper
            platform={activeProject.platform}
            currentSlideIndex={currentSlideIndex}
            totalSlides={slides.length}
            onPrev={() => setCurrentSlideIndex(prev => Math.max(prev - 1, 0))}
            onNext={() => setCurrentSlideIndex(prev => Math.min(prev + 1, slides.length - 1))}
            brandKit={brandKit}
            projectTitle={activeProject.title}
          >
            {activeSlide && (
              <SlidePreviewCard
                slide={activeSlide}
                totalSlides={slides.length}
                theme={activeProject.theme}
                brandKit={brandKit}
              />
            )}
          </SocialFrameWrapper>
        </main>

        {/* RIGHT PANEL: Editing Controls */}
        <aside className="w-80 bg-[#171923] border-l border-[#222633] flex flex-col shrink-0">
          {/* Tab Bar */}
          <div className="p-2 border-b border-[#222633] grid grid-cols-3 gap-1 bg-[#12131A]">
            <button
              onClick={() => setRightPanelTab('content')}
              className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                rightPanelTab === 'content'
                  ? 'bg-[#222633] text-white shadow'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setRightPanelTab('layout')}
              className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                rightPanelTab === 'layout'
                  ? 'bg-[#222633] text-white shadow'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              Layout
            </button>
            <button
              onClick={() => setRightPanelTab('style')}
              className={`py-1.5 rounded-lg text-xs font-bold transition-all ${
                rightPanelTab === 'style'
                  ? 'bg-[#222633] text-white shadow'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              Style
            </button>
          </div>

          {/* Tab Content Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {activeSlide && rightPanelTab === 'content' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#A3A8B8] pb-1 border-b border-white/5">
                  <span className="font-mono">Editing Slide #{currentSlideIndex + 1}</span>
                  <span className="font-bold uppercase text-[#8B72FF]">{activeSlide.type}</span>
                </div>

                {/* Headline */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">Headline Text</label>
                  <textarea
                    rows={2}
                    value={activeSlide.headline}
                    onChange={(e) => updateCurrentSlide({ headline: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] focus:border-[#8B72FF] text-white text-xs outline-none resize-none font-medium leading-relaxed"
                  />
                </div>

                {/* Body Content */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">Body Copy</label>
                  <textarea
                    rows={4}
                    value={activeSlide.body}
                    onChange={(e) => updateCurrentSlide({ body: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] focus:border-[#8B72FF] text-white text-xs outline-none resize-none font-medium leading-relaxed"
                  />
                </div>

                {/* Category Badge */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">Category Tag / Badge</label>
                  <input
                    type="text"
                    value={activeSlide.badge || ''}
                    placeholder="e.g. TOOL 01 // SYNTHESIS"
                    onChange={(e) => updateCurrentSlide({ badge: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
                  />
                </div>

                {/* Supporting Detail */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white">Supporting Detail / Pro Tip</label>
                  <textarea
                    rows={3}
                    value={activeSlide.supportingDetail || ''}
                    placeholder="Actionable takeaway or metric..."
                    onChange={(e) => updateCurrentSlide({ supportingDetail: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF] resize-none"
                  />
                </div>

                {/* If tool type */}
                {activeSlide.type === 'tool' && (
                  <div className="p-3 rounded-xl bg-[#11131B] border border-[#5AA9FF]/30 space-y-2">
                    <span className="text-[10px] font-bold uppercase text-[#5AA9FF]">Tool Parameters</span>
                    <input
                      type="text"
                      placeholder="Tool Name"
                      value={activeSlide.toolName || ''}
                      onChange={(e) => updateCurrentSlide({ toolName: e.target.value })}
                      className="w-full p-2 rounded-lg bg-[#171923] border border-[#222633] text-white text-xs"
                    />
                    <input
                      type="text"
                      placeholder="Category Tag (e.g. Academic Search)"
                      value={activeSlide.toolCategory || ''}
                      onChange={(e) => updateCurrentSlide({ toolCategory: e.target.value })}
                      className="w-full p-2 rounded-lg bg-[#171923] border border-[#222633] text-white text-xs"
                    />
                  </div>
                )}
              </div>
            )}

            {activeSlide && rightPanelTab === 'layout' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-[#A3A8B8] block">
                  Layout Archetype
                </span>

                <div className="space-y-2">
                  {[
                    { id: 'standard', name: 'Standard Editorial', desc: 'Balanced headline, body, and supporting box' },
                    { id: 'hero-hook', name: 'Hero Hook', desc: 'Impactful large headline with swipe indicator' },
                    { id: 'tool-showcase', name: 'Tool & Product Showcase', desc: 'Icon, product name, description, and pro-tip card' },
                    { id: 'split-card', name: 'Contrast / Split Card', desc: 'Two-column agitation vs resolution structure' },
                    { id: 'call-to-action', name: 'Engagement & CTA Card', desc: 'Centered headline with save/repost prompts' },
                  ].map((lt) => {
                    const isChosen = (activeSlide.layoutStyle || 'standard') === lt.id;
                    return (
                      <div
                        key={lt.id}
                        onClick={() => updateCurrentSlide({ layoutStyle: lt.id as any })}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          isChosen
                            ? 'bg-[#8B72FF]/15 border-[#8B72FF] text-white'
                            : 'bg-[#11131B] border-[#222633] text-[#A3A8B8] hover:text-white'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold">{lt.name}</span>
                          {isChosen && <Check className="w-3.5 h-3.5 text-[#8B72FF]" />}
                        </div>
                        <p className="text-[10px] text-[#A3A8B8] mt-1">{lt.desc}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Text Alignment */}
                <div className="space-y-2 pt-2 border-t border-[#222633]">
                  <label className="text-xs font-bold text-white">Text Alignment</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => updateCurrentSlide({ textAlign: 'left' })}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                        (activeSlide.textAlign || 'left') === 'left'
                          ? 'bg-[#8B72FF]/20 border-[#8B72FF] text-white'
                          : 'bg-[#11131B] border-[#222633] text-[#A3A8B8]'
                      }`}
                    >
                      <AlignLeft className="w-3.5 h-3.5" />
                      <span>Left</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => updateCurrentSlide({ textAlign: 'center' })}
                      className={`p-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 border ${
                        activeSlide.textAlign === 'center'
                          ? 'bg-[#8B72FF]/20 border-[#8B72FF] text-white'
                          : 'bg-[#11131B] border-[#222633] text-[#A3A8B8]'
                      }`}
                    >
                      <AlignCenter className="w-3.5 h-3.5" />
                      <span>Center</span>
                    </button>
                  </div>
                </div>

                {/* Font Size Scaling */}
                <div className="space-y-2 pt-2 border-t border-[#222633]">
                  <label className="text-xs font-bold text-white">Font Size Scaling</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['sm', 'md', 'lg'] as const).map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => updateCurrentSlide({ fontSize: sz })}
                        className={`py-1.5 rounded-xl text-xs font-bold uppercase border ${
                          (activeSlide.fontSize || 'md') === sz
                            ? 'bg-[#5AA9FF]/20 border-[#5AA9FF] text-white'
                            : 'bg-[#11131B] border-[#222633] text-[#A3A8B8]'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeSlide && rightPanelTab === 'style' && (
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase text-[#A3A8B8] block">
                  Color & Background Overrides
                </span>

                {/* Accent Color Picker */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white">Accent Highlight Color</label>
                  <div className="grid grid-cols-4 gap-2">
                    {accentColorPresets.map((c) => (
                      <button
                        key={c.hex}
                        type="button"
                        onClick={() => updateCurrentSlide({ accentOverride: c.hex })}
                        className={`h-8 rounded-lg flex items-center justify-center border transition-all ${
                          activeSlide.accentOverride === c.hex
                            ? 'ring-2 ring-white scale-105'
                            : 'border-white/10 opacity-80 hover:opacity-100'
                        }`}
                        style={{ backgroundColor: c.hex }}
                        title={c.label}
                      />
                    ))}
                  </div>
                </div>

                {/* Background Override */}
                <div className="space-y-2 pt-2 border-t border-[#222633]">
                  <label className="text-xs font-bold text-white">Slide Canvas Background</label>
                  <div className="space-y-1.5">
                    {bgPresets.map((bg, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => updateCurrentSlide({ bgOverride: bg.val })}
                        className={`w-full text-left p-2.5 rounded-xl text-xs font-medium border flex items-center justify-between ${
                          activeSlide.bgOverride === bg.val
                            ? 'bg-[#8B72FF]/20 border-[#8B72FF] text-white'
                            : 'bg-[#11131B] border-[#222633] text-[#A3A8B8] hover:text-white'
                        }`}
                      >
                        <span>{bg.label}</span>
                        {activeSlide.bgOverride === bg.val && (
                          <Check className="w-3.5 h-3.5 text-[#8B72FF]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reset Slide Styling */}
                <div className="pt-4 border-t border-[#222633]">
                  <button
                    type="button"
                    onClick={() => updateCurrentSlide({ bgOverride: undefined, accentOverride: undefined })}
                    className="w-full py-2 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-xs font-semibold text-[#A3A8B8] hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Slide Overrides to Theme</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};
