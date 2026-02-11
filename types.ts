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

export interface NavItem {
  label: string;
  href: string;
}