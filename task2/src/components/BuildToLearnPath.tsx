import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const BuildToLearnPath: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      number: 'STEP 01',
      name: 'Discover',
      tagline: 'Understand the fundamentals.',
      description: 'Break down complex AI and software engineering concepts into intuitive mental models. We replace dense theory with architectural diagrams, interactive visualizations, and first-principles breakdowns.',
      deliverables: [
        'System architecture walkthroughs',
        'Interactive mental-model diagrams',
        'Starter repository setup and environment sanity check'
      ],
      workbenchTitle: 'Mental Model & Architecture Blueprint',
      codePreview: `// 01_discover: Understanding Vector Embeddings
const conceptualFlow = {
  rawDocument: "Annual_Report_2024.pdf",
  chunkStrategy: "RecursiveCharacterTextSplitter (chunkSize: 1000)",
  vectorizer: "text-embedding-3-small (1536 dimensions)",
  mentalModel: "Points closer in high-dimensional space share semantic meaning."
};`,
      statusText: 'Core Intuition Formed'
    },
    {
      number: 'STEP 02',
      name: 'Experiment',
      tagline: 'Work with AI tools and technologies.',
      description: 'Get your hands dirty in guided sandboxes. Experiment with leading AI model APIs, prompt strategies, vector indexing parameters, and dynamic web automation scripts.',
      deliverables: [
        'API test suites and latency benchmarks',
        'Prompt engineering stress testing',
        'Parameter tuning for temperature, top-k, and chunk overlaps'
      ],
      workbenchTitle: 'Interactive Tool & API Playground',
      codePreview: `// 02_experiment: Tuning Vector Search Parameters
const testRetriever = await vectorIndex.query({
  queryVector: await getEmbedding("What was Q3 revenue?"),
  topK: 5,
  includeMetadata: true,
  filter: { category: "financial_reports" }
});
console.log("Top similarity score:", testRetriever.matches[0].score); // 0.941`,
      statusText: 'Live API Experimentation'
    },
    {
      number: 'STEP 03',
      name: 'Build',
      tagline: 'Develop practical projects.',
      description: 'Write production-grade code to construct end-to-end applications. Build complete backends, reactive frontends, error handling routines, and deployment pipelines.',
      deliverables: [
        'Production modular codebase',
        'Exception handling, logging, and security validations',
        'Docker containerization and database migrations'
      ],
      workbenchTitle: 'Production Code & Modular Assembly',
      codePreview: `// 03_build: Full RAG Pipeline with Streaming Output
export async function streamRagResponse(query: string, res: Response) {
  const relevantDocs = await vectorStore.similaritySearch(query, 4);
  const context = relevantDocs.map(d => d.pageContent).join('\\n---');
  
  const stream = await openai.chat.completions.create({
    model: "gpt-4o",
    stream: true,
    messages: [
      { role: "system", content: STRICT_CITATION_SYSTEM_PROMPT },
      { role: "user", content: \`Context:\\n\${context}\\n\\nQuestion: \${query}\` }
    ]
  });
  return stream;
}`,
      statusText: 'Application Compiled & Verified'
    },
    {
      number: 'STEP 04',
      name: 'Showcase',
      tagline: 'Present your work in a portfolio.',
      description: 'Package your project for maximum career signal. Deploy to public cloud infrastructure, write an executive technical README, and publish verified GitHub repositories that speak for themselves.',
      deliverables: [
        'Public live URL accessible on the web',
        'Clean GitHub repository with architectural diagrams',
        'Short technical demo video and case-study writeup'
      ],
      workbenchTitle: 'Portfolio Publication & Public Deploy',
      codePreview: `## NexusDoc Enterprise AI Engine
> Public Demo: https://nexusdoc-demo.app
> Tech Stack: Next.js 15, FastAPI, ChromaDB, LangChain, Tailwind CSS

### Architecture Highlights:
- Hybrid dense-sparse retrieval achieves 98.4% attribution precision.
- Server-Sent Events (SSE) streaming with sub-450ms time-to-first-token.
- 100% test coverage across indexing and query pipelines.`,
      statusText: 'Live on Public Web'
    }
  ];

  return (
    <section id="path" className="py-20 md:py-28 bg-midnight text-white relative overflow-hidden scroll-mt-20 w-full">
      {/* Background architectural glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-skyblue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-violet/20 border border-violet/40 text-lavender text-xs font-mono font-bold uppercase tracking-wider mb-3">
            The Nexora Build-to-Learn Path
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            How You Go from Zero to Shipping Real Software.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Our progressive 4-step framework guarantees that every theoretical idea is immediately cemented through interactive experiments, production code, and public deployment.
          </p>
        </div>

        {/* Horizontal Journey / Timeline Stepper */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-10">
          {steps.map((s, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={s.number}
                onClick={() => setActiveStep(idx)}
                className={`p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-midnight-800 border-violet shadow-glow-violet'
                    : 'bg-midnight-950/70 border-violet/15 hover:border-violet/40 hover:bg-midnight-900/60'
                }`}
              >
                {/* Active indicator top bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet to-skyblue rounded-t-2xl" />
                )}

                <div className="flex items-center justify-between mb-3.5">
                  <span className={`text-xs sm:text-sm font-mono font-bold ${isActive ? 'text-skyblue' : 'text-slate-400'}`}>
                    {s.number}
                  </span>
                  <span className={`w-3 h-3 rounded-full ${isActive ? 'bg-violet animate-pulse' : 'bg-slate-700'}`} />
                </div>

                <h3 className="text-lg sm:text-xl xl:text-2xl font-black text-white tracking-tight mb-1.5">
                  {s.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {s.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Deep-Dive Display */}
        <div className="bg-midnight-950 rounded-3xl border border-violet/25 shadow-2xl p-6 sm:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center text-left">
          
          {/* Left Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-violet/20 text-lavender text-xs sm:text-sm font-mono font-semibold border border-violet/30">
              <span>Current Stage:</span>
              <span className="text-skyblue font-bold">{steps[activeStep].number} — {steps[activeStep].name}</span>
            </div>

            <h4 className="text-2xl sm:text-3xl xl:text-4xl font-extrabold text-white tracking-tight">
              {steps[activeStep].tagline}
            </h4>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Key Milestone Deliverables:
              </div>
              {steps[activeStep].deliverables.map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-3">
              <button
                onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                className="px-5 py-3 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs sm:text-sm font-bold transition-all shadow-glow-violet flex items-center gap-2"
              >
                <span>Next Stage: {steps[(activeStep + 1) % steps.length].name}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Simulated Interactive Workbench */}
          <div className="lg:col-span-7 bg-midnight-900 rounded-3xl border border-violet/30 overflow-hidden shadow-xl">
            <div className="flex items-center justify-between px-5 py-3.5 bg-midnight-950 border-b border-violet/20 font-mono text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Terminal className="w-4 h-4 text-violet-light" />
                <span>{steps[activeStep].workbenchTitle}</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{steps[activeStep].statusText}</span>
              </div>
            </div>

            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-slate-200 bg-midnight-950/80 overflow-x-auto leading-relaxed">
              <pre className="text-slate-300 whitespace-pre-wrap font-mono">
                {steps[activeStep].codePreview}
              </pre>
            </div>

            <div className="px-5 py-3.5 bg-midnight-950 border-t border-violet/15 flex items-center justify-between text-xs sm:text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-skyblue" />
                <span>Verified with automated unit and regression checks</span>
              </span>
              <span className="text-lavender font-mono text-xs">Step {activeStep + 1} of 4</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
