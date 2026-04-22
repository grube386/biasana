import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { SmsButton } from '@/components/SmsButton';
import {
  PHONE_DISPLAY,
  EMAIL_POLONA,
  EMAIL_SABINA,
  ADDRESS_LINE,
  SOCIAL,
  mailtoHref,
} from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Biasana — Zagorje ob Savi. SMS: 040 454 462. polona.biasana@gmail.com (terapije), biasana.sabina@gmail.com (pilates, BiaBon).',
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title={<>Kako do naju.</>}
        glory="Najhitrejša pot je SMS."
        lede={
          <p>
            V miru, ko ti ustreza. Med obravnavami imava telefon tih — zato SMS-i in e-pošta ostanejo
            sled, na katero se lahko ozreva takoj, ko se sprosti prostor.
          </p>
        }
        cta={<SmsButton context="default" />}
      />

      <Section eyebrow="Telefon · SMS" title="V SMS-u povej, kaj te zanima">
        <div className="grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Na kratko napiši, za katero storitev te zanima termin in za koga (nosečnost,
              dojenček, otrok, ti). Odgovoriva v nekaj urah.
            </p>
            <p className="font-display text-3xl text-teal-dark">{PHONE_DISPLAY}</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="E-pošta" title="Poštni nabiralnik si delimo po področjih" className="bg-sage-paper/60">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[22px] bg-white p-7 md:p-8 shadow-soft">
            <p className="eyebrow text-teal-light">Polona</p>
            <h3 className="mt-3 font-display text-2xl text-teal-dark">
              Terapije · gibalne urice · Shiatsu
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Kraniosakralna terapija (vse starosti), gibalne urice po metodi Pedosana, Shiatsu
              masaža za dojenčke, individualna podpora po porodu.
            </p>
            <a
              href={mailtoHref('polona')}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-deep underline underline-offset-4"
            >
              {EMAIL_POLONA}
            </a>
          </div>

          <div className="rounded-[22px] bg-white p-7 md:p-8 shadow-soft">
            <p className="eyebrow text-teal-light">Sabina</p>
            <h3 className="mt-3 font-display text-2xl text-teal-dark">
              Pilates · Chi Nei Tsang · BiaBon
            </h3>
            <p className="mt-3 text-sm text-ink-soft">
              Pilates v studiu in online, Chi Nei Tsang, Tok Sen, darilni bon BiaBon.
            </p>
            <a
              href={mailtoHref('sabina')}
              className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-deep underline underline-offset-4"
            >
              {EMAIL_SABINA}
            </a>
          </div>
        </div>
      </Section>

      <Section eyebrow="Kdaj delava" title="Sezonski ritem">
        <div className="max-w-[720px] space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Pilates in gibalne urice potekajo v{' '}
            <strong className="text-teal-dark">šolskem ritmu — od septembra do junija</strong>, s
            poletnim premorom za regeneracijo. Kraniosakralna terapija je možna tudi preko poletja,
            po dogovoru.
          </p>
          <ul className="space-y-2 pt-2">
            <li>
              <strong className="text-teal-dark">Gibalne urice:</strong> petki dopoldan. Termin
              dobiš ob vpisu.
            </li>
            <li>
              <strong className="text-teal-dark">Pilates:</strong> po urniku, ki ga prejmeš ob vpisu.
            </li>
            <li>
              <strong className="text-teal-dark">Kraniosakralna terapija:</strong> po dogovoru.
            </li>
          </ul>
        </div>
      </Section>

      <Section eyebrow="Kje naju najdeš" title="Biasana · Zagorje ob Savi" className="bg-sage-paper/60">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-6">
            <div>
              <p className="eyebrow text-teal-light">Naslov</p>
              <p className="mt-2 text-ink">{ADDRESS_LINE}</p>
              <p className="mt-2 text-sm text-ink-mute">
                Točen naslov in navodila za parkiranje ti pošljeva po SMS-u skupaj s terminom.
              </p>
            </div>

            <div>
              <p className="eyebrow text-teal-light">Socialna omrežja</p>
              <div className="mt-3 flex gap-3">
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  Facebook
                </a>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener"
                  className="btn-ghost"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-teal-deep/10 bg-sage-paper">
              <iframe
                title="Lokacija Biasane v Zagorju ob Savi"
                src="https://www.openstreetmap.org/export/embed.html?bbox=14.998%2C46.129%2C15.018%2C46.138&amp;layer=mapnik&amp;marker=46.1335%2C15.0078"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
