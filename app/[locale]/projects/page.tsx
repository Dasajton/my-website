import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { getProjects } from "@/lib/mdx";
import { ProjectGrid } from "@/components/projects/project-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return { title: t("title") };
}

export default function ProjectsPage() {
  const t = useTranslations("projects");
  const locale = useLocale();
  const projects = getProjects(locale);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mb-10 text-muted-foreground">{t("description")}</p>

      <ProjectGrid projects={projects} />
    </div>
  );
}
