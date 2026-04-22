import type { MetadataRoute } from 'next';
import { NAV_PRIMARY } from '@/lib/nav';
import { COURSES } from '@/lib/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://biasana.si';
  const now = new Date();
  const staticRoutes = ['/', ...NAV_PRIMARY.map((n) => n.href)];
  const courseRoutes = COURSES.map((c) => `/spletni-tecaji/${c.slug}`);
  return [...staticRoutes, ...courseRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }));
}
