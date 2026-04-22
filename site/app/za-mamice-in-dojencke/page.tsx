import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';

export const metadata: Metadata = {
  title: 'Za mamice in dojenčke — Dve terapevtki hkrati',
  description:
    'Kraniosakralna terapija za mamico in dojenčka istočasno (dve terapevtki). Gibalne urice po metodi Pedosana. Shiatsu masaža online. Podpora v prvih tednih po porodu.',
};

const URICE = [
  {
    k: 'Mikro',
    age: 'od rojstva do cca 3. meseca',
    note: 'do osvojitve pasenja na podlahteh',
    desc: 'Veliko dela z dojenjem, s težo glave, s prvimi obrati.',
  },
  {
    k: 'Mini',
    age: '3. do cca 6. meseca',
    note: 'do odriva z iztegnjenih rok in pivotiranja',
    desc: 'Krepimo trup, odpiramo bok, igramo se s težiščem.',
  },
  {
    k: 'Midi',
    age: 'od odriva do kobacanja',
    note: 'raziskovanje v diagonali',
    desc: 'Pripravljamo pot do štirinožnega položaja.',
  },
  {
    k: 'Maxi',
    age: 'od kobacanja do hoje',
    note: 'najbolj iznajdljivo obdobje',
    desc: 'Podpiramo ravnotežje, prenos teže, prvi korak, ki pride, ko je čas.',
  },
];

export default function ZaMamicePage() {
  return (
    <>
      <PageHero
        titleVariant="serif"
        eyebrow="Flagship · Biasana"
        title={
          <>
            Ko postane mama,
            <br />
            <em className="not-italic text-teal-light">se rodi tudi ona.</em>
          </>
        }
        glory="Dve terapevtki, mamica in dojenček hkrati."
        lede={
          <p>
            V prvih mesecih po porodu sta mamica in dojenček eno telo, ki se počasi uči biti dva.
            Oba potrebujeta podporo. Oba potrebujeta čas. V Biasani ne ločujeva, kaj je tvoje in
            kaj otrokovo — delava z obema, pogosto istočasno.
          </p>
        }
        cta={<SmsButton context="mother-baby" />}
        image={{ src: '/photos/kranio-dojencki.jpg', alt: 'Kranio za mamico in dojenčka' }}
        secondaryImage={{ src: '/photos/foto-55.jpg', alt: 'Mamica in dojenček detajl' }}
        stats={[
          { value: '12', label: 'let prakse' },
          { value: '2', label: 'terapevtki pod isto streho' },
          { value: '1:1', label: 'osebna obravnava' },
        ]}
      />

      <Section
        eyebrow="Posebnost Biasane"
        title="Istočasna kraniosakralna terapija za mamico in dojenčka"
        lede="V istem prostoru, v istem trenutku delata dve terapevtki: ena s tabo, druga z dojenčkom. Ne boš se morala odločati, kateri obisk je pomembnejši. Ne boš čakala, dokler otrok spi, da dobiš svoj termin."
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14 items-start">
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <h3 className="font-display text-2xl text-teal-dark">Zakaj istočasno?</h3>
            <p>
              Porod je za mamico in dojenčka skupna izkušnja. Tudi sproščanje tega, kar je ostalo
              v telesu po porodu, se najbolj naravno zgodi skupaj. Dojenček je umirjen, ker te
              čuti. Ti si pomirjena, ker veš, da je on v dobri roki. Živčna sistema se v istem
              prostoru usklajujeta.
            </p>
            <h3 className="font-display text-2xl text-teal-dark mt-8">Za koga</h3>
            <ul className="space-y-2">
              <li>— mamice prvih štiri do osem tednov po porodu, ki nosijo porodno napetost v medenici, diafragmi, ramenih</li>
              <li>— dojenčki po težjem porodu (carski rez, vakuum, dolg porod, hiter porod)</li>
              <li>— pari mamica–dojenček, kjer ne gre najbolje z dojenjem, spanjem, umirjanjem</li>
            </ul>
            <p className="text-sm text-ink-mute pt-4">
              Termin dogovoriva po SMS-u — povej, koliko je star dojenček in kakšen je bil porod,
              da vajin termin uskladiva pravilno.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-square overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/photos/foto-55.jpg"
                alt="Mamica in dojenček med terapijo"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Pedosana"
        title="Gibalne urice — od rojstva do hoje"
        lede="Urice so mesto, kjer si mamica v krogu drugih mamic, dojenček pa v stiku s kraniosakralno terapevtko. Največ štirje dojenčki s starši v eni skupini. Metoda Pedosana spoštuje naravno pot, po kateri dojenček odkriva svoje telo — nič ne pospešujeva, nič ne preskakujeva."
        className="bg-sage-paper/60"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {URICE.map((u) => (
            <div
              key={u.k}
              className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-soft"
            >
              <span className="absolute -right-3 -top-3 font-display text-6xl text-sage-mist/70 select-none">
                {u.k[0]}
              </span>
              <p className="eyebrow text-teal-light">Starostna skupina</p>
              <p className="mt-3 font-display text-2xl text-teal-dark">{u.k}</p>
              <p className="mt-2 text-sm text-ink-soft">{u.age}</p>
              <p className="mt-1 text-xs text-ink-mute italic">— {u.note}</p>
              <p className="mt-3 text-sm text-ink-soft">{u.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-[20px] bg-white p-6 shadow-soft">
            <h3 className="font-display text-xl text-teal-dark">Kdaj</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Ob petkih dopoldne, v šolskem ritmu (september–junij).
            </p>
          </div>
          <div className="rounded-[20px] bg-white p-6 shadow-soft">
            <h3 className="font-display text-xl text-teal-dark">Vpis</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Preko SMS — urnik in prosta mesta ti pošljeva v odgovor.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Prvi tedni po porodu" title="Individualna podpora prvih 4 tednov">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Prvi štirje tedni so drugačni od vsega drugega. To je čas, ko je pomoč najbolj
              redka — in najbolj potrebna.
            </p>
            <p>Ponujava individualne obravnave na domu ali v centru, v kombinaciji:</p>
            <ul className="space-y-2">
              <li>— kraniosakralne terapije za mamico (sproščanje porodne napetosti, podpora pri dojenju)</li>
              <li>— kraniosakralne terapije za dojenčka (porodni stres, priraščen jezik, stisnjena čeljust)</li>
              <li>— pogovora o konkretnih izzivih, s katerimi se srečuješ</li>
            </ul>
            <p className="text-sm text-ink-mute pt-4">
              Termin dogovoriva individualno. Piši po SMS-u — povej starost dojenčka in par besed
              o tem, kaj te muči.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Online tečaj"
        title="Shiatsu masaža za dojenčka"
        className="bg-sage-paper/60"
      >
        <div className="grid gap-8 md:grid-cols-12 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-4 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Shiatsu je nežna masaža, ki temelji na akupresurnih točkah in pretoku energije. Za
              krčke, napete ramena, neumirjeno spanje, napete trebuščke — in za tiste trenutke,
              ko si mamica potrebuje najti način, da je v stiku s svojim otrokom brez besed.
            </p>
            <p>
              Tečaj je <strong className="text-teal-dark">štiritedenski, online preko Zoom-a.</strong>{' '}
              Iz domačega naslonjača. S svojim otrokom v naročju.
            </p>
            <Link href="/spletni-tecaji/shiatsu-masaza-za-dojencke" className="btn-ghost mt-2">
              Več o tečaju
            </Link>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[22px] shadow-card">
              <Image
                src="/photos/foto-111.jpg"
                alt="Shiatsu masaža za dojenčka"
                fill
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <PrviKorak context="mother-baby" />
    </>
  );
}
