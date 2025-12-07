// Type definitions for Strapi CMS data

export interface Experience {
  id: string;
  company: string;
  role: string;
  dateFrom: string;
  dateTo: string | null;
  currentlyWorking: boolean;
  details: string;
  tags: string[];
  color: string;
  logo?: string;
  icon?: any;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon?: any;
  color: string;
}

export interface Recommendation {
  id: string;
  authorName: string;
  authorTitle: string;
  testimony: string;
  tags: string[];
  color: string;
  linkedinUrl?: string;
  authorImage?: string;
  relationship?: string;
}

export interface SkillGroup {
  id: string;
  name: string;
  skills: string[];
}

export interface Philosophy {
  id: string;
  title: string;
  content: string;
  order: number;
  category?: 'scale' | 'reliability' | 'speed' | 'quality' | 'teamwork' | 'innovation';
}

export interface PortfolioData {
  experiences: Experience[];
  industries: Industry[];
  skills: SkillGroup[];
  recommendations: Recommendation[];
  philosophies: Philosophy[];
}