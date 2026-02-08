"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { BlogFrontmatter } from "@/lib/mdx";
import { motion } from "framer-motion";

type BlogCardProps = {
  slug: string;
  frontmatter: BlogFrontmatter;
  index: number;
};

export function BlogCard({ slug, frontmatter, index }: BlogCardProps) {
  const locale = useLocale();
  const t = useTranslations("blog");

  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    locale === "de" ? "de-DE" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

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
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={frontmatter.date}>{formattedDate}</time>
          </div>

          <Link
            href={`/${locale}/blog/${slug}`}
            className="text-lg font-semibold transition-colors hover:text-primary"
          >
            {frontmatter.title}
          </Link>

          <p className="text-sm text-muted-foreground">
            {frontmatter.description}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <Link
            href={`/${locale}/blog/${slug}`}
            className="mt-auto pt-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {t("read_more")} →
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}
