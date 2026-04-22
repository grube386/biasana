import Link from 'next/link';
import { Logo } from './Logo';
import { NAV_PRIMARY } from '@/lib/nav';
import {
  PHONE_DISPLAY,
  smsHref,
  mailtoHref,
  EMAIL_POLONA,
  EMAIL_SABINA,
  ADDRESS_LINE,
  SOCIAL,
} from '@/lib/contact';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0b2624] text-white/85 grain">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-teal-base/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[360px] w-[360px] rounded-full bg-teal-mid/40 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-wide px-5 pt-10 pb-10 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-5">
            <Logo invert />
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Celosten center za telesno in duševno dobro počutje v Zagorju ob Savi.
              Od leta 2012.
            </p>
            <p className="glory text-2xl text-sage-mist">
              Prisluhni. Začuti. Zaupaj si.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow text-sage-mist mb-4">Obišči</h3>
            <ul className="space-y-2.5 text-[0.95rem]">
              {NAV_PRIMARY.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/80 hover:text-white underline decoration-transparent hover:decoration-sage-mist underline-offset-4 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6">
            <div>
              <h3 className="eyebrow text-sage-mist mb-4">Kontakt</h3>
              <ul className="space-y-3 text-[0.95rem]">
                <li>
                  <a href={smsHref('default')} className="inline-flex items-start gap-2 text-white hover:text-sage-mist">
                    <span aria-hidden className="mt-1 text-sage-mist">SMS</span>
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </li>
                <li>
                  <a href={mailtoHref('polona')} className="block text-white/85 hover:text-white">
                    <span className="block text-xs uppercase tracking-wider text-sage-mist">
                      Terapije · urice · dojenčki
                    </span>
                    {EMAIL_POLONA}
                  </a>
                </li>
                <li>
                  <a href={mailtoHref('sabina')} className="block text-white/85 hover:text-white">
                    <span className="block text-xs uppercase tracking-wider text-sage-mist">
                      Pilates · Chi Nei Tsang · BiaBon
                    </span>
                    {EMAIL_SABINA}
                  </a>
                </li>
                <li className="pt-2 text-white/65 text-sm">{ADDRESS_LINE}</li>
              </ul>
            </div>

            <div>
              <h3 className="eyebrow text-sage-mist mb-3">Najdi naju tudi</h3>
              <div className="flex gap-2">
                <a
                  href={SOCIAL.facebook}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm hover:bg-white/10"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL.instagram}
                  rel="noopener"
                  target="_blank"
                  className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm hover:bg-white/10"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rule mt-14 opacity-30" />
        <div className="mt-6 flex flex-col-reverse gap-3 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} Biasana. Vse pravice pridržane.</p>
          <p className="text-white/45">
            Stran ne uporablja piškotkov za trženje. Kontakti potekajo preko SMS in e-pošte.
          </p>
        </div>
      </div>
    </footer>
  );
}
