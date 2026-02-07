"use client";

import { useLocale } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { skills, skillCategories } from "@/data/skills";
import { motion } from "framer-motion";

export function SkillsGrid() {
  const locale = useLocale() as "de" | "en";

  const categories = Object.entries(skillCategories) as [
    keyof typeof skillCategories,
    (typeof skillCategories)[keyof typeof skillCategories],
  ][];

  return (
    <div className="space-y-6">
      {categories.map(([key, label]) => {
        const categorySkills = skills.filter((s) => s.category === key);
        if (categorySkills.length === 0) return null;

        return (
          <div key={key}>
            <h3 className="mb-3 text-sm font-medium text-muted-foreground">
              {label[locale]}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03, duration: 0.2 }}
                >
                  <Badge variant="secondary" className="text-sm">
                    {skill.name}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
