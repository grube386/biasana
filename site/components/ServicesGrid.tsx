'use client';

import Link from 'next/link';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/cn';

export type ServiceItem = {
  href: string;
  title: string;
  description: string;
  who?: string;
  flagship?: boolean;
};

type Props = {
  items: ServiceItem[];
  className?: string;
};

/**
 * Hairline-divided services grid — 2px gaps on a rule-colored background
 * produce the thin editorial lines that define this section in the bundle.
 */
export function ServicesGrid({ items, className }: Props) {
  const [ref, shown] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn(
        'grid gap-[2px] border border-rule bg-rule',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        className
      )}
    >
      {items.map((s, i) => (
        <Link
          key={s.href}
          href={s.href}
          className={cn(
            'group fade relative flex min-h-[260px] flex-col gap-3.5 bg-white px-7 py-9 md:px-7 md:py-10',
            'transition-colors duration-300 hover:bg-cream',
            shown && 'in'
          )}
          style={{ ['--d' as any]: `${i * 60}ms` }}
        >
          <div className="flex items-start justify-between gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              {String(i + 1).padStart(2, '0')}
              {s.who ? <> · {s.who}</> : null}
            </span>
            {s.flagship ? (
              <span className="rounded-full border border-teal-bright px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.2em] text-teal-bright">
                Flagship
              </span>
            ) : null}
          </div>
          <h3 className="serif-display mt-auto text-[1.6rem] leading-[1.2] text-teal-dark">
            {s.title}
          </h3>
          <p className="m-0 text-[0.92rem] leading-[1.55] text-ink-soft">
            {s.description}
          </p>
          <span className="mt-3 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-deep">
            Več
            <svg
              aria-hidden
              viewBox="0 0 14 10"
              className="h-[10px] w-[14px] transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 5h12m-4-4l4 4-4 4" />
            </svg>
          </span>
        </Link>
      ))}
    </div>
  );
}
