import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';

export const metadata: Metadata = {
  title: 'Za otroke in mladostnike',
  description:
    'Kraniosakralna terapija za otroke in najstnike: podpora pri spanju, čustvih, šolskem stresu, imunskem sistemu. Prostor brez popravljanja.',
};

const TOPICS = [
  { t: 'Spanje', d: 'Težko zaspi, se pogosto prebuja, se prebuja v strahu.' },
  { t: 'Čustva, ki so prevelika', d: 'Jeza, ki se je otrok sam prestraši; trma, ki ni „izbira"; jok brez vzroka.' },
  { t: 'Šolski stres', d: 'Trebušna bolečina pred testom, strah pred nastopi, občutek, da ni dovolj dober.' },
  { t: 'Imunski sistem', d: 'Verižne virusne okužbe, dolgo okrevanje.' },
  { t: 'Po padcih, poškodbah', d: 'Telesu pomagamo, da shrani izkušnjo in gre naprej.' },
  { t: 'Po čustvenem pretresu', d: 'Selitev, ločitev, izguba, bolnišnica — v družini se zgodi veliko.' },
];

export default function ZaOtrokePage() {
  return (
    <>
      <PageHero
        eyebrow="Za otroke in mladostnike"
        title={<>Pri nas otrok<br />ne rabi biti „priden".</>}
        glory="Brez sodb. Brez popravljanja."
        lede={
          <p>
            Obravnava ni nagrada za dobro vedenje in ni kazen za težkega dneva. Je prostor, kjer
            sme biti, kot je — buden, zaspan, nagajiv, tih. Z menoj dela njegovo telo, ne on.
          </p>
        }
        cta={<SmsButton context="children" />}
        image={{ src: '/photos/kranio-otroci.jpg', alt: 'Kranio za otroka' }}
      />

      <Section
        eyebrow="Kdaj starši pripeljete otroka"
        title="Teme, pri katerih kranio pomaga"
        lede="Najpogostejši razlogi so povsem vsakdanji in hkrati močno obremenjujoči."
      >
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TOPICS.map((topic) => (
            <div key={topic.t} className="rounded-[20px] bg-sage-paper p-6">
              <h3 className="font-display text-xl text-teal-dark">{topic.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{topic.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Prvi obisk" title="Kako izgleda obravnava" className="bg-sage-paper/60">
        <div className="space-y-5 max-w-[680px] text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Otrok je oblečen. Obravnava poteka na mizi, v naročju pri starših, tudi ob igranju —
            odvisno od starosti in razpoloženja. Dotik je nežen, tih; terapevtski pogovor z
            otrokom ni nujen in ni obvezen.
          </p>
          <p>
            S starši se po obravnavi pogovorimo o tem, kar sem v telesu zaznala, in o tem, kaj je
            dobro doma.
          </p>
          <p>
            Prvi obisk se pogosto obnese kot eno srečanje; pri težjih temah predlagam serijo treh
            do petih obravnav, nato premor, potem po potrebi.
          </p>
        </div>
      </Section>

      <Section eyebrow="Mladostniki" title="Drugačen tempo, drugačne besede">
        <div className="space-y-5 max-w-[680px] text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Z najstniki delamo drugače kot z malčki. Pogovor je bolj enakovreden, obravnava
            krajša, tišina pogosto dragocenejša od besed.
          </p>
          <p>
            Anksioznost, nespečnost, glavoboli, občutek prevelikih pričakovanj — kraniosakralna
            terapija je eden redkih prostorov, kjer od najstnika nihče ničesar ne zahteva.
          </p>
        </div>
      </Section>

      <PrviKorak context="children" />
    </>
  );
}
