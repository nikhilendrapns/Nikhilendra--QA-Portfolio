export interface Section {
  id: string;
  label: string;
}

export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface AICardItem {
  id: string;
  title: string;
  achievement: string;
  description: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  project?: string;
  achievements: string[];
  tags: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  type: 'initiative' | 'publication' | 'mentorship' | 'speaking';
}
