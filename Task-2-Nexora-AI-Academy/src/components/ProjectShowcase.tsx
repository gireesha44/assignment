import React, { useState } from 'react';
import { 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  DollarSign, 
  Bot, 
  BarChart3, 
  ShoppingBag,
  Code2
} from 'lucide-react';
import { STUDENT_PROJECTS } from '../data/projects';
import { StudentProject } from '../types';

interface ProjectShowcaseProps {
  onInspectProject: (project: StudentProject) => void;
  onApplyCategory: (cat: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onInspectProject,
  onApplyCategory
}) => {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const activeProj = STUDENT_PROJECTS[selectedIdx];

  const getIcon = (type: string) => {
    switch (type) {
      case 'document-ai': return <FileText className="w-4 h-4 text-violet" />;
      case 'finance-ai': return <DollarSign className="w-4 h-4 text-emerald-500" />;
      case 'content-gen': return <Bot className="w-4 h-4 text-skyblue-dark" />;
      case 'analytics-dash': return <BarChart3 className="w-4 h-4 text-violet-light" />;
      case 'marketplace': return <ShoppingBag className="w-4 h-4 text-amber-500" />;
      default: return <Code2 className="w-4 h-4 text-violet" />;
    }
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative scroll-mt-20 w-full">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
              Portfolio Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight">
              Your Skills Should Have Something to Show.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Employers, clients, and technical teams judge you by what you build, not just what you watched. Here are actual capstone projects students construct in our programmes.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono text-slate-500 bg-offwhite px-5 py-3 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0 shadow-sm">
            <span>5 Full-Stack Capstone Blueprints</span>
          </div>
        </div>

        {/* Project Selector Horizontal Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {STUDENT_PROJECTS.map((proj, idx) => {
            const isActive = selectedIdx === idx;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedIdx(idx)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-midnight text-white border-midnight shadow-lg shadow-midnight/15'
                    : 'bg-offwhite text-slate-700 border-slate-200 hover:border-violet/40 hover:bg-white shadow-sm'
                }`}
              >
                <span className={`p-1.5 rounded-lg ${isActive ? 'bg-midnight-800' : 'bg-white'}`}>
                  {getIcon(proj.previewType)}
                </span>
                <span>{proj.name.split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project In-Depth Editorial Showcase Card */}
        <div className="bg-offwhite rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden text-left grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Left Details Column (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <span className="px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider">
                  {activeProj.category}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Project {selectedIdx + 1} of 5
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-midnight tracking-tight mb-3">
                {activeProj.name}
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {activeProj.shortDescription}
              </p>

              {/* Demonstrated Skills List */}
              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Demonstrated Engineering Skills:
                </div>
                {activeProj.skillsDemonstrated.map((skill, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeProj.technologyTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-midnight-800 shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => onInspectProject(activeProj)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-midnight hover:bg-midnight-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2"
              >
                <span>View Architecture Blueprint</span>
                <ExternalLink className="w-4 h-4" />
              </button>
              <button
                onClick={() => onApplyCategory(activeProj.category)}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs sm:text-sm font-bold transition-all shadow-glow-violet flex items-center justify-center gap-2"
              >
                <span>Build this in a Cohort</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Realistic UI Mockup Visual Column (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900 p-5 sm:p-8 xl:p-12 flex flex-col justify-center relative overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet/20 rounded-full blur-3xl pointer-events-none" />

            {/* Mockup Frame */}
            <div className="w-full bg-midnight-950 rounded-3xl border border-violet/30 shadow-2xl overflow-hidden relative z-10 text-left">
              
              {/* Mockup Header Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-midnight-900 border-b border-violet/20 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-300 ml-1 truncate">app.nexora-demo.internal/{activeProj.previewType}</span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>LIVE SERVICE</span>
                </div>
              </div>

              {/* Mockup Dynamic Content Based on Project */}
              <div className="p-5 sm:p-7 space-y-4 font-sans text-xs sm:text-sm">
                
                {/* 1. Document AI */}
                {activeProj.previewType === 'document-ai' && (
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-midnight border border-violet/20">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-violet-light" />
                        <span className="font-medium text-slate-200">Doc: Q3_Financial_Audit_Report.pdf</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">100% Vectorized</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-midnight-900 border border-violet/15 space-y-2">
                      <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                        <span>User Query</span>
                        <span className="text-violet-light">Cosine Similarity: 0.961</span>
                      </div>
                      <div className="text-slate-100 font-semibold text-sm">
                        "What factors contributed to the 18% increase in logistics operating expenditure?"
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-violet/10 border border-violet/30 space-y-2.5 text-slate-200">
                      <div className="flex items-center justify-between text-xs font-mono text-lavender">
                        <span className="flex items-center gap-2">
                          <Bot className="w-4 h-4 text-skyblue" />
                          <span>Streaming Synthesized Response</span>
                        </span>
                        <span className="text-emerald-400">Attribution Verified</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                        "According to Section 4.2 (page 18), the logistics increase was primarily driven by fuel surcharges (+11.4%) and warehouse automated sorting node maintenance (+6.6%)."
                      </p>
                      <div className="flex items-center gap-2.5 pt-1 text-[11px] font-mono text-slate-400">
                        <span className="px-2.5 py-0.5 rounded bg-midnight border border-violet/20 text-lavender">Source: Chunk #402 (Page 18)</span>
                        <span className="px-2.5 py-0.5 rounded bg-midnight border border-violet/20 text-lavender">Confidence: 98.4%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Finance AI */}
                {activeProj.previewType === 'finance-ai' && (
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-3 gap-2.5">
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20 text-center">
                        <div className="text-[11px] text-slate-400">Predicted Cashflow</div>
                        <div className="text-base font-bold text-white font-mono mt-0.5">$6,450.00</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20 text-center">
                        <div className="text-[11px] text-slate-400">Anomaly Index</div>
                        <div className="text-base font-bold text-emerald-400 font-mono mt-0.5">Low (0.04)</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20 text-center">
                        <div className="text-[11px] text-slate-400">Auto-Tagged</div>
                        <div className="text-base font-bold text-skyblue font-mono mt-0.5">99.1%</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-midnight border border-violet/15 space-y-2.5">
                      <div className="text-xs font-mono text-slate-400 uppercase">Recent Auto-Classified Ledger</div>
                      <div className="space-y-2 text-xs font-mono">
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight-900 border border-slate-800">
                          <span className="text-slate-200">AWS Cloud Services EMEA</span>
                          <span className="text-violet-light font-bold">Cloud Infrastructure</span>
                          <span className="text-rose-400 font-semibold">-$248.50</span>
                        </div>
                        <div className="flex items-center justify-between p-2.5 rounded-xl bg-midnight-900 border border-slate-800">
                          <span className="text-slate-200">Stripe Payout - Ref #8812</span>
                          <span className="text-emerald-400 font-bold">SaaS Revenue</span>
                          <span className="text-emerald-400 font-semibold">+$3,420.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. Content Gen */}
                {activeProj.previewType === 'content-gen' && (
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-2xl bg-midnight border border-violet/20 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <Bot className="w-4 h-4 text-skyblue" />
                        <span className="font-semibold text-xs sm:text-sm">OmniPublish Queue: 3 Feeds Monitored</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-violet/20 text-lavender">Cron: Every 4 hrs</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-midnight border border-violet/15 space-y-2.5 text-xs sm:text-sm">
                      <div className="text-slate-400 font-mono text-xs">Generated Multi-Platform Draft:</div>
                      <p className="text-slate-200 bg-midnight-900 p-3 rounded-xl border border-slate-800 font-mono text-xs leading-relaxed">
                        "🚀 Deep dive: Why Vector Chunking Strategies Matter More Than LLM Temperature in 2025 RAG Pipelines [Read analysis thread 🧵]"
                      </p>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                        <span>Readability Grade: 9.2</span>
                        <span className="text-emerald-400">Webhook Ready: LinkedIn & X</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Analytics Dashboard */}
                {activeProj.previewType === 'analytics-dash' && (
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-3 gap-2.5 text-center font-mono">
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20">
                        <div className="text-[11px] text-slate-400">Monthly MRR</div>
                        <div className="text-base font-bold text-white mt-0.5">$48,250</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20">
                        <div className="text-[11px] text-slate-400">Net Retention</div>
                        <div className="text-base font-bold text-emerald-400 mt-0.5">114.2%</div>
                      </div>
                      <div className="p-3 rounded-2xl bg-midnight border border-violet/20">
                        <div className="text-[11px] text-slate-400">Gross Margin</div>
                        <div className="text-base font-bold text-skyblue mt-0.5">82.5%</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-midnight border border-violet/15">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2.5">
                        <span>Cohort Retention Matrix</span>
                        <span className="text-violet-light">Window Functions SQL Active</span>
                      </div>
                      <div className="grid grid-cols-6 gap-1.5 text-xs font-mono text-center">
                        {['100%', '88%', '76%', '71%', '68%', '67%'].map((val, i) => (
                          <div key={i} className="p-2 rounded-lg bg-violet/20 text-lavender font-bold">
                            M{i+1}: {val}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Marketplace */}
                {activeProj.previewType === 'marketplace' && (
                  <div className="space-y-3.5">
                    <div className="p-3.5 rounded-2xl bg-midnight border border-violet/20 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-200">
                        <ShoppingBag className="w-4 h-4 text-amber-400" />
                        <span className="font-semibold text-xs sm:text-sm">SkillCraft Hub: Verified Craft Gig</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded">Stripe Connected</span>
                    </div>

                    <div className="p-4 rounded-2xl bg-midnight border border-violet/15 space-y-2.5">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-bold text-slate-200">Custom RAG Ingestion Pipeline Gig</span>
                        <span className="font-mono font-bold text-amber-400">$650.00</span>
                      </div>
                      <p className="text-slate-400 text-xs sm:text-sm">Includes PostgreSQL vector setup, LangChain retriever & 3 revision cycles.</p>
                      <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                        <span>Role: Verified Seller</span>
                        <span className="text-emerald-400">Escrow Protected</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Live Demo Metric Footer inside mockup */}
                <div className="grid grid-cols-3 gap-2.5 pt-2.5 border-t border-violet/15 font-mono text-center">
                  {activeProj.liveDemoMetrics.map((m, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-midnight-900 border border-slate-800">
                      <div className="text-[10px] text-slate-400 truncate">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
