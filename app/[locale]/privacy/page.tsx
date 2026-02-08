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
    title: t("privacy"),
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { de: "/de/privacy", en: "/en/privacy" },
    },
  };
}

export default function PrivacyPage() {
  const t = useTranslations("footer");
  const locale = useLocale();

  const isDE = locale === "de";

  return (
    <PageTransition>
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          {t("privacy")}
        </h1>

        <div className="space-y-6 text-muted-foreground">
          {/* Allgemein */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {isDE ? "Allgemeine Hinweise" : "General Information"}
            </h2>
            <p>
              {isDE
                ? "Die folgenden Hinweise geben einen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."
                : "The following information provides an overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally."}
            </p>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {isDE
                ? "Verantwortlicher für die Datenverarbeitung"
                : "Controller for data processing"}
            </h2>
            <p>
              David Sajitz
              <br />
              E-Mail: davidsajitz@gmail.de
            </p>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              Hosting
            </h2>
            <p>
              {isDE
                ? "Diese Website wird auf einem Virtual Private Server (VPS) bei STRATO gehostet. Bei Ihrem Besuch werden automatisch Informationen in sogenannten Server-Log-Dateien gespeichert, die Ihr Browser automatisch übermittelt. Dies sind:"
                : "This website is hosted on a Virtual Private Server (VPS) at STRATO. When you visit, information is automatically stored in so-called server log files, which your browser automatically transmits. These are:"}
            </p>
            <ul className="ml-6 mt-2 list-disc space-y-1">
              <li>
                {isDE
                  ? "Browsertyp und Browserversion"
                  : "Browser type and version"}
              </li>
              <li>
                {isDE
                  ? "Verwendetes Betriebssystem"
                  : "Operating system used"}
              </li>
              <li>Referrer URL</li>
              <li>
                {isDE
                  ? "Hostname des zugreifenden Rechners"
                  : "Hostname of the accessing computer"}
              </li>
              <li>
                {isDE
                  ? "Uhrzeit der Serveranfrage"
                  : "Time of the server request"}
              </li>
              <li>
                {isDE ? "IP-Adresse" : "IP address"}
              </li>
            </ul>
            <p className="mt-2">
              {isDE
                ? "Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website."
                : "This data is collected on the basis of Art. 6(1)(f) GDPR. The website operator has a legitimate interest in the technically error-free presentation and optimization of his website."}
            </p>
          </section>

          {/* Analytics */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {isDE ? "Webanalyse" : "Web Analytics"}
            </h2>
            <p>
              {isDE
                ? "Diese Website verwendet Umami, eine datenschutzfreundliche, selbst gehostete Webanalyse-Lösung. Umami verwendet keine Cookies und erfasst keine personenbezogenen Daten. Die erhobenen Daten sind vollständig anonymisiert und dienen ausschließlich der statistischen Auswertung der Websitenutzung."
                : "This website uses Umami, a privacy-friendly, self-hosted web analytics solution. Umami does not use cookies and does not collect any personal data. The data collected is fully anonymized and is used exclusively for statistical evaluation of website usage."}
            </p>
            <p className="mt-2">
              {isDE
                ? "Es werden keine Daten an Dritte übermittelt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO."
                : "No data is transmitted to third parties. Processing is carried out on the basis of Art. 6(1)(f) GDPR."}
            </p>
          </section>

          {/* SSL/TLS */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {isDE ? "SSL/TLS-Verschlüsselung" : "SSL/TLS Encryption"}
            </h2>
            <p>
              {isDE
                ? `Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von \u201Ehttp://\u201C auf \u201Ehttps://\u201C wechselt.`
                : `This site uses SSL/TLS encryption for security reasons. You can recognize an encrypted connection by the fact that the address bar of the browser changes from "http://" to "https://".`}
            </p>
          </section>

          {/* Betroffenenrechte */}
          <section>
            <h2 className="mb-2 text-xl font-semibold text-foreground">
              {isDE ? "Ihre Rechte" : "Your Rights"}
            </h2>
            <p>
              {isDE
                ? "Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der oben angegebenen E-Mail-Adresse an mich wenden."
                : "You have the right to information about your stored personal data, its origin and recipients, and the purpose of data processing at any time, as well as the right to correction, blocking or deletion of this data. You can contact me at any time at the email address given above for this and other questions on the subject of data protection."}
            </p>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
