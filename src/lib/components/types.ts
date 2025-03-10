export interface Skill {
  icon: string;
  items: string[];
  color: string;
  title: string;
}

export type SkillSet = Skill[];
export type ProjectSet = Project[];

export interface Project {
  title: string;
  tags: string[];
  desc: string;
  icon: string;
  color: string;

  project_type:string
  features?: ProjectFeature[];
  demo_live?:string
  github?:string;
  details?: string;
  image?: string;
}
export interface ProjectFeature{
  icon:string
  title:string
  desc:string
}
export interface Education {
  degree: string;
  university: string;
  year: string;

  courses?: string[]; // Array of core courses
}
export interface PortfolioData {
  name: string;
  role: string;
  location: string;
  status: string;
  intro: string;
  experience: string;
  links: {
    github: string;
    linkedin: string;
    cv:string;
  };
  skills: SkillSet;
  projects: ProjectSet;
  edu: Education;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}