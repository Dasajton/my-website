import type { ContentEntry, ProjectFrontmatter } from "@/lib/mdx";
import { ProjectCard } from "./project-card";

type ProjectGridProps = {
  projects: ContentEntry<ProjectFrontmatter>[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        Noch keine Projekte vorhanden.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          frontmatter={project.frontmatter}
          index={i}
        />
      ))}
    </div>
  );
}
