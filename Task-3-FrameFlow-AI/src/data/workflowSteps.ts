export interface WorkflowStage {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  detailedDescription: string;
  recommendedTools: {
    name: string;
    role: string;
    icon: string;
    badge?: string;
  }[];
  inputs: {
    label: string;
    description: string;
    format: string;
  }[];
  outputs: {
    label: string;
    description: string;
    format: string;
  }[];
  automationTip: string;
  humanInTheLoopRule: string;
  latencySeconds: string;
  costEstimate: string;
  samplePayload?: {
    inputExample: string;
    outputExample: string;
  };
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    id: 1,
    slug: 'founder-idea',
    name: '1. Founder Idea Capture',
    shortDescription: 'Frictionless capture of raw thoughts, podcast insights, or customer questions.',
    detailedDescription: 'The founder or content lead logs a raw thesis, industry counter-take, or problem statement via mobile note, Slack voice memo, or the FrameFlow studio input.',
    recommendedTools: [
      { name: 'FrameFlow Studio', role: 'Direct Interactive Canvas', icon: 'Sparkles', badge: 'Active' },
      { name: 'Slack / Telegram Bot', role: 'Quick Mobile Ingestion via Webhook', icon: 'MessageSquare' },
      { name: 'Notion / Linear', role: 'Backlog of Content Ideas', icon: 'Database' }
    ],
    inputs: [
      { label: 'Raw Idea String', description: 'Unfiltered thought or topic thesis', format: 'Text (10–100 words)' },
      { label: 'Platform & Audience Flags', description: 'Target channel and demographic', format: 'Metadata JSON' }
    ],
    outputs: [
      { label: 'Ingested Topic Object', description: 'Normalized intent with timestamp, tags, and priority', format: 'JSON schema' }
    ],
    automationTip: 'Set up an n8n webhook listening to a dedicated #content-ideas Slack channel or Notion database view "Ready for AI Draft".',
    humanInTheLoopRule: 'Founder initiates the concept; automated scrapers should never generate ideas without founder intent or strategic approval.',
    latencySeconds: '< 1s',
    costEstimate: '$0.00'
  },
  {
    id: 2,
    slug: 'ai-research',
    name: '2. AI Topic Research & Source Grounding',
    shortDescription: 'Deep query synthesis, competitive angle discovery, and factual citation indexing.',
    detailedDescription: 'Before writing a single slide, an autonomous research pass queries live search indexes, identifies peer-reviewed benchmarks, and extracts credible statistics while isolating hallucinations.',
    recommendedTools: [
      { name: 'Perplexity / Tavily API', role: 'Real-time citation discovery & fact retrieval', icon: 'Search', badge: 'Recommended' },
      { name: 'Google Search API', role: 'Domain specific grounding & search verification', icon: 'Globe' },
      { name: 'Google Scholar / PubMed', role: 'Academic verification for data claims', icon: 'GraduationCap' }
    ],
    inputs: [
      { label: 'Normalized Topic Query', description: 'Search keywords & contextual boundary', format: 'Cleaned query string' },
      { label: 'Domain Restrictions', description: 'Whitelisted authoritative domains (e.g., .edu, .gov, arxiv)', format: 'Array of domain filters' }
    ],
    outputs: [
      { label: 'Verified Evidence Dossier', description: '3–5 key source citations with confidence scores', format: 'Array<ResearchSource>' },
      { label: 'Fact Boundary Warnings', description: 'Specific claims flagged as unverified or disputed', format: 'Validation alerts' }
    ],
    automationTip: 'Configure Tavily or Perplexity Sonar API with search_depth="advanced" to return snippet citations with published dates within the last 18 months.',
    humanInTheLoopRule: 'The system highlights verified sources vs AI extrapolations. If a statistical claim cannot be cited, it is explicitly flagged for founder check.',
    latencySeconds: '3.2s – 5.5s',
    costEstimate: '~$0.008 / run'
  },
  {
    id: 3,
    slug: 'content-structuring',
    name: '3. Strategic Content Structuring',
    shortDescription: 'Engineering the psychological narrative arc and slide sequence.',
    detailedDescription: 'Applies battle-tested social carousel storyboards: Hook → Agitation → Core Framework / Tools → Concrete Takeaways → High-Conversion CTA.',
    recommendedTools: [
      { name: 'Google Gemini 1.5 Pro / GPT-4o', role: 'High-context narrative sequencing & structure modeling', icon: 'Cpu', badge: 'Core LLM' },
      { name: 'FrameFlow Sequence Engine', role: 'Deterministic structural validation & slide counting', icon: 'Workflow' }
    ],
    inputs: [
      { label: 'Evidence Dossier & Raw Idea', description: 'Synthesized facts from Stage 2', format: 'Structured JSON' },
      { label: 'Slide Target Count', description: 'Desired carousel length (5–10 slides)', format: 'Integer' }
    ],
    outputs: [
      { label: 'Carousel Narrative Blueprint', description: 'Defined slide roles (Hook, Problem, Breakdown, CTA)', format: 'Array<SlideSequence>' },
      { label: 'Retention Hook Formula', description: 'Selected psychological angle (Contrarian, Numbered List, Playbook)', format: 'String' }
    ],
    automationTip: 'Constrain the LLM using Pydantic JSON Schema enforcement to guarantee valid slide types and strict slide count boundaries.',
    humanInTheLoopRule: 'Founder can reorder narrative milestones or swap the hook angle before copy drafting starts.',
    latencySeconds: '2.0s – 3.8s',
    costEstimate: '~$0.004 / run'
  },
  {
    id: 4,
    slug: 'slide-copy',
    name: '4. Headline & Slide Copy Generation',
    shortDescription: 'Crafting concise, punchy slide headlines, body prose, and supporting details.',
    detailedDescription: 'Translates the narrative outline into micro-copy optimized for mobile readers: <12-word headlines, skimmable 2-sentence body paragraphs, and actionable supporting bullets.',
    recommendedTools: [
      { name: 'ChatGPT / Gemini API', role: 'Copywriting fine-tuned on top 1% social creators', icon: 'FileText', badge: 'Core LLM' },
      { name: 'Tone Transformer', role: 'Enforces Educational, Bold, or Professional voice', icon: 'Sliders' }
    ],
    inputs: [
      { label: 'Slide Blueprint', description: 'Roles and topic guidelines per slide', format: 'JSON structure' },
      { label: 'Tone & Audience Parameters', description: 'Stylistic voice guidelines', format: 'Enum attributes' }
    ],
    outputs: [
      { label: 'Complete Slide Copy Deck', description: 'Headlines, body texts, supporting callouts, and visual suggestions', format: 'Slide[] array' }
    ],
    automationTip: 'Run a secondary linter prompt checking that no slide exceeds 45 total words to avoid text clutter on mobile phone screens.',
    humanInTheLoopRule: 'Every single slide has an inline editable text field. The founder maintains 100% editorial authority over phrasing.',
    latencySeconds: '3.5s – 6.0s',
    costEstimate: '~$0.009 / run'
  },
  {
    id: 5,
    slug: 'visual-direction',
    name: '5. Visual Direction & Theme Mapping',
    shortDescription: 'Selecting typographic hierarchy, color gradients, and layout archetypes.',
    detailedDescription: 'Matches the content tone with appropriate visual architecture: Editorial Minimal for case studies, Bold Tech for engineering/SaaS, Modern Gradient for creator authority.',
    recommendedTools: [
      { name: 'FrameFlow Design System', role: 'Tailwind CSS tokenized themes & glassmorphism', icon: 'Palette', badge: 'Active' },
      { name: 'Canva API / Brand Kit', role: 'Company typography & certified hex palettes', icon: 'Sparkles' }
    ],
    inputs: [
      { label: 'Slide Deck Data', description: 'Slide types and semantic category tags', format: 'Slide[]' },
      { label: 'Founder Brand Kit', description: 'Primary/secondary brand colors and logo assets', format: 'BrandKit object' }
    ],
    outputs: [
      { label: 'Theme Configuration Matrix', description: 'Colors, typography classes, corner radiuses, and badge rules', format: 'ThemeConfig' }
    ],
    automationTip: 'If the founder has configured a Brand Kit, automatically apply company colors to all visual tokens with dark-mode contrast calculation.',
    humanInTheLoopRule: 'One-click switching between Editorial Minimal, Bold Tech, Modern Gradient, Corporate, and Playful Education.',
    latencySeconds: '< 0.5s',
    costEstimate: '$0.00'
  },
  {
    id: 6,
    slug: 'carousel-generation',
    name: '6. Carousel Generation & Composition',
    shortDescription: 'Rendering pixel-perfect vector slides in Instagram & LinkedIn aspect ratios.',
    detailedDescription: 'Dynamic layout calculation placing headlines, badges, tool cards, numbers, and footer social handles into responsive 1080x1080 and 1080x1350 canvas layouts.',
    recommendedTools: [
      { name: 'React + Canvas Render Engine', role: 'Native DOM rendering with real-time reactive preview', icon: 'Layout', badge: 'Client Engine' },
      { name: 'HTML-to-Image / Satori', role: 'High-DPI 2x/3x rasterizer for crisp export', icon: 'Image' }
    ],
    inputs: [
      { label: 'Merged Copy & Theme Tokens', description: 'Combined data from steps 4 & 5', format: 'Render props' },
      { label: 'Platform Frame Target', description: 'Instagram 1:1, 4:5, or LinkedIn Document', format: 'Aspect spec' }
    ],
    outputs: [
      { label: 'Interactive 9-Slide Artboard', description: 'Live rendered carousel ready for pagination & preview', format: 'Virtual DOM artboard' }
    ],
    automationTip: 'Pre-render canvas elements in background Web Workers to maintain smooth 60fps thumbnail dragging and instant page swiping.',
    humanInTheLoopRule: 'Real-time interactive preview shows the exact LinkedIn document and Instagram feed viewport.',
    latencySeconds: '< 0.8s',
    costEstimate: '$0.00'
  },
  {
    id: 7,
    slug: 'founder-review',
    name: '7. Founder Review & Refinement',
    shortDescription: 'Rearranging slides, fine-tuning copy, and swapping layout cards.',
    detailedDescription: 'The critical human-in-the-loop stage. The founder previews the deck as a real social media user, tests readability on mobile simulation, and tweaks specific words.',
    recommendedTools: [
      { name: 'FrameFlow 3-Panel Studio', role: 'Thumb rail, social simulator, and property inspector', icon: 'SlidersHorizontal', badge: 'Core Studio' },
      { name: 'Mobile Viewport Simulator', role: 'Shows Instagram post & LinkedIn doc UI overlays', icon: 'Smartphone' }
    ],
    inputs: [
      { label: 'Rendered Slide Deck', description: 'All 9 slides loaded into memory', format: 'State tree' }
    ],
    outputs: [
      { label: 'Approved Final Deck', description: 'Verified copy, layout, and visual sequence', format: 'Validated Project' }
    ],
    automationTip: 'Auto-save revisions into browser IndexedDB/LocalStorage every 500ms so no creative work is ever lost.',
    humanInTheLoopRule: 'Mandatory human approval checkpoint. Content is never published automatically without explicit founder sign-off.',
    latencySeconds: 'Interactive (Founder-paced)',
    costEstimate: '$0.00'
  },
  {
    id: 8,
    slug: 'final-export',
    name: '8. Final Multi-Format Export & Asset Staging',
    shortDescription: 'Generating multi-page PDFs, high-res PNG sets, and ready-to-paste social captions.',
    detailedDescription: 'Compiles the finished carousel into a verified LinkedIn-ready PDF document (which LinkedIn renders as a swipeable document post) and 1080x1080 PNG image assets, paired with generated captions.',
    recommendedTools: [
      { name: 'jsPDF + Canvas Exporter', role: 'Client-side PDF & PNG generator', icon: 'Download', badge: 'Active' },
      { name: 'Google Drive / Dropbox API', role: 'Cloud asset archiving for marketing teams', icon: 'HardDrive' },
      { name: 'n8n Webhook / Buffer / Hootsuite', role: 'Optional scheduled publishing or draft staging', icon: 'Share2' }
    ],
    inputs: [
      { label: 'Approved Slide Deck DOM', description: 'Validated artboard elements', format: 'Canvas/DOM refs' },
      { label: 'Export Format Selection', description: 'Multi-Page PDF, Single PNGs, All PNGs ZIP', format: 'Format flags' }
    ],
    outputs: [
      { label: 'Multi-Page LinkedIn PDF', description: '1080x1080 vector document with crisp text', format: '.pdf file' },
      { label: 'High-Res Instagram PNGs', description: 'Crisp individual slides at 1080x1080 px', format: '.png image bundle' },
      { label: 'Formatted Social Post Caption', description: 'Ready-to-paste caption with hook & hashtags', format: 'Markdown string' }
    ],
    automationTip: 'Trigger an n8n webhook on export completion to store the PDF in Google Drive and notify your social media manager in Slack.',
    humanInTheLoopRule: 'Founder clicks download or triggers staging. Direct API publishing requires explicit one-click confirmation.',
    latencySeconds: '1.2s – 3.0s',
    costEstimate: '$0.00'
  }
];

export const REAL_WORLD_AUTOMATION_SPEC = {
  architectureTitle: 'FrameFlow Production Automation Pipeline (n8n + Gemini + Google Drive)',
  summary: 'How modern content teams automate 90% of the manual research and formatting while preserving complete human creative control.',
  webhookStages: [
    {
      step: '1. Idea Intake Webhook',
      service: 'n8n Webhook Node',
      details: 'Listens to a Slack `/carousel` slash command or a Notion database row creation. Extracts topic, target audience, and channel tags.'
    },
    {
      step: '2. Research Grounding',
      service: 'Perplexity / Tavily API Node',
      details: 'Queries for top 5 academic or industry sources published within 18 months. Extracts exact URLs, titles, and key statistical quotes.'
    },
    {
      step: '3. LLM Structured Generation',
      service: 'Gemini 1.5 Pro / GPT-4o Node',
      details: 'Receives the research dossier and outputs a validated JSON schema containing hook, 5 tools/insights, takeaways, and CTA copy.'
    },
    {
      step: '4. FrameFlow Studio Staging',
      service: 'FrameFlow REST API / Webhook',
      details: 'Creates a new draft project with slides pre-populated. Sends a Slack notification to the founder: "Your carousel draft is ready for review."'
    },
    {
      step: '5. Human-in-the-Loop Review',
      service: 'FrameFlow Web App',
      details: 'Founder reviews slides, reorders cards, tweaks wording, selects theme, and approves the final carousel.'
    },
    {
      step: '6. Multi-Page PDF & Cloud Backup',
      service: 'Google Drive API + Buffer API',
      details: 'Generates 1080x1080 PDF document for LinkedIn. Stages draft post in Buffer or Hootsuite awaiting scheduled time.'
    }
  ]
};
