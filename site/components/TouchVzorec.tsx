'use client';

import { useEffect } from 'react';

export function TouchVzorec() {
  useEffect(() => {
    if (!('ontouchstart' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = document.createElement('div');
    container.style.cssText =
      'position:fixed;inset:0;pointer-events:none;z-index:30;overflow:hidden';
    document.body.appendChild(container);

    const ripples = new Map<number, HTMLElement>();
    const MAX_RIPPLES = 5;

    function startRipple(touch: Touch) {
      if (ripples.size >= MAX_RIPPLES) return;
      const el = document.createElement('div');
      el.className = 'vzorec-ripple';
      el.style.left = `${touch.clientX}px`;
      el.style.top = `${touch.clientY}px`;
      container.appendChild(el);
      ripples.set(touch.identifier, el);
    }

    function releaseRipple(touch: Touch) {
      const el = ripples.get(touch.identifier);
      if (!el) return;
      ripples.delete(touch.identifier);

      const computed = window.getComputedStyle(el);
      el.style.clipPath = computed.clipPath;
      el.style.opacity = computed.opacity;
      el.style.animation = 'none';
      void el.offsetHeight;
      el.style.transition = 'opacity 180ms ease-out';
      el.style.opacity = '0';
      el.addEventListener('transitionend', () => el.remove(), { once: true });
    }

    function onTouchStart(e: TouchEvent) {
      for (const touch of Array.from(e.changedTouches)) startRipple(touch);
    }

    function onTouchMove(e: TouchEvent) {
      for (const touch of Array.from(e.changedTouches)) {
        const el = ripples.get(touch.identifier);
        if (!el) continue;
        el.style.left = `${touch.clientX}px`;
        el.style.top = `${touch.clientY}px`;
      }
    }

    function onTouchEnd(e: TouchEvent) {
      for (const touch of Array.from(e.changedTouches)) releaseRipple(touch);
    }

    document.addEventListener('touchstart', onTouchStart, { passive: true });
    document.addEventListener('touchmove', onTouchMove, { passive: true });
    document.addEventListener('touchend', onTouchEnd, { passive: true });
    document.addEventListener('touchcancel', onTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', onTouchStart);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchcancel', onTouchEnd);
      container.remove();
    };
  }, []);

  return null;
}
