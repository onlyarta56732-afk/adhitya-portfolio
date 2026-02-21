export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  imageUrl: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  type: 'work' | 'education' | 'activity';
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: 'competition' | 'seminar' | 'training';
  achievement?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export interface DevicePlatform {
  name: string;
  icon: string; // emoji or text icon
  tags: string[];
  proficiency: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}