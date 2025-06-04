import { siteConfig } from '@/lib/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: siteConfig.env.isProd ? '/' : '',
      disallow: [
        siteConfig.env.isProd ? '' : '/',
        '/cdn-cgi/',
      ],
    },
    sitemap: siteConfig.site.url + '/sitemap.xml',
  };
}
