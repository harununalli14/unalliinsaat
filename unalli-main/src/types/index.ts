/**
 * @file types/index.ts
 * Type definitions for Ünallı İnşaat
 */

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
  badge?: string;
}

export type ProjectCategory = 'all' | 'villa' | 'apartment' | 'renovation';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  image: string;
  summary: string;
  details: {
    architecturalStyle: string;
    scope: string;
    duration: string;
    features: string[];
  };
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export type PageId = 'home' | 'services' | 'about' | 'contact' | 'quote';

export interface AttachedPhoto {
  id: string;
  name: string;
  size: string;
  previewUrl: string;
}

export interface ContactFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  photos?: AttachedPhoto[];
}
