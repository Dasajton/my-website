import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SocialLinks } from "@/components/shared/social-links";
import { socialLinks } from "@/data/social";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default function ContactPage() {
  const t = useTranslations("contact");

  const emailLink = socialLinks.find((l) => l.href.startsWith("mailto:"));
  const email = emailLink?.href.replace("mailto:", "");

  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
        {t("title")}
      </h1>
      <p className="mb-10 text-muted-foreground">{t("description")}</p>

      <div className="space-y-6">
        {/* E-Mail */}
        <Card>
          <CardContent className="flex items-center gap-4 p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                {t("email_label")}
              </p>
              <a
                href={emailLink?.href}
                className="text-base font-medium transition-colors hover:text-primary"
              >
                {email}
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <Card>
          <CardContent className="p-5">
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {t("social_label")}
            </p>
            <SocialLinks iconSize={22} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
