export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Angular", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TailwindCSS", category: "frontend" },
  { name: "HTML / CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "C#/ASP.NET", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "SQL Server", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // Tools & DevOps
  { name: "Git / GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "CI/CD", category: "tools" },

  // Sonstiges
  { name: "WordPress / WooCommerce", category: "other" },
  { name: "Netzwerktechnik", category: "other" },
];

export const skillCategories = {
  frontend: { de: "Frontend", en: "Frontend" },
  backend: { de: "Backend", en: "Backend" },
  tools: { de: "Tools & DevOps", en: "Tools & DevOps" },
  other: { de: "Sonstiges", en: "Other" },
} as const;
