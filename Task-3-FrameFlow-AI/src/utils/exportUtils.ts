import { toPng } from 'html-to-image';
import { jsPDF } from 'jspdf';
import { CarouselProject, Slide } from '../types';

export interface ExportProgress {
  currentSlide: number;
  totalSlides: number;
  status: 'idle' | 'rendering' | 'compiling' | 'completed' | 'error';
  errorMessage?: string;
}

/**
 * Capture an individual slide HTML element as high-resolution PNG
 */
export async function exportSlideAsPng(element: HTMLElement, fileName: string): Promise<string> {
  try {
    const dataUrl = await toPng(element, {
      quality: 0.95,
      pixelRatio: 2, // 2x high-DPI rendering for retina crispness
      cacheBust: true,
      skipAutoScale: false
    });

    const link = document.createElement('a');
    link.download = `${fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.png`;
    link.href = dataUrl;
    link.click();

    return dataUrl;
  } catch (err) {
    console.error('Error generating PNG:', err);
    throw new Error('Failed to generate slide PNG. Please check browser permissions.');
  }
}

/**
 * Capture multiple slide elements and compile into a multi-page PDF document
 * Ideal for LinkedIn carousel document posts (which require PDF).
 */
export async function exportCarouselAsPdf(
  slideElements: HTMLElement[],
  title: string,
  onProgress?: (progress: ExportProgress) => void
): Promise<void> {
  const total = slideElements.length;
  if (total === 0) throw new Error('No slides available to export.');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'px',
    format: [1080, 1080],
    compress: true
  });

  for (let i = 0; i < total; i++) {
    onProgress?.({
      currentSlide: i + 1,
      totalSlides: total,
      status: 'rendering'
    });

    const el = slideElements[i];
    const dataUrl = await toPng(el, {
      quality: 0.92,
      pixelRatio: 1.5,
      cacheBust: true
    });

    if (i > 0) {
      pdf.addPage([1080, 1080], 'portrait');
    }

    pdf.addImage(dataUrl, 'PNG', 0, 0, 1080, 1080);
  }

  onProgress?.({
    currentSlide: total,
    totalSlides: total,
    status: 'compiling'
  });

  const sanitized = title.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'frameflow_carousel';
  pdf.save(`${sanitized}_carousel.pdf`);

  onProgress?.({
    currentSlide: total,
    totalSlides: total,
    status: 'completed'
  });
}

/**
 * Generate formatted social media caption with hooks, breakdown, and hashtags
 */
export function generateSocialCaption(project: CarouselProject): string {
  const hookSlide = project.slides.find(s => s.type === 'hook') || project.slides[0];
  const toolSlides = project.slides.filter(s => s.type === 'tool');
  const takeawaySlide = project.slides.find(s => s.type === 'takeaway');

  let text = `🚀 ${hookSlide ? hookSlide.headline : project.title}\n\n`;

  if (hookSlide?.body) {
    text += `${hookSlide.body}\n\n`;
  }

  text += `Here is the breakdown in this ${project.slides.length}-slide carousel:\n\n`;

  if (toolSlides.length > 0) {
    toolSlides.forEach((s, idx) => {
      text += `⚡ ${idx + 1}. ${s.toolName || s.headline}\n   ${s.supportingDetail || s.body.slice(0, 80)}...\n\n`;
    });
  } else {
    project.slides.slice(1, -1).forEach((s, idx) => {
      text += `🔹 Key Insight ${idx + 1}: ${s.headline}\n`;
    });
    text += `\n`;
  }

  if (takeawaySlide) {
    text += `💡 The Big Takeaway:\n${takeawaySlide.body}\n\n`;
  }

  text += `👉 Swipe through the carousel for the complete workflow and save this post for later reference!\n\n`;
  text += `💬 Which insight resonated most with you? Drop your thoughts below.\n\n`;

  // Hashtags based on audience and objective
  const hashtags = [
    '#Productivity',
    '#AItools',
    '#Founders',
    '#TechTrends2026',
    '#ContentCreation',
    '#Learning',
    '#FrameFlow'
  ];
  text += hashtags.join(' ');

  return text;
}
