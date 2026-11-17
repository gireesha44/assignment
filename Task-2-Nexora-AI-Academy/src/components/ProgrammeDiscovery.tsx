import React, { useState } from 'react';
import { 
  Sparkles, 
  Clock, 
  Layers, 
  ArrowRight, 
  Search, 
  ArrowUpRight 
} from 'lucide-react';
import { PROGRAMMES, CATEGORY_TABS } from '../data/courses';
import { Programme, ProgrammeCategory } from '../types';

interface ProgrammeDiscoveryProps {
  onSelectProgramme: (prog: Programme) => void;
  onApplyProgramme: (progId: string) => void;
}

export const ProgrammeDiscovery: React.FC<ProgrammeDiscoveryProps> = ({
  onSelectProgramme,
  onApplyProgramme
}) => {
  const [activeCategory, setActiveCategory] = useState<ProgrammeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');

  const filteredProgrammes = PROGRAMMES.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.skillsCovered.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.toolsLearned.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesDifficulty = 
      difficultyFilter === 'all' || 
      p.difficulty.toLowerCase().includes(difficultyFilter.toLowerCase());

    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  return (
    <section id="programmes" className="py-20 md:py-28 bg-offwhite relative scroll-mt-20 w-full">
      <div className="site-container">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
              Curriculum Architecture
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight">
              Find Your Next Learning Path.
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Every track is built around shipping functional software. Choose your discipline, master modern tools, and graduate with real projects.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-mono text-slate-500 bg-white px-5 py-3 rounded-2xl border border-slate-200 self-start md:self-auto shrink-0 shadow-sm">
            <span>Showing: </span>
            <span className="font-bold text-violet">{filteredProgrammes.length} Active Tracks</span>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as ProgrammeCategory)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-midnight text-white border-midnight shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-violet/40 hover:text-violet shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Secondary Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-96 md:w-[450px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill, tool (e.g. LangChain, Python, React)..."
              className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-violet/30 focus:border-violet text-midnight placeholder:text-slate-400"
            />
          </div>

          {/* Difficulty quick pills */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-start sm:justify-end text-xs sm:text-sm">
            <span className="text-slate-400 text-xs font-mono mr-1 hidden sm:inline">Level:</span>
            {['all', 'beginner', 'intermediate'].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setDifficultyFilter(lvl)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium capitalize transition-colors ${
                  difficultyFilter === lvl
                    ? 'bg-lavender text-violet font-bold border border-violet/30'
                    : 'text-slate-500 hover:text-midnight bg-slate-100 hover:bg-slate-200/60'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 items-stretch">
          {filteredProgrammes.map((prog) => {
            return (
              <div
                key={prog.id}
                className="group bg-white rounded-3xl p-6 sm:p-7 xl:p-8 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-violet/40 transition-all duration-300 flex flex-col justify-between text-left relative overflow-hidden"
              >
                {/* Top badge row */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3.5">
                    <span className="px-3 py-1 rounded-md bg-lavender text-violet text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider">
                      {prog.categoryLabel}
                    </span>
                    {prog.badge && (
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {prog.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-midnight tracking-tight mb-2.5 group-hover:text-violet transition-colors">
                    {prog.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {prog.shortDescription}
                  </p>

                  {/* Meta details: Difficulty & Duration (labeled illustrative) */}
                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs font-mono text-slate-600 mb-5">
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-violet" />
                      <span className="truncate">{prog.difficulty}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-skyblue-dark" />
                      <span className="truncate">{prog.duration}</span>
                    </div>
                  </div>

                  {/* Skills Covered (Chips) */}
                  <div className="mb-5">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Skills Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.skillsCovered.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg bg-offwhite border border-slate-200 text-xs font-medium text-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {prog.skillsCovered.length > 4 && (
                        <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-[11px] font-mono text-slate-500">
                          +{prog.skillsCovered.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Capstone Project Outcome Callout */}
                  <div className="p-4 rounded-2xl bg-lavender/50 border border-violet/20 mb-6">
                    <div className="flex items-center gap-1.5 text-violet font-bold text-xs font-mono uppercase tracking-wider mb-1">
                      <Sparkles className="w-3.5 h-3.5 text-violet" />
                      <span>Project Outcome</span>
                    </div>
                    <p className="text-slate-800 text-xs sm:text-sm font-medium leading-relaxed">
                      {prog.projectOutcome}
                    </p>
                  </div>
                </div>

                {/* Bottom Action CTAs */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
                  <button
                    onClick={() => onSelectProgramme(prog)}
                    className="flex-1 py-3 px-3.5 rounded-xl bg-slate-100 hover:bg-slate-200/70 text-slate-800 text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Explore Programme</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600" />
                  </button>

                  <button
                    onClick={() => onApplyProgramme(prog.id)}
                    className="py-3 px-4 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs sm:text-sm font-bold transition-all shadow-glow-violet active:scale-95 flex items-center justify-center gap-1.5"
                    title="Quick Apply"
                  >
                    <span>Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {filteredProgrammes.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-600 text-sm">No programmes matched your filter query.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDifficultyFilter('all');
              }}
              className="mt-3 px-4 py-2 rounded-lg bg-violet text-white text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
