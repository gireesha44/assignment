import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { BuildToLearnPath } from './components/BuildToLearnPath';
import { ProgrammeDiscovery } from './components/ProgrammeDiscovery';
import { ProgrammeModal } from './components/ProgrammeModal';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ProjectModal } from './components/ProjectModal';
import { LearningExperience } from './components/LearningExperience';
import { OutcomesSection } from './components/OutcomesSection';
import { RegistrationSection } from './components/RegistrationSection';
import { CallbackModal } from './components/CallbackModal';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { PROGRAMMES } from './data/courses';
import { Programme, StudentProject } from './types';

export function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<Programme | null>(null);
  const [selectedProject, setSelectedProject] = useState<StudentProject | null>(null);
  const [isAdvisorModalOpen, setIsAdvisorModalOpen] = useState(false);
  const [preselectedProgrammeId, setPreselectedProgrammeId] = useState<string>('ai-genai-eng');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreClick = () => {
    scrollToSection('programmes');
  };

  const handleRegisterClick = () => {
    scrollToSection('register');
  };

  const handleAdvisorClick = () => {
    setIsAdvisorModalOpen(true);
  };

  const handleApplyProgramme = (progId: string) => {
    setPreselectedProgrammeId(progId);
    scrollToSection('register');
    const prog = PROGRAMMES.find(p => p.id === progId);
    if (prog) {
      setToastMessage(`Selected track: ${prog.title}. Complete your application below.`);
    }
  };

  const handleApplyProjectCategory = (cat: string) => {
    const matched = PROGRAMMES.find(p => 
      p.categoryLabel.toLowerCase().includes(cat.toLowerCase()) || 
      cat.toLowerCase().includes(p.categoryLabel.toLowerCase())
    ) || PROGRAMMES[0];
    
    setPreselectedProgrammeId(matched.id);
    scrollToSection('register');
    setToastMessage(`Targeting track: ${matched.title}. Ready for enrollment!`);
  };

  const handleSelectProgrammeFromFooter = (id: string) => {
    const prog = PROGRAMMES.find(p => p.id === id);
    if (prog) {
      setSelectedProgramme(prog);
    }
  };

  return (
    <div className="min-h-screen bg-offwhite text-midnight font-sans selection:bg-violet selection:text-white">
      {/* 1. Global Navigation */}
      <Navbar
        onExploreClick={handleExploreClick}
        onAdvisorClick={handleAdvisorClick}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          onExploreClick={handleExploreClick}
          onAdvisorClick={handleAdvisorClick}
        />

        {/* 3. Value Proposition Section */}
        <ValueProposition
          onExploreClick={handleExploreClick}
        />

        {/* 4. Programme Discovery Section */}
        <ProgrammeDiscovery
          onSelectProgramme={(prog) => setSelectedProgramme(prog)}
          onApplyProgramme={handleApplyProgramme}
        />

        {/* 5. Unique Feature: Build-To-Learn Path */}
        <BuildToLearnPath />

        {/* 6. Project Showcase Section */}
        <ProjectShowcase
          onInspectProject={(proj) => setSelectedProject(proj)}
          onApplyCategory={handleApplyProjectCategory}
        />

        {/* 7. Learning Experience Section */}
        <LearningExperience
          onExploreClick={handleExploreClick}
        />

        {/* 8. Outcomes Section */}
        <OutcomesSection
          onRegisterClick={handleRegisterClick}
        />

        {/* 9. Registration & Lead Capture Section (Critical) */}
        <RegistrationSection
          preselectedProgrammeId={preselectedProgrammeId}
          onShowToast={(msg) => setToastMessage(msg)}
        />

        {/* 10. FAQ Section */}
        <FAQSection
          onAdvisorClick={handleAdvisorClick}
        />

        {/* 11. Final High-Conversion CTA */}
        <FinalCTA
          onExploreClick={handleExploreClick}
          onAdvisorClick={handleAdvisorClick}
        />
      </main>

      {/* 12. Complete Footer */}
      <Footer
        onSelectProgrammeId={handleSelectProgrammeFromFooter}
        onAdvisorClick={handleAdvisorClick}
      />

      {/* Modals & Overlays */}
      <ProgrammeModal
        programme={selectedProgramme}
        onClose={() => setSelectedProgramme(null)}
        onApply={handleApplyProgramme}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onApplyForCategory={handleApplyProjectCategory}
      />

      <CallbackModal
        isOpen={isAdvisorModalOpen}
        onClose={() => setIsAdvisorModalOpen(false)}
        onSuccessToast={(msg) => setToastMessage(msg)}
      />

      {/* Toast Notification */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
