import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-09-10');
  return [
    { url: 'https://www.hivaulted.com/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.hivaulted.com/privacy-policy', lastModified, changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://www.hivaulted.com/terms-conditions', lastModified, changeFrequency: 'yearly', priority: 0.2 },
  ];
}
