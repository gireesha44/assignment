import React, { useState } from 'react';
import { 
  LayoutTemplate, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Layers, 
  Eye, 
  Target, 
  Sliders 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { TEMPLATES, CarouselTemplate } from '../../data/templates';

export const TemplatesGallery: React.FC = () => {
  const { loadTemplateIntoProject } = useApp();
  const [selectedTemplate, setSelectedTemplate] = useState<CarouselTemplate | null>(null);

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="pb-6 border-b border-[#222633] space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold">
          <LayoutTemplate className="w-3.5 h-3.5" />
          <span>Battle-Tested Blueprints</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          Carousel Template Library
        </h1>
        <p className="text-xs text-[#A3A8B8] max-w-2xl">
          Pre-engineered narrative frameworks designed for LinkedIn and Instagram growth. Pick a format to preload its structure directly into your studio.
        </p>
      </div>

      {/* Grid of Templates */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEMPLATES.map((tpl) => (
          <div
            key={tpl.id}
            className="rounded-2xl bg-[#171923] border border-[#222633] hover:border-[#8B72FF]/50 transition-all duration-300 hover:shadow-glow-violet group flex flex-col justify-between overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-slate-300 font-semibold border border-white/10">
                  {tpl.category}
                </span>
                <span className="text-xs font-mono font-bold text-[#5AA9FF]">
                  {tpl.slidesCount} Slides
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white group-hover:text-[#5AA9FF] transition-colors">
                  {tpl.title}
                </h3>
                <p className="text-xs text-[#8B72FF] font-medium mt-0.5">
                  {tpl.tagline}
                </p>
                <p className="text-xs text-[#A3A8B8] leading-relaxed mt-2.5">
                  {tpl.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {tpl.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#222633] text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Outline Preview Teaser */}
              <div className="p-3 rounded-xl bg-[#11131B] border border-[#222633] space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-[#A3A8B8] block">
                  Framework Preview:
                </span>
                {tpl.slidesPreview.slice(0, 3).map((sp, idx) => (
                  <p key={idx} className="text-[11px] text-slate-300 truncate flex items-center gap-1.5">
                    <span className="text-[#8B72FF] font-mono text-[9px]">{idx + 1}.</span>
                    <span>{sp.headline}</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-4 bg-[#141620] border-t border-[#222633] flex items-center justify-between">
              <div className="text-[11px] text-[#A3A8B8]">
                <span>Platform: </span>
                <strong className="text-white capitalize">{tpl.platform}</strong>
              </div>

              <button
                onClick={() => loadTemplateIntoProject(tpl.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-sm hover:shadow-glow-violet transition-all group-hover:scale-105"
              >
                <span>Use Template</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
