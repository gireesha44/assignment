import React, { useState } from 'react';
import { 
  Palette, 
  Sparkles, 
  Type, 
  Save, 
  Check, 
  Upload, 
  CheckCircle2, 
  Eye, 
  Layers, 
  RotateCcw 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { THEMES } from '../../data/themes';
import { SlidePreviewCard } from '../editor/SlidePreviewCard';
import { Slide } from '../../types';

export const BrandKitView: React.FC = () => {
  const { brandKit, updateBrandKit, applyBrandKitToProject, addToast } = useApp();

  const [formState, setFormState] = useState(brandKit);

  const fontOptions = [
    'Plus Jakarta Sans',
    'Inter',
    'Outfit',
    'Cabinet Grotesk',
    'Playfair Display'
  ];

  const monoFontOptions = [
    'JetBrains Mono',
    'Roboto Mono',
    'Fira Code',
    'Satoshi'
  ];

  const avatarPresets = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  ];

  const handleSave = () => {
    updateBrandKit(formState);
    applyBrandKitToProject();
    addToast('Brand Kit Saved', 'Preferences applied to active carousel.', 'success');
  };

  const previewSlide: Slide = {
    id: 'brand-preview',
    slideNumber: 1,
    type: 'hook',
    badge: 'BRAND KIT PREVIEW',
    headline: 'Consistent Brand Aesthetics Drive 3.2x Higher Recognition',
    body: 'Your custom typography, brand palette, and verified badges are rendered across all carousel slides in real time.',
    supportingDetail: `${formState.brandName} • Styled with ${formState.primaryColor}`,
    layoutStyle: 'hero-hook'
  };

  const previewTheme = {
    ...THEMES[0],
    primaryColor: formState.primaryColor,
    secondaryColor: formState.secondaryColor,
    fontPrimary: formState.fontPrimary,
    fontSecondary: formState.fontSecondary
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222633]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold mb-2">
            <Palette className="w-3.5 h-3.5" />
            <span>Visual Brand System</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">Brand Kit & Style Tokens</h1>
          <p className="text-xs text-[#A3A8B8] mt-1">
            Configure your brand colors, typography, handles, and avatars to automatically brand all carousel generations.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all self-start sm:self-auto"
        >
          <Save className="w-4 h-4" />
          <span>Save & Apply to Studio</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Form (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Identity & Profile Card */}
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#8B72FF]" />
              <span>Identity & Social Handles</span>
            </h3>

            {/* Avatar Row */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-white">Brand Avatar / Profile Photo</label>
              <div className="flex items-center gap-4">
                <img
                  src={formState.avatarUrl}
                  alt={formState.brandName}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-[#8B72FF]"
                />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    {avatarPresets.map((url, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setFormState(prev => ({ ...prev, avatarUrl: url }))}
                        className={`w-8 h-8 rounded-full overflow-hidden border-2 transition-all ${
                          formState.avatarUrl === url ? 'border-[#8B72FF] scale-110' : 'border-transparent opacity-60'
                        }`}
                      >
                        <img src={url} alt={`Preset ${idx}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                  <span className="text-[10px] text-[#A3A8B8] block">Choose an avatar preset or enter URL below</span>
                </div>
              </div>
              <input
                type="text"
                value={formState.avatarUrl}
                onChange={(e) => setFormState(prev => ({ ...prev, avatarUrl: e.target.value }))}
                className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
                placeholder="https://..."
              />
            </div>

            {/* Brand Name & Handle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Brand / Founder Name</label>
                <input
                  type="text"
                  value={formState.brandName}
                  onChange={(e) => setFormState(prev => ({ ...prev, brandName: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Social Handle</label>
                <input
                  type="text"
                  value={formState.handle}
                  onChange={(e) => setFormState(prev => ({ ...prev, handle: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
                />
              </div>
            </div>

            {/* Tagline */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-white">Brand Tagline / LinkedIn Headline</label>
              <input
                type="text"
                value={formState.tagline}
                onChange={(e) => setFormState(prev => ({ ...prev, tagline: e.target.value }))}
                className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
              />
            </div>

            {/* Badges Toggle */}
            <div className="flex items-center justify-between pt-2 border-t border-[#222633]">
              <span className="text-xs font-medium text-slate-200">Show Verified Blue Checkmark</span>
              <input
                type="checkbox"
                checked={formState.verifiedBadge}
                onChange={(e) => setFormState(prev => ({ ...prev, verifiedBadge: e.target.checked }))}
                className="accent-[#8B72FF] w-4 h-4 cursor-pointer"
              />
            </div>
          </div>

          {/* Color Tokens */}
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#5AA9FF]" />
              <span>Brand Color Tokens</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Primary Brand Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={formState.primaryColor}
                    onChange={(e) => setFormState(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <input
                    type="text"
                    value={formState.primaryColor}
                    onChange={(e) => setFormState(prev => ({ ...prev, primaryColor: e.target.value }))}
                    className="flex-1 p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs font-mono"
                  />
                </div>
              </div>

              {/* Secondary Color */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Secondary Accent Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={formState.secondaryColor}
                    onChange={(e) => setFormState(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <input
                    type="text"
                    value={formState.secondaryColor}
                    onChange={(e) => setFormState(prev => ({ ...prev, secondaryColor: e.target.value }))}
                    className="flex-1 p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Typography Tokens */}
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Type className="w-4 h-4 text-emerald-400" />
              <span>Typography Hierarchy</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Primary Headline Font</label>
                <select
                  value={formState.fontPrimary}
                  onChange={(e) => setFormState(prev => ({ ...prev, fontPrimary: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs"
                >
                  {fontOptions.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white">Secondary / Mono Font</label>
                <select
                  value={formState.fontSecondary}
                  onChange={(e) => setFormState(prev => ({ ...prev, fontSecondary: e.target.value }))}
                  className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs"
                >
                  {monoFontOptions.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Theme */}
            <div className="space-y-1.5 pt-2 border-t border-[#222633]">
              <label className="text-xs font-bold text-white">Preferred Default Theme Base</label>
              <select
                value={formState.preferredThemeId}
                onChange={(e) => setFormState(prev => ({ ...prev, preferredThemeId: e.target.value }))}
                className="w-full p-2.5 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs"
              >
                {THEMES.map(t => (
                  <option key={t.id} value={t.id}>{t.name} ({t.category})</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right: Live Preview of Branded Slide (5 cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#A3A8B8]">
            <span className="flex items-center gap-1.5">
              <Eye className="w-3.5 h-3.5 text-[#5AA9FF]" />
              <span>Live Branded Slide Preview</span>
            </span>
            <span className="font-mono text-[10px] text-emerald-400">Reactive</span>
          </div>

          <div className="p-2 rounded-2xl bg-[#12131A] border border-[#222633] shadow-2xl">
            <SlidePreviewCard
              slide={previewSlide}
              totalSlides={9}
              theme={previewTheme}
              brandKit={formState}
            />
          </div>

          <div className="p-4 rounded-xl bg-[#171923] border border-[#222633] text-xs text-[#A3A8B8] space-y-1">
            <p className="font-bold text-white">Brand Tokens Active</p>
            <p>Every newly generated carousel will automatically inherit this typography, avatar, verified badge, and primary accent palette.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
