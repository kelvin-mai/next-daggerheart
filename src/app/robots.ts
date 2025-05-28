import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/utils/url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [],
      },
    ],
    sitemap: `${getBaseUrl()}/sitemap.xml`,
  };
}
