'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV_PRIMARY } from '@/lib/nav';
import { COURSES } from '@/lib/courses';
import { smsHref, PHONE_DISPLAY } from '@/lib/contact';
import { cn } from '@/lib/cn';

const ROUTES_WITH_TEAL_HERO = new Set<string>(['/']);
const DROPDOWN_HREF = '/spletni-tecaji';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const overHero = ROUTES_WITH_TEAL_HERO.has(pathname ?? '');
  const transparent = overHero && !scrolled;
  const tealTop = !overHero && !scrolled;
  const lightText = transparent || tealTop;

  const isActive = useCallback(
    (href: string) => {
      if (href === DROPDOWN_HREF) {
        return pathname === href || (pathname?.startsWith(href + '/') ?? false);
      }
      return pathname === href;
    },
    [pathname]
  );

  const openDropdown = useCallback(() => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileCoursesOpen(false);
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
          : tealTop
            ? 'bg-teal-deep text-white border-b border-white/10'
            : 'bg-[#fbfbf9]/85 backdrop-blur-md border-b border-rule'
      )}
      data-over-hero={overHero ? 'true' : 'false'}
      data-transparent={transparent ? 'true' : 'false'}
      data-teal-top={tealTop ? 'true' : 'false'}
    >
      {tealTop ? <div className="vz" aria-hidden /> : null}
      <div
        className="relative mx-auto flex max-w-wide items-center px-5 md:px-10"
        // Persisted browser tweak: match the previewed header container geometry exactly.
        style={{
          width: '100%',
          paddingTop: '10px',
          paddingBottom: '10px',
          boxSizing: 'content-box',
          justifyContent: 'center',
        }}
      >
        <Logo invert={lightText} />

        <nav
          className="hidden lg:flex items-center gap-7"
          // Persisted browser tweak: keep desktop nav spacing/alignment identical to preview.
          style={{
            marginLeft: '5px',
            marginRight: '5px',
            justifyContent: 'flex-end',
            textAlign: 'center',
            verticalAlign: 'top',
            lineHeight: '17.4px',
          }}
        >
          {NAV_PRIMARY.map((item) => {
            const active = isActive(item.href);
            // Keep top-state inactive links predictable even with global anchor hover rules.
            const topStateInactiveLinkClass = '!text-white/85 hover:!text-white';

            if (item.href === DROPDOWN_HREF) {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                  onFocusCapture={openDropdown}
                  onBlurCapture={closeDropdown}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape') setDropdownOpen(false);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    aria-controls="courses-dropdown"
                    className={cn(
                      'relative inline-flex items-center gap-1 text-[0.88rem] font-body font-semibold tracking-wide transition-colors',
                      lightText
                        ? active
                          ? '!text-white hover:!text-white'
                          : topStateInactiveLinkClass
                        : active
                          ? 'text-teal-deep'
                          : 'text-ink-soft'
                    )}
                  >
                    {item.label}
                    <svg
                      aria-hidden
                      viewBox="0 0 24 24"
                      className={cn(
                        'h-3.5 w-3.5 transition-transform duration-200',
                        dropdownOpen && 'rotate-180'
                      )}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    {active ? (
                      <span
                        className={cn(
                          'absolute -bottom-1 left-0 right-0 h-px',
                          lightText ? 'bg-white/70' : 'bg-teal-deep/70'
                        )}
                      />
                    ) : null}
                  </Link>

                  <div
                    id="courses-dropdown"
                    role="menu"
                    aria-label="Spletni tečaji"
                    className={cn(
                      'absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[340px] rounded-xl border border-rule bg-[#fbfbf9]/85 backdrop-blur-md shadow-card transition-all duration-200 origin-top',
                      dropdownOpen
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    )}
                  >
                    <div className="py-2">
                      {COURSES.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/spletni-tecaji/${course.slug}`}
                          role="menuitem"
                          className="flex flex-col gap-0.5 px-4 py-3 hover:bg-teal-deep/5 transition-colors"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <span className="text-sm font-semibold text-ink leading-snug">
                            {course.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-[0.88rem] font-body font-semibold tracking-wide transition-colors',
                  lightText
                    ? active
                      ? '!text-white hover:!text-white' // At top of page, active link stays pure white — no hover color shift.
                      : topStateInactiveLinkClass // At top of page, inactive links brighten from 85% white to full white on hover.
                    : active
                      ? 'text-teal-deep'
                      : 'text-ink-soft' // Keep inactive link color stable; no hover color shift.
                )}
                // Persisted browser tweak: keep this specific item vertically aligned to the top.
                style={item.href === '/za-odrasle' ? { verticalAlign: 'top' } : undefined}
              >
                {item.label}
                {active ? (
                  <span
                    className={cn(
                      'absolute -bottom-1 left-0 right-0 h-px',
                      lightText ? 'bg-white/70' : 'bg-teal-deep/70'
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={smsHref('default')}
            className={cn(
              'btn-shimmer ml-2 inline-flex w-[140px] items-center gap-2 rounded-full px-4 py-2 text-[0.85rem] font-semibold',
              lightText
                ? 'border border-white/40 text-white'
                : 'border border-teal-deep/25 text-teal-deep'
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
            open && 'hidden',
            lightText && !open
              ? 'border border-white/40 text-white'
              : 'border border-teal-deep/20 text-teal-deep'
          )}
        >
          <span className="sr-only">{open ? 'Zapri' : 'Meni'}</span>
          <span className={cn('flex flex-col items-center gap-[5px]')}>
            <span className={cn('block h-0.5 w-5 bg-current transition-all origin-center', open && 'translate-y-[7px] rotate-45')} />
            <span className={cn('block h-0.5 w-5 bg-current transition-all', open && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-current transition-all origin-center', open && '-translate-y-[7px] -rotate-45')} />
          </span>
        </button>
      </div>

      <div
        className={cn(
          'lg:hidden fixed inset-0 top-0 z-40 bg-[#fbfbf9] transition-all duration-500',
          open ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        )}
      >
        <div className="flex h-full flex-col px-6 pt-20 pb-10 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-teal-deep/15 px-4 py-2.5 text-teal-deep text-sm font-semibold"
            >
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              Domov
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 rounded-full border border-teal-deep/15 px-4 py-2.5 text-teal-deep text-sm font-semibold"
            >
              Zapri
              <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col gap-1">
            {NAV_PRIMARY.map((item, i) => {
              const active = isActive(item.href);

              if (item.href === DROPDOWN_HREF) {
                return (
                  <div key={item.href} className="border-b border-teal-deep/10">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className={cn(
                          'flex-1 py-4 font-display text-2xl transition-colors',
                          active ? 'text-teal-deep' : 'text-ink'
                        )}
                        style={{ animationDelay: `${i * 40}ms` }}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-expanded={mobileCoursesOpen}
                        aria-label={mobileCoursesOpen ? 'Zapri tečaje' : 'Razširi tečaje'}
                        onClick={() => setMobileCoursesOpen((v) => !v)}
                        className="p-3 text-ink-soft"
                      >
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className={cn(
                            'h-5 w-5 transition-transform duration-300',
                            mobileCoursesOpen && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={cn(
                        'grid transition-all duration-300',
                        mobileCoursesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="pb-2 flex flex-col">
                          {COURSES.map((course) => (
                            <Link
                              key={course.slug}
                              href={`/spletni-tecaji/${course.slug}`}
                              className="pl-5 py-2.5 text-lg text-ink-soft hover:text-teal-deep transition-colors"
                            >
                              <span className="block font-semibold leading-snug">{course.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'border-b border-teal-deep/10 py-4 font-display text-2xl transition-colors',
                    active
                      ? 'text-teal-deep'
                      : 'text-ink' // Keep inactive mobile link color stable; no hover color shift.
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
