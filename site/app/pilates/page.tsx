import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';

export const metadata: Metadata = {
  title: 'Pilates — Classical Contrology v majhnih skupinah',
  description:
    'Klasični pilates na napravah v skupini največ treh oseb. Metoda Contrology po Josephu H. Pilatesu. V Zagorju ob Savi, z inštruktorico Sabino.',
};

const WELCOME = [
  { t: 'Začetniki', d: 'Ki še niso v vadbi in iščejo način, ki telesu ne škoduje.' },
  { t: 'Redni vadeči', d: 'Ki želijo globljo natančnost.' },
  { t: 'Nosečnice in mamice po porodu', d: 'S prilagojenim programom.' },
  { t: 'Ljudje s težavami v križu in vratu', d: 'Z zdravniškim odobravanjem in po pogovoru.' },
  { t: 'Športniki', d: 'Kot dopolnilo specifičnemu treningu.' },
];

export default function PilatesPage() {
  return (
    <>
      <PageHero
        eyebrow="Pilates"
        title={<>Pilates ni trening<br />za izgorevanje.</>}
        glory="Je reorganizacija."
        lede={
          <p>
            V Biasani vadimo <strong className="text-teal-dark">klasični pilates — metodo Contrology</strong>,
            tako kot jo je zastavil Joseph H. Pilates. Na originalnih napravah. V skupinah
            največ treh oseb. Z vajami, izbranimi za tvoje telo, ne za povprečno.
          </p>
        }
        cta={<SmsButton context="pilates" />}
        image={{ src: '/photos/pilates.jpg', alt: 'Pilates studio' }}
      />

      <Section eyebrow="Metoda" title="Kaj pomeni klasični pilates">
        <div className="grid gap-10 md:grid-cols-12 md:gap-12 items-start">
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Današnji „pilates" je pogosto katera koli vadba, ki vključuje matirano ali veliko
              ponovitev. Contrology je nekaj drugega: šest načel —{' '}
              <strong className="text-teal-dark">
                koncentracija, kontrola, središče, pretočnost, natančnost, dihanje
              </strong>{' '}
              — in sistem vaj, ki se zgradi od trupa navzven.
            </p>
            <p>
              Ne delamo na „plošči za trebuh". Delamo na tem, da se lopatica in medenica
              pogovarjata; da diafragma dela svoje delo in ne ramen; da se hrbtenica razteguje,
              ne le krepi.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] shadow-card">
              <Image
                src="/photos/foto-128.jpg"
                alt="Pilates naprava"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Posebnosti"
        title="Zakaj največ trije v skupini"
        className="bg-sage-paper/60"
      >
        <div className="max-w-[720px] space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Ker naprava ni stol. Ker pilates brez nastavljenih vzmeti, uravnoteženega dihanja in
            natančnega poravnanja ni pilates — je samo hitra vadba na dragi opremi.
          </p>
          <p>
            V skupini treh imam čas, da pri vsakomer prilagodim naprave in preverim izvedbo. V
            skupini desetih tega ne morem — in zato ne učim tako.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[
            { t: 'Največ 3 osebe', d: 'Dovolj prostora za individualni popravek in nastavitev.' },
            { t: 'Originalne naprave', d: 'Reformer, Cadillac, Wunda Chair — tiste, ki jih je predvidel Joseph sam.' },
            { t: 'Šolski ritem', d: 'Redna vadba skozi leto, poletni premor za regeneracijo.' },
          ].map((x) => (
            <div key={x.t} className="rounded-[20px] bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-teal-dark">{x.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{x.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Za koga" title="Kdo je dobrodošel">
        <ul className="grid gap-4 md:grid-cols-2">
          {WELCOME.map((w) => (
            <li key={w.t} className="rounded-[16px] bg-sage-paper p-5">
              <p className="font-display text-lg text-teal-dark">{w.t}</p>
              <p className="mt-1 text-sm text-ink-soft">{w.d}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Prvi obisk" title="Kako vstopiš" className="bg-sage-paper/60">
        <div className="max-w-[720px] space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Prvi obisk je <strong className="text-teal-dark">individualna obravnava s Sabino</strong>{' '}
            — da se pogovoriva o tvoji zgodovini, pogledava, kako telo stoji in se giblje, in
            izbereva program. Šele nato se vključiš v skupinsko vadbo.
          </p>
          <p>
            Sezona poteka v šolskem ritmu (september–junij). Število mest je omejeno — v novo
            sezono se vpisi odpirajo poleti.
          </p>
        </div>
      </Section>

      <Section eyebrow="Online pilates" title="Ko ne moreš v studio">
        <div className="max-w-[720px] space-y-4 text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>Če ne moreš v studio, sta na voljo dva online programa:</p>
          <ul className="space-y-2">
            <li>
              — <strong className="text-teal-dark">Online pilates za zdravo hrbtenico</strong> —
              odprt za vsakogar, ki želi redno skrbeti za gibljivost hrbtenice
            </li>
            <li>
              — <strong className="text-teal-dark">Online pilates za obstoječe študijske vadeče</strong>{' '}
              — nadaljevanje vadbe iz studia v domačem okolju
            </li>
          </ul>
        </div>
        <Link href="/spletni-tecaji" className="btn-ghost mt-6">
          Vsi spletni tečaji
        </Link>
      </Section>

      <PrviKorak context="pilates" />
    </>
  );
}
