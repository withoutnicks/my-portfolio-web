export interface ProjectLink {
  text: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  links: ProjectLink[];
  bannerUrl?: string;
}
