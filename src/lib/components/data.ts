import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Freddy Liu",
  role: "Independent Full Stack DevOps Engineer",
  location: "Adelaide, SA",
  status: "Open to opportunities",
  intro: "Expert in C#, .NET, Cloud (AWS, Azure, GCP) & Node.js •Azure Certified •Innovator in Tech Solutions!",
  experience: "5+ years of experience",
  links: {
    github: "github.com/fengyuan213",
    linkedin: "linkedin.com/in/fengyuan213",
    cv: "linkedin.com/in/fengyuan213",
  },
  skills: {
    languages: {
      icon: "{ }",
      items: ["JavaScript", "TypeScript", "Python", "SQL"],
      color: "#22D3EE",
    },
    frontend: {
      icon: "⚛️",
      items: ["React", "Vue.js", "Next.js", "Tailwind CSS"],
      color: "#818CF8",
    },
    backend: {
      icon: "🛠️",
      items: ["Node.js", "Django", "PostgreSQL", "Redis"],
      color: "#A78BFA",
    },
    cloud: {
      icon: "☁️",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      color: "#F472B6",
    },
    tools: {
      icon: "🔧",
      items: ["Git", "Figma", "Jest", "Postman"],
      color: "#22C55E",
    },
  },
  projects: [
    {
      id: 1,
      title: "Neural Engine",
      type: "ai",
      tags: ["React", "Python"],
      desc: "AI-powered analytics platform",
    },
    {
      id: 2,
      title: "DataViz",
      type: "data",
      tags: ["Vue", "GraphQL"],
      desc: "Real-time visualization system",
    },
    {
      id: 3,
      title: "CloudOps",
      type: "cloud",
      tags: ["Node", "AWS"],
      desc: "Cloud infrastructure platform",
    },
  ],
  edu: {
    degree: "Bachelor of Computer Science",
    year: "2025",
    university: "University of Adelaide",
    courses: ["OOP", "CS"]
  },
};
