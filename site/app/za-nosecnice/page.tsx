import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';
import { Testimonial } from '@/components/Testimonial';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Za nosečnice — Kraniosakralna terapija v nosečnosti',
  description:
    'Nežna priprava na porod skozi kraniosakralno terapijo. Sproščanje medenice in diafragme, umirjanje živčnega sistema. Tudi online vadba in svetovanje.',
};

const FOCUS = [
  {
    t: 'Sproščanje diafragme in medenice',
    d: 'Da imata otrok in porod prostor — brez napenjanja, brez sile.',
  },
  {
    t: 'Umirjanje živčnega sistema',
    d: 'Spanec pride lažje. Strah se utiša. Dihanje se poglobi.',
  },
  {
    t: 'Stabilizacija hrbtenice in križa',
    d: 'Ko se težišče vsak teden malo premakne, hrbtenica potrebuje novo ravnovesje.',
  },
  {
    t: 'Priprava tkiv na porod',
    d: 'Mehkejše vezivo, odzivnejši mišični tonus — telo ve, kako naj rodi.',
  },
  {
    t: 'Obravnava porodov iz preteklosti',
    d: 'Če je v telesu spomin na travmo, ga porod lahko prebudi — zato je dobro, da ga prej slišimo.',
  },
  {
    t: 'Podpora pri porodnih strahovih',
    d: 'Pogovor in dotik, ki ne zahteva razlage.',
  },
];

export default function ZaNosecnicePage() {
  return (
    <>
      <PageHero
        eyebrow="Za nosečnice"
        title={<>Tvoje telo že ve,<br />kako naj rodi.</>}
        glory="Na nas je, da ga slišimo."
        lede={
          <p>
            Nosečnost ni bolezen, ki jo je treba „upravljati". Je globok proces, ki potrebuje
            prostor, tišino in nekoga, ki ti ne pove, kaj moraš čutiti.
          </p>
        }
        cta={<SmsButton context="pregnancy" />}
        image={{ src: '/photos/kranio-nosecnice.jpg', alt: 'Kraniosakralna terapija v nosečnosti' }}
      />

      <Section
        eyebrow="Kaj prinese kranio v nosečnosti"
        title="Kar se sprosti, ne potrebuje popravljanja"
        lede="Kraniosakralna terapija v biodinamičnem pristopu je izjemno nežna — terapevtkin dotik tehta komaj toliko, kot stehta kovanec. Pa vendar se skozi ta mirni dotik v telesu zgodi veliko."
      >
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {FOCUS.map((item, i) => (
            <div key={item.t} className="rounded-[20px] bg-sage-paper p-6">
              <span className="wordmark text-sm tracking-[0.3em] text-teal-light">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 font-display text-xl text-teal-dark">{item.t}</p>
              <p className="mt-2 text-sm text-ink-soft">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Kdaj pridi"
        title="Termin lahko dogovoriva kadar koli v nosečnosti"
        className="bg-sage-paper/60"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Od zgodnjega trimesečja do zadnjih tednov. Večino žensk vidim nekje med 16. in 36.
              tednom, v ritmu ene obravnave vsakih 3–5 tednov. V zadnjih tednih pred porodom
              pogosto zgoščeno — en termin tedensko ali vsak drugi teden.
            </p>
            <p>
              Prvi obisk se pogosto obnese kot eno srečanje. Za trajnejše premike pa je smiselna
              serija treh do petih obravnav, razporejenih skozi nosečnost.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-[20px] bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-teal-dark">Kaj prinesi</h3>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                <li>— udobna, topla oblačila (obravnava je oblečena)</li>
                <li>— čas za sebe — po obravnavi se ne vračamo takoj v tempo dneva</li>
                <li>— če te spremlja partner, ga je dobrodošlo pripeljati</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Online možnost" title="Če ne moreš v studio">
        <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[640px]">
          <p>
            Če živiš predaleč ali preprosto nimaš moči za pot, je na voljo{' '}
            <strong className="text-teal-dark">online celostna vadba in svetovanje za nosečnice</strong>{' '}
            — gibanje, dihanje, priprava telesa in duha na porod, skozi celo nosečnost.
          </p>
          <p>
            Ura v živo preko Zoom-a, enkrat tedensko. Skupina je majhna, da se vidimo. Pridružiš se
            lahko kadar koli v nosečnosti.
          </p>
        </div>
        <Link href="/spletni-tecaji/vadba-za-nosecnice" className="btn-ghost mt-6">
          Več o online tečaju
        </Link>
      </Section>

      <Section className="bg-sage-paper/60">
        <Testimonial
          quote="Prvi porod sem preživela. Drugi sem doživela. Razlika je bila v tem, da sem se pripravljala — ne z načrti, ampak z ušesi na svojem telesu."
          author="Po drugem porodu"
          role="pričevanje objavljeno s soglasjem"
        />
      </Section>

      <PrviKorak context="pregnancy" />
    </>
  );
}
