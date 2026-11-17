import React from 'react';
import { X, CheckCircle2, GitBranch, Terminal, ExternalLink, Cpu, Layers, Sparkles } from 'lucide-react';
import { StudentProject } from '../types';

interface ProjectModalProps {
  project: StudentProject | null;
  onClose: () => void;
  onApplyForCategory: (cat: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onApplyForCategory
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-midnight/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-3xl max-w-2xl w-full border border-violet/25 shadow-2xl overflow-hidden z-10 text-left my-8">
        
        {/* Header */}
        <div className="bg-midnight p-6 sm:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-midnight-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-violet/20"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="px-2.5 py-1 rounded bg-violet/20 border border-violet/40 text-lavender text-xs font-mono font-bold uppercase tracking-wider">
            {project.category}
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white mt-3 mb-2 tracking-tight">
            {project.name}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          
          {/* Tech Tags */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologyTags.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-offwhite border border-slate-200 text-xs font-mono font-medium text-midnight-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="p-4 rounded-2xl bg-lavender/50 border border-violet/20 space-y-2.5">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-violet flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-violet" />
              <span>Production Architecture Highlights</span>
            </h4>
            <div className="space-y-1.5">
              {project.architectureHighlights.map((arch, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-violet font-bold">•</span>
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Demonstrated */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Demonstrated Engineering Skills
            </h4>
            <div className="space-y-2">
              {project.skillsDemonstrated.map((skill, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-midnight-900 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Live Benchmark Metrics */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Demonstrated Performance Benchmarks
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {project.liveDemoMetrics.map((metric, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <div className="text-base font-bold text-midnight font-mono">{metric.value}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            Included in corresponding curriculum track
          </span>
          <button
            onClick={() => {
              onApplyForCategory(project.category);
              onClose();
            }}
            className="px-4 py-2 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs font-bold transition-colors shadow-glow-violet"
          >
            Build Projects Like This
          </button>
        </div>

      </div>
    </div>
  );
};
