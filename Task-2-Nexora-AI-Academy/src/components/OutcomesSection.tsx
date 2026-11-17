import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Cpu, 
  Code2, 
  Lightbulb, 
  FolderGit2, 
  MessageSquareCode, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { OutcomeSkill } from '../types';

interface OutcomesSectionProps {
  onRegisterClick: () => void;
}

export const OutcomesSection: React.FC<OutcomesSectionProps> = ({ onRegisterClick }) => {
  const [selectedSkillId, setSelectedSkillId] = useState<string>('ai-literacy');

  const skills: (OutcomeSkill & { icon: React.ElementType })[] = [
    {
      id: 'problem-solving',
      title: 'Problem Solving',
      icon: BrainCircuit,
      category: 'Algorithmic Thinking',
      description: 'Deconstruct vague user requirements into deterministic data pipelines, edge-case validations, and resilient logic.',
      practicalApplication: 'Design system architectures, optimize query bottlenecks, and resolve complex async runtime exceptions.',
      benchmark: 'Decompose any multi-step system specification into testable sub-modules.'
    },
    {
      id: 'ai-literacy',
      title: 'AI Literacy',
      icon: Cpu,
      category: 'Model & Vector Systems',
      description: 'Understand the mathematical and practical trade-offs between dense embeddings, contextual chunking, token costs, and latency.',
      practicalApplication: 'Build vector databases, configure hybrid retrieval algorithms, and mitigate hallucinations with strict grounded context.',
      benchmark: 'Select and benchmark appropriate model architectures for real constraints.'
    },
    {
      id: 'programming',
      title: 'Programming',
      icon: Code2,
      category: 'Production Code',
      description: 'Write clean, maintainable, modular code in modern TypeScript and Python following strict typing and idiomatic standards.',
      practicalApplication: 'Architect RESTful APIs, interact with relational schemas via ORMs, and manage state in reactive web frontends.',
      benchmark: 'Publish production-ready repositories with full linting and type safety.'
    },
    {
      id: 'product-thinking',
      title: 'Product Thinking',
      icon: Lightbulb,
      category: 'System Design',
      description: 'Bridge the gap between raw code and what users actually need. Design intuitive interfaces, resilient error states, and responsive workflows.',
      practicalApplication: 'Scope user pain points, build wireframe prototypes, and deliver friction-free digital experiences.',
      benchmark: 'Ship complete end-to-end products that work seamlessly on mobile and desktop.'
    },
    {
      id: 'portfolio-development',
      title: 'Portfolio Development',
      icon: FolderGit2,
      category: 'Proof of Work',
      description: 'Create undeniable artifacts of your technical capability: live web deployments, documented GitHub repositories, and interactive demos.',
      practicalApplication: 'Write comprehensive technical READMEs, record architecture demo walkthroughs, and host apps on cloud platforms.',
      benchmark: 'A minimum of 2 deployed public applications ready for client/recruiter inspection.'
    },
    {
      id: 'technical-communication',
      title: 'Technical Communication',
      icon: MessageSquareCode,
      category: 'Engineering Articulation',
      description: 'Explain system architecture trade-offs, write clear documentation, and articulate technical decisions to both engineers and stakeholders.',
      practicalApplication: 'Author Architecture Decision Records (ADRs), create clean PR descriptions, and present technical demos.',
      benchmark: 'Confidently explain and defend your architectural choices in interviews.'
    }
  ];

  return (
    <section id="outcomes" className="py-20 md:py-28 bg-white border-t border-slate-200/80 relative scroll-mt-20 w-full">
      <div className="site-container">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-lavender text-violet text-xs font-mono font-bold uppercase tracking-wider mb-3">
            Real Capability Matrix
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-midnight tracking-tight">
            From Curious Beginner to Confident Builder.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We don’t rely on invented placement statistics. We measure your transformation through concrete engineering competencies that demonstrate genuine capability.
          </p>
        </div>

        {/* Six Core Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-12">
          {skills.map((skill) => {
            const Icon = skill.icon;
            const isSelected = selectedSkillId === skill.id;
            return (
              <div
                key={skill.id}
                onClick={() => setSelectedSkillId(skill.id)}
                className={`p-6 sm:p-7 xl:p-8 rounded-3xl text-left cursor-pointer transition-all duration-200 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-lavender/40 border-violet shadow-card-hover ring-1 ring-violet/20'
                    : 'bg-offwhite border-slate-200/80 hover:border-violet/40 hover:bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-midnight text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6 text-violet-light" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-semibold uppercase">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-midnight tracking-tight mb-2.5">
                    {skill.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                    How You Prove It:
                  </div>
                  <div className="text-xs sm:text-sm text-midnight font-medium flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-violet shrink-0 mt-0.5" />
                    <span>{skill.benchmark}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment Banner: Honest Transparency over Fake Claims */}
        <div className="p-6 sm:p-8 xl:p-10 rounded-3xl bg-midnight text-white border border-violet/30 shadow-premium text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-violet/20 border border-violet/30 text-lavender text-xs font-mono font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Our Academic Guarantee</span>
            </div>
            <h4 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Genuine Capability Over Vanity Badges
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We never fabricate recruitment percentages or sell paper credentials. We provide rigorous, hands-on apprenticeship so your code and deployed products speak directly to founders, clients, and technical recruiters.
            </p>
          </div>

          <button
            onClick={onRegisterClick}
            className="w-full lg:w-auto px-8 py-4 rounded-xl bg-violet hover:bg-violet-hover text-white text-xs sm:text-sm font-bold transition-all shadow-glow-violet active:scale-95 shrink-0 flex items-center justify-center gap-2.5"
          >
            <span>Start Your Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
