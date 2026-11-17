import React, { useState } from 'react';
import { 
  FolderKanban, 
  Search, 
  Plus, 
  Eye, 
  Copy, 
  Trash2, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Download,
  Filter,
  Grid,
  List
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Platform } from '../../types';

export const MyProjectsView: React.FC = () => {
  const { 
    projects, 
    setActiveProjectId, 
    setActiveTab, 
    createNewProject, 
    duplicateProject, 
    deleteProject 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'publish-ready' | 'draft'>('all');
  const [platformFilter, setPlatformFilter] = useState<'all' | Platform>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filtered = projects.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.rawIdea.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || p.status === statusFilter;
    const matchesPlatform = platformFilter === 'all' || p.platform === platformFilter || p.platform === 'both';
    return matchesSearch && matchesStatus && matchesPlatform;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#222633]">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B72FF]/15 border border-[#8B72FF]/30 text-[#8B72FF] text-xs font-semibold mb-2">
            <FolderKanban className="w-3.5 h-3.5" />
            <span>Project Workspace</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">My Carousel Projects</h1>
          <p className="text-xs text-[#A3A8B8] mt-1">
            Access, duplicate, edit, or export your saved carousel decks.
          </p>
        </div>

        <button
          onClick={() => createNewProject()}
          className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#8B72FF] to-[#5AA9FF] text-white text-xs font-bold shadow-glow-violet hover:shadow-glow-blue transition-all self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Carousel</span>
        </button>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-2xl bg-[#171923] border border-[#222633]">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-[#A3A8B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search projects by title, idea, or tool..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#11131B] border border-[#222633] text-white text-xs outline-none focus:border-[#8B72FF]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Status selector */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as any)}
            className="p-2 rounded-xl bg-[#11131B] border border-[#222633] text-xs text-white outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="publish-ready">Publish Ready</option>
            <option value="draft">Drafts</option>
          </select>

          {/* Platform selector */}
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value as any)}
            className="p-2 rounded-xl bg-[#11131B] border border-[#222633] text-xs text-white outline-none"
          >
            <option value="all">All Platforms</option>
            <option value="linkedin">LinkedIn</option>
            <option value="instagram">Instagram</option>
            <option value="both">Both</option>
          </select>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-xl bg-[#11131B] border border-[#222633]">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg ${viewMode === 'grid' ? 'bg-[#222633] text-white' : 'text-[#A3A8B8]'}`}
            >
              <Grid className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg ${viewMode === 'list' ? 'bg-[#222633] text-white' : 'text-[#A3A8B8]'}`}
            >
              <List className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Projects Display */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl bg-[#171923] border border-[#222633] space-y-3">
          <Layers className="w-10 h-10 text-[#A3A8B8]/40 mx-auto" />
          <h3 className="text-sm font-bold text-white">No projects found</h3>
          <p className="text-xs text-[#A3A8B8]">Try adjusting your search query or filters.</p>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const firstSlide = project.slides[0];
            const slideCount = project.slides.length || project.slideCount;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-[#171923] border border-[#222633] hover:border-[#8B72FF]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                {/* Visual Artboard Header */}
                <div
                  onClick={() => {
                    setActiveProjectId(project.id);
                    setActiveTab('create');
                  }}
                  className="h-44 p-5 cursor-pointer relative overflow-hidden flex flex-col justify-between border-b border-[#222633]"
                  style={{
                    background: project.theme?.gradientBackground || '#171923'
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-white border border-white/10 uppercase">
                      {project.platform}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      project.status === 'publish-ready'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    }`}>
                      {project.status === 'publish-ready' ? 'Publish Ready' : 'Draft'}
                    </span>
                  </div>

                  <div className="my-auto space-y-1">
                    {firstSlide?.badge && (
                      <span className="text-[9px] uppercase tracking-wider text-[#5AA9FF] font-mono">
                        {firstSlide.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white line-clamp-2 leading-snug">
                      {firstSlide?.headline || project.title}
                    </h4>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-[#A3A8B8] pt-2 border-t border-white/10">
                    <span className="font-mono flex items-center gap-1">
                      <Layers className="w-3 h-3 text-[#8B72FF]" />
                      <span>{slideCount} slides</span>
                    </span>
                    <span className="text-[10px]">
                      {new Date(project.updatedAt).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 backdrop-blur-sm">
                    <span className="px-3 py-1.5 rounded-lg bg-[#8B72FF] text-white text-xs font-bold flex items-center gap-1 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Open in Studio</span>
                    </span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3
                      onClick={() => {
                        setActiveProjectId(project.id);
                        setActiveTab('create');
                      }}
                      className="text-sm font-bold text-white hover:text-[#5AA9FF] cursor-pointer truncate"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#A3A8B8] truncate mt-0.5">
                      {project.objective} • {project.tone}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#222633] text-xs">
                    <button
                      onClick={() => {
                        setActiveProjectId(project.id);
                        setActiveTab('create');
                      }}
                      className="text-[#8B72FF] hover:text-white font-semibold transition-colors"
                    >
                      Open Studio →
                    </button>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => duplicateProject(project.id)}
                        className="p-1.5 rounded-lg hover:bg-[#222633] text-[#A3A8B8] hover:text-white"
                        title="Duplicate"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-1.5 rounded-lg hover:bg-rose-500/20 text-[#A3A8B8] hover:text-rose-400"
                        title="Delete"
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
      ) : (
        /* List View */
        <div className="rounded-2xl bg-[#171923] border border-[#222633] divide-y divide-[#222633] overflow-hidden">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="p-4 flex items-center justify-between hover:bg-[#222633]/40 transition-colors"
            >
              <div 
                onClick={() => {
                  setActiveProjectId(project.id);
                  setActiveTab('create');
                }}
                className="flex items-center gap-4 cursor-pointer flex-1 min-w-0 pr-4"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B72FF] to-[#5AA9FF] flex items-center justify-center text-white shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate hover:text-[#5AA9FF]">
                    {project.title}
                  </h4>
                  <p className="text-[11px] text-[#A3A8B8] truncate">
                    {project.slides.length} Slides • {project.platform.toUpperCase()} • {project.audience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full font-bold ${
                  project.status === 'publish-ready'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {project.status === 'publish-ready' ? 'Ready' : 'Draft'}
                </span>

                <button
                  onClick={() => {
                    setActiveProjectId(project.id);
                    setActiveTab('create');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#222633] hover:bg-[#8B72FF] text-xs font-semibold text-white transition-colors"
                >
                  Edit
                </button>

                <button
                  onClick={() => duplicateProject(project.id)}
                  className="p-1.5 rounded hover:bg-[#222633] text-[#A3A8B8] hover:text-white"
                  title="Duplicate"
                >
                  <Copy className="w-4 h-4" />
                </button>

                <button
                  onClick={() => deleteProject(project.id)}
                  className="p-1.5 rounded hover:bg-rose-500/20 text-[#A3A8B8] hover:text-rose-400"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
