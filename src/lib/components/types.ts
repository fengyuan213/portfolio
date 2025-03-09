export interface Skill {
  icon: string;
  items: string[];
  color: string;
}

export interface SkillSet {
  languages: Skill;
  frontend: Skill;
  backend: Skill;
  cloud: Skill;
  tools: Skill;
}

export interface Project {
  id: number;
  title: string;
  type: string;
  tags: string[];
  desc: string;
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
  projects: Project[];
  edu: Education;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
