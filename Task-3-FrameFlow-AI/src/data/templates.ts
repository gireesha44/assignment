import { Audience, ContentObjective, Platform, Tone, Slide } from '../types';
import { THEMES } from './themes';

export interface CarouselTemplate {
  id: string;
  title: string;
  tagline: string;
  category: string;
  slidesCount: number;
  platform: Platform;
  recommendedTone: Tone;
  recommendedAudience: Audience;
  objective: ContentObjective;
  themeId: string;
  description: string;
  tags: string[];
  sampleIdea: string;
  slidesPreview: Partial<Slide>[];
}

export const TEMPLATES: CarouselTemplate[] = [
  {
    id: 'tpl-tool-stack',
    title: 'The Essential 5-Tool Stack',
    tagline: 'High-retention software & system recommendations',
    category: 'Roundups & Guides',
    slidesCount: 9,
    platform: 'both',
    recommendedTone: 'Educational',
    recommendedAudience: 'Students',
    objective: 'Educational Value',
    themeId: 'modern-gradient',
    description: 'The proven framework for software roundups, productivity tools, and resource curation with hook, value context, 5 tool breakdowns, practical takeaway, and engagement CTA.',
    tags: ['Curation', 'Tools', 'High Saves', 'Educational'],
    sampleIdea: '5 AI tools every college student should know in 2026.',
    slidesPreview: [
      { headline: 'Stop Studying Harder. In 2026, 80% of College Work is About Leverage.', type: 'hook' },
      { headline: 'Why AI Tools Matter (And Why It Isn’t Cheating)', type: 'problem' },
      { headline: 'NotebookLM: Your AI Research Partner & Audio Study Coach', type: 'tool' },
      { headline: 'Perplexity: The End of 20-Tab Google Searches', type: 'tool' },
      { headline: 'ChatGPT: The Socratic Tutor That Never Gets Impatient', type: 'tool' },
      { headline: 'Canva Magic Studio: A+ Class Presentations in 10 Minutes', type: 'tool' },
      { headline: 'GitHub Copilot: Your Senior Dev Pair-Programmer', type: 'tool' },
      { headline: 'The 3-Step Verification Rule Before You Submit Anything', type: 'takeaway' },
      { headline: 'Crush Your Semester Without Burning the Midnight Oil.', type: 'cta' }
    ]
  },
  {
    id: 'tpl-mistake-vs-fix',
    title: 'The Mistake vs. Strategic Fix',
    tagline: 'High-engagement contrast format that drives discussion',
    category: 'Thought Leadership',
    slidesCount: 7,
    platform: 'linkedin',
    recommendedTone: 'Bold',
    recommendedAudience: 'Founders',
    objective: 'Brand Authority',
    themeId: 'bold-tech',
    description: 'Pinpoints common industry errors, contrasts amateur approaches with elite execution, and delivers an authoritative operational mental model.',
    tags: ['Comparison', 'Growth', 'B2B Authority'],
    sampleIdea: 'Why 90% of early-stage SaaS founders fail their first 10 sales calls and what top 1% closers do instead.',
    slidesPreview: [
      { headline: 'Most founders pitch product features for 45 minutes and wonder why deals stall.', type: 'hook' },
      { headline: 'The Amateur Trap: Feature dumping without understanding customer pain.', type: 'problem' },
      { headline: 'Mistake #1: Pitching before qualifying budget and timeline.', type: 'framework' },
      { headline: 'Mistake #2: Talking 80% of the call instead of asking diagnostic questions.', type: 'framework' },
      { headline: 'The Top 1% Playbook: Diagnosis before prescription.', type: 'framework' },
      { headline: 'Your 3-Point Checklist for your next sales conversation.', type: 'takeaway' },
      { headline: 'What is the biggest objection you hear on sales calls? Drop it below.', type: 'cta' }
    ]
  },
  {
    id: 'tpl-playbook',
    title: 'The Tactical Step-by-Step Playbook',
    tagline: 'Comprehensive actionable guides users bookmark forever',
    category: 'Tactical Playbook',
    slidesCount: 8,
    platform: 'both',
    recommendedTone: 'Professional',
    recommendedAudience: 'Professionals',
    objective: 'Lead Generation',
    themeId: 'professional-corporate',
    description: 'An executive blueprint detailing an end-to-end process from zero to complete execution with actionable milestones on every slide.',
    tags: ['Framework', 'How-To', 'Bookmark Magnet'],
    sampleIdea: 'The 6-step cold outreach system that booked 42 enterprise demos in 30 days without paid ads.',
    slidesPreview: [
      { headline: 'Cold outreach isn’t dead. Generic spray-and-pray templates are.', type: 'hook' },
      { headline: 'The 6-Step Micro-Targeting Framework that booked 42 enterprise demos.', type: 'problem' },
      { headline: 'Phase 1: ICP Signal Mining (Identifying buying triggers)', type: 'framework' },
      { headline: 'Phase 2: The 3-Sentence Personalization Hook', type: 'framework' },
      { headline: 'Phase 3: The Frictionless Low-Commitment CTA', type: 'framework' },
      { headline: 'Phase 4: The 3-Touch Follow-Up Sequencing', type: 'framework' },
      { headline: 'The Metrics: 38% Open Rate, 14% Reply Rate, 42 Qualified Calls', type: 'takeaway' },
      { headline: 'Comment "PLAYBOOK" to receive our raw email swipe file.', type: 'cta' }
    ]
  },
  {
    id: 'tpl-myth-buster',
    title: 'The Industry Myth Buster',
    tagline: 'Challenge common dogma with hard evidence and nuance',
    category: 'Contrarian Insights',
    slidesCount: 6,
    platform: 'instagram',
    recommendedTone: 'Conversational',
    recommendedAudience: 'General',
    objective: 'Viral Growth',
    themeId: 'playful-education',
    description: 'Debunks conventional wisdom with compelling analogies, data points, and practical truth that sparks comments and debate.',
    tags: ['Contrarian', 'Viral Reach', 'Discussion'],
    sampleIdea: '3 productivity myths that are secretly burning you out in 2026.',
    slidesPreview: [
      { headline: 'Waking up at 5 AM will NOT make you a millionaire.', type: 'hook' },
      { headline: 'Myth 1: You must optimize every minute of your waking day.', type: 'problem' },
      { headline: 'Myth 2: Multi-tasking helps you achieve more faster.', type: 'framework' },
      { headline: 'Myth 3: Rest is something you earn only after exhaustion.', type: 'framework' },
      { headline: 'The Truth: Energy management beats time management every time.', type: 'takeaway' },
      { headline: 'Which habit helped your energy most this year? Let us know below.', type: 'cta' }
    ]
  },
  {
    id: 'tpl-editorial-case-study',
    title: 'The Minimalist Case Study',
    tagline: 'Clean, elegant breakdown of an impressive metric or outcome',
    category: 'Case Studies',
    slidesCount: 7,
    platform: 'linkedin',
    recommendedTone: 'Professional',
    recommendedAudience: 'Founders',
    objective: 'Brand Authority',
    themeId: 'editorial-minimal',
    description: 'High-end editorial aesthetic showcasing problem, strategy, execution milestones, and key business metrics.',
    tags: ['Case Study', 'Minimalist', 'Data Driven'],
    sampleIdea: 'How a bootstrapped developer built a $25K/month micro-SaaS with zero paid marketing.',
    slidesPreview: [
      { headline: '$0 to $25k MRR in 9 months: The anatomy of a lean micro-SaaS.', type: 'hook' },
      { headline: 'The Backstory: Spotting an unaddressed pain point in Notion APIs.', type: 'problem' },
      { headline: 'Month 1–3: Launching an MVP in 14 days on Product Hunt.', type: 'framework' },
      { headline: 'Month 4–6: SEO programmatics driving 12,000 monthly organic visits.', type: 'framework' },
      { headline: 'Month 7–9: Pricing overhaul from $9 one-off to $29/mo recurring.', type: 'framework' },
      { headline: 'Key Lesson: Solve an expensive problem for people with budget.', type: 'takeaway' },
      { headline: 'Save this post to reference during your next product build.', type: 'cta' }
    ]
  }
];
