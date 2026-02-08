import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/home/hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { de: "/de", en: "/en" },
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "David Sajitz",
      url: "https://davidsajitz.de",
      jobTitle: "Fullstack Developer",
      sameAs: [
        "https://github.com/dasajton",
        "https://www.linkedin.com/in/david-sajitz-748b831a4",
      ],
    },
    {
      "@type": "WebSite",
      name: "David Sajitz",
      url: "https://davidsajitz.de",
      inLanguage: ["de", "en"],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
    </>
  );
}
