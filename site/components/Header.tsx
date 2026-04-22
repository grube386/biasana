'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV_PRIMARY } from '@/lib/nav';
import { smsHref, PHONE_DISPLAY } from '@/lib/contact';
import { cn } from '@/lib/cn';

const ROUTES_WITH_TEAL_HERO = new Set<string>(['/']);

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const overHero = ROUTES_WITH_TEAL_HERO.has(pathname ?? '');
  const transparent = overHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        transparent
          ? 'bg-transparent'
          : 'bg-[#fbfbf9]/85 backdrop-blur-md border-b border-rule'
      )}
      data-over-hero={overHero ? 'true' : 'false'}
      data-transparent={transparent ? 'true' : 'false'}
    >
      <div className="mx-auto flex max-w-wide items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Logo invert={transparent} />

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_PRIMARY.slice(0, 6).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-[0.88rem] font-body font-semibold tracking-wide transition-colors',
                  transparent
                    ? active
                      ? 'text-white'
                      : 'text-white/85 hover:text-white'
                    : active
                      ? 'text-teal-deep'
                      : 'text-ink-soft hover:text-teal-deep'
                )}
              >
                {item.label}
                {active ? (
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-px',
                      transparent ? 'bg-white/70' : 'bg-teal-deep/70'
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/cenik"
            className={cn(
              'text-[0.88rem] font-body font-semibold tracking-wide transition-colors',
              transparent
                ? pathname === '/cenik'
                  ? 'text-white'
                  : 'text-white/85 hover:text-white'
                : pathname === '/cenik'
                  ? 'text-teal-deep'
                  : 'text-ink-soft hover:text-teal-deep'
            )}
          >
            Cenik
          </Link>
          <a
            href={smsHref('default')}
            className={cn(
              'ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-semibold transition-colors',
              transparent
                ? 'border border-white/40 text-white hover:bg-white/10 hover:border-white/70'
                : 'border border-teal-deep/25 text-teal-deep hover:bg-teal-deep hover:text-white'
            )}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-3.5 w-3.5">
              <path
                d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
            {PHONE_DISPLAY}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Zapri meni' : 'Odpri meni'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            'lg:hidden relative z-50 grid h-11 w-11 place-items-center rounded-full transition-colors',
            transparent
              ? 'border border-white/40 text-white'
              : 'border border-teal-deep/20 text-teal-deep'
          )}
        >
          <span className="sr-only">{open ? 'Zapri' : 'Meni'}</span>
          <span className={cn('block h-px w-5 bg-current transition-transform', open && 'translate-y-[3px] rotate-45')} />
          <span className={cn('block h-px w-5 bg-current mt-1.5 transition-transform', open && '-translate-y-[3px] -rotate-45')} />
        </button>
      </div>

      <div
        className={cn(
          'lg:hidden fixed inset-0 top-0 z-40 bg-[#fbfbf9] transition-all duration-500',
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col px-6 pt-24 pb-10 overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {NAV_PRIMARY.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'border-b border-teal-deep/10 py-4 font-display text-2xl transition-colors',
                    active ? 'text-teal-deep' : 'text-ink hover:text-teal-deep'
                  )}
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-8 flex flex-col gap-3">
            <a href={smsHref('default')} className="btn-primary justify-center w-full">
              Piši mi SMS
              <span className="opacity-70 font-normal">· {PHONE_DISPLAY}</span>
            </a>
            <p className="text-center text-sm text-ink-mute">
              Vsi kontakti preko SMS ali e-pošte.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
