import type { Metadata } from 'next';

export type PageFrontmatter = {
  title?: string;
  description?: string;
  heroImage?: string;
  ogImage?: string;
  smsPrefill?: string;
  emailOwner?: string;
  emailSubject?: string;
};

/**
 * Translates MDX frontmatter into a Next.js Metadata object. Keeps the frontmatter
 * schema readable for non-technical editors while still yielding proper <title>,
 * description, and OG tags on the rendered page.
 */
function stripBiasanaSuffix(title: string): string {
  return title
    .replace(/\s*[—\-|·]\s*Biasana\b.*$/i, '')
    .trim();
}

export function mdxMetadata(frontmatter: PageFrontmatter = {}): Metadata {
  const rawTitle = frontmatter.title;
  const title = rawTitle ? stripBiasanaSuffix(rawTitle) : undefined;
  const description = frontmatter.description;
  const ogImage = frontmatter.ogImage ?? frontmatter.heroImage;

  const metadata: Metadata = {};
  if (title) metadata.title = title;
  if (description) metadata.description = description;
  if (title || description || ogImage) {
    metadata.openGraph = {
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    };
  }
  return metadata;
}
