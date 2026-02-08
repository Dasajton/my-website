import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type ProjectFrontmatter = {
  title: string;
  description: string;
  date: string;
  tech: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
};

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
};

export type ContentEntry<T> = {
  slug: string;
  frontmatter: T;
  content: string;
};

function getContentEntries<T>(
  type: "projects" | "blog",
  locale: string
): ContentEntry<T>[] {
  const dir = path.join(contentDirectory, type, locale);

  if (!fs.existsSync(dir)) {
    return [];
  }

  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        frontmatter: data as T,
        content,
      };
    })
    .sort(
      (a, b) =>
        new Date((b.frontmatter as Record<string, unknown>).date as string).getTime() -
        new Date((a.frontmatter as Record<string, unknown>).date as string).getTime()
    );
}

function getContentEntry<T>(
  type: "projects" | "blog",
  locale: string,
  slug: string
): ContentEntry<T> | null {
  const filePath = path.join(contentDirectory, type, locale, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    frontmatter: data as T,
    content,
  };
}

// Projects
export function getProjects(locale: string) {
  return getContentEntries<ProjectFrontmatter>("projects", locale);
}

export function getProject(locale: string, slug: string) {
  return getContentEntry<ProjectFrontmatter>("projects", locale, slug);
}

export function getFeaturedProjects(locale: string) {
  return getProjects(locale).filter((p) => p.frontmatter.featured);
}

// Blog
export function getBlogPosts(locale: string) {
  return getContentEntries<BlogFrontmatter>("blog", locale);
}

export function getBlogPost(locale: string, slug: string) {
  return getContentEntry<BlogFrontmatter>("blog", locale, slug);
}

// Slugs for generateStaticParams
export function getProjectSlugs(locale: string) {
  return getProjects(locale).map((p) => p.slug);
}

export function getBlogSlugs(locale: string) {
  return getBlogPosts(locale).map((p) => p.slug);
}
