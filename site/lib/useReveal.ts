'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Triggers a fade-in reveal when the element scrolls into view.
 * Pair with `.fade` / `.fade.in` utilities in globals.css.
 * Use inline `style={{ '--d': '120ms' }}` for staggered delays.
 */
export function useReveal<T extends HTMLElement = HTMLElement>({ delay = 0 } = {}) {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      const t = setTimeout(() => setShown(true), 60 + delay);
      return () => clearTimeout(t);
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setShown(true), delay);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(node);
    // Fallback for tall viewports that already show the section
    const t = setTimeout(() => setShown(true), 1400 + delay);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, [delay]);

  return [ref, shown] as const;
}
