export type ProgrammeCategory = 
  | 'all'
  | 'ai-genai'
  | 'ml-foundations'
  | 'fullstack'
  | 'python-auto'
  | 'data-analytics'
  | 'productivity-tools';

export interface Programme {
  id: string;
  category: ProgrammeCategory;
  categoryLabel: string;
  title: string;
  shortDescription: string;
  difficulty: 'Beginner' | 'Beginner to Intermediate' | 'Intermediate' | 'Intermediate to Advanced';
  duration: string; // e.g. "8 Weeks (Illustrative Pace)"
  skillsCovered: string[];
  projectOutcome: string;
  weeklyBreakdown: {
    week: string;
    topic: string;
    deliverable: string;
  }[];
  toolsLearned: string[];
  prerequisites: string;
  learningFormat: string;
  badge?: string;
  featured?: boolean;
}

export interface StudentProject {
  id: string;
  name: string;
  shortDescription: string;
  technologyTags: string[];
  skillsDemonstrated: string[];
  category: string;
  previewType: 'document-ai' | 'finance-ai' | 'content-gen' | 'analytics-dash' | 'marketplace';
  architectureHighlights: string[];
  liveDemoMetrics: {
    label: string;
    value: string;
  }[];
}

export interface LearningStep {
  stepNumber: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
  codeSnippet?: string;
  badgeText: string;
}

export interface OutcomeSkill {
  id: string;
  title: string;
  description: string;
  practicalApplication: string;
  category: string;
  benchmark: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Curriculum' | 'Projects' | 'Admissions';
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  currentStatus: string;
  programmeOfInterest: string;
  experienceLevel: string;
  preferredFormat: string;
  privacyConsent: boolean;
  notes?: string;
}

export interface CallbackRequestData {
  fullName: string;
  phone: string;
  email: string;
  preferredTime: string;
  programmeOfInterest: string;
  privacyConsent: boolean;
}
