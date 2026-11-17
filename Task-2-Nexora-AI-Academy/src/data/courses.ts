import { Programme } from '../types';

export const PROGRAMMES: Programme[] = [
  {
    id: 'ai-genai-eng',
    category: 'ai-genai',
    categoryLabel: 'AI & Generative AI',
    title: 'Generative AI & LLM Application Engineering',
    shortDescription: 'Build real-world generative AI applications using prompt engineering, LangChain, vector databases, and retrieval-augmented generation (RAG).',
    difficulty: 'Intermediate',
    duration: '10 Weeks (Illustrative Pace)',
    skillsCovered: [
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases & Embeddings',
      'LangChain & LlamaIndex',
      'Prompt Optimization & Evaluation',
      'API Integration (OpenAI & Anthropic)',
      'AI Safety & Guardrails'
    ],
    projectOutcome: 'A multi-source enterprise document assistant with hybrid semantic search, source attribution, and real-time streaming answers.',
    weeklyBreakdown: [
      { week: 'Week 1-2', topic: 'LLM Architectures & Structured Prompting', deliverable: 'Structured JSON extraction tool using function calling' },
      { week: 'Week 3-4', topic: 'Embeddings, Vector Search & ChromaDB/Pinecone', deliverable: 'Semantic search engine over research papers' },
      { week: 'Week 5-7', topic: 'Production RAG & Chunking Strategies', deliverable: 'End-to-end RAG knowledge base assistant' },
      { week: 'Week 8-10', topic: 'Autonomous Agents, Tool Calling & Deployment', deliverable: 'Full multi-tool document assistant web app' }
    ],
    toolsLearned: ['Python', 'OpenAI API', 'LangChain', 'ChromaDB', 'FastAPI', 'Next.js'],
    prerequisites: 'Basic Python proficiency and comfort with APIs/HTTP requests.',
    learningFormat: 'Hands-on project sprints, live code reviews, and weekly office hours.',
    badge: 'Flagship Track',
    featured: true
  },
  {
    id: 'ml-foundations-eng',
    category: 'ml-foundations',
    categoryLabel: 'Machine Learning Foundations',
    title: 'Practical Machine Learning: From Data to Model',
    shortDescription: 'Master the core algorithms behind modern predictive models, from feature engineering to validation, tuning, and production inference.',
    difficulty: 'Beginner to Intermediate',
    duration: '8 Weeks (Illustrative Pace)',
    skillsCovered: [
      'Supervised & Unsupervised Learning',
      'Feature Engineering & Pipelines',
      'Scikit-Learn & XGBoost',
      'Model Evaluation & Bias Detection',
      'Hyperparameter Tuning',
      'Model Serialization & REST APIs'
    ],
    projectOutcome: 'An intelligent personal finance risk & budget categorization model deployed as a production-grade microservice.',
    weeklyBreakdown: [
      { week: 'Week 1-2', topic: 'Exploratory Data Analysis & Feature Engineering', deliverable: 'Automated data hygiene and feature store notebook' },
      { week: 'Week 3-4', topic: 'Regression & Classification Architectures', deliverable: 'Credit and fraud scoring benchmark suite' },
      { week: 'Week 5-6', topic: 'Tree Ensembles (Random Forests & XGBoost)', deliverable: 'Tuned gradient boosted risk classification model' },
      { week: 'Week 7-8', topic: 'Packaging, Dockerization & API Inference', deliverable: 'Live containerized ML inference service' }
    ],
    toolsLearned: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'FastAPI', 'Docker'],
    prerequisites: 'Basic mathematics (algebra and basic stats) and introductory Python.',
    learningFormat: 'Code-first problem sets, guided model debugging, and portfolio sprint.',
    badge: 'Core Foundation'
  },
  {
    id: 'fullstack-modern-web',
    category: 'fullstack',
    categoryLabel: 'Full Stack Web Development',
    title: 'Full-Stack Modern Web & AI-Enhanced Development',
    shortDescription: 'Build scalable web platforms with React, Node.js, PostgreSQL, and Tailwind CSS while incorporating modern AI coding workflows.',
    difficulty: 'Beginner to Intermediate',
    duration: '12 Weeks (Illustrative Pace)',
    skillsCovered: [
      'React 19 & TypeScript',
      'Tailwind CSS & Responsive UI',
      'Node.js & Express / NestJS',
      'PostgreSQL & Prisma ORM',
      'Authentication (JWT & OAuth)',
      'AI-Assisted Development Workflows'
    ],
    projectOutcome: 'A complete full-stack digital services marketplace with authentication, payment checkout flow, reviews, and interactive dashboard.',
    weeklyBreakdown: [
      { week: 'Week 1-3', topic: 'Modern React, State & TypeScript Component Systems', deliverable: 'Interactive responsive user dashboard' },
      { week: 'Week 4-6', topic: 'Server Architecture, RESTful APIs & PostgreSQL', deliverable: 'Relational database schema & CRUD endpoints' },
      { week: 'Week 7-9', topic: 'Authentication, Security & File Uploads', deliverable: 'Role-based access control & session management' },
      { week: 'Week 10-12', topic: 'End-to-End Integration, Testing & Cloud Deploy', deliverable: 'Deployed production marketplace web application' }
    ],
    toolsLearned: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    prerequisites: 'No prior programming required; beginner friendly with dedicated ramp-up.',
    learningFormat: 'Guided component labs, architectural walkthroughs, and pair feedback.',
    badge: 'High Demand',
    featured: true
  },
  {
    id: 'python-automation-scripting',
    category: 'python-auto',
    categoryLabel: 'Python & Automation',
    title: 'Python for Automation & System Scripting',
    shortDescription: 'Automate repetitive workflows, scrape dynamic web data, connect APIs, and schedule background tasks that save hundreds of hours.',
    difficulty: 'Beginner',
    duration: '6 Weeks (Illustrative Pace)',
    skillsCovered: [
      'Python Programming Fundamentals',
      'Web Scraping (BeautifulSoup & Playwright)',
      'REST API Integration & Webhooks',
      'File & Spreadsheet Automation',
      'Scheduled Jobs & Task Runners',
      'Error Handling & Logging'
    ],
    projectOutcome: 'An automated content generation and multi-platform publishing pipeline with scheduled research scrapers and webhook alerts.',
    weeklyBreakdown: [
      { week: 'Week 1-2', topic: 'Python Core, Data Structures & File I/O', deliverable: 'Automated CSV/Excel report consolidator' },
      { week: 'Week 3-4', topic: 'Web Scraping & Browser Automation', deliverable: 'Price tracking and market sentiment scraper' },
      { week: 'Week 5-6', topic: 'API Chains, Scheduling & Webhook Notifications', deliverable: 'Autonomous scheduled content syndication bot' }
    ],
    toolsLearned: ['Python', 'Requests', 'Playwright', 'OpenPyXL', 'GitHub Actions', 'Cron'],
    prerequisites: 'None. Designed for beginners starting from scratch.',
    learningFormat: 'Mini-sprints, real-world utility builds, and step-by-step walkthroughs.',
    badge: 'Quick Launch'
  },
  {
    id: 'data-analytics-bi',
    category: 'data-analytics',
    categoryLabel: 'Data Analytics',
    title: 'Data Analytics, SQL & Business Intelligence',
    shortDescription: 'Turn unstructured raw datasets into strategic insights with SQL queries, Python data wrangling, and interactive analytical dashboards.',
    difficulty: 'Beginner to Intermediate',
    duration: '8 Weeks (Illustrative Pace)',
    skillsCovered: [
      'Advanced SQL (Joins, CTEs, Window Functions)',
      'Data Cleaning with Python & Pandas',
      'Exploratory Visualizations',
      'Key Metric Modeling (CAC, LTV, Churn)',
      'Interactive Dashboard Design',
      'Data Storytelling & Reporting'
    ],
    projectOutcome: 'An executive-grade SaaS product and revenue analytics dashboard with customer cohort retention, funnel analysis, and trend forecasting.',
    weeklyBreakdown: [
      { week: 'Week 1-2', topic: 'Relational Modeling & Advanced SQL Queries', deliverable: 'Complex multi-table business query portfolio' },
      { week: 'Week 3-4', topic: 'Data Wrangling with Python, NumPy & Pandas', deliverable: 'Automated data cleaning and transformation pipeline' },
      { week: 'Week 5-6', topic: 'Business Metrics & Cohort Retention Analysis', deliverable: 'SaaS unit economics and churn diagnostic report' },
      { week: 'Week 7-8', topic: 'Interactive Dashboard Architecture & Insights Delivery', deliverable: 'Live interactive analytics dashboard application' }
    ],
    toolsLearned: ['SQL', 'Python', 'Pandas', 'Metabase / Streamlit', 'Plotly', 'PostgreSQL'],
    prerequisites: 'Comfort with basic spreadsheet concepts (Excel/Sheets); no coding needed.',
    learningFormat: 'Dataset case studies, diagnostic exercises, and executive presentation drills.',
    badge: 'Career Essential'
  },
  {
    id: 'digital-productivity-ai-tools',
    category: 'productivity-tools',
    categoryLabel: 'Digital Productivity & AI Tools',
    title: 'Digital Productivity & Modern AI Workflows',
    shortDescription: 'Supercharge your daily work efficiency by integrating AI coding assistants, generative design tools, custom GPTs, and automated workflows.',
    difficulty: 'Beginner',
    duration: '4 Weeks (Illustrative Pace)',
    skillsCovered: [
      'AI Workflow Architecture',
      'Advanced Prompt Engineering',
      'Custom GPTs & Autonomous Assistants',
      'Make / Zapier Automation Pipelines',
      'Notion & AI Knowledge Systems',
      'AI-Assisted Research & Synthesis'
    ],
    projectOutcome: 'A comprehensive personal and team operating system with custom research bots, automated document summarizers, and inbox triage flows.',
    weeklyBreakdown: [
      { week: 'Week 1', topic: 'Cognitive Tooling & High-Leverage Prompting', deliverable: 'Custom domain-specific prompt library & test suite' },
      { week: 'Week 2', topic: 'Knowledge Management with AI & Vector Docs', deliverable: 'Personal AI second brain connected to notes & PDFs' },
      { week: 'Week 3', topic: 'No-Code Automation Chains (Make & Webhooks)', deliverable: 'Automated meeting notes to task allocation pipeline' },
      { week: 'Week 4', topic: 'Custom AI Assistant Creation & Work Deployment', deliverable: 'Functional tailored assistant for specific professional role' }
    ],
    toolsLearned: ['ChatGPT Advanced', 'Claude', 'Perplexity', 'Make.com', 'Notion AI', 'Zapier'],
    prerequisites: 'None. Open to students and professionals across any discipline.',
    learningFormat: 'Weekend intensive workshops, live templates, and workflow audits.',
    badge: 'Immediate ROI'
  }
];

export const CATEGORY_TABS = [
  { id: 'all', label: 'All Programmes' },
  { id: 'ai-genai', label: 'AI & Generative AI' },
  { id: 'ml-foundations', label: 'Machine Learning' },
  { id: 'fullstack', label: 'Full Stack Web' },
  { id: 'python-auto', label: 'Python & Automation' },
  { id: 'data-analytics', label: 'Data Analytics' },
  { id: 'productivity-tools', label: 'Digital AI Tools' },
] as const;
