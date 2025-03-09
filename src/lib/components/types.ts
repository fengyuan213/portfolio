export interface Skill {
  icon: string;
  items: string[];
  color: string;
  title: string;
}

export interface SkillSet {
  [key: string]: Skill;
}

export interface Project {
  id: number;
  title: string;

  tags: string[];
  desc: string;
  icon: string;
  color: string;
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
