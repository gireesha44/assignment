import React, { useState } from 'react';
import { 
  Workflow, 
  Sparkles, 
  ArrowDown, 
  ArrowRight, 
  Cpu, 
  Search, 
  Palette, 
  FileText, 
  ShieldCheck, 
  Download, 
  Database, 
  CheckCircle2, 
  Share2, 
  Terminal, 
  Clock, 
  DollarSign,
  Layers,
  Code
} from 'lucide-react';
import { WORKFLOW_STAGES, REAL_WORLD_AUTOMATION_SPEC, WorkflowStage } from '../../data/workflowSteps';

export const WorkflowPage: React.FC = () => {
  const [selectedStageId, setSelectedStageId] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'flow' | 'architecture' | 'schema'>('flow');

  const selectedStage = WORKFLOW_STAGES.find(s => s.id === selectedStageId) || WORKFLOW_STAGES[0];

  const sampleSchema = {
    request_id: "ff_req_982348",
    topic: "5 AI Tools Every College Student Should Know in 2026",
    parameters: {
      target_platform: "both",
      target_audience: "Students",
      tone: "Educational",
      slide_count: 9,
      objective: "Educational Value"
    },
    research_dossier: {
      citations_count: 3,
      verified_sources: [
        "Educause Horizon Report (2025/2026)",
        "Google Research: Source Grounding in NotebookLM"
      ],
      hallucination_boundary: "Strict academic integrity check applied"
    },
    narrative_blueprint: {
      hook_formula: "Contrast: Passive memorization vs 24/7 Socratic scaffolding",
      sequence: [
        "1. Attention Hook",
        "2. Paradigm Shift",
        "3. NotebookLM",
        "4. Perplexity",
        "5. ChatGPT Canvas",
        "6. Canva Magic Studio",
        "7. GitHub Copilot",
        "8. Verification Rule",
        "9. Save & Repost CTA"
      ]
    },
    human_in_the_loop: {
      review_checkpoint_passed: true,
      approved_by: "founder_alex",
      timestamp: "2026-11-17T14:15:00Z"
    },
    export_targets: {
      linkedin_pdf: "s3://frameflow-exports/college_ai_tools_2026.pdf",
      instagram_png_bundle: "s3://frameflow-exports/png_bundle_zip.zip"
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#222633]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold mb-2">
            <Workflow className="w-3.5 h-3.5" />
            <span>AI Production Architecture</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            End-to-End Content Generation Architecture
          </h1>
          <p className="text-xs text-[#A3A8B8] mt-1 max-w-2xl">
            From raw founder idea to publish-ready story: complete mapping of agents, LLMs, verification APIs, design systems, and human-in-the-loop checkpoints.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171923] border border-[#222633] text-xs self-start md:self-auto">
          <button
            onClick={() => setActiveTab('flow')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'flow'
                ? 'bg-[#8B72FF] text-white shadow-glow-violet'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            Visual Pipeline (8 Stages)
          </button>
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'architecture'
                ? 'bg-[#8B72FF] text-white shadow-glow-violet'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            n8n Webhook Spec
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              activeTab === 'schema'
                ? 'bg-[#8B72FF] text-white shadow-glow-violet'
                : 'text-[#A3A8B8] hover:text-white'
            }`}
          >
            JSON Schema Contract
          </button>
        </div>
      </div>

      {activeTab === 'flow' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 8 Stages Visual Rail (5 cols) */}
          <div className="lg:col-span-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-[#A3A8B8] mb-3">
              Sequential Production Pipeline
            </div>

            <div className="space-y-2">
              {WORKFLOW_STAGES.map((stage, idx) => {
                const isSelected = selectedStageId === stage.id;

                return (
                  <div key={stage.id} className="relative">
                    <div
                      onClick={() => setSelectedStageId(stage.id)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-center justify-between select-none ${
                        isSelected
                          ? 'bg-[#1E2230] border-[#8B72FF] shadow-glow-violet translate-x-1'
                          : 'bg-[#171923] border-[#222633] hover:border-white/20 hover:bg-[#1A1D29]'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                            isSelected
                              ? 'bg-[#8B72FF] text-white'
                              : 'bg-black/30 text-[#A3A8B8]'
                          }`}
                        >
                          0{stage.id}
                        </span>
                        <div>
                          <h4 className="text-xs font-bold text-white">
                            {stage.name.replace(/^\d+\.\s*/, '')}
                          </h4>
                          <p className="text-[10px] text-[#A3A8B8] truncate max-w-[200px]">
                            {stage.shortDescription}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#5AA9FF] hidden sm:inline">
                          {stage.latencySeconds}
                        </span>
                        <ArrowRight
                          className={`w-4 h-4 transition-transform ${
                            isSelected ? 'text-[#8B72FF] translate-x-0.5' : 'text-[#A3A8B8]/50'
                          }`}
                        />
                      </div>
                    </div>

                    {idx < WORKFLOW_STAGES.length - 1 && (
                      <div className="w-[2px] h-2 bg-[#222633] mx-auto my-0.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Deep Stage Inspector (7 cols) */}
          <div className="lg:col-span-7 sticky top-20 space-y-5">
            <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#222633]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#8B72FF]/20 text-[#8B72FF] flex items-center justify-center font-mono font-bold text-xs">
                      {selectedStage.id}
                    </span>
                    <h2 className="text-lg font-bold text-white">{selectedStage.name}</h2>
                  </div>
                  <p className="text-xs text-[#A3A8B8] mt-1 leading-relaxed">
                    {selectedStage.detailedDescription}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono uppercase text-[#A3A8B8] block">Estimated Cost</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {selectedStage.costEstimate}
                  </span>
                </div>
              </div>

              {/* Recommended Production Tools */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#8B72FF]" />
                  <span>Recommended Industry Tools & Integrations</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {selectedStage.recommendedTools.map((tool, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-[#11131B] border border-[#222633] space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white">{tool.name}</span>
                        {tool.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#8B72FF]/20 text-[#8B72FF]">
                            {tool.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-[#A3A8B8] leading-tight">
                        {tool.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inputs & Outputs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Inputs */}
                <div className="p-4 rounded-xl bg-[#11131B] border border-[#222633] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5AA9FF]">
                    Stage Inputs
                  </span>
                  <div className="space-y-2">
                    {selectedStage.inputs.map((inp, idx) => (
                      <div key={idx} className="text-xs">
                        <p className="font-semibold text-white">{inp.label}</p>
                        <p className="text-[11px] text-[#A3A8B8]">{inp.description}</p>
                        <span className="text-[9px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded inline-block mt-0.5">
                          {inp.format}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outputs */}
                <div className="p-4 rounded-xl bg-[#11131B] border border-[#222633] space-y-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                    Stage Outputs
                  </span>
                  <div className="space-y-2">
                    {selectedStage.outputs.map((out, idx) => (
                      <div key={idx} className="text-xs">
                        <p className="font-semibold text-white">{out.label}</p>
                        <p className="text-[11px] text-[#A3A8B8]">{out.description}</p>
                        <span className="text-[9px] font-mono text-slate-400 bg-white/5 px-1.5 py-0.5 rounded inline-block mt-0.5">
                          {out.format}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Automation Tip & Human in the loop */}
              <div className="space-y-3 pt-2 border-t border-[#222633]">
                <div className="p-3.5 rounded-xl bg-[#222633]/50 border border-white/5 flex items-start gap-2.5 text-xs">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white">n8n / Webhook Orchestration Rule: </span>
                    <span className="text-[#A3A8B8]">{selectedStage.automationTip}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#182622]/60 border border-emerald-500/30 flex items-start gap-2.5 text-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-300">Mandatory Human-in-the-Loop Check: </span>
                    <span className="text-slate-300">{selectedStage.humanInTheLoopRule}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'architecture' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-[#8B72FF]" />
              <span>{REAL_WORLD_AUTOMATION_SPEC.architectureTitle}</span>
            </h2>
            <p className="text-xs text-[#A3A8B8] leading-relaxed max-w-3xl">
              {REAL_WORLD_AUTOMATION_SPEC.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {REAL_WORLD_AUTOMATION_SPEC.webhookStages.map((stg, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#171923] border border-[#222633] space-y-2 relative overflow-hidden"
              >
                <div className="w-6 h-6 rounded-lg bg-[#8B72FF]/20 text-[#8B72FF] flex items-center justify-center font-mono font-bold text-xs mb-1">
                  0{idx + 1}
                </div>
                <h3 className="text-sm font-bold text-white">{stg.step}</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#5AA9FF] border border-white/10 inline-block">
                  {stg.service}
                </span>
                <p className="text-xs text-[#A3A8B8] leading-relaxed pt-1">
                  {stg.details}
                </p>
              </div>
            ))}
          </div>

          {/* Real-world cost breakdown table */}
          <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Production Cost & Latency Benchmark (Per 9-Slide Carousel)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-[#222633] text-[#A3A8B8]">
                    <th className="py-2">Pipeline Component</th>
                    <th className="py-2">Provider / API</th>
                    <th className="py-2">Latency</th>
                    <th className="py-2">Unit Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222633] text-slate-300 font-mono text-[11px]">
                  <tr>
                    <td className="py-2.5 font-sans font-semibold text-white">Idea Ingest & Webhook</td>
                    <td className="py-2.5">n8n Community Edition</td>
                    <td className="py-2.5">120ms</td>
                    <td className="py-2.5 text-emerald-400">$0.0000</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans font-semibold text-white">Fact Grounding & Search</td>
                    <td className="py-2.5">Perplexity Sonar / Tavily</td>
                    <td className="py-2.5">3,200ms</td>
                    <td className="py-2.5 text-emerald-400">~$0.0080</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans font-semibold text-white">Slide Copy Generation</td>
                    <td className="py-2.5">Gemini 1.5 Pro / GPT-4o</td>
                    <td className="py-2.5">4,100ms</td>
                    <td className="py-2.5 text-emerald-400">~$0.0135</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-sans font-semibold text-white">DOM Raster & Multi-Page PDF</td>
                    <td className="py-2.5">Client Canvas (Local)</td>
                    <td className="py-2.5">850ms</td>
                    <td className="py-2.5 text-emerald-400">$0.0000</td>
                  </tr>
                  <tr className="font-bold text-white">
                    <td className="py-3 font-sans text-sm">Total Automated Cost</td>
                    <td className="py-3">Autonomous Pipeline</td>
                    <td className="py-3 text-[#5AA9FF]">~8.2s</td>
                    <td className="py-3 text-emerald-400 text-sm">~$0.0215 / deck</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'schema' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Code className="w-4 h-4 text-[#8B72FF]" />
                <span>Standardized JSON Payload Specification</span>
              </h2>
              <p className="text-xs text-[#A3A8B8] mt-0.5">
                The strict contract exchanged between the n8n webhook, LLM output parser, and FrameFlow frontend.
              </p>
            </div>
          </div>

          <pre className="p-6 rounded-2xl bg-[#0D0E15] border border-[#222633] text-emerald-400 font-mono text-xs overflow-x-auto leading-relaxed shadow-2xl">
            {JSON.stringify(sampleSchema, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
