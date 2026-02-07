import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";
import { SocialLinks } from "@/components/shared/social-links";

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/50">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <SocialLinks />

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link
              href={`/${locale}/impressum`}
              className="transition-colors hover:text-foreground"
            >
              {t("impressum")}
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <Link
              href={`/${locale}/privacy`}
              className="transition-colors hover:text-foreground"
            >
              {t("privacy")}
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-sm text-muted-foreground">
          &copy; {year} {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
