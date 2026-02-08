import { useTranslations, useLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { PageTransition } from "@/components/shared/page-transition";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "footer" });
  return {
    title: t("impressum"),
    alternates: {
      canonical: `/${locale}/impressum`,
      languages: { de: "/de/impressum", en: "/en/impressum" },
    },
  };
}

export default function ImpressumPage() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("impressum")}
        </h1>

        <div className="space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {locale === "de"
                ? "Angaben gemäß § 5 DDG"
                : "Information according to § 5 DDG"}
            </h2>
            <p>
              David Sajitz
              <br />
              Strücken 44
              <br />
              58579 Schalksmühle
              <br />
             {locale === "de" ? "Deutschland" : "Germany"}
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {locale === "de" ? "Kontakt" : "Contact"}
            </h2>
            <p>
              E-Mail: davidsajitz@gmail.de
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {locale === "de"
                ? "Verantwortlich für den Inhalt"
                : "Responsible for content"}
            </h2>
            <p>
              David Sajitz
              <br />
              Strücken 44
              <br />
              58579 Schalksmühle
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {locale === "de" ? "Haftungsausschluss" : "Disclaimer"}
            </h2>

            <h3 className="mb-1 mt-4 font-medium text-foreground">
              {locale === "de"
                ? "Haftung für Inhalte"
                : "Liability for content"}
            </h3>
            <p>
              {locale === "de"
                ? "Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden."
                : "The contents of these pages have been created with the greatest care. However, no guarantee can be given for the correctness, completeness and topicality of the contents."}
            </p>

            <h3 className="mb-1 mt-4 font-medium text-foreground">
              {locale === "de"
                ? "Haftung für Links"
                : "Liability for links"}
            </h3>
            <p>
              {locale === "de"
                ? "Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein Einfluss genommen werden kann. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter verantwortlich."
                : "This website contains links to external third-party websites over whose content we have no influence. The respective provider is always responsible for the content of the linked pages."}
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
