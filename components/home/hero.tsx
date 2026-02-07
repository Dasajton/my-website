"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/shared/page-transition";
import { motion } from "framer-motion";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <PageTransition>
      <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-3 text-base text-muted-foreground sm:text-lg"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("name")}
            <span className="text-primary">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mx-auto mb-8 max-w-lg text-base text-muted-foreground sm:text-lg"
          >
            {t("tagline")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Button asChild size="lg">
              <Link href={`/${locale}/projects`}>
                {t("cta_projects")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/contact`}>
                <Mail className="mr-2 h-4 w-4" />
                {t("cta_contact")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
