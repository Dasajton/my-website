"use client";

import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/data/social";
import { motion } from "framer-motion";

export function ContactCards() {
  return (
    <div className="space-y-4">
      {socialLinks.map((link, i) => {
        const displayUrl = link.href
          .replace("mailto:", "")
          .replace("https://", "");
        const isExternal = !link.href.startsWith("mailto:");

        return (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
          >
            <Card className="transition-colors hover:border-primary/30">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <link.icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {link.name}
                  </p>
                  <a
                    href={
                      isExternal && !link.href.startsWith("http")
                        ? `https://${link.href}`
                        : link.href
                    }
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className="text-base font-medium transition-colors hover:text-primary"
                  >
                    {displayUrl}
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
