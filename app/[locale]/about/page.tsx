import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import { SkillsGrid } from "@/components/about/skills-grid";
import { ServicesList } from "@/components/about/services-list";
import { ContactCards } from "@/components/about/contact-cards";
import { PageTransition } from "@/components/shared/page-transition";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default function AboutPage() {
  const t = useTranslations("about");
  const tc = useTranslations("contact");

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>

        <div className="mb-12 space-y-4 text-muted-foreground">
          <p>{t("intro_1")}</p>
          <p>{t("intro_2")}</p>
        </div>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">{t("skills_title")}</h2>
          <SkillsGrid />
        </section>

        <Separator className="my-12" />

        {/* Services */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold">
            {t("services_title")}
          </h2>
          <ServicesList />
        </section>

        <Separator className="my-12" />

        {/* Kontakt */}
        <section id="kontakt">
          <h2 className="mb-4 text-2xl font-semibold">{tc("title")}</h2>
          <p className="mb-6 text-muted-foreground">{tc("description")}</p>
          <ContactCards />
        </section>
      </div>
    </PageTransition>
  );
}
