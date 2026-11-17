import { BrandKit, CarouselProject } from '../types';
import { SAMPLE_PROJECT } from '../data/sampleProject';

const STORAGE_KEYS = {
  PROJECTS: 'frameflow_projects_v1',
  ACTIVE_PROJECT_ID: 'frameflow_active_project_id_v1',
  BRAND_KIT: 'frameflow_brand_kit_v1',
  SETTINGS: 'frameflow_user_settings_v1'
};

export const DEFAULT_BRAND_KIT: BrandKit = {
  brandName: 'Apex Studio',
  handle: '@founder_alex',
  tagline: 'Building High-Leverage AI Systems',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  primaryColor: '#8B72FF',
  secondaryColor: '#5AA9FF',
  backgroundColor: '#171923',
  cardColor: '#222633',
  textColor: '#F7F7FB',
  fontPrimary: 'Plus Jakarta Sans',
  fontSecondary: 'JetBrains Mono',
  preferredThemeId: 'modern-gradient',
  includeWatermark: true,
  verifiedBadge: true
};

export interface UserSettings {
  apiKey: string;
  useLiveApi: boolean;
  exportFormatDefault: 'pdf' | 'png';
  autoSaveInterval: number;
}

export const DEFAULT_SETTINGS: UserSettings = {
  apiKey: '',
  useLiveApi: false,
  exportFormatDefault: 'pdf',
  autoSaveInterval: 1000
};

export function loadProjectsFromStorage(): CarouselProject[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Failed to load projects from storage:', err);
  }
  // Fallback to sample project
  const initial = [SAMPLE_PROJECT];
  saveProjectsToStorage(initial);
  return initial;
}

export function saveProjectsToStorage(projects: CarouselProject[]): void {
  try {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  } catch (err) {
    console.error('Failed to save projects to storage:', err);
  }
}

export function loadBrandKitFromStorage(): BrandKit {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BRAND_KIT);
    if (raw) {
      return { ...DEFAULT_BRAND_KIT, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.warn('Failed to load brand kit:', err);
  }
  return DEFAULT_BRAND_KIT;
}

export function saveBrandKitToStorage(kit: BrandKit): void {
  try {
    localStorage.setItem(STORAGE_KEYS.BRAND_KIT, JSON.stringify(kit));
  } catch (err) {
    console.error('Failed to save brand kit:', err);
  }
}

export function loadSettingsFromStorage(): UserSettings {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (raw) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
    }
  } catch (err) {
    console.warn('Failed to load settings:', err);
  }
  return DEFAULT_SETTINGS;
}

export function saveSettingsToStorage(settings: UserSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings:', err);
  }
}
