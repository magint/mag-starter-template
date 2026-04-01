import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.site.url.replace(/\/$/, "");

  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
    },
  ];
}
