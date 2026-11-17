import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Palette, 
  Check, 
  Sliders, 
  Type, 
  Layers, 
  Eye
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { THEMES } from '../../data/themes';
import { ThemeConfig } from '../../types';
import { SlidePreviewCard } from '../editor/SlidePreviewCard';

interface Step4VisualDesignProps {
  onBack: () => void;
  onProceed: () => void;
}

export const Step4VisualDesign: React.FC<Step4VisualDesignProps> = ({ onBack, onProceed }) => {
  const { activeProject, updateActiveProject, brandKit, addToast } = useApp();
  const [selectedThemeId, setSelectedThemeId] = useState<string>(activeProject.theme?.id || THEMES[0].id);
  const [useBrandKitOverride, setUseBrandKitOverride] = useState<boolean>(activeProject.brandKitApplied || false);

  const currentTheme = THEMES.find(t => t.id === selectedThemeId) || THEMES[0];

  const effectiveTheme: ThemeConfig = useBrandKitOverride
    ? {
        ...currentTheme,
        primaryColor: brandKit.primaryColor,
        secondaryColor: brandKit.secondaryColor,
        fontPrimary: brandKit.fontPrimary,
        fontSecondary: brandKit.fontSecondary
      }
    : currentTheme;

  const handleSelectTheme = (theme: ThemeConfig) => {
    setSelectedThemeId(theme.id);
    updateActiveProject({
      theme: useBrandKitOverride
        ? {
            ...theme,
            primaryColor: brandKit.primaryColor,
            secondaryColor: brandKit.secondaryColor,
            fontPrimary: brandKit.fontPrimary,
            fontSecondary: brandKit.fontSecondary
          }
        : theme
    });
  };

  const handleToggleBrandKit = () => {
    const next = !useBrandKitOverride;
    setUseBrandKitOverride(next);
    updateActiveProject({
      brandKitApplied: next,
      theme: next
        ? {
            ...currentTheme,
            primaryColor: brandKit.primaryColor,
            secondaryColor: brandKit.secondaryColor,
            fontPrimary: brandKit.fontPrimary,
            fontSecondary: brandKit.fontSecondary
          }
        : currentTheme
    });
    if (next) {
      addToast('Brand Kit Active', `Applied ${brandKit.brandName} styling.`, 'success');
    }
  };

  const sampleSlide = activeProject.slides[0] || {
    id: 'preview',
    slideNumber: 1,
    type: 'hook',
    badge: 'PREVIEW CARD',
    headline: activeProject.title || 'Stop Studying Harder: 80% is Leverage',
    body: 'The preview of your selected aesthetic in live social media dimensions.',
    supportingDetail: 'High retention visual hierarchy and contrast',
    layoutStyle: 'hero-hook'
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-400 text-xs font-semibold">
          <Palette className="w-3.5 h-3.5" />
          <span>Step 4 of 6: Visual Design & Styling Engine</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Select Your Aesthetic & Visual Direction
        </h1>
        <p className="text-sm text-[#A3A8B8] max-w-xl mx-auto">
          Choose a tailored design system curated for social media conversion, readability, and brand authority.
        </p>
      </div>

      {/* Brand Kit Quick Toggle */}
      <div className="p-4 rounded-2xl bg-[#171923] border border-[#222633] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B72FF] to-[#5AA9FF] flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>Sync with Brand Kit: {brandKit.brandName}</span>
              <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">Active</span>
            </h3>
            <p className="text-[11px] text-[#A3A8B8]">
              Overwrites theme accent colors with your brand primary ({brandKit.primaryColor}) and typography.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleBrandKit}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
            useBrandKitOverride
              ? 'bg-[#8B72FF] text-white border-[#8B72FF] shadow-glow-violet'
              : 'bg-[#222633] text-[#A3A8B8] hover:text-white border-white/10'
          }`}
        >
          {useBrandKitOverride ? '✓ Brand Kit Applied' : 'Apply Brand Kit Tokens'}
        </button>
      </div>

      {/* Main Grid: Theme Cards + Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Theme Cards (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#A3A8B8]">
            Curated Visual Themes ({THEMES.length})
          </div>

          <div className="space-y-3">
            {THEMES.map((theme) => {
              const isSelected = selectedThemeId === theme.id;

              return (
                <div
                  key={theme.id}
                  onClick={() => handleSelectTheme(theme)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border select-none ${
                    isSelected
                      ? 'bg-[#1E2230] border-[#8B72FF] shadow-glow-violet'
                      : 'bg-[#171923] border-[#222633] hover:border-white/20 hover:bg-[#1A1D29]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{theme.name}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/70">
                        {theme.category}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="w-5 h-5 rounded-full bg-[#8B72FF] flex items-center justify-center text-white text-xs font-bold shadow-sm">
                        ✓
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-[#A3A8B8] leading-relaxed mb-3">
                    {theme.description}
                  </p>

                  {/* Swatches & Typography */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-[#A3A8B8]">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono">Palette:</span>
                      <div className="flex items-center -space-x-1">
                        <span 
                          className="w-4 h-4 rounded-full border border-black/40 shadow"
                          style={{ backgroundColor: theme.primaryColor }}
                          title="Primary"
                        />
                        <span 
                          className="w-4 h-4 rounded-full border border-black/40 shadow"
                          style={{ backgroundColor: theme.secondaryColor }}
                          title="Secondary"
                        />
                        <span 
                          className="w-4 h-4 rounded-full border border-black/40 shadow"
                          style={{ backgroundColor: theme.cardColor }}
                          title="Surface"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-1 font-mono text-[10px]">
                      <Type className="w-3 h-3 text-[#8B72FF]" />
                      <span>{theme.fontPrimary}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Sticky Live Preview of Slide 1 (5 cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#A3A8B8]">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#5AA9FF]" />
              <span>Live Slide Preview</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400">1080 x 1080</span>
          </div>

          <div className="p-2 rounded-2xl bg-[#12131A] border border-[#222633] shadow-2xl">
            <SlidePreviewCard
              slide={sampleSlide}
              totalSlides={activeProject.slides.length || activeProject.slideCount}
              theme={effectiveTheme}
              brandKit={brandKit}
            />
          </div>

          <p className="text-[11px] text-[#A3A8B8] text-center">
            Slide typography and contrast update in real-time as you switch themes.
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-4 border-t border-[#222633]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-[#A3A8B8] hover:text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Copy</span>
        </button>

        <button
          onClick={onProceed}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all hover:scale-105"
        >
          <span>Open in Carousel Studio</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
