'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import { LogoMark } from './LogoMark';

type Props = {
  className?: string;
  variant?: 'mark' | 'wordmark' | 'full';
  invert?: boolean;
};

export function Logo({ className, variant = 'full', invert = false }: Props) {
  const [animating, setAnimating] = useState(false);

  return (
    <Link
      href="/"
      aria-label="Biasana, domov"
      className={cn('inline-flex items-center gap-3 group', className)}
      // Persisted browser tweak: preserve logo-link horizontal offset from the preview.
      style={{ marginLeft: '10px', marginRight: '15px' }}
      onMouseEnter={() => setAnimating(true)}
      onMouseLeave={() => setAnimating(false)}
    >
      <span
        className={cn(
          'relative inline-block h-10 w-10 overflow-hidden rounded-full',
          invert ? 'bg-white/10' : 'bg-sage-paper'
        )}
      >
        <LogoMark animating={animating} className="p-0.5" />
      </span>
      {variant !== 'mark' ? (
        <span
          className={cn(
            'wordmark text-2xl tracking-[0.14em]',
            invert ? 'text-white' : 'text-teal-deep'
          )}
        >
          Biasana
        </span>
      ) : null}
    </Link>
  );
}
