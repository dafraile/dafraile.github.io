export enum ViewState {
  HOME = 'HOME',
  RESEARCH = 'RESEARCH',
  BLOG = 'BLOG',
  CODING = 'CODING',
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi?: string;
  link?: string;
  tags?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string[]; // Array of paragraphs for simplicity
  tags: string[];
  externalLink?: string; // Link to original publication
}

export type ProjectGroup = 'Research code' | 'Tools' | 'Experiments & play';

export const PROJECT_GROUPS: ProjectGroup[] = ['Research code', 'Tools', 'Experiments & play'];

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  group: ProjectGroup;
  link?: string;
  github?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}