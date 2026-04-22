import { cn } from '@/lib/cn';

/**
 * Soft radial that slowly inhales/exhales — signature motif echoing cranial rhythm.
 * Use as decoration behind hero content or section headers.
 */
export function Breath({
  className,
  tone = 'light',
}: {
  className?: string;
  tone?: 'light' | 'deep' | 'sage';
}) {
  const fill =
    tone === 'deep'
      ? 'rgba(4,82,76,0.65)'
      : tone === 'sage'
      ? 'rgba(171,205,195,0.55)'
      : 'rgba(47,150,136,0.45)';
  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute animate-breathe', className)}
      style={{
        background: `radial-gradient(closest-side, ${fill}, transparent 70%)`,
        filter: 'blur(0.5px)',
      }}
    />
  );
}
