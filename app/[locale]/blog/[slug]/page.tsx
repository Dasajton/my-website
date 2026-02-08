import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft, Calendar } from "lucide-react";
import { getBlogPost, getBlogSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/blog/mdx-components";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { routing } from "@/i18n/routing";
import rehypePrettyCode from "rehype-pretty-code";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
  };
}

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  for (const locale of routing.locales) {
    const slugs = getBlogSlugs(locale);
    for (const slug of slugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(locale, slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;

  const formattedDate = new Date(frontmatter.date).toLocaleDateString(
    locale === "de" ? "de-DE" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href={`/${locale}/blog`}>
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

      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <time dateTime={frontmatter.date}>{formattedDate}</time>
      </div>

      <div className="mb-8 flex flex-wrap gap-1.5">
        {frontmatter.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <Separator className="mb-8" />

      <div className="prose-custom">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: {
                      dark: "github-dark",
                      light: "github-light",
                    },
                    keepBackground: false,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
