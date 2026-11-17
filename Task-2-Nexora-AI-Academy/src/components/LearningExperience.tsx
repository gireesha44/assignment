import React, { useState } from 'react';
import { 
  BookOpen, 
  Code2, 
  FolderCheck, 
  Library, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react';

interface LearningExperienceProps {
  onExploreClick: () => void;
}

export const LearningExperience: React.FC<LearningExperienceProps> = ({ onExploreClick }) => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'guided-lessons',
      icon: BookOpen,
      title: 'Guided Lessons',
      short: 'Concept breakdown & live code alongs',
      description: 'Concise, focused video and written architectural walkthroughs that dismantle difficult AI and programming patterns into digestible building blocks.',
      highlight: 'Every lesson ends with a runnable code sandbox.'
    },
    {
      id: 'practical-assignments',
      icon: Code2,
      title: 'Practical Assignments',
      short: 'Real deliverables, not multiple choice quizzes',
      description: 'Submit actual code pull requests. Each sprint challenges you to implement a specific microservice, vector retriever, or reactive user interface component.',
      highlight: 'Automated test suites verify your implementation before submission.'
    },
    {
      id: 'project-based-learning',
      icon: FolderCheck,
      title: 'Project-Based Learning',
      short: 'Every week builds toward a capstone',
      description: 'You never write throwaway code. Everything you construct connects logically into your final portfolio-ready web application or AI tool.',
      highlight: 'End up with public GitHub repos and deployable live URLs.'
    },
    {
      id: 'learning-resources',
      icon: Library,
      title: 'Learning Resources',
      short: 'Curated templates, prompts & boilerplates',
      description: 'Access our private library of starter templates, prompt engineering blueprints, production dockerfiles, and architectural decision records.',
      highlight: 'Production-tested boilerplates to kickstart your work.'
    },
    {
      id: 'progress-tracking',
      icon: TrendingUp,
      title: 'Progress Tracking',
      short: 'Milestones, streaks & deliverable badges',
      description: 'Track your sprint progress with tangible milestone indicators. See your weekly skills growth benchmarked against real industry competencies.',
      highlight: 'Transparent checklists with zero fluff.'
    },
    {
      id: 'mentorship-support',
      icon: Users,
      title: 'Mentorship & Advisory Support',
      short: 'Programme option: 1-on-1 code reviews',
      description: 'Available as a dedicated programme option for live cohort tracks: receive detailed async code reviews, debugging guidance, and strategic portfolio critique from senior practitioners.',
      highlight: 'Personal feedback tailored to your project goals (Optional Track Feature).'
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-offwhite relative scroll-mt-20 w-full">
      <div className="site-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
            The Learning Environment
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight">
            Designed for Focus, Velocity and Real Capability.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We removed everything that slows learners down: endless passive slide lectures, outdated forums, and theoretical quizzes. Here is how your daily learning flow actually looks.
          </p>
        </div>

        {/* Feature Grid & Interactive Portal Simulation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
          
          {/* Left Column: 6 Core Components (Interactive Cards) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              const isActive = activeFeature === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(idx)}
                  className={`p-5 sm:p-6 rounded-2xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-white border-violet shadow-card-hover ring-1 ring-violet/20'
                      : 'bg-white/80 border-slate-200 hover:border-violet/30 hover:bg-white shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isActive ? 'bg-violet text-white shadow-glow-violet' : 'bg-lavender text-violet'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-slate-400">0{idx + 1}</span>
                    </div>

                    <h3 className="text-base font-bold text-midnight tracking-tight mb-1">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                      {feat.short}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium">
                    <span className={isActive ? 'text-violet font-semibold' : 'text-slate-400'}>
                      {isActive ? 'Active Preview' : 'Click to inspect'}
                    </span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isActive ? 'text-violet translate-x-0.5' : 'text-slate-300'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Interactive Nexora Student Portal Preview */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 xl:p-10 border border-slate-200 shadow-premium text-left">
            
            {/* Header bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-midnight text-white flex items-center justify-center font-mono font-bold text-sm">
                  N
                </div>
                <div>
                  <div className="text-sm font-bold text-midnight">Student Workbench</div>
                  <div className="text-xs text-slate-400 font-mono">Sprint 03 / Module: Vector Embeddings</div>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded text-[11px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Cohort Sprint In Progress
              </span>
            </div>

            {/* Active Feature Spotlight */}
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-lavender/60 border border-violet/20">
                <div className="flex items-center gap-2 text-violet font-mono text-xs font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>Feature Spotlight: {features[activeFeature].title}</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {features[activeFeature].description}
                </p>
                <div className="mt-3.5 pt-2.5 border-t border-violet/20 text-xs sm:text-sm text-midnight font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-violet" />
                  <span>{features[activeFeature].highlight}</span>
                </div>
              </div>

              {/* Weekly Deliverable Checklist Simulation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-offwhite border border-slate-200 space-y-3">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Sprint Milestone Checklist:
                </div>
                
                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-slate-800">Chunking Algorithm Implementation</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">Passed 12/12 Tests</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-medium text-slate-800">ChromaDB Local Collection Ingestion</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded">Passed 8/8 Tests</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm">
                  <div className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full border-2 border-violet flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet" />
                    </div>
                    <span className="font-semibold text-midnight">Async Citation Re-ranking Filter</span>
                  </div>
                  <span className="text-xs font-mono text-violet bg-violet/10 px-2.5 py-0.5 rounded font-bold">Current Task</span>
                </div>
              </div>

              {/* Code Review Callout (Transparent Mentorship clarification) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between font-mono text-xs text-slate-500">
                  <span className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-violet" />
                    <span>Advisor Code Review Feedback</span>
                  </span>
                  <span className="text-slate-400">Pull Request #14</span>
                </div>
                <p className="text-slate-700 italic bg-white p-3 rounded-xl border border-slate-200/80 text-xs leading-relaxed">
                  "Great work indexing the documents. To improve latency under concurrency, switch from synchronous file reads to a worker queue. Check the boilerplate snippet in module resources."
                </p>
                <div className="text-[11px] text-slate-400">
                  * Note: Dedicated 1-on-1 mentor code reviews are an optional programme add-on or included in live cohort tracks.
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs sm:text-sm text-slate-500">Ready to start building?</span>
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs sm:text-sm font-bold transition-all shadow-glow-violet flex items-center gap-2"
              >
                <span>Explore Tracks</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
