import { getBaseUrl } from '@/lib/utils';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string) => new URL(path, getBaseUrl()).toString();
  return [
    {
      url: url('/'),
      lastModified: new Date(),
    },
    {
      url: url('/card/create'),
      lastModified: new Date(),
    },
  ];
}
