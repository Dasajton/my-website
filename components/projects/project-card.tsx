"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProjectFrontmatter } from "@/lib/mdx";
import { motion } from "framer-motion";

type ProjectCardProps = {
  slug: string;
  frontmatter: ProjectFrontmatter;
  index: number;
};

export function ProjectCard({ slug, frontmatter, index }: ProjectCardProps) {
  const locale = useLocale();
  const t = useTranslations("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
    >
      <Card className="group h-full overflow-hidden transition-colors hover:border-primary/30">
        {frontmatter.image && (
          <div className="relative aspect-video overflow-hidden">
            <Image
              src={frontmatter.image}
              alt={frontmatter.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <CardContent className="flex flex-col gap-3 p-5">
          <Link
            href={`/${locale}/projects/${slug}`}
            className="text-lg font-semibold transition-colors hover:text-primary"
          >
            {frontmatter.title}
          </Link>

          <p className="text-sm text-muted-foreground">
            {frontmatter.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="mt-auto flex gap-2 pt-2">
            {frontmatter.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <a
                  href={frontmatter.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                  {t("view_project")}
                </a>
              </Button>
            )}
            {frontmatter.githubUrl && (
              <Button asChild variant="ghost" size="sm">
                <a
                  href={frontmatter.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-1.5 h-3.5 w-3.5" />
                  {t("view_code")}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
