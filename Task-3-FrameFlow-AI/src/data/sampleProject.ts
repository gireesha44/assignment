import { CarouselProject } from '../types';
import { THEMES } from './themes';

export const SAMPLE_PROJECT: CarouselProject = {
  id: 'proj-college-ai-tools-2026',
  title: '5 AI Tools Every College Student Should Know in 2026',
  createdAt: '2026-11-15T10:30:00.000Z',
  updatedAt: '2026-11-17T14:15:00.000Z',
  status: 'publish-ready',
  platform: 'both',
  audience: 'Students',
  tone: 'Educational',
  slideCount: 9,
  language: 'English (US)',
  objective: 'Educational Value',
  rawIdea: '5 AI tools every college student should know in 2026. Focus on real academic productivity, study leverage, ethical research, and avoiding generic plagiarism.',
  currentStep: 5,
  brandKitApplied: false,
  theme: THEMES[0], // Modern Gradient
  research: {
    topicSummary: 'A curated, ethics-first guide to five transformative AI tools that assist college students with synthesis, literature review, interactive tutoring, visual reports, and code debugging.',
    targetAudience: 'Undergraduate and graduate students navigating demanding coursework, literature reviews, STEM problem sets, and visual presentations.',
    contentAngle: 'Cognitive leverage over cheating. Positioning AI as an interactive 24/7 research partner and study coach rather than a shortcut.',
    keyTakeaways: [
      'NotebookLM grounds answers exclusively in your uploaded syllabus and textbooks with exact page citations.',
      'Perplexity replaces unvetted search queries with consensus citations and academic paper indexing.',
      'ChatGPT (Canvas / Socratic mode) acts as a relentless debate partner and essay critiquer.',
      'Canva Magic Studio translates raw bullet notes into publication-ready slide decks and diagrams.',
      'GitHub Copilot clarifies cryptic compile errors and explains algorithmic complexity line-by-line.'
    ],
    suggestedHeadlines: [
      '5 AI Tools Every College Student Should Know in 2026',
      'Stop Studying Harder: 5 AI Tools Saving Top Students 15+ Hours a Week',
      'The 2026 College AI Stack: From Syllabus to A+ Without Burning Out'
    ],
    suggestedHookFormula: 'Contrast (Old Method vs. Modern Leverage) + Specific Hours Saved + Relatable Finals Stress',
    slideSequenceSummary: [
      '1. Provocative Hook (The Cognitive Divide)',
      '2. Why AI Tools Matter in 2026 (The Leverage Shift)',
      '3. Tool 1: NotebookLM (Source-Grounded Study)',
      '4. Tool 2: Perplexity (Real-Time Academic Search)',
      '5. Tool 3: ChatGPT (The 24/7 Socratic Tutor)',
      '6. Tool 4: Canva Magic Studio (Visual Communication)',
      '7. Tool 5: GitHub Copilot (STEM & Code Comprehension)',
      '8. Practical Takeaway (The Verification Rule)',
      '9. Final Actionable CTA (Save & Share)'
    ],
    sources: [
      {
        title: 'Educause Horizon Report (2025/2026 Higher Ed Edition)',
        type: 'Suggested Reference',
        description: 'Analyzed the shift from reactive AI bans to institutional adoption of source-grounded LLM study assistants.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'Google Research: Source Grounding & Audio Overviews in NotebookLM',
        type: 'Verified Study',
        description: 'Demonstrated reduction in hallucinations when context is strictly constrained to user-provided PDF corpora.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'Student Study Habits Survey (Sample n=1,240 STEM & Humanities)',
        type: 'AI Synthesis',
        description: 'Synthesized student workflow logs estimating ~14.6 hours saved weekly on literature formatting and syllabus cross-referencing.',
        confidence: 'Medium',
        isVerified: false
      }
    ],
    disclaimer: 'Source suggestions are synthesized for academic study benchmarks. Always verify requirements against your specific university academic integrity policy.'
  },
  slides: [
    {
      id: 'slide-1',
      slideNumber: 1,
      type: 'hook',
      badge: '2026 STUDY GUIDE',
      headline: 'Stop Studying Harder. In 2026, 80% of College Work is About Leverage.',
      body: 'Most students drown in 60-page PDF readings and disorganized lecture notes.\n\nThe top 5% use an AI-assisted workflow to absorb concepts in half the time.',
      supportingDetail: 'Swipe to discover the 5 tools saving students 15+ hours every week →',
      visualSuggestion: 'Bold typography with high contrast tag and swipe arrow indicator',
      layoutStyle: 'hero-hook',
      textAlign: 'left',
      fontSize: 'lg'
    },
    {
      id: 'slide-2',
      slideNumber: 2,
      type: 'problem',
      badge: 'THE SHIFT',
      headline: 'Why AI Tools Matter (And Why It Isn’t Cheating)',
      body: 'The real AI advantage is NOT copy-pasting answers into assignments.\n\nIt is about cognitive scaffolding: turning static textbooks into interactive tutors, synthesizing papers in minutes, and stress-testing your own critical thinking before exams.',
      supportingDetail: 'Rule #1: Use AI to sharpen your reasoning, never to replace it.',
      visualSuggestion: 'Two-column contrast card: Passive memorization vs Active AI scaffolding',
      layoutStyle: 'split-card',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-3',
      slideNumber: 3,
      type: 'tool',
      badge: 'TOOL 01 // SYNTHESIS',
      toolName: 'NotebookLM',
      toolCategory: 'Source-Grounded Notebook',
      iconName: 'BookOpen',
      headline: 'NotebookLM: Your AI Research Partner & Audio Study Coach',
      body: 'Upload your syllabus, 200-page textbook PDFs, and professor slides. NotebookLM answers questions strictly from your uploaded files, complete with clickable citations.',
      supportingDetail: 'Killer 2026 Feature: Generate a conversational "Deep Dive" audio podcast between two AI hosts explaining your hardest exam topics on your walk to class.',
      visualSuggestion: 'Product highlight card with citation pill and audio waveform icon',
      layoutStyle: 'tool-showcase',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-4',
      slideNumber: 4,
      type: 'tool',
      badge: 'TOOL 02 // RESEARCH',
      toolName: 'Perplexity',
      toolCategory: 'Real-Time Academic Search',
      iconName: 'Search',
      headline: 'Perplexity: The End of 20-Tab Google Searches',
      body: 'Standard search gives you sponsored links and SEO spam. Perplexity provides synthesized answers backed by direct inline academic citations from JSTOR, PubMed, and arXiv.',
      supportingDetail: 'Pro Tip: Toggle to "Academic Focus" to restrict citations solely to peer-reviewed scholarly literature and published theses.',
      visualSuggestion: 'Search bar preview with inline citation tags [1][2][3]',
      layoutStyle: 'tool-showcase',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-5',
      slideNumber: 5,
      type: 'tool',
      badge: 'TOOL 03 // TUTORING',
      toolName: 'ChatGPT (Canvas)',
      toolCategory: '24/7 Socratic Tutor',
      iconName: 'MessageSquareCode',
      headline: 'ChatGPT: The Socratic Tutor That Never Gets Impatient',
      body: 'Don\'t ask it to write your paper. Instead prompt: "Act as a tough college professor. Quiz me on Chapter 4 concepts one question at a time and critique my logic."',
      supportingDetail: 'Canvas Mode: Highlight a weak thesis statement in your draft and ask for 3 alternative angles to strengthen the counterargument.',
      visualSuggestion: 'Dual chat bubble showing user question and Socratic critique',
      layoutStyle: 'tool-showcase',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-6',
      slideNumber: 6,
      type: 'tool',
      badge: 'TOOL 04 // PRESENTATION',
      toolName: 'Canva Magic Studio',
      toolCategory: 'Visual Slide & Infographic Deck',
      iconName: 'Palette',
      headline: 'Canva Magic Studio: A+ Class Presentations in 10 Minutes',
      body: 'Transform messy bullet points from your group research doc into presentation-ready slide decks, executive summaries, and timeline infographics without wrestling formatting.',
      supportingDetail: 'Magic Design: Drop in your raw topic outline and instantly generate 8 cohesive slide options customized with your department style guide.',
      visualSuggestion: 'Visual canvas grid displaying generated slide layouts',
      layoutStyle: 'tool-showcase',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-7',
      slideNumber: 7,
      type: 'tool',
      badge: 'TOOL 05 // CODING',
      toolName: 'GitHub Copilot',
      toolCategory: 'Coding & STEM Assistant',
      iconName: 'Terminal',
      headline: 'GitHub Copilot: Your Senior Dev Pair-Programmer',
      body: 'Essential for CS, engineering, data science, and math students. Copilot explains cryptic terminal errors, autocompletes repetitive boilerplate, and suggests optimized algorithms.',
      supportingDetail: 'Student Perk: Free for verified college students via the GitHub Student Developer Pack (saves $120/year).',
      visualSuggestion: 'IDE terminal code snippet with inline autocomplete suggestion',
      layoutStyle: 'tool-showcase',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-8',
      slideNumber: 8,
      type: 'takeaway',
      badge: 'THE GOLDEN RULE',
      headline: 'The 3-Step Verification Rule Before You Submit Anything',
      body: 'Never blindly trust an LLM response.\n\n1. Verify: Click through every source citation to ensure the paper actually exists.\n2. Personalize: Inject your own voice, lecture anecdotes, and original analysis.\n3. Disclose: Review your syllabus AI policy so you never cross ethical lines.',
      supportingDetail: 'AI is your co-pilot, not the pilot. Your critical thinking is what professors grade.',
      visualSuggestion: 'Numbered 1-2-3 checklist card with glowing checkmarks',
      layoutStyle: 'standard',
      textAlign: 'left',
      fontSize: 'md'
    },
    {
      id: 'slide-9',
      slideNumber: 9,
      type: 'cta',
      badge: 'SAVE THIS WORKFLOW',
      headline: 'Crush Your Semester Without Burning the Midnight Oil.',
      body: 'Which of these 5 AI tools do you rely on most?\n\nDrop your favorite study workflow or tool recommendation in the comments below!',
      supportingDetail: '📌 Tap "Save" to keep this guide for midterm week\n🔄 Repost to help a college friend study smarter',
      visualSuggestion: 'Social save and repost icons with call-to-action button',
      layoutStyle: 'call-to-action',
      textAlign: 'center',
      fontSize: 'lg'
    }
  ]
};
