import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-100 -translate-y-16 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform focus:translate-y-0"
        >
          {locale === "de" ? "Zum Inhalt springen" : "Skip to content"}
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
