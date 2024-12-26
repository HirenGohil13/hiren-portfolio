export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  metrics?: {
    value: string;
    label: string;
  }[];
  status: 'completed' | 'in-progress' | 'planned';
}