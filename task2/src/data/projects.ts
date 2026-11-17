import { StudentProject } from '../types';

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 'doc-ai-assistant',
    name: 'NexusDoc — Enterprise AI Document Intelligence Assistant',
    shortDescription: 'A multi-format PDF and markdown knowledge base that ingests technical documentation, creates semantic vector embeddings, and answers queries with verified citations.',
    technologyTags: ['LangChain', 'FastAPI', 'ChromaDB', 'OpenAI GPT-4o', 'React', 'TypeScript'],
    skillsDemonstrated: [
      'Retrieval-Augmented Generation (RAG)',
      'Vector chunking & similarity re-ranking',
      'Hallucination prevention with strict citation anchors',
      'Streaming responses with Server-Sent Events (SSE)'
    ],
    category: 'AI & Generative AI',
    previewType: 'document-ai',
    architectureHighlights: [
      'Document parsing via PyMuPDF with table preservation',
      'Hybrid BM25 + dense embedding vector search',
      'Confidence scoring engine with source paragraph highlighting'
    ],
    liveDemoMetrics: [
      { label: 'Avg Query Latency', value: '420ms' },
      { label: 'Attribution Accuracy', value: '98.4%' },
      { label: 'Chunks Indexed', value: '14,200+' }
    ]
  },
  {
    id: 'finance-ai-advisor',
    name: 'FinPulse — Intelligent Personal Finance & Budget Assistant',
    shortDescription: 'A predictive financial management tool that classifies bank transaction statements, predicts monthly spending patterns, and alerts users to anomaly charges using ML models.',
    technologyTags: ['Python', 'Scikit-Learn', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Chart.js'],
    skillsDemonstrated: [
      'Multi-class transaction categorization model',
      'Time-series forecasting for monthly cash flows',
      'Anomaly detection algorithms (Isolation Forest)',
      'Secure tokenized banking webhook integration'
    ],
    category: 'Machine Learning & Python',
    previewType: 'finance-ai',
    architectureHighlights: [
      'Zero-shot fallback classifier for unlabelled transactions',
      'Privacy-preserving local database encryption',
      'Interactive reactive cashflow projection charts'
    ],
    liveDemoMetrics: [
      { label: 'Category Accuracy', value: '94.8%' },
      { label: 'Anomaly F1-Score', value: '0.91' },
      { label: 'Processed Transactions', value: '250k+' }
    ]
  },
  {
    id: 'content-automation-bot',
    name: 'OmniPublish — Automated Content Pipeline & Distribution Bot',
    shortDescription: 'An automated pipeline that monitors trending technical topics, generates synthesized drafts with brand voice constraints, and queues multi-platform posts via webhooks.',
    technologyTags: ['Python', 'Playwright', 'Claude API', 'GitHub Actions', 'Supabase', 'Discord Bot'],
    skillsDemonstrated: [
      'Headless browser scraping of research feeds',
      'Multi-stage LLM editorial review pipeline',
      'Automated social asset formatting and resizing',
      'Fail-safe retry queues with Dead-Letter-Exchanges'
    ],
    category: 'Python & Automation',
    previewType: 'content-gen',
    architectureHighlights: [
      'Cron-triggered serverless execution via GitHub Actions',
      'Markdown-to-social carousel HTML/SVG image renderer',
      'Human-in-the-loop review interface via Discord slash commands'
    ],
    liveDemoMetrics: [
      { label: 'Draft Generation Time', value: '18s' },
      { label: 'Weekly Hours Saved', value: '14 hrs' },
      { label: 'Sync Success Rate', value: '99.9%' }
    ]
  },
  {
    id: 'data-analytics-bi-board',
    name: 'MetricVibe — Executive SaaS Analytics & Retention Dashboard',
    shortDescription: 'An interactive business intelligence platform showing customer acquisition costs, monthly recurring revenue, cohort retention heatmaps, and churn diagnostics.',
    technologyTags: ['SQL', 'Python', 'Pandas', 'Plotly', 'React', 'Tailwind CSS'],
    skillsDemonstrated: [
      'Complex SQL CTEs and window functions for cohort retention',
      'Dynamic filtering with multi-dimensional slicing',
      'Statistical significance testing on conversion funnels',
      'Responsive, accessible executive UI layouts'
    ],
    category: 'Data Analytics',
    previewType: 'analytics-dash',
    architectureHighlights: [
      'Pre-aggregated analytical views in PostgreSQL',
      'Sub-50ms reactive data visualization widgets',
      'Automated weekly email summary export generator'
    ],
    liveDemoMetrics: [
      { label: 'Query Refresh Rate', value: '< 60ms' },
      { label: 'Data Points Modeled', value: '1.2M+' },
      { label: 'KPI Widgets', value: '18 Active' }
    ]
  },
  {
    id: 'fullstack-marketplace-app',
    name: 'SkillCraft — Full-Stack Digital Services Marketplace',
    shortDescription: 'A production-grade web marketplace connecting digital craftspeople with clients, featuring role-based authentication, real-time messaging, and order checkout flows.',
    technologyTags: ['React 19', 'TypeScript', 'Node.js', 'Prisma', 'PostgreSQL', 'Stripe API'],
    skillsDemonstrated: [
      'Full-stack architecture with typed REST APIs',
      'Relational database modeling with Prisma ORM',
      'Secure authentication, session handling, and CORS',
      'Payment intent workflows and order state machine'
    ],
    category: 'Full Stack Web Development',
    previewType: 'marketplace',
    architectureHighlights: [
      'Optimistic UI updates for instant feedback',
      'Stripe checkout webhook listener with idempotency checks',
      'Component modularity using Tailwind CSS design tokens'
    ],
    liveDemoMetrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'API Response Time', value: '65ms' },
      { label: 'Active Service Listings', value: '120+' }
    ]
  }
];
