import React from 'react';
import { 
  Hammer, 
  FolderGit2, 
  Wrench, 
  Compass, 
  CheckCircle2, 
  XCircle, 
  GitBranch, 
  Terminal, 
  ArrowRight
} from 'lucide-react';

interface ValuePropositionProps {
  onExploreClick: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onExploreClick }) => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-slate-200/80 relative w-full">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
            Core Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight leading-tight">
            Skills Are Better When You Build With Them.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Passive videos give the illusion of competence. True technical confidence comes from writing code, debugging stack traces, and deploying working systems that solve real problems.
          </p>
        </div>

        {/* Visually Interesting Editorial Grid (Asymmetrical Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* Card 1: Large Feature Block - Learn by Doing (Spans 7 cols) */}
          <div className="lg:col-span-7 bg-offwhite rounded-3xl p-6 sm:p-8 xl:p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-violet/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-midnight text-white flex items-center justify-center shadow-md">
                  <Hammer className="w-6 h-6 text-violet-light" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Differentiator 01</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-midnight tracking-tight mb-3">
                Learn by Doing
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Every concept is introduced through an immediate coding objective. Instead of sitting through 40-hour lecture playlists, you construct software architecture from the very first module.
              </p>

              {/* Side-by-side contrast component */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <XCircle className="w-4 h-4 text-rose-500" />
                    <span>Traditional Tutorials</span>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-xs">
                    Endless video playlists, copy-paste snippets that break the next day, and false confidence without retention.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-lavender/60 border border-violet/20 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-midnight">
                    <CheckCircle2 className="w-4 h-4 text-violet" />
                    <span>The Nexora Method</span>
                  </div>
                  <p className="text-slate-700 leading-relaxed text-xs font-medium">
                    Hands-on project sprints, self-authored logic, debugging drills, and deployable software deliverables.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm font-medium text-slate-500">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-violet" />
                <span>Code-first curriculum design</span>
              </span>
              <span className="text-violet font-semibold">100% Practical</span>
            </div>
          </div>

          {/* Card 2: Build Portfolio-Ready Projects (Spans 5 cols) */}
          <div className="lg:col-span-5 bg-midnight text-white rounded-3xl p-6 sm:p-8 xl:p-10 border border-violet/30 shadow-premium flex flex-col justify-between relative overflow-hidden">
            {/* Background glow accent */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet text-white flex items-center justify-center shadow-glow-violet">
                  <FolderGit2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xs font-mono text-lavender/60 font-bold uppercase">Differentiator 02</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                Build Portfolio-Ready Projects
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Walk away with publicly accessible web applications and verified GitHub repositories with production READMEs that showcase your actual engineering capability.
              </p>

              {/* GitHub Mockup mini-card */}
              <div className="bg-midnight-950/90 rounded-2xl p-4 border border-violet/20 font-mono text-xs space-y-2.5">
                <div className="flex items-center justify-between text-slate-400 text-[11px]">
                  <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                    <GitBranch className="w-3.5 h-3.5 text-skyblue" />
                    nexora-student / rag-document-engine
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 font-bold">Public</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Hybrid semantic vector search engine with source citations and FastAPI backend.
                </p>
                <div className="flex items-center gap-4 text-[11px] text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-violet" />
                    TypeScript
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-skyblue" />
                    Python
                  </span>
                  <span className="text-emerald-400 font-semibold">Live Demo Deployed</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-violet/20 flex items-center justify-between text-xs sm:text-sm text-lavender/80">
              <span>Tangible proof over vague resume claims</span>
              <ArrowRight className="w-4 h-4 text-skyblue" />
            </div>
          </div>

          {/* Card 3: Work With Modern AI Tools (Spans 6 cols) */}
          <div className="lg:col-span-6 bg-offwhite rounded-3xl p-6 sm:p-8 xl:p-10 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-violet/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-lavender text-violet flex items-center justify-center border border-violet/30">
                  <Wrench className="w-6 h-6 text-violet" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Differentiator 03</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-midnight tracking-tight mb-3">
                Work With Modern AI Tools
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Learn modern stacks that engineering teams and startups actually use today. You will build with production libraries rather than toy environments.
              </p>

              {/* Tool Tags Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {[
                  'OpenAI & Anthropic APIs',
                  'LangChain & LlamaIndex',
                  'ChromaDB & Pinecone',
                  'Python & Scikit-Learn',
                  'React 19 & TypeScript',
                  'PostgreSQL & Prisma',
                  'FastAPI & Docker',
                  'Playwright Automation'
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm font-mono font-medium text-midnight-800 shadow-sm flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-violet" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between text-xs sm:text-sm text-slate-500 font-medium">
              <span>Production toolchains from day one</span>
              <span className="text-violet font-semibold">Zero Toy Stacks</span>
            </div>
          </div>

          {/* Card 4: Learn Through Guided Practice (Spans 6 cols) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-lavender/50 to-offwhite rounded-3xl p-6 sm:p-8 xl:p-10 border border-violet/20 shadow-sm flex flex-col justify-between hover:border-violet/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white text-midnight flex items-center justify-center border border-violet/30 shadow-sm">
                  <Compass className="w-6 h-6 text-violet" />
                </div>
                <span className="text-xs font-mono text-slate-400 font-bold uppercase">Differentiator 04</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-midnight tracking-tight mb-3">
                Learn Through Guided Practice
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Structured blueprints, clear milestone checklists, and progressive difficulty curves eliminate getting stuck. You are guided through real software architecture step-by-step.
              </p>

              {/* Step indicator preview */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="w-7 h-7 rounded-lg bg-violet/10 text-violet font-mono font-bold flex items-center justify-center text-xs shrink-0">
                    01
                  </span>
                  <span className="font-semibold text-midnight">Deconstruct Architecture:</span>
                  <span className="text-slate-500 truncate">Understand data flow and system design</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="w-7 h-7 rounded-lg bg-violet/10 text-violet font-mono font-bold flex items-center justify-center text-xs shrink-0">
                    02
                  </span>
                  <span className="font-semibold text-midnight">Guided Build Sprints:</span>
                  <span className="text-slate-500 truncate">Write modular logic with test cases</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm">
                  <span className="w-7 h-7 rounded-lg bg-violet/10 text-violet font-mono font-bold flex items-center justify-center text-xs shrink-0">
                    03
                  </span>
                  <span className="font-semibold text-midnight">Review & Polish:</span>
                  <span className="text-slate-500 truncate">Refactor, document and deploy to public web</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-violet/20 flex items-center justify-between text-xs sm:text-sm text-slate-600 font-medium">
              <span>Iterative feedback loops</span>
              <button
                onClick={onExploreClick}
                className="text-violet hover:text-violet-hover font-bold flex items-center gap-1.5"
              >
                <span>Find Your Path</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
