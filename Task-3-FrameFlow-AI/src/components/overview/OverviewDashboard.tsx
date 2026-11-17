import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Share2, 
  Plus, 
  Eye, 
  Copy, 
  Trash2, 
  Download,
  Workflow,
  Zap,
  TrendingUp,
  FileCheck,
  Palette,
  ExternalLink
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { CarouselProject } from '../../types';

export const OverviewDashboard: React.FC = () => {
  const { 
    projects, 
    createNewProject, 
    setActiveProjectId, 
    setActiveTab, 
    duplicateProject, 
    deleteProject,
    loadTemplateIntoProject
  } = useApp();

  const [filter, setFilter] = useState<'all' | 'publish-ready' | 'draft'>('all');

  const filteredProjects = projects.filter((p) => {
    if (filter === 'all') return true;
    return p.status === filter;
  });

  const publishReadyCount = projects.filter(p => p.status === 'publish-ready').length;
  const draftCount = projects.filter(p => p.status === 'draft').length;

  const quickIdeas = [
    {
      title: '5 AI Tools Every College Student Should Know in 2026',
      badge: 'Academic Study Guide',
      category: 'Education'
    },
    {
      title: 'Why 90% of Early SaaS Startups Fail at User Onboarding',
      badge: 'B2B Teardown',
      category: 'Product'
    },
    {
      title: 'The 7-Step Cold Outreach Playbook That Booked 42 Enterprise Demos',
      badge: 'Tactical Playbook',
      category: 'Growth'
    },
    {
      title: 'How to Build a High-Leverage Personal Brand on LinkedIn',
      badge: 'Creator Blueprint',
      category: 'Branding'
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-10">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1E2230] via-[#171923] to-[#141620] border border-[#222633] p-8 md:p-10 shadow-2xl">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#8B72FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#5AA9FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Assisted Content Production Studio</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
            Turn Your Ideas Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B72FF] via-[#5AA9FF] to-white">Stories Worth Sharing.</span>
          </h1>

          <p className="text-base text-[#A3A8B8] leading-relaxed max-w-2xl">
            FrameFlow AI takes your raw thoughts and orchestrates research, psychological storytelling, micro-copy, and design into publish-ready LinkedIn & Instagram carousels in minutes.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => createNewProject()}
              className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white font-bold text-sm shadow-glow-violet hover:shadow-glow-blue transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>Create New Carousel</span>
            </button>

            <button
              onClick={() => setActiveTab('templates')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#222633] hover:bg-[#2c3244] text-slate-200 font-semibold text-sm border border-white/5 transition-all"
            >
              <Layers className="w-4 h-4 text-[#5AA9FF]" />
              <span>Explore Templates</span>
            </button>

            <button
              onClick={() => setActiveTab('workflow')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-[#A3A8B8] hover:text-white font-medium text-sm transition-all border border-white/5"
            >
              <Workflow className="w-4 h-4 text-[#8B72FF]" />
              <span>View AI Architecture</span>
            </button>
          </div>
        </div>
      </div>

      {/* Metric Cards Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#A3A8B8]">Total Projects</p>
            <p className="text-2xl font-bold text-white mt-1">{projects.length}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#8B72FF]/10 border border-[#8B72FF]/20 flex items-center justify-center text-[#8B72FF]">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#A3A8B8]">Publish Ready</p>
            <p className="text-2xl font-bold text-emerald-400 mt-1">{publishReadyCount}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#A3A8B8]">Drafts in Progress</p>
            <p className="text-2xl font-bold text-amber-300 mt-1">{draftCount}</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-300">
            <Clock className="w-5 h-5" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-[#171923] border border-[#222633] flex items-center justify-between">
          <div>
            <p className="text-xs font-medium text-[#A3A8B8]">Brand Kit Status</p>
            <p className="text-sm font-bold text-[#5AA9FF] mt-2 flex items-center gap-1">
              <span>Apex Studio</span>
              <span className="text-[10px] bg-[#5AA9FF]/20 px-1.5 py-0.5 rounded">Active</span>
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#5AA9FF]/10 border border-[#5AA9FF]/20 flex items-center justify-center text-[#5AA9FF]">
            <Palette className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Content Creation Workflow Status Tracker */}
      <div className="p-6 rounded-2xl bg-[#171923] border border-[#222633] space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Workflow className="w-5 h-5 text-[#8B72FF]" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Content Creation Pipeline
            </h2>
          </div>
          <button 
            onClick={() => setActiveTab('workflow')}
            className="text-xs text-[#5AA9FF] hover:underline flex items-center gap-1 font-medium"
          >
            <span>Full Architecture Blueprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-xl bg-[#222633]/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#8B72FF]/20 text-[#8B72FF] flex items-center justify-center font-bold text-xs shrink-0">
              01
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Idea & Hook Ingest</p>
              <p className="text-[11px] text-[#A3A8B8] mt-0.5">Captures raw concept & objective</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#222633]/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-[#5AA9FF]/20 text-[#5AA9FF] flex items-center justify-center font-bold text-xs shrink-0">
              02
            </div>
            <div>
              <p className="text-xs font-semibold text-white">AI Grounding & Flow</p>
              <p className="text-[11px] text-[#A3A8B8] mt-0.5">Synthesizes verified sources</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#222633]/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              03
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Micro-Copy Polish</p>
              <p className="text-[11px] text-[#A3A8B8] mt-0.5">Slide-by-slide concise editing</p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#222633]/60 border border-white/5 flex items-start gap-3">
            <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs shrink-0">
              04
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Studio Render & Export</p>
              <p className="text-[11px] text-[#A3A8B8] mt-0.5">LinkedIn PDF & Instagram PNG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Idea Launchers */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Launch with a High-Converting Concept</span>
          </h2>
          <span className="text-xs text-[#A3A8B8]">Click any topic to start generating</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {quickIdeas.map((idea, idx) => (
            <div
              key={idx}
              onClick={() => {
                const newId = createNewProject(idea.title);
                // Pre-fill raw idea
                const { updateProjectById } = useApp();
                updateProjectById(newId, { rawIdea: idea.title });
              }}
              className="p-4 rounded-xl bg-[#171923] hover:bg-[#222633] border border-[#222633] hover:border-[#8B72FF]/40 transition-all cursor-pointer group flex flex-col justify-between space-y-3 shadow-sm hover:shadow-glow-violet"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] mb-2">
                  <span className="px-2 py-0.5 rounded bg-[#8B72FF]/15 text-[#8B72FF] font-semibold border border-[#8B72FF]/30">
                    {idea.badge}
                  </span>
                  <span className="text-[#A3A8B8]">{idea.category}</span>
                </div>
                <h3 className="text-xs font-bold text-white group-hover:text-[#5AA9FF] transition-colors line-clamp-2">
                  {idea.title}
                </h3>
              </div>
              <div className="flex items-center text-[11px] text-[#A3A8B8] group-hover:text-white transition-colors gap-1 pt-1 border-t border-white/5 font-medium">
                <span>Start Carousel</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-white">Recent Projects</h2>
            <p className="text-xs text-[#A3A8B8]">Manage your carousel drafts and publish-ready decks</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#171923] border border-[#222633]">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-[#222633] text-white shadow'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              All ({projects.length})
            </button>
            <button
              onClick={() => setFilter('publish-ready')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'publish-ready'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              Publish Ready ({publishReadyCount})
            </button>
            <button
              onClick={() => setFilter('draft')}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                filter === 'draft'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                  : 'text-[#A3A8B8] hover:text-white'
              }`}
            >
              Drafts ({draftCount})
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => {
            const firstSlide = project.slides[0];
            const slideCount = project.slides.length || project.slideCount;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#171923] border border-[#222633] hover:border-[#8B72FF]/40 overflow-hidden transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
              >
                {/* Visual Thumbnail Artboard Preview */}
                <div 
                  onClick={() => {
                    setActiveProjectId(project.id);
                    setActiveTab('create');
                  }}
                  className="relative h-44 bg-[#0D0E15] p-5 cursor-pointer overflow-hidden border-b border-[#222633] flex flex-col justify-between"
                  style={{
                    background: project.theme?.gradientBackground || 'radial-gradient(circle at top right, rgba(139, 114, 255, 0.2), #171923)'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10">
                      {project.platform.toUpperCase()}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                      project.status === 'publish-ready'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    }`}>
                      {project.status === 'publish-ready' ? 'Publish Ready' : 'Draft'}
                    </span>
                  </div>

                  <div className="space-y-1.5 my-auto">
                    {firstSlide?.badge && (
                      <span className="text-[9px] uppercase tracking-wider font-mono text-[#5AA9FF]">
                        {firstSlide.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {firstSlide?.headline || project.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A3A8B8] pt-2 border-t border-white/10">
                    <span className="flex items-center gap-1 font-mono">
                      <Layers className="w-3 h-3 text-[#8B72FF]" />
                      <span>{slideCount} slides</span>
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                    <span className="px-3 py-1.5 rounded-lg bg-[#8B72FF] text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open in Studio</span>
                    </span>
                  </div>
                </div>

                {/* Card Footer Info & Actions */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 
                      onClick={() => {
                        setActiveProjectId(project.id);
                        setActiveTab('create');
                      }}
                      className="text-sm font-bold text-white hover:text-[#5AA9FF] cursor-pointer transition-colors truncate"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A3A8B8] truncate mt-0.5">
                      Target: {project.audience} • Tone: {project.tone}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#222633] text-xs">
                    <button
                      onClick={() => {
                        setActiveProjectId(project.id);
                        setActiveTab('create');
                      }}
                      className="text-[#8B72FF] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                    >
                      <span>Edit Slides</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => duplicateProject(project.id)}
                        className="p-1.5 rounded-lg hover:bg-[#222633] text-[#A3A8B8] hover:text-white transition-colors"
                        title="Duplicate project"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-1.5 rounded-lg hover:bg-rose-500/10 text-[#A3A8B8] hover:text-rose-400 transition-colors"
                        title="Delete project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
