import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';

export const metadata: Metadata = {
  title: 'Za odrasle in športnike',
  description:
    'Kraniosakralna terapija za kronično napetost, anksioznost, nespečnost, regeneracijo po poškodbah. Za odrasle, starostnike in športnike.',
};

const REASONS = [
  'Kronična napetost v vratu, ramenih, križu — tudi ko se je fizioterapija „iztekla"',
  'Tenzijski glavoboli in migrene',
  'Anksioznost in stiska, ki se ji ne ve vzroka',
  'Nespečnost, težave s spancem',
  'Stanja po dolgi bolezni, operacijah, porodu',
  'Čustveni pretresi — izguba, ločitev, izgorelost',
  'Psihosomatske težave, ki jih preiskave „ne najdejo"',
];

const ATHLETE_PHASES = [
  {
    t: 'V regeneracijskem obdobju',
    d: 'Med intenzivnimi cikli, ko telo potrebuje globoko umiritev živčnega sistema.',
  },
  {
    t: 'Po poškodbi',
    d: 'Ko so akutne faze mimo, a telo še ni „celo".',
  },
  {
    t: 'Pred tekmo',
    d: 'Za umirjenje živčnega sistema in globlji spanec.',
  },
  {
    t: 'Pri ponavljajočih poškodbah',
    d: 'Istega sklepa ali mišične skupine — tam se skriva vzorec.',
  },
];

export default function ZaOdraslePage() {
  return (
    <>
      <PageHero
        eyebrow="Odrasli · starostniki · športniki"
        title={<>Ko telo nosi preveč.</>}
        glory="Kraniosakralna terapija ne razišče — posluša."
        lede={
          <p>
            Včasih ne znaš povedati, kaj te boli. Samo veš, da ni prav. Da spiš, pa si utrujen.
            Da se smeješ, pa ti je na jok. Da se ramena ne spustijo, ko bi se morala. Skozi
            poslušanje telo najde svojo pot nazaj v ravnotežje.
          </p>
        }
        cta={<SmsButton context="adults" />}
        image={{ src: '/photos/kranio-odrasli.jpg', alt: 'Kranio za odraslega' }}
      />

      <Section eyebrow="S čim pridejo odrasli" title="Najpogostejši razlogi za prvi obisk">
        <ul className="grid gap-4 md:grid-cols-2">
          {REASONS.map((r) => (
            <li key={r} className="flex items-start gap-3 rounded-[16px] bg-sage-paper p-5">
              <span aria-hidden className="mt-1 block h-2 w-2 rounded-full bg-teal-light flex-shrink-0" />
              <span className="text-[0.98rem] text-ink">{r}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[640px] text-[1.02rem] leading-[1.7] text-ink-soft">
          Za starostnike je terapija še posebej primerna, ker je nežna in varna tudi pri občutljivih
          tkivih in kronikih.
        </p>
      </Section>

      <Section
        eyebrow="Za športnike"
        title="Regeneracija, ki ni samo sproščanje"
        lede="Kraniosakralna terapija ni zamenjava za masažo in ne zamenjava za fizioterapijo. Je nekaj tretjega: globoka regeneracija živčnega sistema, ki je zlato vredna ravno pred in po veliki obremenitvi."
        className="bg-sage-paper/60"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {ATHLETE_PHASES.map((p) => (
            <div key={p.t} className="rounded-[20px] bg-white p-6 shadow-soft">
              <h3 className="font-display text-xl text-teal-dark">{p.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Prvi obisk" title="Kako izgleda obravnava">
        <div className="space-y-5 max-w-[680px] text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Obravnava traja 60 minut. Si oblečen v udobnih oblačilih, leži na mizi. Dotik je miren
            in tih. Pogovor pred obravnavo kratek, po obravnavi po potrebi.
          </p>
          <p>
            Ne odhajaš „popravljen" — odhajaš bolj slišan.
          </p>
          <p>
            Prvi obisk je pogosto dovolj za začutenje sprememb. Za trajnejše premike predlagam
            serijo treh do petih obravnav, razporejenih v nekaj tednih.
          </p>
        </div>
      </Section>

      <PrviKorak context="adults" />
    </>
  );
}
