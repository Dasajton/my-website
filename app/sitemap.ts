import type { MetadataRoute } from "next";
import { getProjectSlugs, getBlogSlugs } from "@/lib/mdx";
import { routing } from "@/i18n/routing";

const BASE_URL = "https://davidsajitz.de";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/projects", "/blog", "/impressum", "/privacy"];

  const staticEntries = staticPages.flatMap((page) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}${page}`])
        ),
      },
    }))
  );

  const projectEntries = routing.locales.flatMap((locale) =>
    getProjectSlugs(locale).map((slug) => ({
      url: `${BASE_URL}/${locale}/projects/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}/projects/${slug}`])
        ),
      },
    }))
  );

  const blogEntries = routing.locales.flatMap((locale) =>
    getBlogSlugs(locale).map((slug) => ({
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}/blog/${slug}`])
        ),
      },
    }))
  );

  return [...staticEntries, ...projectEntries, ...blogEntries];
}
