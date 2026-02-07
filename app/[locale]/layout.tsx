import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "de" | "en")) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <div className="flex min-h-screen flex-col">
        {/* Navbar kommt in Phase 2 */}
        <main className="flex-1">{children}</main>
        {/* Footer kommt in Phase 2 */}
      </div>
    </NextIntlClientProvider>
  );
}
