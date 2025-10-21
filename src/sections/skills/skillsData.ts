export interface Skill {
  name: string;
  icon: string;
  level: number; // 0-100
  category: string;
  color: string;
  description?: string;
}

export const skillsData: Skill[] = [
  // Frontend Development
  {
    name: "JavaScript",
    icon: "javascript",
    level: 96,
    category: "Programming Languages",
    color: "#F7DF1E",
    description: "advanced"
  },
  {
    name: "Next.js",
    icon: "nextjs",
    level: 90,
    category: "Frontend Development",
    color: "#000000",
    description: "advanced"
  },
   {
    name: "Nuxt.js",
    icon: "nuxt",
    level: 90,
    category: "Frontend Development",
    color: "#000056",
    description: "advanced"
  },
  {
    name: "React",
    icon: "react",
    level: 94,
    category: "Frontend Development",
    color: "#61DAFB",
    description: "advanced"
  },
  {
    name: "Angular",
    icon: "angular",
    level: 85,
    category: "Frontend Development",
    color: "#DD0031",
    description: "Enterprise frontend framework"
  },
  {
    name: "TypeScript",
    icon: "typescript",
    level: 93,
    category: "Programming Languages",
    color: "#3178C6",
    description: "advanced"
  },
  {
    name: "Express.js",
    icon: "express",
    level: 88,
    category: "Frontend Development",
    color: "#000000",
    description: "Web application framework for Node.js"
  },
  {
    name: "Svelt",
    icon: "svelt",
    level: 84,
    category: "Frontend Development",
    color: "#10c719ff",
    description: "Web application framework for Node.js"
  },
  {
    name: "Shadcn/ui",
    icon: "shadcn",
    level: 92,
    category: "Frontend Development",
    color: "#e412b6ff",
    description: "advanced"
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 91,
    category: "Frontend Development",
    color: "#06B6D4",
    description: "advanced"
  },

  // Backend Development
  {
    name: "C#",
    icon: "csharp",
    level: 87,
    category: "Backend Development",
    color: "#239120",
    description: "Server-side JavaScript development"
  },
  {
    name: "Python",
    icon: "python",
    level: 91,
    category: "Backend Development",
    color: "#3776AB",
    description: "advanced"
  },
  {
    name: "Node.js",
    icon: "nodejs",
    level: 87,
    category: "Backend Development",
    color: "#339933",
    description: "advanced"
  },
  {
    name: "PHP",
    icon: "php",
    level: 89,
    category: "Backend Development",
    color: "#b4be1dff",
    description: "advanced"
  },
{
    name: "Laravel",
    icon: "laravel",
    level: 84,
    category: "Backend Development",
    color: "#7519ecff",
    description: "advanced"
  },
  {
    name: "Django",
    icon: "django",
    level: 89,
    category: "Backend Development",
    color: "#e7640cff",
    description: "advanced"
  },

  // Databases
  {
    name: "MongoDB",
    icon: "mongodb",
    level: 78,
    category: "Databases",
    color: "#409b03ff",
    description: "NoSQL database management"
  },
  {
    name: "MySQL",
    icon: "mysql",
    level: 80,
    category: "Databases",
    color: "#e22e01ff",
    description: "Database design and optimization"
  },
  {
    name: "PostgreSQL",
    icon: "postgresql",
    level: 83,
    category: "Databases",
    color: "#02d842ff",
    description: "Relational database management"
  },
  {
    name: "Firebase",
    icon: "firebase",
    level: 89,
    category: "Databases",
    color: "#df1dc5ff",
    description: "Relational database management"
  },
  {
    name: "SQLite",
    icon: "sqlite",
    level: 82,
    category: "Databases",
    color: "#9868cfff",
    description: "Relational database management"
  },
  {
    name: "Supabase",
    icon: "supabse",
    level: 76,
    category: "Databases",
    color: "#03d626ff",
    description: "Relational database management"
  },
   // cloud
  {
    name: "Vercel",
    icon: "vercel",
    level: 95,
    category: "Cloud",
    color: "#f11224ff",
    description: "Cloud"
  },
  {
    name: "AWS",
    icon: "aws",
    level: 87,
    category: "Cloud",
    color: "#f3169eff",
    description: "Cloud"
  },
  {
    name: "Google Cloud Platform",
    icon: "gcp",
    level: 75,
    category: "Cloud",
    color: "#0c31d6ff",
    description: "Cloud"
  },
{
    name: "Azure",
    icon: "azure",
    level: 86,
    category: "Cloud",
    color: "#bcda15ff",
    description: "Cloud"
  },

];

export const skillCategories = [
  { name: "All", value: "all" },
  { name: "Frontend Development", value: "Frontend Development" },
  { name: "Backend Development", value: "Backend Development" },
  { name: "Databases", value: "Databases" },
  { name: "Cloud", value: "Cloud" },
];
