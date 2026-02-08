import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getBlogPosts } from "@/lib/mdx";
import { BlogCard } from "@/components/blog/blog-card";
import { PageTransition } from "@/components/shared/page-transition";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return { title: t("title") };
}

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const posts = getBlogPosts(locale);

  return (
    <PageTransition>
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mb-10 text-muted-foreground">{t("description")}</p>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">
            {locale === "de"
              ? "Noch keine Artikel vorhanden."
              : "No articles yet."}
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {posts.map((post, index) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                frontmatter={post.frontmatter}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
}
