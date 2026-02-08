import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProject, getProjectSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { PageTransition } from "@/components/shared/page-transition";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);
  if (!project) return { title: "Not Found" };
  return {
    title: project.frontmatter.title,
    description: project.frontmatter.description,
    alternates: {
      canonical: `/${locale}/projects/${slug}`,
      languages: {
        de: `/de/projects/${slug}`,
        en: `/en/projects/${slug}`,
      },
    },
  };
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    const slugs = getProjectSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export default async function ProjectPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProject(locale, slug);

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <PageTransition>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link href={`/${locale}/projects`}>
            <ArrowLeft className="mr-1.5 h-4 w-4" />
            {locale === "de" ? "Zurück" : "Back"}
          </Link>
        </Button>

        {frontmatter.image && (
          <div className="relative mb-8 aspect-video overflow-hidden rounded-lg">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {frontmatter.title}
        </h1>

        <p className="mb-4 text-lg text-muted-foreground">
          {frontmatter.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {frontmatter.tech.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mb-8 flex gap-3">
          {frontmatter.liveUrl && (
            <Button asChild size="sm">
              <a
                href={frontmatter.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-1.5 h-4 w-4" />
                {locale === "de" ? "Live ansehen" : "View Live"}
              </a>
            </Button>
          )}
          {frontmatter.githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a
                href={frontmatter.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1.5 h-4 w-4" />
                GitHub
              </a>
            </Button>
          )}
        </div>

        <Separator className="mb-8" />

        <div className="prose-custom">
          <MDXRemote source={content} components={mdxComponents} />
        </div>
      </article>
    </PageTransition>
  );
}
