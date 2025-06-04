import { siteConfig } from "@/lib/config";
import { MetadataRoute } from "next";

export const generateSitemapObject = ( url: string, priority?: number, changeFrequency?: | 'monthly' | 'always' | 'hourly' | 'daily' | 'weekly' | 'yearly' | 'never' | undefined ) => {
    return {
      url: siteConfig.site.url + url,
      lastModified: new Date(),
      changeFrequency: changeFrequency || 'monthly',
      priority: priority || 0.8,
    };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticRoutes: MetadataRoute.Sitemap = []
    const dynamicRoutes: MetadataRoute.Sitemap = [];
    return[ ...staticRoutes, ...dynamicRoutes]
}