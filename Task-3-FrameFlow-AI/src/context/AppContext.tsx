import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BrandKit, CarouselProject, NavigationTab, Slide } from '../types';
import { SAMPLE_PROJECT } from '../data/sampleProject';
import { THEMES } from '../data/themes';
import { 
  loadProjectsFromStorage, 
  saveProjectsToStorage, 
  loadBrandKitFromStorage, 
  saveBrandKitToStorage,
  loadSettingsFromStorage,
  saveSettingsToStorage,
  UserSettings,
  DEFAULT_BRAND_KIT
} from '../utils/storage';

import { TEMPLATES } from '../data/templates';

export interface Toast {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface AppContextType {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  projects: CarouselProject[];
  activeProjectId: string;
  activeProject: CarouselProject;
  brandKit: BrandKit;
  settings: UserSettings;
  toasts: Toast[];
  addToast: (title: string, message?: string, type?: 'success' | 'info' | 'warning' | 'error') => void;
  removeToast: (id: string) => void;
  setActiveProjectId: (id: string) => void;
  createNewProject: (customTitle?: string) => string;
  updateActiveProject: (updates: Partial<CarouselProject> | ((prev: CarouselProject) => CarouselProject)) => void;
  updateProjectById: (id: string, updates: Partial<CarouselProject>) => void;
  deleteProject: (id: string) => void;
  duplicateProject: (id: string) => void;
  updateBrandKit: (updates: Partial<BrandKit>) => void;
  updateSettings: (updates: Partial<UserSettings>) => void;
  applyBrandKitToProject: (projectId?: string) => void;
  resetAllData: () => void;
  loadTemplateIntoProject: (templateId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('overview');
  const [projects, setProjects] = useState<CarouselProject[]>(() => loadProjectsFromStorage());
  const [activeProjectId, setActiveProjectId] = useState<string>(() => {
    const list = loadProjectsFromStorage();
    return list[0]?.id || SAMPLE_PROJECT.id;
  });
  const [brandKit, setBrandKit] = useState<BrandKit>(() => loadBrandKitFromStorage());
  const [settings, setSettings] = useState<UserSettings>(() => loadSettingsFromStorage());
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync projects to storage
  useEffect(() => {
    saveProjectsToStorage(projects);
  }, [projects]);

  // Sync brand kit to storage
  useEffect(() => {
    saveBrandKitToStorage(brandKit);
  }, [brandKit]);

  // Sync settings to storage
  useEffect(() => {
    saveSettingsToStorage(settings);
  }, [settings]);

  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0] || SAMPLE_PROJECT;

  const addToast = (title: string, message?: string, type: 'success' | 'info' | 'warning' | 'error' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  const createNewProject = (customTitle?: string): string => {
    const newId = `proj-${Date.now()}`;
    const newProject: CarouselProject = {
      id: newId,
      title: customTitle || 'Untitled Carousel',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'draft',
      platform: 'both',
      audience: 'Founders',
      tone: 'Educational',
      slideCount: 7,
      language: 'English (US)',
      objective: 'Brand Authority',
      rawIdea: '',
      currentStep: 1,
      brandKitApplied: false,
      theme: THEMES[0],
      research: {
        topicSummary: '',
        targetAudience: '',
        contentAngle: '',
        keyTakeaways: [],
        suggestedHeadlines: [],
        suggestedHookFormula: '',
        slideSequenceSummary: [],
        sources: [],
        disclaimer: 'Clearly distinguishing AI-generated suggestions from verified sources.'
      },
      slides: []
    };

    setProjects(prev => [newProject, ...prev]);
    setActiveProjectId(newId);
    setActiveTab('create');
    addToast('New Carousel Created', 'Ready for your raw idea input.', 'success');
    return newId;
  };

  const updateActiveProject = (updates: Partial<CarouselProject> | ((prev: CarouselProject) => CarouselProject)) => {
    setProjects(prev =>
      prev.map(p => {
        if (p.id === activeProjectId) {
          const next = typeof updates === 'function' ? updates(p) : { ...p, ...updates };
          return {
            ...next,
            updatedAt: new Date().toISOString()
          };
        }
        return p;
      })
    );
  };

  const updateProjectById = (id: string, updates: Partial<CarouselProject>) => {
    setProjects(prev =>
      prev.map(p => {
        if (p.id === id) {
          return {
            ...p,
            ...updates,
            updatedAt: new Date().toISOString()
          };
        }
        return p;
      })
    );
  };

  const deleteProject = (id: string) => {
    if (projects.length <= 1) {
      addToast('Cannot Delete', 'You must maintain at least one carousel project.', 'warning');
      return;
    }
    const filtered = projects.filter(p => p.id !== id);
    setProjects(filtered);
    if (activeProjectId === id) {
      setActiveProjectId(filtered[0].id);
    }
    addToast('Project Deleted', 'The carousel has been removed.', 'info');
  };

  const duplicateProject = (id: string) => {
    const target = projects.find(p => p.id === id);
    if (!target) return;

    const dupId = `proj-${Date.now()}`;
    const duplicated: CarouselProject = {
      ...JSON.parse(JSON.stringify(target)),
      id: dupId,
      title: `${target.title} (Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'draft'
    };

    setProjects(prev => [duplicated, ...prev]);
    setActiveProjectId(dupId);
    addToast('Project Duplicated', 'Switched to the duplicate copy.', 'success');
  };

  const updateBrandKit = (updates: Partial<BrandKit>) => {
    setBrandKit(prev => ({ ...prev, ...updates }));
    addToast('Brand Kit Updated', 'Preferences saved for upcoming generation passes.', 'success');
  };

  const updateSettings = (updates: Partial<UserSettings>) => {
    setSettings(prev => ({ ...prev, ...updates }));
    addToast('Settings Saved', 'Configuration updated successfully.', 'success');
  };

  const applyBrandKitToProject = (projectId?: string) => {
    const targetId = projectId || activeProjectId;
    setProjects(prev =>
      prev.map(p => {
        if (p.id === targetId) {
          const matchedTheme = THEMES.find(t => t.id === brandKit.preferredThemeId) || p.theme;
          const customizedTheme = {
            ...matchedTheme,
            primaryColor: brandKit.primaryColor,
            secondaryColor: brandKit.secondaryColor,
            fontPrimary: brandKit.fontPrimary,
            fontSecondary: brandKit.fontSecondary
          };
          return {
            ...p,
            brandKitApplied: true,
            theme: customizedTheme,
            updatedAt: new Date().toISOString()
          };
        }
        return p;
      })
    );
    addToast('Brand Kit Applied', `Applied ${brandKit.brandName} style tokens to current deck.`, 'success');
  };

  const resetAllData = () => {
    setProjects([SAMPLE_PROJECT]);
    setActiveProjectId(SAMPLE_PROJECT.id);
    setBrandKit(DEFAULT_BRAND_KIT);
    saveProjectsToStorage([SAMPLE_PROJECT]);
    saveBrandKitToStorage(DEFAULT_BRAND_KIT);
    addToast('Reset to Defaults', 'Sample project and initial brand kit restored.', 'info');
  };

  const loadTemplateIntoProject = (templateId: string) => {
    const tpl = TEMPLATES.find(t => t.id === templateId);
    if (!tpl) return;

    const newId = `proj-${Date.now()}`;
    const matchedTheme = THEMES.find(t => t.id === tpl.themeId) || THEMES[0];
    
    const newProj: CarouselProject = {
      id: newId,
      title: tpl.title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'draft',
      platform: tpl.platform,
      audience: tpl.recommendedAudience,
      tone: tpl.recommendedTone,
      slideCount: tpl.slidesCount,
      language: 'English (US)',
      objective: tpl.objective,
      rawIdea: tpl.sampleIdea,
      currentStep: 1,
      brandKitApplied: false,
      theme: matchedTheme,
      research: {
        topicSummary: tpl.description,
        targetAudience: tpl.recommendedAudience,
        contentAngle: `${tpl.recommendedTone} framework optimized for ${tpl.platform}`,
        keyTakeaways: tpl.tags,
        suggestedHeadlines: [tpl.title, tpl.tagline],
        suggestedHookFormula: 'Curated template outline ready for automated AI expansion',
        slideSequenceSummary: tpl.slidesPreview.map((s, idx) => `Slide ${idx + 1}: ${s.headline}`),
        sources: [
          {
            title: 'Template Framework Blueprint',
            type: 'Suggested Reference',
            description: 'Structural template based on top-performing LinkedIn and Instagram carousels.',
            confidence: 'High',
            isVerified: true
          }
        ],
        disclaimer: 'Clearly distinguishing AI-generated suggestions from verified sources.'
      },
      slides: tpl.slidesPreview.map((sp, idx) => ({
        id: `slide-${idx + 1}`,
        slideNumber: idx + 1,
        type: sp.type || 'framework',
        headline: sp.headline || `Slide Headline ${idx + 1}`,
        body: `Detailed tactical body copy for slide ${idx + 1}. Customize with your specific data and takeaways.`,
        supportingDetail: 'Actionable micro-tip for higher save rate.',
        badge: `SECTION 0${idx + 1}`,
        layoutStyle: idx === 0 ? 'hero-hook' : idx === tpl.slidesPreview.length - 1 ? 'call-to-action' : 'standard',
        textAlign: idx === 0 || idx === tpl.slidesPreview.length - 1 ? 'center' : 'left',
        fontSize: 'md'
      }))
    };

    setProjects(prev => [newProj, ...prev]);
    setActiveProjectId(newId);
    setActiveTab('create');
    addToast('Template Loaded', `"${tpl.title}" is ready in your creation workspace.`, 'success');
  };

  return (
    <AppContext.Provider
      value={{
        activeTab,
        setActiveTab,
        projects,
        activeProjectId,
        activeProject,
        brandKit,
        settings,
        toasts,
        addToast,
        removeToast,
        setActiveProjectId,
        createNewProject,
        updateActiveProject,
        updateProjectById,
        deleteProject,
        duplicateProject,
        updateBrandKit,
        updateSettings,
        applyBrandKitToProject,
        resetAllData,
        loadTemplateIntoProject
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
