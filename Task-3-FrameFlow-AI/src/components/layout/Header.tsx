import React from 'react';
import { 
  Sparkles, 
  Download, 
  Eye, 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Share2,
  ChevronDown
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Header: React.FC = () => {
  const { 
    activeTab, 
    setActiveTab, 
    activeProject, 
    projects, 
    setActiveProjectId, 
    createNewProject,
    applyBrandKitToProject
  } = useApp();

  const getTabLabel = () => {
    switch (activeTab) {
      case 'overview': return 'Overview Dashboard';
      case 'create': return 'Carousel Studio';
      case 'projects': return 'My Projects';
      case 'templates': return 'Template Library';
      case 'brand-kit': return 'Brand Kit & Style Tokens';
      case 'workflow': return 'AI Production Workflow';
      case 'settings': return 'Studio Settings & API';
      default: return 'Studio';
    }
  };

  return (
    <header className="h-16 bg-[#171923]/90 backdrop-blur-md border-b border-[#222633] px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left: Breadcrumbs & Project Switcher */}
      <div className="flex items-center gap-4">
        <div>
          <span className="text-xs font-medium text-[#A3A8B8]">{getTabLabel()}</span>
          {activeTab === 'create' ? (
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold text-white max-w-[280px] md:max-w-md truncate">
                {activeProject.title}
              </h1>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-medium ${
                activeProject.status === 'publish-ready'
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
              }`}>
                {activeProject.status === 'publish-ready' ? 'Publish Ready' : 'Draft'}
              </span>
            </div>
          ) : (
            <h1 className="text-sm font-bold text-white">
              {activeTab === 'overview' && 'Founder Content Studio'}
              {activeTab === 'projects' && `${projects.length} Saved Carousels`}
              {activeTab === 'templates' && 'Battle-Tested Formats'}
              {activeTab === 'brand-kit' && 'Visual Identity Assets'}
              {activeTab === 'workflow' && 'Full-Stack Agent Architecture'}
              {activeTab === 'settings' && 'Environment & API Tokens'}
            </h1>
          )}
        </div>
      </div>

      {/* Right: Quick actions */}
      <div className="flex items-center gap-3">
        {activeTab === 'create' && (
          <>
            <button
              onClick={() => applyBrandKitToProject()}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222633] hover:bg-[#2a2f3f] text-xs font-medium text-[#A3A8B8] hover:text-white border border-white/5 transition-colors"
              title="Apply brand fonts and colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8B72FF]" />
              <span>Apply Brand Kit</span>
            </button>

            {activeProject.currentStep !== 6 && (
              <button
                onClick={() => {
                  // Jump directly to step 6 export
                  const { updateActiveProject } = useApp();
                  // We can update step
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#222633] hover:bg-[#2a2f3f] text-xs font-medium text-slate-200 border border-white/5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5 text-[#5AA9FF]" />
                <span className="hidden md:inline">Slide Preview</span>
              </button>
            )}
          </>
        )}

        {/* Project quick switch dropdown */}
        <div className="relative group">
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#222633] hover:bg-[#2a2f3f] text-xs font-medium text-[#F7F7FB] border border-white/10 transition-colors">
            <Layers className="w-3.5 h-3.5 text-[#8B72FF]" />
            <span className="max-w-[120px] truncate">{activeProject.title}</span>
            <ChevronDown className="w-3 h-3 text-[#A3A8B8]" />
          </button>

          <div className="absolute right-0 mt-1 w-64 bg-[#171923] border border-[#222633] rounded-xl shadow-2xl p-1 hidden group-hover:block z-50">
            <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#A3A8B8]">
              Switch Project
            </div>
            <div className="max-h-60 overflow-y-auto space-y-0.5">
              {projects.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setActiveProjectId(p.id);
                    setActiveTab('create');
                  }}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs truncate transition-colors flex items-center justify-between ${
                    p.id === activeProject.id
                      ? 'bg-[#8B72FF]/20 text-white font-medium'
                      : 'text-[#A3A8B8] hover:text-white hover:bg-[#222633]'
                  }`}
                >
                  <span className="truncate">{p.title}</span>
                  <span className="text-[10px] font-mono opacity-60 ml-2">{p.slides.length}s</span>
                </button>
              ))}
            </div>
            <div className="p-1 border-t border-[#222633] mt-1">
              <button
                onClick={() => createNewProject()}
                className="w-full text-center py-1.5 text-xs text-[#8B72FF] hover:bg-[#8B72FF]/10 rounded-lg font-medium transition-colors"
              >
                + Create New Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
