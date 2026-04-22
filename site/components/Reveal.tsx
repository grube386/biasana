'use client';

import { ReactNode, CSSProperties } from 'react';
import { useReveal } from '@/lib/useReveal';
import { cn } from '@/lib/cn';

type Props = {
  as?: 'div' | 'section' | 'article' | 'figure' | 'li' | 'span';
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/**
 * Thin wrapper that applies the `.fade` reveal utility on viewport entry.
 * Delay (ms) can be set for staggered reveals within a group.
 */
export function Reveal({
  as = 'div',
  children,
  delay = 0,
  className,
  style,
}: Props) {
  const [ref, shown] = useReveal<HTMLElement>();
  const Tag = as as any;
  return (
    <Tag
      ref={ref as any}
      className={cn('fade', shown && 'in', className)}
      style={{ ['--d' as any]: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
