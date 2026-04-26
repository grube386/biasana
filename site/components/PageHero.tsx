import Image from 'next/image';
import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'cream' | 'paper' | 'deep';
type TitleVariant = 'display' | 'serif';

type ImageSpec = { src: string; alt: string };
type Stat = { value: ReactNode; label: string };

type Props = {
  eyebrow?: string;
  title: ReactNode;
  glory?: string;
  lede?: ReactNode;
  image?: ImageSpec;
  secondaryImage?: ImageSpec;
  cta?: ReactNode;
  stats?: Stat[];
  tone?: Tone;
  titleVariant?: TitleVariant;
  className?: string;
};

/**
 * Subpage hero — flagship pattern from the Biasana design bundle.
 * Warm cream canvas with a thin left vzorec column, serif or display title,
 * inline Glory accent line, optional stats row, and an offset image pair.
 * Staggered fade-in matches the flagship rhythm: 0 · 120 · 200 · 260 · 380 · 480 ms.
 */
export function PageHero({
  eyebrow,
  title,
  glory,
  lede,
  image,
  secondaryImage,
  cta,
  stats,
  tone = 'cream',
  titleVariant = 'serif',
  className,
}: Props) {
  const isDeep = tone === 'deep';
  const bg =
    tone === 'deep'
      ? 'hero-teal text-white grain'
      : tone === 'paper'
        ? 'bg-paper'
        : 'bg-cream';

  return (
    <section
      className={cn(
        'relative overflow-hidden pt-[118px] pb-[70px] md:pt-[150px] md:pb-[110px]',
        bg,
        className
      )}
    >
      {/* Left pattern column — flagship motif. Ghost in deep tone. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-1/2"
        style={{
          // Use a rotated source so the repeated motif runs in the intended direction.
          backgroundImage: 'url(/brand/vzorec-clean-rotated-90.svg)',
          backgroundRepeat: 'repeat-y',
          backgroundSize: 'max(200px, 35%) auto',
          backgroundPosition: 'left center',
          opacity: isDeep
            ? 'calc(var(--pattern-opacity) * 0.8)'
            : 'calc(var(--pattern-opacity) * 1.4)',
          mixBlendMode: isDeep ? 'screen' : 'multiply',
        }}
      />
      {isDeep ? <div className="vz" aria-hidden /> : null}

      <div className="relative mx-auto max-w-wide px-5 pl-10 md:px-10 md:pl-[88px]">
        <div
          className={cn(
            'grid grid-cols-1 items-center gap-12',
            image && 'md:grid-cols-[1.15fr_1fr] md:gap-20'
          )}
        >
          <div className="relative">
            {eyebrow ? (
              <p
                className={cn(
                  'eyebrow animate-fade-in',
                  isDeep && 'eyebrow-white'
                )}
                style={{ animationDelay: '0ms' }}
              >
                {eyebrow}
              </p>
            ) : null}

            {titleVariant === 'serif' ? (
              <h1
                className={cn(
                  'serif-display mt-5 animate-fade-in',
                  isDeep ? 'text-white' : 'text-teal-dark'
                )}
                style={{
                  animationDelay: '120ms',
                  fontSize: 'clamp(2.5rem, 6.4vw, 5.25rem)',
                  lineHeight: 1.02,
                  letterSpacing: '-0.01em',
                }}
              >
                {title}
              </h1>
            ) : (
              <h1
                className={cn(
                  'font-display uppercase tracking-[0.02em] mt-5 text-display-xl animate-fade-in',
                  isDeep ? 'text-white' : 'text-teal-dark'
                )}
                style={{ animationDelay: '120ms' }}
              >
                {title}
              </h1>
            )}

            {glory ? (
              <p
                className={cn(
                  'accent-md mt-5 animate-fade-in',
                  isDeep ? 'text-sage-mist' : 'text-teal-light'
                )}
                style={{ animationDelay: '240ms' }}
              >
                {glory}
              </p>
            ) : null}

            {lede ? (
              <div
                className={cn(
                  // Hero intro: slightly larger than 1.06rem (+2px) and semibold so the copy feels clearer.
                  'mt-8 max-w-[480px] text-[calc(1.06rem+2px)] font-semibold leading-[1.6] animate-fade-in',
                  isDeep ? 'text-white/85' : 'text-ink-soft'
                )}
                style={{ animationDelay: '260ms' }}
              >
                {lede}
              </div>
            ) : null}

            {cta ? (
              <div
                className="mt-8 flex flex-wrap gap-3 animate-fade-in"
                style={{ animationDelay: '380ms' }}
              >
                {cta}
              </div>
            ) : null}

            {stats && stats.length ? (
              <dl
                className="mt-12 flex flex-wrap gap-x-10 gap-y-5 animate-fade-in"
                style={{ animationDelay: '480ms' }}
              >
                {stats.map((s, i) => (
                  <div key={i}>
                    <dt
                      className={cn(
                        'serif-display text-[28px] leading-none',
                        isDeep ? 'text-white' : 'text-teal-dark'
                      )}
                    >
                      {s.value}
                    </dt>
                    <dd
                      className={cn(
                        'mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]',
                        isDeep ? 'text-sage-mist/80' : 'text-muted'
                      )}
                    >
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          {image ? (
            <div
              className="relative animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] shadow-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
                {isDeep ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 via-transparent to-transparent" />
                ) : null}
              </div>
              {secondaryImage ? (
                <div
                  className="absolute -bottom-8 -right-2 w-[52%] overflow-hidden rounded-[12px] shadow-[0_20px_50px_-20px_rgba(0,60,55,0.35)] md:-right-3 md:-bottom-10"
                  style={{ aspectRatio: '4 / 5' }}
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={secondaryImage.src}
                      alt={secondaryImage.alt}
                      fill
                      sizes="(min-width: 768px) 22vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
