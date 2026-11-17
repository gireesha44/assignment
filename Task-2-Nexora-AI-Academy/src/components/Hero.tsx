import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Play, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Bot, 
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onAdvisorClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onAdvisorClick }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'scraper' | 'classifier'>('rag');
  const [isExecuting, setIsExecuting] = useState(false);
  const [executionStep, setExecutionStep] = useState(2);

  const handleSimulate = () => {
    setIsExecuting(true);
    setExecutionStep(0);
    setTimeout(() => setExecutionStep(1), 600);
    setTimeout(() => setExecutionStep(2), 1200);
    setTimeout(() => setExecutionStep(3), 1900);
    setTimeout(() => {
      setExecutionStep(4);
      setIsExecuting(false);
    }, 2500);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 xl:pt-40 xl:pb-28 overflow-hidden bg-radial-gradient-hero w-full">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[600px] h-[600px] bg-skyblue/15 rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left Editorial Content (6 cols for balanced wide screen) */}
          <div className="lg:col-span-6 space-y-6 xl:space-y-8 text-left">
            
            {/* Practical Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-violet/25 shadow-sm text-xs font-semibold text-midnight backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-violet font-bold tracking-wide uppercase text-[11px]">Built Around Practical Learning</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium hidden sm:inline">Zero Passive Slide Watching</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-midnight tracking-tight leading-[1.06]">
              Don’t Just Learn AI.{' '}
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-violet via-violet-light to-skyblue-dark">
                Build What Comes Next.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-2xl leading-relaxed font-normal">
              Practical AI and digital-skills programmes designed for college students,
              graduates and young professionals who want to turn curiosity into real-world capabilities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-white font-bold text-sm sm:text-base bg-violet hover:bg-violet-hover transition-all duration-200 shadow-glow-violet active:scale-95 group"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onAdvisorClick}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm sm:text-base text-midnight-900 bg-white hover:bg-lavender/50 border border-violet/20 shadow-sm transition-all duration-200"
              >
                <span>Talk to a Learning Advisor</span>
                <ChevronRight className="w-4 h-4 text-violet" />
              </button>
            </div>

            {/* Differentiator mini-row */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-black text-midnight tracking-tight">100%</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Project Deliverables</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-violet tracking-tight">6 Tracks</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Foundations to GenAI</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-black text-midnight tracking-tight">GitHub</p>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">Verified Repositories</p>
              </div>
            </div>

          </div>

          {/* Right Editorial Interactive AI Visual / Simulation (6 cols for balanced wide screen) */}
          <div className="lg:col-span-6 relative w-full">
            
            {/* Floating preview badge 1 */}
            <div className="absolute -top-4 -left-4 z-20 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-midnight text-white text-xs font-mono border border-violet/40 shadow-xl shadow-midnight/30 animate-float">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>pipeline: rag_assistant.py</span>
            </div>

            {/* Floating preview badge 2 */}
            <div className="absolute -bottom-5 -right-3 z-20 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/95 backdrop-blur-md text-midnight text-xs font-semibold border border-violet/20 shadow-premium animate-float-delayed">
              <div className="w-8 h-8 rounded-lg bg-lavender flex items-center justify-center text-violet font-bold">
                <CheckCircle2 className="w-4 h-4 text-violet" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-midnight">Interactive Simulation</div>
                <div className="text-[11px] text-slate-500">Vector Retrieval Workflow</div>
              </div>
            </div>

            {/* Interactive Workbench Container */}
            <div className="w-full bg-midnight rounded-3xl border border-violet/30 shadow-2xl overflow-hidden text-left relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-midnight-950/80 border-b border-violet/20">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400">nexora-sandbox // build-env</span>
                </div>
                <button
                  onClick={handleSimulate}
                  disabled={isExecuting}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-violet/20 hover:bg-violet/30 border border-violet/40 text-xs font-mono text-lavender transition-colors disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 text-skyblue ${isExecuting ? 'animate-spin' : ''}`} />
                  <span>{isExecuting ? 'Running...' : 'Run Pipeline'}</span>
                </button>
              </div>

              {/* Sandbox Tabs */}
              <div className="flex items-center bg-midnight-900 border-b border-violet/15 px-3 overflow-x-auto text-xs font-mono">
                <button
                  onClick={() => setActiveTab('rag')}
                  className={`px-4 py-2.5 border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'rag'
                      ? 'border-violet text-white bg-violet/10 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Bot className="w-4 h-4 text-violet-light" />
                  <span>01_rag_query.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab('scraper')}
                  className={`px-4 py-2.5 border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'scraper'
                      ? 'border-violet text-white bg-violet/10 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-4 h-4 text-skyblue" />
                  <span>02_automation.py</span>
                </button>
                <button
                  onClick={() => setActiveTab('classifier')}
                  className={`px-4 py-2.5 border-b-2 transition-colors flex items-center gap-2 ${
                    activeTab === 'classifier'
                      ? 'border-violet text-white bg-violet/10 font-semibold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-lavender" />
                  <span>03_ml_model.py</span>
                </button>
              </div>

              {/* Code & Visual Execution Output */}
              <div className="p-5 sm:p-6 space-y-4">
                
                {/* Visual Pipeline Nodes */}
                <div className="bg-midnight-950 p-4 rounded-2xl border border-violet/15">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
                    <span>Architecture Execution Graph</span>
                    <span className="text-emerald-400">Node Status: Active</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2.5 text-center text-xs font-mono">
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      executionStep >= 1 ? 'bg-violet/20 border-violet text-white' : 'bg-midnight-900 border-slate-800 text-slate-500'
                    }`}>
                      <div className="text-[10px] text-slate-400">Step 1</div>
                      <div className="font-semibold truncate">User Prompt</div>
                    </div>
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      executionStep >= 2 ? 'bg-violet/20 border-violet text-white' : 'bg-midnight-900 border-slate-800 text-slate-500'
                    }`}>
                      <div className="text-[10px] text-slate-400">Step 2</div>
                      <div className="font-semibold truncate">Vector Index (Top-K)</div>
                    </div>
                    <div className={`p-2.5 rounded-xl border transition-all ${
                      executionStep >= 3 ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-midnight-900 border-slate-800 text-slate-500'
                    }`}>
                      <div className="text-[10px] text-slate-400">Step 3</div>
                      <div className="font-semibold truncate">GPT-4o Stream</div>
                    </div>
                  </div>
                </div>

                {/* Live Code Preview */}
                <div className="font-mono text-xs sm:text-[13px] text-slate-300 bg-midnight-950/80 p-4 sm:p-5 rounded-2xl border border-violet/15 space-y-2 overflow-hidden leading-relaxed">
                  {activeTab === 'rag' && (
                    <>
                      <div className="text-slate-500">// Real student code snippet: RAG retrieval chain</div>
                      <div><span className="text-violet-light font-bold">const</span> retriever = vectorStore.<span className="text-skyblue">asRetriever</span>(&#123; k: 4 &#125;);</div>
                      <div><span className="text-violet-light font-bold">const</span> chain = RunnableSequence.<span className="text-skyblue">from</span>([</div>
                      <div className="pl-4">&#123; context: retriever, question: (i) =&gt; i.question &#125;,</div>
                      <div className="pl-4">ragPromptTemplate,</div>
                      <div className="pl-4">llmClient.<span className="text-skyblue">bind</span>(&#123; temperature: 0.1 &#125;)</div>
                      <div>]);</div>
                    </>
                  )}
                  {activeTab === 'scraper' && (
                    <>
                      <div className="text-slate-500">// Scheduled headless automation pipeline</div>
                      <div><span className="text-violet-light font-bold">async def</span> <span className="text-skyblue font-semibold">scrape_and_alert</span>():</div>
                      <div className="pl-4">feed = <span className="text-violet-light">await</span> crawler.get_research_feed()</div>
                      <div className="pl-4">summary = llm_summarizer(feed.content)</div>
                      <div className="pl-4">dispatch_webhook(url=DISCORD_HOOK, body=summary)</div>
                    </>
                  )}
                  {activeTab === 'classifier' && (
                    <>
                      <div className="text-slate-500">// Production ML risk inference endpoint</div>
                      <div>pipeline = Pipeline([</div>
                      <div className="pl-4">('imputer', SimpleImputer(strategy='median')),</div>
                      <div className="pl-4">('scaler', StandardScaler()),</div>
                      <div className="pl-4">('classifier', RandomForestClassifier(n_estimators=100))</div>
                      <div>])</div>
                    </>
                  )}
                </div>

                {/* Execution Terminal Output */}
                <div className="bg-midnight-950 p-4 rounded-2xl border border-violet/20 font-mono text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 font-semibold">
                      <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                      TERMINAL TELEMETRY
                    </span>
                    <span className="text-slate-400">Latency: 380ms</span>
                  </div>
                  <div className="text-emerald-400">✓ Ingestion complete: 1,420 tokens parsed</div>
                  <div className="text-skyblue">✓ Vector similarity score: 0.942 [Cosine metric]</div>
                  <div className="text-slate-300">
                    &gt; "Based on internal financial ledger, Q3 operating margin improved by 14.2%..."
                  </div>
                </div>

              </div>

              {/* Bottom Card Footer */}
              <div className="px-5 py-3.5 bg-midnight-950 border-t border-violet/15 flex items-center justify-between text-xs text-slate-400">
                <span>Outcome: Verified Project Portfolio</span>
                <span className="text-violet-light flex items-center gap-1.5 font-semibold">
                  <span>Student Track Preview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
