import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { mailtoHref } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Cenik in prvi obisk',
  description:
    'Cene kraniosakralne terapije, pilatesa, gibalnih uric in spletnih tečajev. Kaj pričakovati ob prvem obisku: trajanje, oblačila, parking, potek.',
};

export const revalidate = 3600;

export default function CenikPage() {
  return (
    <>
      <PageHero
        eyebrow="Cenik · Prvi obisk"
        title={<>Transparentno.<br />Brez presenečenj.</>}
        lede={
          <p>
            Preden pogledaš cene — nekaj o tem, kako izgleda prvi obisk.
          </p>
        }
      />

      <Section eyebrow="Prvi obisk" title="Kaj pričakovati, ko prideš prvič">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl text-teal-dark">Kako dolgo traja</h3>
              <ul className="mt-3 space-y-3 text-[0.98rem] text-ink-soft">
                <li>
                  <strong className="text-teal-dark">Kraniosakralna terapija</strong> traja 60 minut.
                  Predhoden pogovor je del obravnave, tako da si na mizi približno 45–50 minut.
                </li>
                <li>
                  <strong className="text-teal-dark">Pilates — prva individualna obravnava</strong>{' '}
                  traja 60 minut; v njej spoznava tvoje telo in izbereva program. Skupinska ura
                  traja 55 minut.
                </li>
                <li>
                  <strong className="text-teal-dark">Gibalne urice po metodi Pedosana</strong>{' '}
                  trajajo 60 minut; vključujejo skupinski del in individualno obravnavo s
                  terapevtko.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-xl text-teal-dark">Kaj obleci</h3>
              <ul className="mt-3 space-y-3 text-[0.98rem] text-ink-soft">
                <li>
                  Za <strong className="text-teal-dark">kraniosakralno terapijo</strong> udobna, topla
                  oblačila — obravnava je oblečena. Brez nakita, ki se zaplete v dotik.
                </li>
                <li>
                  Za <strong className="text-teal-dark">pilates</strong> oblačila, v katerih se
                  svobodno gibaš (daljši zgornji del priporočen), nogavice z obrnjenimi podplati.
                  Brez parfumov.
                </li>
                <li>
                  Za <strong className="text-teal-dark">gibalne urice z dojenčkom</strong> udobna
                  oblačila zate; malega pa oblačila, v katerih se lahko prosto giblje — ali pa kar
                  brez, prostor je topel.
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl text-teal-dark">Kaj prinesi</h3>
              <p className="mt-3 text-[0.98rem] text-ink-soft">
                Za vse obiske: vodo, morebitno terapijo oz. diagnozo, če je relevantna. Za
                kraniosakralno terapijo predolgih listov z zgodovino ne potrebuješ — povem ti, kaj
                je pomembno vedeti pred obravnavo.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-teal-dark">Parkiranje</h3>
              <p className="mt-3 text-[0.98rem] text-ink-soft">
                Parking je urejen na ulici. Točen naslov in navodila dobiš ob potrditvi termina.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl text-teal-dark">Kaj pričakovati po obravnavi</h3>
              <p className="mt-3 text-[0.98rem] text-ink-soft">
                Po kraniosakralni terapiji je priporočljivo, da se ne vračaš takoj v hiter tempo.
                Veliko počitka in predvsem tekočine. Če pride lakota, se ne upiraj :)
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Cene" title="Cenik" className="bg-sage-paper/60">
        <div className="rounded-[20px] border border-dashed border-teal-light/60 bg-white p-8">
          <p className="eyebrow text-teal-light">V pripravi · Google Sheets integracija</p>
          <h3 className="mt-3 font-display text-2xl text-teal-dark">
            Cene se dinamično nalagajo iz Google Sheeta
          </h3>
          <p className="mt-3 text-ink-soft text-[0.95rem]">
            Cenik se osvežuje iz Biasanine interne tabele; spremembe so vidne v največ eni uri. Če
            tabela trenutno ni dosegljiva, nam piši SMS na 040 454 462 za aktualne cene.
          </p>
        </div>
      </Section>

      <Section eyebrow="Darilni bon" title="BiaBon">
        <div className="grid gap-8 md:grid-cols-12 items-start">
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              BiaBon je darilni bon za katerokoli Biasanino storitev — terapijo, pilates, gibalne
              urice, spletni tečaj.
            </p>
            <p>
              Primerno darilo za partnerja, ki ne zna prositi za termin. Za mamico, ki bi za
              božič rada tišino. Za sebe.
            </p>
          </div>
          <div className="md:col-span-5">
            <a
              href={mailtoHref('sabina', 'BiaBon — povpraševanje po darilnem bonu')}
              className="block rounded-[22px] bg-teal-deep p-8 text-white shadow-card transition-transform hover:-translate-y-0.5"
            >
              <p className="eyebrow text-sage-mist">Naroči BiaBon</p>
              <p className="mt-3 font-display text-3xl">Podari dobro počutje.</p>
              <p className="mt-4 text-sm text-white/80">
                Piši Sabini — uredi vse potrebno in ti pošlje bon.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sage-mist">
                biasana.sabina@gmail.com →
              </span>
            </a>
          </div>
        </div>
      </Section>

      <PrviKorak />
    </>
  );
}
