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
      title: "Programming Languages",
      icon: "💻",
      items: ["C#", "Java","TypeScript" ,"JavaScript", "Bash", "Shell", "Batch"],
      color: "#22D3EE"
    },
    framwork: {
      title: "Web/Desktop/Mobile",
      icon: "⚛️",
      items: ["WPF", "WinForms", "MVVM", ".NET", "Svelte", "Vue","Express", "Node.js" ,"HTML", "CSS"],
      color: "#818CF8"
    },

    cloud: {
      title: "Cloud",
      icon: "☁️",
      items: ["AWS S3", "Resend","Digital Ocean","Vultr", "VPC", "RDS", "CDN", "SQS", "Azure"],
      color: "#60A5FA"
    },
    devops: {
      title: "DevOps & CI/CD",
      icon: "🚀",
      items: ["Docker", "Git","Vercel", "Github Actions", "Teamcity", "Jenkins", "CircleCI", "TravisCI", "GitLab", "Appveyor", "FTPS", "SSH", "Cake(C#)"],
      color: "#F472B6"
    },
    databases: {
      title: "Database",
      icon: "🗄️",
      items: ["MySQL", "SQLite","Redis", "MongoDB","Surrealist" ],
      color: "#F472B6"
    },
    tools: {
      title: "Tools & Testing & Other",
      icon: "🔧",
      items: ["Jira", "Confluence", "Trello", "Figma","MSTest", "NUnit","DotCover", "DotMemory", "DotTrace"],
      color: "#22C55E"
    },

    game: {
      title: "Game Development",
      icon: "🎮",
      items: ["Unity", "Unreal", "WebGL", "WASM"],
      color: "#C084FC"
    }
  },
  projects: [
    {
      id: 1,
      title: "AI Website Builder",
      icon: "🤖",
      color: "#4ADE80",
      tags: ["TypeScript", "SvelteKit", "SurrealDB","Pub/Sub"],
      desc: "Contributed to AI-powered website builder."
    },
    {
      id: 2,
      title: "Weather Aggregation System",
      icon: "🌤️",
      color: "#22D3EE",
      tags: ["Java", "REST", "JUnit", "Mockito", "JaCoCo"],
      desc: "Fault-tolerant distributed weather data server."
    },
    {
      id: 3,
      title: "Open Launcher",
      icon: "🎮",
      color: "#F87171",
      tags: ["C#", ".NET", "WPF","AWS", "NUnit"],
      desc: "Incremental update and anti-cheat integration for gaming."
    },
    {
      id: 4,
      title: "AssetUpdater Library",
      icon: "📦",
      color: "#FB923C",
      tags: ["C#", ".NET", "NuGet", "WinForms"],
      desc: "Automated library for efficient asset management and updates."
    },
    {
      id: 5,
      title: "Doodle Beat Game",
      icon: "🎮",
      color: "#A78BFA",
      tags: ["Unity", "C#", "WebGL", "WASM"],
      desc: "Interactive 2D game deployed on the web."
    },
    {
      id: 5,
      title: "Mystipic AI",
      icon: "🖼️",
      color: "#818CF8",
      tags: ["React","AWS S3","ChatBot"],
      desc: "AI-driven image transformation application."
    }
  ],
  edu: {
    degree: "Bachelor of Computer Science",
    year: "2025",
    university: "University of Adelaide",
    courses: [
      "Artificial Intelligence",
      "Computer Vision",
      "Computer Networks",
      "Data Structures and Algorithms",
      "Distributed Systems",
      "Concurrency and Synchronisation",
      "Cybersecurity Fundumentals"
    ]
  },
};
