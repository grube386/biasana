'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useReveal } from '@/lib/useReveal';
import { smsHref } from '@/lib/contact';
import { cn } from '@/lib/cn';

/**
 * Full-bleed teal hero with centerpiece logo + radial glow + Give You Glory headline.
 * Design lifted verbatim from the Biasana design bundle (only the hero is a 1:1 copy).
 */
export function HomeHero() {
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="hero-teal relative flex items-start pt-[120px] md:pt-[140px] pb-20 md:pb-28"
    >
      <div className="vz" aria-hidden />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[6%] -translate-x-1/2 blur-[20px]"
        style={{
          width: 'min(900px, 90vw)',
          height: 'min(900px, 90vw)',
          background:
            'radial-gradient(circle at center, rgba(220,240,234,.28) 0%, rgba(220,240,234,.08) 30%, transparent 60%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-wide px-5 md:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <div
            className={cn('fade', shown && 'in', 'mb-2 flex justify-center')}
            style={{ ['--d' as any]: '0ms' }}
          >
            <div
              className="relative grid place-items-center"
              style={{
                width: 'clamp(220px, 26vw, 360px)',
                aspectRatio: '1 / 1',
              }}
            >
              <div
                aria-hidden
                className="absolute -inset-[18%] blur-[12px]"
                style={{
                  background:
                    'radial-gradient(circle, rgba(255,255,255,.18) 0%, rgba(255,255,255,.06) 40%, transparent 70%)',
                }}
              />
              <Image
                src="/brand/logo.svg"
                alt="Biasana"
                width={400}
                height={400}
                priority
                className="relative h-auto w-full"
                style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,.25))' }}
              />
            </div>
          </div>

          <div
            className={cn('fade', shown && 'in')}
            style={{ ['--d' as any]: '160ms' }}
          >
            <p className="text-[clamp(11px,1vw,13px)] font-medium uppercase tracking-[0.24em] text-white/80">
              Celosten center · Zagorje ob Savi · od 2012
            </p>
          </div>

          <h1
            className={cn('fade', shown && 'in', 'accent-xl mt-[10px]')}
            style={{
              ['--d' as any]: '280ms',
              color: '#f4faf7',
              textShadow: '0 2px 30px rgba(0,0,0,.15)',
            }}
          >
            prisluhni.
            <br />
            začuti.
            <br />
            zaupaj&nbsp;si.
          </h1>

          <p
            className={cn('fade', shown && 'in', 'mx-auto mt-10 max-w-[560px] leading-[1.6]')}
            style={{
              ['--d' as any]: '480ms',
              color: 'rgba(220,236,230,.88)',
              fontSize: 'clamp(15px, 1.25vw, 18px)',
            }}
          >
            Tri besede, ki vodijo vse, kar počneva.
            <br />
            Kraniosakralna terapija, klasični pilates in Pedosana — nežno, počasi, osebno.
          </p>

          <div
            className={cn('fade', shown && 'in', 'mt-10 flex flex-wrap justify-center gap-3.5')}
            style={{ ['--d' as any]: '620ms' }}
          >
            <a href={smsHref('default')} className="btn-white">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
                <path d="M3 2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7l-3.5 3v-3H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Z" />
              </svg>
              Pošlji SMS
            </a>
            <Link href="#storitve" className="btn-outline-white">
              Najdi svojo pot
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
