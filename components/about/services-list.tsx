"use client";

import { useLocale } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";
import { motion } from "framer-motion";

export function ServicesList() {
  const locale = useLocale() as "de" | "en";

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {services.map((service, i) => (
        <motion.div
          key={service.titleEn}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08, duration: 0.3 }}
        >
          <Card className="h-full transition-colors hover:border-primary/30">
            <CardContent className="flex gap-4 p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <service.icon size={20} />
              </div>
              <div>
                <h3 className="mb-1 font-medium">
                  {locale === "de" ? service.titleDe : service.titleEn}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {locale === "de"
                    ? service.descriptionDe
                    : service.descriptionEn}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
