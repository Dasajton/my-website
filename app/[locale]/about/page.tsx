import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Separator } from "@/components/ui/separator";
import { SkillsGrid } from "@/components/about/skills-grid";
import { ServicesList } from "@/components/about/services-list";

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

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>

      {/* Über mich Text — hier deinen echten Text einsetzen */}
      <div className="mb-12 space-y-4 text-muted-foreground">
        <p>
          Hallo! Ich bin David, ein leidenschaftlicher Fullstack-Entwickler aus
          Deutschland. Ich arbeite mit modernen Webtechnologien und entwickle
          Websites, Web-Apps und digitale Lösungen für verschiedene
          Anforderungen.
        </p>
        <p>
          Meine Schwerpunkte liegen in der Entwicklung mit React und Next.js,
          aber ich bin auch mit Backend-Technologien, WordPress und
          Netzwerktechnik vertraut. Ich lerne ständig dazu und begeistere mich
          für neue Technologien und Herangehensweisen.
        </p>
      </div>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold">{t("skills_title")}</h2>
        <SkillsGrid />
      </section>

      <Separator className="my-12" />

      {/* Services */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">{t("services_title")}</h2>
        <ServicesList />
      </section>
    </div>
  );
}
