import { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Tone = 'white' | 'cream' | 'paper' | 'sage';
type TitleVariant = 'display' | 'serif';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  className?: string;
  innerClassName?: string;
  bleed?: boolean;
  align?: 'start' | 'center';
  tone?: Tone;
  titleVariant?: TitleVariant;
};

const TONE_BG: Record<Tone, string> = {
  white: 'bg-white',
  cream: 'bg-cream',
  paper: 'bg-paper',
  sage: 'bg-sage-paper',
};

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className,
  innerClassName,
  bleed = false,
  align = 'start',
  tone = 'white',
  titleVariant = 'display',
}: Props) {
  return (
    <section
      id={id}
      className={cn('py-section-sm md:py-section', TONE_BG[tone], className)}
    >
      <div
        className={cn(
          bleed ? 'w-full' : 'mx-auto max-w-wide px-5 md:px-10',
          innerClassName
        )}
      >
        {(eyebrow || title || lede) ? (
          <header
            className={cn(
              'mb-10 md:mb-14 max-w-reading',
              align === 'center' && 'mx-auto text-center'
            )}
          >
            {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
            {title ? (
              titleVariant === 'serif' ? (
                <h2 className="serif-display text-[clamp(1.75rem,3.6vw,2.75rem)] leading-[1.25] text-teal-dark">
                  {title}
                </h2>
              ) : (
                <h2 className="font-display uppercase text-display-lg text-teal-dark tracking-[0.02em]">
                  {title}
                </h2>
              )
            ) : null}
            {lede ? (
              <div className="mt-5 text-[1.08rem] leading-relaxed text-ink-soft">{lede}</div>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  );
}
