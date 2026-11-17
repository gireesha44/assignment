import React from 'react';
import { 
  ChevronUp, 
  ChevronDown, 
  Copy, 
  Trash2, 
  Sparkles, 
  Search, 
  BookOpen, 
  Terminal, 
  Palette, 
  MessageSquareCode 
} from 'lucide-react';
import { Slide, ThemeConfig } from '../../types';

interface SlideThumbnailProps {
  slide: Slide;
  index: number;
  totalSlides: number;
  isSelected: boolean;
  theme: ThemeConfig;
  onSelect: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onDuplicate: () => void;
  onDelete: () => void;
}

export const SlideThumbnail: React.FC<SlideThumbnailProps> = ({
  slide,
  index,
  totalSlides,
  isSelected,
  theme,
  onSelect,
  onMoveUp,
  onMoveDown,
  onDuplicate,
  onDelete
}) => {
  return (
    <div
      onClick={onSelect}
      className={`relative group rounded-xl p-3 cursor-pointer transition-all border text-left select-none ${
        isSelected
          ? 'bg-[#222633] border-[#8B72FF] shadow-glow-violet'
          : 'bg-[#171923] border-[#222633] hover:border-[#8B72FF]/40 hover:bg-[#1E2230]'
      }`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <span
            className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-mono font-bold ${
              isSelected ? 'bg-[#8B72FF] text-white' : 'bg-black/40 text-[#A3A8B8]'
            }`}
          >
            {index + 1}
          </span>
          <span className="text-[10px] uppercase font-mono tracking-wider text-[#5AA9FF] truncate max-w-[80px]">
            {slide.type}
          </span>
        </div>

        {/* Thumbnail Actions */}
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveUp();
            }}
            disabled={index === 0}
            className="p-1 hover:bg-white/10 rounded disabled:opacity-20 text-[#A3A8B8] hover:text-white"
            title="Move slide up"
          >
            <ChevronUp className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMoveDown();
            }}
            disabled={index === totalSlides - 1}
            className="p-1 hover:bg-white/10 rounded disabled:opacity-20 text-[#A3A8B8] hover:text-white"
            title="Move slide down"
          >
            <ChevronDown className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
            className="p-1 hover:bg-white/10 rounded text-[#A3A8B8] hover:text-[#5AA9FF]"
            title="Duplicate slide"
          >
            <Copy className="w-3 h-3" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            disabled={totalSlides <= 2}
            className="p-1 hover:bg-rose-500/20 rounded disabled:opacity-20 text-[#A3A8B8] hover:text-rose-400"
            title="Delete slide"
          >
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Mini Headline Preview */}
      <h5 className="text-xs font-semibold text-white truncate line-clamp-1">
        {slide.headline || 'Empty Headline'}
      </h5>
      <p className="text-[10px] text-[#A3A8B8] truncate mt-0.5">
        {slide.body.slice(0, 45) || 'No body content'}...
      </p>
    </div>
  );
};
