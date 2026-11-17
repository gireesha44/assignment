import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Check, 
  Search, 
  BookOpen, 
  Terminal, 
  Palette, 
  MessageSquareCode, 
  Sliders, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { BrandKit, Slide, ThemeConfig } from '../../types';

interface SlidePreviewCardProps {
  slide: Slide;
  totalSlides: number;
  theme: ThemeConfig;
  brandKit?: BrandKit;
  scale?: number;
  interactive?: boolean;
}

export const SlidePreviewCard: React.FC<SlidePreviewCardProps> = ({
  slide,
  totalSlides,
  theme,
  brandKit,
  scale = 1,
  interactive = false
}) => {
  const getToolIcon = (name?: string, iconName?: string) => {
    switch (iconName || name?.toLowerCase()) {
      case 'search':
      case 'perplexity':
        return <Search className="w-5 h-5 text-[#5AA9FF]" />;
      case 'bookopen':
      case 'notebooklm':
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      case 'terminal':
      case 'github copilot':
        return <Terminal className="w-5 h-5 text-[#8B72FF]" />;
      case 'palette':
      case 'canva magic studio':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'messagesquarecode':
      case 'chatgpt (canvas)':
      case 'chatgpt':
        return <MessageSquareCode className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#8B72FF]" />;
    }
  };

  const primaryColor = theme.primaryColor || '#8B72FF';
  const secondaryColor = theme.secondaryColor || '#5AA9FF';
  const bgStyle = slide.bgOverride || theme.gradientBackground || theme.backgroundColor || '#171923';

  return (
    <div
      className="relative w-full aspect-square rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl transition-all select-none border border-white/10"
      style={{
        background: bgStyle,
        color: theme.textColor || '#F7F7FB',
        fontFamily: theme.fontPrimary || 'Plus Jakarta Sans',
      }}
    >
      {/* Decorative ambient radial glow */}
      <div 
        className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40"
        style={{ background: primaryColor }}
      />
      <div 
        className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-30"
        style={{ background: secondaryColor }}
      />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          {brandKit?.avatarUrl && (
            <img
              src={brandKit.avatarUrl}
              alt="Avatar"
              className="w-7 h-7 rounded-full object-cover ring-1 ring-white/30"
            />
          )}
          <div>
            <div className="flex items-center gap-1">
              <span className="text-xs font-bold text-white tracking-tight">
                {brandKit?.brandName || 'Apex Studio'}
              </span>
              {brandKit?.verifiedBadge && (
                <span 
                  className="w-3 h-3 rounded-full flex items-center justify-center text-[7px] text-white font-bold"
                  style={{ backgroundColor: secondaryColor }}
                >
                  ✓
                </span>
              )}
            </div>
            <span className="text-[10px] text-white/60 font-mono block">
              {brandKit?.handle || '@founder_alex'}
            </span>
          </div>
        </div>

        {/* Slide Counter Badge */}
        <div className="flex items-center gap-2">
          {slide.badge && (
            <span
              className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${theme.badgeStyle || 'bg-white/10 text-white'}`}
            >
              {slide.badge}
            </span>
          )}
          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/40 text-white/90 border border-white/10">
            {slide.slideNumber} / {totalSlides}
          </span>
        </div>
      </div>

      {/* Main Slide Body Layouts */}
      <div className="relative z-10 my-auto py-3 space-y-4">
        {/* LAYOUT 1: HERO HOOK */}
        {slide.layoutStyle === 'hero-hook' && (
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight text-white">
              {slide.headline}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed whitespace-pre-line font-normal">
              {slide.body}
            </p>
            {slide.supportingDetail && (
              <div 
                className="inline-flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md text-xs font-semibold text-white/90 border border-white/15"
                style={{ backgroundColor: `${primaryColor}20` }}
              >
                <span>{slide.supportingDetail}</span>
              </div>
            )}
          </div>
        )}

        {/* LAYOUT 2: TOOL SHOWCASE */}
        {slide.layoutStyle === 'tool-showcase' && (
          <div className="space-y-3.5">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 shadow-md backdrop-blur-md"
                style={{ backgroundColor: `${secondaryColor}25` }}
              >
                {getToolIcon(slide.toolName, slide.iconName)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {slide.toolName || slide.headline}
                  </h3>
                  {slide.toolCategory && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/70 border border-white/10">
                      {slide.toolCategory}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-white/60 font-medium">Verified Productivity Benchmark</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
              {slide.body}
            </p>

            {slide.supportingDetail && (
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-[11px] text-white/80 leading-normal flex items-start gap-1.5 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                  <span>{slide.supportingDetail}</span>
                </p>
              </div>
            )}
          </div>
        )}

        {/* LAYOUT 3: SPLIT CARD / CONTRAST */}
        {slide.layoutStyle === 'split-card' && (
          <div className="space-y-3">
            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              {slide.headline}
            </h3>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed whitespace-pre-line font-normal">
                {slide.body}
              </p>
            </div>
            {slide.supportingDetail && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{slide.supportingDetail}</span>
              </div>
            )}
          </div>
        )}

        {/* LAYOUT 4: CALL TO ACTION */}
        {slide.layoutStyle === 'call-to-action' && (
          <div className="text-center space-y-4 py-2">
            <div className="inline-block mx-auto p-3 rounded-2xl bg-white/10 border border-white/20">
              <Sparkles className="w-7 h-7 text-amber-300 animate-pulse-subtle" />
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-white leading-tight">
              {slide.headline}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-sm mx-auto leading-relaxed whitespace-pre-line">
              {slide.body}
            </p>
            {slide.supportingDetail && (
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/90 whitespace-pre-line max-w-xs mx-auto">
                {slide.supportingDetail}
              </div>
            )}
          </div>
        )}

        {/* DEFAULT / STANDARD LAYOUT */}
        {(!slide.layoutStyle || slide.layoutStyle === 'standard') && (
          <div className="space-y-3">
            <h3 className="text-base sm:text-xl font-bold text-white tracking-tight leading-snug">
              {slide.headline}
            </h3>
            <p className="text-xs sm:text-sm text-white/85 leading-relaxed whitespace-pre-line font-normal">
              {slide.body}
            </p>
            {slide.supportingDetail && (
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-xs text-white/80 font-medium">
                  {slide.supportingDetail}
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer & Progress Line */}
      <div className="relative z-10 space-y-2 pt-2 border-t border-white/10">
        <div className="flex items-center justify-between text-[10px] text-white/60">
          <span className="font-medium tracking-wide">
            {slide.slideNumber < totalSlides ? 'Swipe to continue →' : 'Save & Share'}
          </span>
          <span className="font-mono opacity-70">
            FRAMEFLOW AI
          </span>
        </div>

        {/* Progress Bar Line */}
        <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
          <div 
            className="h-full rounded-full transition-all duration-300"
            style={{ 
              width: `${(slide.slideNumber / totalSlides) * 100}%`,
              background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`
            }}
          />
        </div>
      </div>
    </div>
  );
};
