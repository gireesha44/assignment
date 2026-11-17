import { AiResearchStructure, Audience, ContentObjective, Platform, Slide, Tone } from '../types';

export interface GenerationParams {
  rawIdea: string;
  platform: Platform;
  audience: Audience;
  tone: Tone;
  slideCount: number;
  language: string;
  objective: ContentObjective;
}

export function generateMockAiContent(params: GenerationParams): {
  research: AiResearchStructure;
  slides: Slide[];
} {
  const idea = params.rawIdea.trim();
  const lower = idea.toLowerCase();
  const count = Math.min(Math.max(params.slideCount || 7, 5), 10);

  // Check if topic is AI tools / college students
  const isStudentAi = lower.includes('ai') || lower.includes('college') || lower.includes('student') || lower.includes('study');
  const isSalesOrB2b = lower.includes('sales') || lower.includes('b2b') || lower.includes('client') || lower.includes('customer') || lower.includes('startup') || lower.includes('saas');
  const isProductivityOrHabit = lower.includes('productivity') || lower.includes('habit') || lower.includes('focus') || lower.includes('time') || lower.includes('burnout');

  let topicSummary = '';
  let targetAudience = '';
  let contentAngle = '';
  let keyTakeaways: string[] = [];
  let suggestedHeadlines: string[] = [];
  let suggestedHookFormula = '';
  let slideSequenceSummary: string[] = [];
  let sources: any[] = [];
  let slides: Slide[] = [];

  if (isStudentAi) {
    topicSummary = `A curated, high-leverage guide to AI academic tools tailored for ${params.audience.toLowerCase()} looking for study efficiency, factual synthesis, and ethical productivity.`;
    targetAudience = `${params.audience} seeking to streamline coursework, essay critique, literature search, and finals preparation without academic misconduct.`;
    contentAngle = `${params.tone} deep dive: Positioning modern AI not as a shortcut for cheating, but as an interactive 24/7 Socratic tutor and research co-pilot.`;
    keyTakeaways = [
      'NotebookLM grounds responses strictly within your uploaded textbooks and lecture notes with exact citations.',
      'Perplexity replaces unvetted web queries with academic literature search and consensus summaries.',
      'ChatGPT (Canvas / Socratic Mode) provides active recall testing and logic critique rather than passive answers.',
      'Canva Magic Studio converts messy bullet notes into presentation-ready slide decks in minutes.',
      'GitHub Copilot assists STEM students by debugging cryptic errors and explaining code logic step-by-step.'
    ];
    suggestedHeadlines = [
      `5 AI Tools Every ${params.audience === 'Students' ? 'College Student' : params.audience} Should Know in 2026`,
      `Stop Studying Harder: The 2026 AI Stack Saving Top ${params.audience} 15+ Hours Weekly`,
      `From Syllabus to Finals: 5 AI Tools That Give You Unfair Cognitive Leverage`
    ];
    suggestedHookFormula = 'Provocative Contrast: "80% of students study passively vs. top 5% who use AI as a Socratic tutor."';

    const toolRoster = [
      { name: 'NotebookLM', cat: 'Source-Grounded Notebook', icon: 'BookOpen', desc: 'Upload syllabi, 200-page textbook PDFs, and slide decks. Queries are grounded strictly in your files with clickable citations.', tip: 'Generate a conversational "Deep Dive" audio podcast between AI hosts explaining complex exam concepts on your walk to class.' },
      { name: 'Perplexity', cat: 'Real-Time Academic Search', icon: 'Search', desc: 'Replaces 20 browser tabs with synthesized answers backed by direct citations from JSTOR, PubMed, and arXiv.', tip: 'Toggle to "Academic Focus" to restrict citations solely to peer-reviewed scholarly literature and published theses.' },
      { name: 'ChatGPT (Canvas)', cat: '24/7 Socratic Tutor', icon: 'MessageSquareCode', desc: 'Don\'t ask it to write your papers. Prompt it to act as a rigorous professor quizzing your logic and testing your recall.', tip: 'Use Canvas mode to highlight weak thesis statements and request 3 counter-perspectives to strengthen your arguments.' },
      { name: 'Canva Magic Studio', cat: 'Visual Presentations & Reports', icon: 'Palette', desc: 'Converts raw outline notes into polished group presentation decks, infographic timelines, and clean executive summaries.', tip: 'Paste your project outline into Magic Design to generate 8 cohesive slide options in seconds.' },
      { name: 'GitHub Copilot', cat: 'STEM & Code Companion', icon: 'Terminal', desc: 'Essential for computer science, engineering, and data science students. Explains cryptic syntax errors and guides algorithmic thinking.', tip: 'Free for verified students through the GitHub Student Developer Pack (saves $120/year).' }
    ];

    slideSequenceSummary.push('1. Attention Hook');
    slideSequenceSummary.push('2. The Mindset Shift');
    const toolsToInclude = Math.min(count - 4, toolRoster.length);
    for (let i = 0; i < toolsToInclude; i++) {
      slideSequenceSummary.push(`${i + 3}. Tool #${i + 1}: ${toolRoster[i].name}`);
    }
    slideSequenceSummary.push(`${count - 1}. The Golden Verification Rule`);
    slideSequenceSummary.push(`${count}. Save & Share CTA`);

    sources = [
      {
        title: 'Higher Education AI Benchmarks (2025/2026 Academic Study)',
        type: 'Suggested Reference',
        description: 'Analyzed the shift from reactive AI bans to institutional adoption of source-grounded LLM study assistants.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'Source-Grounding & Context Constrained Retrieval in LLMs',
        type: 'Verified Study',
        description: 'Demonstrated reduction in hallucinations when context is strictly constrained to user-provided PDF corpora.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'Cognitive Science of Active Recall & Socratic Questioning',
        type: 'AI Synthesis',
        description: 'Synthesis of active recall vs passive reading learning curves with AI dialogue partners.',
        confidence: 'Medium',
        isVerified: false
      }
    ];

    // Build slides
    slides.push({
      id: 'slide-1',
      slideNumber: 1,
      type: 'hook',
      badge: '2026 GUIDE',
      headline: `Stop Studying Harder. In 2026, 80% of ${params.audience} Work is About Leverage.`,
      body: 'Most people drown in 50-page readings and disorganized notes.\n\nThe top 5% use an AI-assisted workflow to master concepts in half the time.',
      supportingDetail: `Swipe to discover the tools saving students 15+ hours every week →`,
      visualSuggestion: 'High-contrast typography with swipe indicator',
      layoutStyle: 'hero-hook',
      textAlign: 'left',
      fontSize: 'lg'
    });

    slides.push({
      id: 'slide-2',
      slideNumber: 2,
      type: 'problem',
      badge: 'THE SHIFT',
      headline: 'Why AI Tools Matter (And Why It Isn’t Cheating)',
      body: 'The real AI advantage is NOT copy-pasting homework answers.\n\nIt is about cognitive scaffolding: turning static textbooks into interactive tutors, synthesizing papers in minutes, and stress-testing your own critical thinking before exams.',
      supportingDetail: 'Rule #1: Use AI to sharpen your reasoning, never to replace it.',
      visualSuggestion: 'Two-column contrast card: Passive study vs Active AI scaffolding',
      layoutStyle: 'split-card',
      textAlign: 'left',
      fontSize: 'md'
    });

    for (let i = 0; i < toolsToInclude; i++) {
      const t = toolRoster[i];
      slides.push({
        id: `slide-${i + 3}`,
        slideNumber: i + 3,
        type: 'tool',
        badge: `TOOL 0${i + 1} // ${t.cat.toUpperCase()}`,
        toolName: t.name,
        toolCategory: t.cat,
        iconName: t.icon,
        headline: `${t.name}: ${t.desc.split('.')[0]}`,
        body: t.desc,
        supportingDetail: `Pro Tip: ${t.tip}`,
        visualSuggestion: `Product card with feature tag and ${t.icon} icon`,
        layoutStyle: 'tool-showcase',
        textAlign: 'left',
        fontSize: 'md'
      });
    }

    // Fill remaining if needed
    while (slides.length < count - 2) {
      const idx = slides.length + 1;
      slides.push({
        id: `slide-${idx}`,
        slideNumber: idx,
        type: 'framework',
        badge: 'WORKFLOW ACCELERATOR',
        headline: 'Automating Note Sync Across Your Devices',
        body: 'Connect your meeting recordings, voice memos, and lecture transcripts directly into an organized markdown second brain.',
        supportingDetail: 'Spend your study time synthesizing insights, not transcribing audio.',
        visualSuggestion: 'Workflow sync diagram with cloud arrows',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      });
    }

    slides.push({
      id: `slide-${count - 1}`,
      slideNumber: count - 1,
      type: 'takeaway',
      badge: 'THE GOLDEN RULE',
      headline: 'The 3-Step Verification Rule Before You Submit',
      body: 'Never blindly trust an AI output.\n\n1. Verify: Click through every source citation to ensure papers actually exist.\n2. Personalize: Inject your own voice, lecture examples, and original arguments.\n3. Disclose: Follow your institution\'s explicit AI guidelines.',
      supportingDetail: 'AI is your co-pilot, not the pilot. Your critical thinking is what gets graded.',
      visualSuggestion: 'Numbered 1-2-3 checklist card with glowing checkmarks',
      layoutStyle: 'standard',
      textAlign: 'left',
      fontSize: 'md'
    });

    slides.push({
      id: `slide-${count}`,
      slideNumber: count,
      type: 'cta',
      badge: 'SAVE THIS WORKFLOW',
      headline: 'Crush Your Goals Without Burning the Midnight Oil.',
      body: 'Which of these AI tools will you test first this week?\n\nDrop your favorite study workflow or tool recommendation in the comments below!',
      supportingDetail: '📌 Tap "Save" to keep this guide for midterm week\n🔄 Repost to help a colleague study smarter',
      visualSuggestion: 'Social save and repost icons with call-to-action button',
      layoutStyle: 'call-to-action',
      textAlign: 'center',
      fontSize: 'lg'
    });

  } else if (isSalesOrB2b) {
    topicSummary = `A high-impact B2B tactical framework on "${idea}" designed for ${params.audience.toLowerCase()} aiming for pipeline velocity and conversion authority.`;
    targetAudience = `${params.audience} seeking qualified pipeline, shorter sales cycles, and authoritative value positioning.`;
    contentAngle = `${params.tone} tactical breakdown: Diagnosing the root causes of stalled B2B deals and introducing a high-converting engagement model.`;
    keyTakeaways = [
      'Top closers spend 70% of early discovery diagnosing root pains rather than pitching product features.',
      'The 3-Sentence Problem Anchor builds instant peer-level credibility with executive decision-makers.',
      'Eliminate high-friction initial asks; replace "30-min demo" with "5-minute audit or teardown".',
      'Multi-threading accounts early prevents deal freeze when internal champions change roles.'
    ];
    suggestedHeadlines = [
      `The Modern B2B Playbook: How Top 1% Closers Win in 2026`,
      `Why 90% of B2B Pitches Stall (And the 4-Step Fix That Converts)`,
      `Stop Pitching Features: The Executive Diagnostic Framework`
    ];
    suggestedHookFormula = 'Bold Problem Statement + Contrarian Insight: "Feature pitching kills B2B deals before they start."';

    for (let i = 1; i <= count; i++) {
      slideSequenceSummary.push(`Slide ${i}: ${i === 1 ? 'High Impact Hook' : i === count ? 'Call to Action' : 'Tactical Insight ' + i}`);
    }

    sources = [
      {
        title: 'B2B Buying Behavior Benchmark (Gartner Research)',
        type: 'Suggested Reference',
        description: 'Data showing 75% of B2B buyers prefer a rep-free experience unless the salesperson provides unique diagnostic value.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'SaaS Sales Velocity & Win-Rate Meta Analysis',
        type: 'Verified Study',
        description: 'Analysis of 12,000 closed-won opportunities correlating question-to-talk ratio with deal closure.',
        confidence: 'High',
        isVerified: true
      }
    ];

    slides = [
      {
        id: 'slide-1',
        slideNumber: 1,
        type: 'hook',
        badge: 'B2B PLAYBOOK',
        headline: `Most Pitches Fail in the First 90 Seconds. Here is What the Top 1% Do Instead.`,
        body: 'Amateur founders pitch features for 40 minutes and wonder why prospects ghost.\n\nElite operators treat sales calls like an ER doctor diagnosis: calm, structured, and focused entirely on the patient\'s acute pain.',
        supportingDetail: 'Swipe to see the 4-step framework closing 6-figure deals →',
        layoutStyle: 'hero-hook',
        textAlign: 'left',
        fontSize: 'lg'
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        type: 'problem',
        badge: 'THE MISTAKE',
        headline: 'The Feature-Dumping Trap That Kills Pipeline',
        body: 'When you show 15 features, buyers hear 15 things that might break, 15 things they must train their team on, and 15 reasons to delay.\n\nBuyers don\'t want more software. They want the specific pain to stop.',
        supportingDetail: 'Rule: The more you speak, the less valuable your solution appears.',
        layoutStyle: 'split-card',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        type: 'framework',
        badge: 'STEP 01 // DIAGNOSIS',
        headline: 'Phase 1: The 3-Sentence Diagnostic Anchor',
        body: 'Open every conversation with context: "We noticed [trigger event]. Most leaders in your seat tell us their biggest bottleneck is [pain]. Is that what you are feeling, or is your reality different?"',
        supportingDetail: 'Why it works: Gives them immediate permission to be candid without feeling sold to.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        type: 'framework',
        badge: 'STEP 02 // QUANTIFY',
        headline: 'Phase 2: Quantifying the Cost of Inaction (COI)',
        body: 'Before discussing your pricing, calculate what staying the same costs them.\n\n"If this bottleneck persists for the next two quarters, what does that cost the team in engineering hours and delayed pipeline?"',
        supportingDetail: 'When the cost of inaction is $200k, a $30k solution feels like an obvious bargain.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-5',
        slideNumber: 5,
        type: 'framework',
        badge: 'STEP 03 // MULTI-THREAD',
        headline: 'Phase 3: Multi-Threading Your Champions',
        body: 'Single-threaded deals die 60% of the time when champions shift focus or leave.\n\nNever leave a meeting without asking: "Who else on the executive team would be impacted if we solved this together?"',
        supportingDetail: 'Arm your champion with a 1-page internal memo, not a 40-slide pitch deck.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-6',
        slideNumber: 6,
        type: 'takeaway',
        badge: 'THE CHECKLIST',
        headline: 'Your 3-Point Pre-Call Diagnostic Checklist',
        body: '1. Never demo before identifying the exact metric of success.\n2. Keep your talk ratio under 35% during discovery.\n3. Agree on concrete next steps with calendar dates before hanging up.',
        supportingDetail: 'Sales is an act of consultative service, not convincing.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-7',
        slideNumber: 7,
        type: 'cta',
        badge: 'ACTION',
        headline: 'Upgrade Your Next Pipeline Review.',
        body: 'What is the hardest sales objection your team is handling right now?\n\nDrop it in the comments and I will break down our counter-framework.',
        supportingDetail: '📌 Save this post for your Monday team standup\n🔄 Repost to help a fellow founder close more deals',
        layoutStyle: 'call-to-action',
        textAlign: 'center',
        fontSize: 'lg'
      }
    ];

  } else {
    // General / Productivity / Founder insight
    topicSummary = `An actionable, structured analysis of "${idea}" crafted for ${params.audience.toLowerCase()} with a ${params.tone.toLowerCase()} narrative voice.`;
    targetAudience = `${params.audience} interested in practical frameworks, mental clarity, and systematic execution.`;
    contentAngle = `${params.tone} approach: Breaking down complex industry noise into concise, high-retention mental models and actionable steps.`;
    keyTakeaways = [
      'Identify the core systemic constraint before optimizing superficial secondary metrics.',
      'Small, compound habits repeated with high consistency outperform radical, unsustainable bursts.',
      'Document your standard operating procedures so systems operate independently of raw willpower.',
      'Continuous feedback loops allow course correction before small deviations turn into fatal traps.'
    ];
    suggestedHeadlines = [
      `The Blueprint to Master: ${idea.slice(0, 40)}...`,
      `Why Most People Get This Wrong (And the 2026 Strategy That Works)`,
      `The Clear System for ${params.audience}: From Friction to Momentum`
    ];
    suggestedHookFormula = 'Contrarian Premise + High-Stakes Outcome: "Why 90% of approaches fail and the mental model that flips the odds."';

    for (let i = 1; i <= count; i++) {
      slideSequenceSummary.push(`Slide ${i}: Strategic Section ${i}`);
    }

    sources = [
      {
        title: 'Behavioral Economics & Decision Architecture Review',
        type: 'Suggested Reference',
        description: 'Empirical studies on cognitive friction, decision fatigue, and systemic habit loops.',
        confidence: 'High',
        isVerified: true
      },
      {
        title: 'Industry Case Studies & Founder Workflows (2025/2026)',
        type: 'AI Synthesis',
        description: 'Synthesized operating patterns across high-output creative and engineering teams.',
        confidence: 'Medium',
        isVerified: false
      }
    ];

    slides = [
      {
        id: 'slide-1',
        slideNumber: 1,
        type: 'hook',
        badge: 'STRATEGIC INSIGHT',
        headline: `Most People Overcomplicate This. Here is the Simple System That Actually Works.`,
        body: `We are conditioned to believe big results require immense complexity.\n\nIn reality, sustainable success comes from mastering 3 fundamentals done with relentless consistency.`,
        supportingDetail: 'Swipe through to break down the actionable framework →',
        layoutStyle: 'hero-hook',
        textAlign: 'left',
        fontSize: 'lg'
      },
      {
        id: 'slide-2',
        slideNumber: 2,
        type: 'problem',
        badge: 'THE BOTTLENECK',
        headline: 'Why Common Advice Fails in the Real World',
        body: 'Most strategies are designed for ideal conditions that never happen.\n\nWhen work gets busy or friction strikes, complex systems collapse under their own weight. You need anti-fragile systems that survive real-world chaos.',
        supportingDetail: 'Insight: Simplicity is not the absence of clutter; it is the presence of clarity.',
        layoutStyle: 'split-card',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-3',
        slideNumber: 3,
        type: 'framework',
        badge: 'PRINCIPLE 01',
        headline: 'Principle 1: Eliminate the Hidden Cognitive Drag',
        body: 'Every unnecessary decision drains your mental battery before you do the real work.\n\nAudit your daily inputs and automate low-leverage choices so your peak focus is reserved for needle-moving execution.',
        supportingDetail: 'Focus is a finite daily currency. Spend it deliberately.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-4',
        slideNumber: 4,
        type: 'framework',
        badge: 'PRINCIPLE 02',
        headline: 'Principle 2: Build Short, Fast Feedback Loops',
        body: 'Waiting 3 months to evaluate progress is how projects quietly derail.\n\nCreate micro-checkpoints every 72 hours. Fast feedback lets you make tiny adjustments in real time with near-zero friction.',
        supportingDetail: 'Momentum is built through velocity of feedback, not size of effort.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-5',
        slideNumber: 5,
        type: 'framework',
        badge: 'PRINCIPLE 03',
        headline: 'Principle 3: Systematize What Works',
        body: 'If you succeed by accident, you will fail by accident.\n\nWhenever a campaign or workflow succeeds, capture the checklist in your knowledge base immediately. Turn lucky wins into repeatable assets.',
        supportingDetail: 'Repeatable systems beat heroic individual effort every single time.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-6',
        slideNumber: 6,
        type: 'takeaway',
        badge: 'SUMMARY',
        headline: 'The 3 Rules to Remember Moving Forward',
        body: '1. Guard your mental battery from low-value trivia.\n2. Seek rapid feedback over prolonged isolation.\n3. Convert your wins into reusable checklists.',
        supportingDetail: 'Progress is the sum of small advantages compounded over time.',
        layoutStyle: 'standard',
        textAlign: 'left',
        fontSize: 'md'
      },
      {
        id: 'slide-7',
        slideNumber: 7,
        type: 'cta',
        badge: 'START TODAY',
        headline: 'Put This Framework Into Practice This Week.',
        body: 'Which of these 3 principles resonates most with your current workflow?\n\nShare your thoughts in the comments below!',
        supportingDetail: '📌 Tap "Save" to keep this framework handy\n🔄 Repost to share with someone building their vision',
        layoutStyle: 'call-to-action',
        textAlign: 'center',
        fontSize: 'lg'
      }
    ];
  }

  // Ensure slides length matches count
  if (slides.length > count) {
    const hook = slides[0];
    const cta = slides[slides.length - 1];
    const middle = slides.slice(1, slides.length - 1).slice(0, count - 2);
    slides = [hook, ...middle, cta];
  }

  // Renumber slides
  slides = slides.map((s, idx) => ({
    ...s,
    slideNumber: idx + 1
  }));

  return {
    research: {
      topicSummary,
      targetAudience,
      contentAngle,
      keyTakeaways,
      suggestedHeadlines,
      suggestedHookFormula,
      slideSequenceSummary,
      sources,
      disclaimer: 'Clearly distinguishing AI-generated synthesis from verified reference documents. Always confirm citations against primary literature before high-stakes publishing.'
    },
    slides
  };
}
