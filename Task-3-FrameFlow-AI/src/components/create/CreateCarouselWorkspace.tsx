import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Edit3, 
  Palette, 
  Sliders, 
  Download, 
  Check 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Step1IdeaInput } from './Step1IdeaInput';
import { Step2AiResearch } from './Step2AiResearch';
import { Step3SlideContent } from './Step3SlideContent';
import { Step4VisualDesign } from './Step4VisualDesign';
import { Step5CarouselEditor } from './Step5CarouselEditor';
import { Step6Export } from './Step6Export';

export const CreateCarouselWorkspace: React.FC = () => {
  const { activeProject, updateActiveProject } = useApp();
  const currentStep = activeProject.currentStep || 1;

  const steps = [
    { number: 1, label: 'Idea Input', icon: Sparkles },
    { number: 2, label: 'AI Research', icon: BookOpen },
    { number: 3, label: 'Slide Copy', icon: Edit3 },
    { number: 4, label: 'Visual Design', icon: Palette },
    { number: 5, label: 'Carousel Studio', icon: Sliders },
    { number: 6, label: 'Export', icon: Download },
  ];

  const setStep = (stepNumber: number) => {
    // If moving to steps 2-6, ensure project has slides/research or allow clicking back
    updateActiveProject({ currentStep: stepNumber });
  };

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#11131B]">
      {/* Step Stepper Header (Only for steps 1, 2, 3, 4, 6; step 5 has its own custom studio header) */}
      {currentStep !== 5 && (
        <div className="bg-[#171923] border-b border-[#222633] px-6 py-3.5 sticky top-16 z-20">
          <div className="max-w-4xl mx-auto flex items-center justify-between overflow-x-auto gap-2">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isCurrent = currentStep === s.number;
              const isCompleted = currentStep > s.number;

              return (
                <div key={s.number} className="flex items-center shrink-0">
                  <button
                    onClick={() => setStep(s.number)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                      isCurrent
                        ? 'bg-[#8B72FF] text-white shadow-glow-violet'
                        : isCompleted
                        ? 'bg-[#222633] text-emerald-400 hover:text-white'
                        : 'text-[#A3A8B8] hover:text-white'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isCurrent
                          ? 'bg-white text-[#8B72FF]'
                          : isCompleted
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-white/10 text-[#A3A8B8]'
                      }`}
                    >
                      {isCompleted ? <Check className="w-3 h-3" /> : s.number}
                    </div>
                    <span className="hidden sm:inline">{s.label}</span>
                  </button>

                  {idx < steps.length - 1 && (
                    <div className="w-6 h-[1px] bg-white/10 mx-1 hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Workspace Body */}
      <div className={`flex-1 ${currentStep === 5 ? '' : 'p-6 overflow-y-auto'}`}>
        {currentStep === 1 && (
          <Step1IdeaInput onProceed={() => setStep(2)} />
        )}
        {currentStep === 2 && (
          <Step2AiResearch
            onBack={() => setStep(1)}
            onProceed={() => setStep(3)}
          />
        )}
        {currentStep === 3 && (
          <Step3SlideContent
            onBack={() => setStep(2)}
            onProceed={() => setStep(4)}
          />
        )}
        {currentStep === 4 && (
          <Step4VisualDesign
            onBack={() => setStep(3)}
            onProceed={() => setStep(5)}
          />
        )}
        {currentStep === 5 && (
          <Step5CarouselEditor
            onBack={() => setStep(4)}
            onProceed={() => setStep(6)}
          />
        )}
        {currentStep === 6 && (
          <Step6Export onBack={() => setStep(5)} />
        )}
      </div>
    </div>
  );
};
