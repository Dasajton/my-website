"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale");

  const nextLocale = locale === "de" ? "en" : "de";

  function handleSwitch() {
    const segments = pathname.split("/");
    // Replace the locale segment (first segment after /)
    if (routing.locales.includes(segments[1] as "de" | "en")) {
      segments[1] = nextLocale;
    }
    router.push(segments.join("/"));
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleSwitch}
      aria-label={t("switch")}
      title={t(nextLocale)}
    >
      <span className="text-sm font-medium uppercase">{nextLocale}</span>
    </Button>
  );
}
