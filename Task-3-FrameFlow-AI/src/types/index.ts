export type Platform = 'instagram' | 'linkedin' | 'both';
export type Audience = 'Students' | 'Professionals' | 'Founders' | 'General';
export type Tone = 'Educational' | 'Conversational' | 'Professional' | 'Bold';
export type ContentObjective = 'Brand Authority' | 'Lead Generation' | 'Viral Growth' | 'Educational Value' | 'Community Engagement';

export type SlideType = 'hook' | 'problem' | 'framework' | 'tool' | 'takeaway' | 'cta' | 'stat';

export interface Slide {
  id: string;
  slideNumber: number;
  type: SlideType;
  headline: string;
  body: string;
  supportingDetail?: string;
  visualSuggestion?: string;
  badge?: string;
  toolName?: string;
  toolCategory?: string;
  iconName?: string;
  accentOverride?: string;
  bgOverride?: string;
  textAlign?: 'left' | 'center';
  fontSize?: 'sm' | 'md' | 'lg';
  layoutStyle?: 'standard' | 'split-card' | 'stat-highlight' | 'tool-showcase' | 'hero-hook' | 'call-to-action';
}

export interface ResearchSource {
  title: string;
  type: 'AI Synthesis' | 'Suggested Reference' | 'Benchmark Model' | 'Verified Study';
  description: string;
  urlPlaceholder?: string;
  confidence: 'High' | 'Medium' | 'Contextual';
  isVerified: boolean;
}

export interface AiResearchStructure {
  topicSummary: string;
  targetAudience: string;
  contentAngle: string;
  keyTakeaways: string[];
  suggestedHeadlines: string[];
  suggestedHookFormula: string;
  slideSequenceSummary: string[];
  sources: ResearchSource[];
  disclaimer: string;
}

export interface ThemeConfig {
  id: string;
  name: string;
  category: 'Editorial Minimal' | 'Bold Tech' | 'Modern Gradient' | 'Professional Corporate' | 'Playful Education';
  description: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  cardColor: string;
  textColor: string;
  mutedTextColor: string;
  accentGlow: string;
  fontPrimary: string;
  fontSecondary: string;
  borderStyle: string;
  badgeStyle: string;
  gradientBackground?: string;
}

export interface BrandKit {
  brandName: string;
  handle: string;
  tagline: string;
  avatarUrl: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  cardColor: string;
  textColor: string;
  fontPrimary: string;
  fontSecondary: string;
  preferredThemeId: string;
  includeWatermark: boolean;
  verifiedBadge: boolean;
}

export interface CarouselProject {
  id: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  status: 'draft' | 'publish-ready' | 'archived';
  platform: Platform;
  audience: Audience;
  tone: Tone;
  slideCount: number;
  language: string;
  objective: ContentObjective;
  rawIdea: string;
  research: AiResearchStructure;
  slides: Slide[];
  theme: ThemeConfig;
  brandKitApplied: boolean;
  currentStep: number; // 1 to 6
}

export type NavigationTab = 
  | 'overview' 
  | 'create' 
  | 'projects' 
  | 'templates' 
  | 'brand-kit' 
  | 'workflow' 
  | 'settings';
