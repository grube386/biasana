import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';

export const metadata: Metadata = {
  title: 'Spletni tečaji — Iz domačega naslanjača',
  description:
    'Pet online tečajev: Shiatsu masaža za dojenčke, celostna vadba za nosečnice in za mamice po porodu, pilates za zdravo hrbtenico, pilates za obstoječe vadeče.',
};

export const COURSES = [
  {
    slug: 'shiatsu-masaza-za-dojencke',
    title: 'Shiatsu masaža za dojenčke',
    tag: '4-tedenski tečaj',
    d: 'Nežni prijemi in akupresurne točke — za krčke, napete trebuščke, neumirjeno spanje. Z dojenčkom v naročju, iz domačega naslonjača.',
    teacher: 'Polona',
  },
  {
    slug: 'vadba-za-nosecnice',
    title: 'Celostna vadba in svetovanje za nosečnice',
    tag: 'Celotna nosečnost',
    d: 'Gibanje, dihanje in priprava telesa na porod — skozi celo nosečnost. Online podpora, ki ne potrebuje prevoza.',
    teacher: 'Sabina',
  },
  {
    slug: 'vadba-za-mamice',
    title: 'Celostna vadba in svetovanje za mamice po porodu',
    tag: 'Postpartum',
    d: 'Postpartum vadba in pogovor o dojenju, spanju, krčkih, odnosih, strahovih. Za prvih dvanajst mesecev in dlje.',
    teacher: 'Sabina',
  },
  {
    slug: 'pilates-za-zdravo-hrbtenico',
    title: 'Online pilates za zdravo hrbtenico',
    tag: 'Za vsakogar',
    d: 'Odprt za vsakogar, ki želi redno skrbeti za držo in gibljivost hrbtenice. Brez predznanja pilatesa.',
    teacher: 'Sabina',
  },
  {
    slug: 'pilates-za-vadece',
    title: 'Online pilates za obstoječe vadeče',
    tag: 'Nadaljevanje',
    d: 'Za tiste, ki v studiu že vadijo in želijo nadaljevati doma — z vajami, prilagojenimi napredku v skupini.',
    teacher: 'Sabina',
  },
];

export default function SpletniTecajiPage() {
  return (
    <>
      <PageHero
        eyebrow="Spletni tečaji"
        title={<>Ko ne moreš priti,<br />prideva midve.</>}
        glory="Preko Zoom-a."
        lede={
          <p>
            Online tečaji so resni. Ne posnetki, ki si jih ogledaš, ko ti ustreza.{' '}
            <strong className="text-teal-dark">Vodene ure v živo</strong>, v skupini ali
            individualno, z odzivom na tvoje telo in vprašanja.
          </p>
        }
      />

      <Section eyebrow="Pet tečajev" title="Izberi tečaj, ki te nagovarja">
        <ul className="grid gap-6 md:grid-cols-2">
          {COURSES.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/spletni-tecaji/${c.slug}`}
                className="group flex h-full flex-col rounded-[22px] bg-white border border-teal-deep/10 p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-teal-light">{c.tag}</span>
                  <span className="text-xs text-ink-mute">z {c.teacher}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl text-teal-dark">{c.title}</h3>
                <p className="mt-3 text-[0.95rem] text-ink-soft">{c.d}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
                  Preberi več →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Prijava" title="Kako se prijaviš" className="bg-sage-paper/60">
        <div className="max-w-[720px] text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Vsak tečaj ima svoj „Želim sodelovati" gumb, ki odpre e-pošto z že vpisano zadevo —
            dodaj par besed o sebi in pošlji. Dobiš odgovor z vsemi podrobnostmi (termini, Zoom
            povezava, cena, način plačila).
          </p>
        </div>
      </Section>

      <PrviKorak
        title="Želiš sodelovati?"
        lede={`Vsak online tečaj se prijavi preko e-pošte. Na strani tečaja klikni gumb „Želim sodelovati" — odpre pošto s pripravljeno zadevo.`}
      />
    </>
  );
}
