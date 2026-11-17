import React, { useState, useRef } from 'react';
import { 
  Download, 
  FileText, 
  Image as ImageIcon, 
  Copy, 
  Check, 
  Share2, 
  ArrowLeft, 
  Sparkles, 
  Printer, 
  AlertCircle, 
  CheckCircle2,
  ExternalLink,
  Layers
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { exportSlideAsPng, exportCarouselAsPdf, generateSocialCaption, ExportProgress } from '../../utils/exportUtils';
import { SlidePreviewCard } from '../editor/SlidePreviewCard';

interface Step6ExportProps {
  onBack: () => void;
}

export const Step6Export: React.FC<Step6ExportProps> = ({ onBack }) => {
  const { activeProject, updateActiveProject, brandKit, addToast } = useApp();

  const [selectedFormat, setSelectedFormat] = useState<'pdf' | 'png'>('pdf');
  const [platformPreset, setPlatformPreset] = useState<'linkedin' | 'instagram'>('linkedin');
  const [exportProgress, setExportProgress] = useState<ExportProgress | null>(null);
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [previewSlideIdx, setPreviewSlideIdx] = useState(0);

  // References for all slides for high-res export
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const generatedCaption = generateSocialCaption(activeProject);

  const handleCopyCaption = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(generatedCaption).catch((err) => {
        console.warn('Clipboard write error:', err);
      });
    }
    setCopiedCaption(true);
    addToast('Caption Copied', 'Paste directly into your LinkedIn or Instagram post.', 'success');
    setTimeout(() => setCopiedCaption(false), 3000);
  };

  const handleExportPdf = async () => {
    const validElements = slideRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (validElements.length === 0) {
      addToast('Export Error', 'Unable to capture slide containers.', 'error');
      return;
    }

    try {
      setExportProgress({
        currentSlide: 1,
        totalSlides: validElements.length,
        status: 'rendering'
      });

      await exportCarouselAsPdf(validElements, activeProject.title, (prog) => {
        setExportProgress(prog);
      });

      updateActiveProject({ status: 'publish-ready' });
      addToast('PDF Downloaded!', 'Ready to upload as LinkedIn Document Carousel.', 'success');
    } catch (err: any) {
      console.error(err);
      setExportProgress({
        currentSlide: 0,
        totalSlides: validElements.length,
        status: 'error',
        errorMessage: err.message || 'Export error'
      });
      addToast('Export Failed', 'Falling back to browser print alternative.', 'warning');
    } finally {
      setTimeout(() => setExportProgress(null), 3000);
    }
  };

  const handleExportSinglePng = async (idx: number) => {
    const el = slideRefs.current[idx];
    if (!el) return;

    try {
      const fileName = `${activeProject.title}_slide_${idx + 1}`;
      await exportSlideAsPng(el, fileName);
      addToast('Slide PNG Exported', `Saved Slide ${idx + 1}.`, 'success');
    } catch (err) {
      addToast('Export Error', 'Failed to generate PNG image.', 'error');
    }
  };

  const handleExportAllPngs = async () => {
    const validElements = slideRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (validElements.length === 0) return;

    try {
      for (let i = 0; i < validElements.length; i++) {
        setExportProgress({
          currentSlide: i + 1,
          totalSlides: validElements.length,
          status: 'rendering'
        });
        const fileName = `${activeProject.title}_slide_${i + 1}`;
        await exportSlideAsPng(validElements[i], fileName);
        // Small delay between downloads for browser security policies
        await new Promise(r => setTimeout(r, 400));
      }
      addToast('All Slides Downloaded', `Generated ${validElements.length} PNGs.`, 'success');
    } catch (err) {
      addToast('Export Error', 'Failed to generate all slide images.', 'error');
    } finally {
      setExportProgress(null);
    }
  };

  const handleBrowserPrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 py-4">
      {/* Hidden high-res capture elements (1080x1080 pixel aspect ratio container, offscreen without opacity 0 to ensure full rendering in html-to-image) */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none overflow-hidden z-[-100]" aria-hidden="true">
        {activeProject.slides.map((s, idx) => (
          <div
            key={s.id}
            ref={(el) => (slideRefs.current[idx] = el)}
            style={{ width: '1080px', height: '1080px' }}
          >
            <SlidePreviewCard
              slide={s}
              totalSlides={activeProject.slides.length}
              theme={activeProject.theme}
              brandKit={brandKit}
            />
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
          <Download className="w-3.5 h-3.5" />
          <span>Step 6 of 6: Multi-Format Export Studio</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Your Carousel is Ready to Publish
        </h1>
        <p className="text-sm text-[#A3A8B8] max-w-xl mx-auto">
          Export as a LinkedIn Document PDF, crisp Instagram square PNG images, or copy your pre-formatted social post copy.
        </p>
      </div>

      {/* Export Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Export Formats & Action Triggers (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Target Platform Preset */}
          <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
            <label className="text-xs font-bold text-white uppercase tracking-wider block">
              1. Choose Platform Preset
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() => {
                  setPlatformPreset('linkedin');
                  setSelectedFormat('pdf');
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  platformPreset === 'linkedin'
                    ? 'bg-[#0A66C2]/15 border-[#0A66C2] text-white shadow-sm'
                    : 'bg-[#11131B] border-[#222633] text-[#A3A8B8] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">LinkedIn Document</span>
                  {platformPreset === 'linkedin' && <Check className="w-4 h-4 text-[#0A66C2]" />}
                </div>
                <p className="text-[11px] text-[#A3A8B8]">
                  Generates 1080x1080 Multi-Page PDF. LinkedIn renders this as a swipeable carousel doc.
                </p>
              </div>

              <div
                onClick={() => {
                  setPlatformPreset('instagram');
                  setSelectedFormat('png');
                }}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  platformPreset === 'instagram'
                    ? 'bg-gradient-to-r from-[#E1306C]/15 to-[#833AB4]/15 border-[#E1306C] text-white shadow-sm'
                    : 'bg-[#11131B] border-[#222633] text-[#A3A8B8] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">Instagram Carousel</span>
                  {platformPreset === 'instagram' && <Check className="w-4 h-4 text-[#E1306C]" />}
                </div>
                <p className="text-[11px] text-[#A3A8B8]">
                  Generates crisp 1080x1080 PNG images ready for multi-image feed posts.
                </p>
              </div>
            </div>
          </div>

          {/* Export Action Card */}
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-5 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-bold text-white">Generate File Assets</h3>
                <p className="text-xs text-[#A3A8B8]">High-resolution vector rasterization</p>
              </div>
              <span className="text-xs font-mono text-[#5AA9FF] px-2.5 py-1 rounded bg-[#5AA9FF]/10 border border-[#5AA9FF]/20">
                {activeProject.slides.length} Slides Total
              </span>
            </div>

            {/* Primary Download Buttons */}
            <div className="space-y-3">
              <button
                onClick={handleExportPdf}
                disabled={exportProgress !== null}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white font-bold text-sm shadow-glow-violet hover:shadow-glow-blue transition-all disabled:opacity-50"
              >
                {exportProgress && selectedFormat === 'pdf' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Compiling PDF Slide {exportProgress.currentSlide}/{exportProgress.totalSlides}...</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4" />
                    <span>Download Multi-Page PDF for LinkedIn</span>
                  </>
                )}
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={handleExportAllPngs}
                  disabled={exportProgress !== null}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-slate-200 font-semibold text-xs border border-white/5 transition-all disabled:opacity-50"
                >
                  <ImageIcon className="w-3.5 h-3.5 text-[#5AA9FF]" />
                  <span>Download All PNGs ({activeProject.slides.length})</span>
                </button>

                <button
                  onClick={() => handleExportSinglePng(previewSlideIdx)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-slate-200 font-semibold text-xs border border-white/5 transition-all"
                >
                  <Download className="w-3.5 h-3.5 text-[#8B72FF]" />
                  <span>Download Current Slide #{previewSlideIdx + 1}</span>
                </button>
              </div>
            </div>

            {/* Print Fallback */}
            <div className="pt-4 border-t border-[#222633] flex items-center justify-between text-xs text-[#A3A8B8]">
              <span className="flex items-center gap-1.5">
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>Browser Print Alternative</span>
              </span>
              <button
                onClick={handleBrowserPrint}
                className="text-[#5AA9FF] hover:underline font-semibold"
              >
                Trigger System Print / PDF Dialog
              </button>
            </div>
          </div>

          {/* Social Caption Copier */}
          <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#8B72FF]" />
                <h3 className="text-xs font-bold text-white uppercase tracking-wider">
                  Generated Social Post Caption
                </h3>
              </div>
              <button
                onClick={handleCopyCaption}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#8B72FF]/20 hover:bg-[#8B72FF] text-[#8B72FF] hover:text-white text-xs font-bold transition-all border border-[#8B72FF]/30"
              >
                {copiedCaption ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy Caption</span>
                  </>
                )}
              </button>
            </div>

            <textarea
              readOnly
              rows={6}
              value={generatedCaption}
              className="w-full p-3.5 rounded-xl bg-[#11131B] border border-[#222633] text-slate-300 text-xs font-mono leading-relaxed outline-none resize-none"
            />
          </div>

          {/* Technical Architecture Limitation Note */}
          <div className="p-4 rounded-xl bg-[#1E2230]/70 border border-white/5 space-y-1.5 text-xs text-[#A3A8B8] leading-relaxed">
            <p className="font-bold text-white flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-[#5AA9FF]" />
              <span>Native Browser Rendering Architecture</span>
            </p>
            <p>
              FrameFlow AI renders pure DOM nodes into canvas raster layers at 1080x1080 resolution (2x retina pixel density) before compiling multi-page vector PDF documents. No third-party servers see your unpublished creative assets.
            </p>
          </div>
        </div>

        {/* Right: Slide Deck Carousel Preview (5 cols) */}
        <div className="lg:col-span-5 sticky top-20 space-y-3">
          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#A3A8B8]">
            <span>Slide Deck Inspector</span>
            <span className="font-mono text-[#5AA9FF]">
              Slide {previewSlideIdx + 1} of {activeProject.slides.length}
            </span>
          </div>

          {/* Interactive Card */}
          <div className="p-2 rounded-2xl bg-[#12131A] border border-[#222633] shadow-2xl">
            {activeProject.slides[previewSlideIdx] && (
              <SlidePreviewCard
                slide={activeProject.slides[previewSlideIdx]}
                totalSlides={activeProject.slides.length}
                theme={activeProject.theme}
                brandKit={brandKit}
              />
            )}
          </div>

          {/* Slide Switcher Thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none">
            {activeProject.slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setPreviewSlideIdx(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-mono font-bold shrink-0 transition-all ${
                  idx === previewSlideIdx
                    ? 'bg-[#8B72FF] text-white shadow-glow-violet'
                    : 'bg-[#222633] text-[#A3A8B8] hover:text-white'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="flex items-center justify-between pt-4 border-t border-[#222633]">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-[#A3A8B8] hover:text-white text-xs font-semibold transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Carousel Editor</span>
        </button>

        <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4" />
          <span>Ready for Social Distribution</span>
        </span>
      </div>
    </div>
  );
};
