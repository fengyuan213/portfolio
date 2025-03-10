import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  name: "Freddy Liu",
  role: "Independent Full Stack DevOps Engineer",
  location: "Adelaide, SA",
  status: "Open to opportunities",
  intro: "Expert in C#, .NET, Cloud (AWS, Azure, GCP) & Node.js • Azure Certified • Innovator in Tech Solutions!",
  experience: "5+ years of experience",
  links: {
    github: "github.com/fengyuan213",
    linkedin: "linkedin.com/in/fengyuan213",
    cv: "r2.fengy.cc/Freddy%20Liu.pdf",
  },
  skills: [
    {
      title: "Programming Languages",
      icon: "💻",
      items: ["C#", "Java","Python","TypeScript" ,"JavaScript","C++","C","SQL", "Bash", "Shell", "Batch"],
      color: "#22D3EE"
    },
    {
      title: "Web/Desktop/Mobile",
      icon: "⚛️",
      items: ["WPF", "WinForms", "MVVM", ".NET", "Svelte", "Vue","Express", "Node.js" ,"HTML", "CSS"],
      color: "#818CF8"
    },
    {
      title: "Cloud",
      icon: "☁️",
      items: ["AWS S3", "Resend","Digital Ocean","Vultr", "VPC", "RDS", "CDN", "SQS", "Azure"],
      color: "#60A5FA"
    },
    {
      title: "DevOps & CI/CD",
      icon: "🚀",
      items: ["Docker", "Git","Vercel", "Github Actions", "Teamcity", "Jenkins", "CircleCI", "TravisCI", "GitLab", "Appveyor", "FTPS", "SSH", "Cake(C#)"],
      color: "#F472B6"
    },
    {
      title: "Database",
      icon: "🗄️",
      items: ["MySQL", "SQLite","Redis", "MongoDB","Surrealist" ],
      color: "#F472B6"
    },
    {
      title: "Tools & Testing & Other",
      icon: "🔧",
      items: ["Jira", "Confluence", "Trello", "Figma","MSTest", "NUnit","DotCover", "DotMemory", "DotTrace"],
      color: "#22C55E"
    },
    {
      title: "Game Development",
      icon: "🎮",
      items: ["Unity", "Unreal", "WebGL", "WASM"],
      color: "#C084FC"
    }
  ],
  projects: [
    {
      title: "AI Website Builder",
      icon: "🤖",
      color: "#4ADE80",
      tags: ["TypeScript", "SvelteKit", "SurrealDB","Pub/Sub"],
      desc: "Contributed to AI-powered website builder at Siteforge.io.",
      project_type: "Full Stack Application",
     // github: "https://github.com/fengyuan213/ai-website-builder",
      demo_live: "https://siteforge.io",
      details: "Built real-time messaging and automated support system using TypeScript, SvelteKit, and SurrealDB. This platform automates website creation using AI, providing seamless integration with real-time data sources and user interactions.",
      //image: "siteforge_screenshot.png",
      features: [
        { icon: "⚙️", title: "AI-Powered Automation", desc: "Uses AI models to generate website structures dynamically." },
        { icon: "📡", title: "Real-Time Messaging", desc: "Implemented live communication features using WebSockets." }
      ]
    },
    {
      title: "Weather Aggregation System",
      icon: "🌤️",
      color: "#22D3EE",
      tags: ["Java", "REST", "JUnit", "Mockito", "JaCoCo"],
      desc: "Fault-tolerant distributed weather data aggregation server.",
      project_type: "Distributed System",
      details: "Implemented robust failure recovery, synchronization, concurrency, and RESTful APIs. The system supports multi-threaded data processing and fault-tolerant mechanisms to ensure consistent and reliable weather data aggregation.",
      //image: "weather_system.png",
      features: [
        { icon: "🔄", title: "Multi-Threading", desc: "Uses concurrent data processing to handle large volumes of weather data efficiently." },
        { icon: "🛡️", title: "Error Recovery", desc: "Incorporates self-healing mechanisms to ensure data integrity and availability." }
      ]
    },
    {
      title: "Open Launcher",
      icon: "🎮",
      color: "#F87171",
      tags: ["C#", ".NET", "WPF", "AWS", "NUnit"],
      desc: "Incremental update and anti-cheat integration for gaming.",
      project_type: "Desktop Application",
      details: "Developed an intelligent launcher that enables seamless game updates while preventing unauthorized modifications. Uses AWS for hosting, WebSockets for real-time data exchange, and a built-in anti-cheat mechanism to ensure fair play.",
      //image: "open_launcher.png",
      features: [
        { icon: "🚨", title: "Anti-Cheat Protection", desc: "Monitors and blocks unauthorized game modifications to ensure fair play." },
        { icon: "♻️", title: "Smart Updates", desc: "Only updates necessary files, reducing bandwidth and improving performance." }
      ]
    },
    {
      title: "AssetUpdater Library",
      icon: "📦",
      color: "#FB923C",
      tags: ["C#", ".NET", "NuGet", "WinForms"],
      desc: "Automated library for efficient asset management and updates.",
      project_type: "Library",
      github: "https://github.com/fengyuan213/assetsUpdater",
      details: "Provides an intelligent update mechanism that optimizes bandwidth usage and speeds up downloads using SHA1-based change detection and multi-threaded downloading. Packaged as a NuGet library for seamless integration.",
      //image: "asset_updater.png",
      features: [
        { icon: "⚡", title: "Incremental Updates", desc: "Detects changes in assets and updates only modified files to save bandwidth." },
        { icon: "🔗", title: "NuGet Integration", desc: "Easily integrates with .NET applications through the NuGet package manager." }
      ]
    },
    {
      title: "Doodle Beat Game",
      icon: "🎮",
      color: "#A78BFA",
      tags: ["Unity", "C#", "WebGL", "WASM"],
      desc: "Interactive 2D game deployed on the web.",
      project_type: "Game Development",
      details: "Developed a rhythm-based game using Unity, deployed through WebGL and WASM for smooth performance on web browsers. The game features custom-designed levels and interactive music-based mechanics.",
      //image: "doodle_beat.png",
      features: [
        { icon: "🎵", title: "Music-Based Gameplay", desc: "Game mechanics dynamically adapt to the rhythm of the background music." },
        { icon: "🌍", title: "Web Deployment", desc: "Runs directly in a web browser using WebGL and WebAssembly for efficient execution." }
      ]
    },
    {
      title: "Mystipic AI",
      icon: "🖼️",
      color: "#818CF8",
      tags: ["React", "AWS S3", "ChatBot"],
      desc: "AI-driven image transformation application.",
      project_type: "AI Application",
      //github: "https://github.com/fengyuan213/mystipic-ai",
      //demo_live: "https://mystipic.ai",
      details: "Developed an AI-powered application that transforms images using machine learning models. The platform allows users to apply filters, generate AI-driven artistic modifications, and store results on AWS S3.",
      //image: "mystipic_ai.png",
      features: [
        { icon: "🖌️", title: "AI Image Processing", desc: "Transforms user images using deep learning models for artistic effects." },
        { icon: "☁️", title: "Cloud Storage", desc: "Stores processed images securely on AWS S3 for easy access and sharing." }
      ]
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
