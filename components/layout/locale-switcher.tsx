"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale");

  function switchTo(target: string) {
    if (target === locale) return;
    const segments = pathname.split("/");
    if (routing.locales.includes(segments[1] as "de" | "en")) {
      segments[1] = target;
    }
    router.push(segments.join("/"));
  }

  return (
    <div
      className="flex items-center rounded-md border border-border/60 bg-muted/50"
      role="radiogroup"
      aria-label={t("switch")}
    >
      {(["de", "en"] as const).map((lang) => (
        <button
          key={lang}
          onClick={() => switchTo(lang)}
          role="radio"
          aria-checked={locale === lang}
          className={cn(
            "relative px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition-all",
            "first:rounded-l-[5px] last:rounded-r-[5px]",
            locale === lang
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
