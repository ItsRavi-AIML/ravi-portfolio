export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  problemStatement?: string;
  architectureDetails?: string[];
  engineeringTakeaways?: string[];
}

export interface ToolkitGroup {
  id: string;
  category: string;
  items: string[];
}

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}
