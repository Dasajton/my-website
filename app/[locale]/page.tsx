import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-2 text-lg text-muted-foreground">{t("greeting")}</p>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {t("name")}
        </h1>
        <p className="mx-auto max-w-lg text-lg text-muted-foreground">
          {t("tagline")}
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("cta_projects")}
          </a>
          <a
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            {t("cta_contact")}
          </a>
        </div>
      </div>
    </div>
  );
}
