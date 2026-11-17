import React, { useState } from 'react';
import { 
  Heart, 
  MessageCircle, 
  Send, 
  Bookmark, 
  Share2, 
  ThumbsUp, 
  Repeat2, 
  MoreHorizontal, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Smartphone,
  Monitor
} from 'lucide-react';
import { BrandKit, Platform } from '../../types';

interface SocialFrameWrapperProps {
  children: React.ReactNode;
  platform: Platform;
  currentSlideIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  brandKit: BrandKit;
  projectTitle: string;
}

export const SocialFrameWrapper: React.FC<SocialFrameWrapperProps> = ({
  children,
  platform,
  currentSlideIndex,
  totalSlides,
  onPrev,
  onNext,
  brandKit,
  projectTitle
}) => {
  const [activeView, setActiveView] = useState<'linkedin' | 'instagram' | 'raw'>(
    platform === 'instagram' ? 'instagram' : 'linkedin'
  );

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto space-y-3">
      {/* Platform View Switcher */}
      <div className="flex items-center justify-between w-full px-2">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171923] border border-[#222633] text-xs">
          <button
            onClick={() => setActiveView('linkedin')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeView === 'linkedin'
                ? 'bg-[#0A66C2] text-white shadow-sm'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            LinkedIn Post
          </button>
          <button
            onClick={() => setActiveView('instagram')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeView === 'instagram'
                ? 'bg-gradient-to-r from-[#E1306C] to-[#833AB4] text-white shadow-sm'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            Instagram Feed
          </button>
          <button
            onClick={() => setActiveView('raw')}
            className={`px-3 py-1 rounded-lg font-semibold transition-all ${
              activeView === 'raw'
                ? 'bg-[#222633] text-white shadow-sm'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            Artboard Only
          </button>
        </div>

        <span className="text-xs font-mono text-[#A3A8B8] hidden sm:inline">
          1080 x 1080 px (1:1)
        </span>
      </div>

      {/* Frame Container */}
      <div className="w-full relative group">
        {/* Navigation Arrow Left */}
        <button
          onClick={onPrev}
          disabled={currentSlideIndex === 0}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#171923]/90 hover:bg-[#8B72FF] border border-[#222633] text-white flex items-center justify-center shadow-xl disabled:opacity-20 disabled:pointer-events-none transition-all hover:scale-110"
          title="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={onNext}
          disabled={currentSlideIndex === totalSlides - 1}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#171923]/90 hover:bg-[#8B72FF] border border-[#222633] text-white flex items-center justify-center shadow-xl disabled:opacity-20 disabled:pointer-events-none transition-all hover:scale-110"
          title="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* LINKEDIN POST SIMULATOR */}
        {activeView === 'linkedin' && (
          <div className="rounded-2xl bg-[#1B1E2B] border border-[#2A2F42] overflow-hidden shadow-2xl text-white">
            {/* LinkedIn Post Header */}
            <div className="p-4 flex items-start justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                <img
                  src={brandKit.avatarUrl}
                  alt={brandKit.brandName}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-[#0A66C2]/40"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white hover:underline cursor-pointer">
                      {brandKit.brandName}
                    </span>
                    <span className="text-[10px] text-white/50">• 1st</span>
                  </div>
                  <p className="text-[11px] text-[#A3A8B8] line-clamp-1">{brandKit.tagline}</p>
                  <p className="text-[10px] text-[#A3A8B8]/70 flex items-center gap-1 mt-0.5">
                    <span>2h • Edited • </span>
                    <span>🌐</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="px-3 py-1 rounded-full text-xs font-semibold text-[#5AA9FF] border border-[#5AA9FF]/40 hover:bg-[#5AA9FF]/10 transition-colors">
                  + Follow
                </button>
                <MoreHorizontal className="w-4 h-4 text-[#A3A8B8] cursor-pointer" />
              </div>
            </div>

            {/* LinkedIn Post Caption Teaser */}
            <div className="px-4 py-2 text-xs text-slate-200 leading-relaxed">
              <p className="line-clamp-2">
                {projectTitle}. Most founders make the mistake of overcomplicating their workflows. Here is the exact framework to study and implement this week.
              </p>
              <span className="text-[11px] text-[#5AA9FF] cursor-pointer hover:underline font-medium">...see more</span>
            </div>

            {/* Document Viewer Top Bar */}
            <div className="bg-[#141620] px-4 py-2 flex items-center justify-between text-xs text-white/80 border-t border-b border-white/5 font-mono">
              <span className="truncate max-w-[240px] text-[11px] text-slate-300">
                {projectTitle}.pdf
              </span>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="font-semibold text-[#5AA9FF]">
                  {currentSlideIndex + 1} / {totalSlides}
                </span>
                <Maximize2 className="w-3.5 h-3.5 opacity-60 hover:opacity-100 cursor-pointer" />
              </div>
            </div>

            {/* The Slide Canvas */}
            <div className="p-3 bg-[#11131B]">
              {children}
            </div>

            {/* LinkedIn Metrics & Reaction Bar */}
            <div className="px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A3A8B8]">
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-1">
                  <span className="w-4 h-4 rounded-full bg-[#0A66C2] flex items-center justify-center text-[9px] text-white">👍</span>
                  <span className="w-4 h-4 rounded-full bg-[#8B72FF] flex items-center justify-center text-[9px] text-white">💡</span>
                  <span className="w-4 h-4 rounded-full bg-rose-500 flex items-center justify-center text-[9px] text-white">❤️</span>
                </div>
                <span>384 • 48 comments</span>
              </div>
              <span>29 reposts</span>
            </div>

            {/* LinkedIn Action Buttons */}
            <div className="px-2 py-1.5 border-t border-white/5 grid grid-cols-4 text-center text-xs text-[#A3A8B8]">
              <button className="flex items-center justify-center gap-1.5 py-1.5 hover:bg-white/5 rounded-lg transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Like</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-1.5 hover:bg-white/5 rounded-lg transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Comment</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-1.5 hover:bg-white/5 rounded-lg transition-colors">
                <Repeat2 className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Repost</span>
              </button>
              <button className="flex items-center justify-center gap-1.5 py-1.5 hover:bg-white/5 rounded-lg transition-colors">
                <Send className="w-4 h-4" />
                <span className="font-medium hidden sm:inline">Send</span>
              </button>
            </div>
          </div>
        )}

        {/* INSTAGRAM POST SIMULATOR */}
        {activeView === 'instagram' && (
          <div className="rounded-2xl bg-[#12131A] border border-[#222633] overflow-hidden shadow-2xl text-white">
            {/* Instagram Header */}
            <div className="p-3.5 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2.5">
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600">
                  <img
                    src={brandKit.avatarUrl}
                    alt={brandKit.brandName}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-[#12131A]"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-white">
                      {brandKit.handle.replace('@', '')}
                    </span>
                    {brandKit.verifiedBadge && (
                      <span className="text-[10px] text-[#5AA9FF]">✓</span>
                    )}
                  </div>
                  <p className="text-[10px] text-[#A3A8B8]">Original Audio</p>
                </div>
              </div>
              <MoreHorizontal className="w-4 h-4 text-[#A3A8B8] cursor-pointer" />
            </div>

            {/* Slide */}
            <div className="relative">
              {children}

              {/* Instagram top-right page counter */}
              <div className="absolute top-4 right-4 z-20 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold">
                {currentSlideIndex + 1}/{totalSlides}
              </div>
            </div>

            {/* Instagram Action Icons */}
            <div className="p-3.5 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white">
                  <Heart className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors" />
                  <MessageCircle className="w-5 h-5 hover:text-[#5AA9FF] cursor-pointer transition-colors" />
                  <Send className="w-5 h-5 hover:text-[#8B72FF] cursor-pointer transition-colors" />
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all ${
                        i === currentSlideIndex
                          ? 'w-4 bg-[#5AA9FF]'
                          : 'w-1.5 bg-white/20'
                      }`}
                    />
                  ))}
                </div>

                <Bookmark className="w-5 h-5 hover:text-amber-400 cursor-pointer transition-colors" />
              </div>

              <div className="text-xs space-y-1">
                <p className="font-bold text-white">1,492 likes</p>
                <p className="text-slate-300">
                  <span className="font-bold text-white mr-1.5">{brandKit.handle.replace('@', '')}</span>
                  {projectTitle} — swipe through for the full breakdown! 🚀
                </p>
                <p className="text-[11px] text-[#A3A8B8] cursor-pointer">View all 86 comments</p>
              </div>
            </div>
          </div>
        )}

        {/* RAW ARTBOARD */}
        {activeView === 'raw' && (
          <div className="p-2 bg-[#12131A] rounded-2xl border border-white/10 shadow-2xl">
            {children}
          </div>
        )}
      </div>

      {/* Slide Index Summary */}
      <div className="text-xs text-[#A3A8B8] font-mono flex items-center gap-2">
        <span>Slide {currentSlideIndex + 1} of {totalSlides}</span>
        <span>•</span>
        <span>Use arrow buttons or keyboard to swipe</span>
      </div>
    </div>
  );
};
