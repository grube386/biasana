import Link from 'next/link';
import { HomeHero } from '@/components/HomeHero';
import { ServicesGrid } from '@/components/ServicesGrid';
import { Testimonial } from '@/components/Testimonial';
import { PrviKorak } from '@/components/PrviKorak';
import { Reveal } from '@/components/Reveal';
import {
  ADDRESS_LINE,
  PHONE_DISPLAY,
  smsHref,
} from '@/lib/contact';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* Stanza — serif echo right after hero */}
      <section className="bg-cream py-[90px] md:py-[110px]">
        <div className="mx-auto max-w-wide px-5 md:px-10">
          <div className="mx-auto max-w-[760px] text-center">
            <Reveal>
              <p className="eyebrow mb-[18px]">O naju · Polona & Sabina</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="serif-display text-[clamp(26px,3.6vw,44px)] leading-[1.25] text-teal-dark">
                Dvanajst let v istem prostoru. Dva poklica, ki drug drugega dopolnjujeta —
                nega in terapija v nosečnosti in po porodu, ter gibanje, ki skrbi za
                telo skozi vsa življenjska obdobja.
              </h2>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7">
                <Link
                  href="/o-naju"
                  className="inline-flex items-center gap-2.5 border-b border-teal-deep pb-1 text-[13px] font-semibold tracking-[0.04em] text-teal-deep"
                >
                  Spoznaj naju
                  <svg
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M1 5h12m-4-4l4 4-4 4" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services — hairline grid, six vhodov */}
      <section id="storitve" className="bg-white py-[90px] md:py-[110px]">
        <div className="mx-auto max-w-wide px-5 md:px-10">
          <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
            <Reveal>
              <div>
                <p className="eyebrow mb-3.5">Kaj delava</p>
                <h2 className="font-display uppercase tracking-[0.02em] text-[clamp(32px,4.2vw,56px)] leading-[1.05] text-teal-dark max-w-[720px]">
                  Šest vhodov v isto
                  <br />
                  mirno sobo.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-[360px] text-[15px] text-ink-soft">
                Vsaka storitev ima svoj ritem, a vse izhajajo iz istega pristopa —
                počasnega, osebnega, brez hitenja.
              </p>
            </Reveal>
          </div>

          <ServicesGrid
            items={[
              {
                href: '/za-nosecnice',
                title: 'Za nosečnice',
                description: 'Nežna priprava na porod. Sproščanje medenice, dihanja, živčnega sistema.',
                who: 'Polona',
              },
              {
                href: '/za-mamice-in-dojencke',
                title: 'Za mamice in dojenčke',
                description: 'Istočasno delata dve terapevtki. Gibalne urice po metodi Pedosana.',
                who: 'Polona & Sabina',
                flagship: true,
              },
              {
                href: '/za-otroke',
                title: 'Za otroke in mladostnike',
                description: 'Podpora pri spanju, čustvih, šolskem stresu.',
                who: 'Polona',
              },
              {
                href: '/za-odrasle',
                title: 'Za odrasle in športnike',
                description: 'Kronična napetost, nespečnost, regeneracija po poškodbah.',
                who: 'Polona & Sabina',
              },
              {
                href: '/pilates',
                title: 'Pilates',
                description: 'Klasični Contrology na napravah. Največ tri osebe v skupini.',
                who: 'Sabina',
              },
              {
                href: '/spletni-tecaji',
                title: 'Spletni tečaji',
                description:
                  'Shiatsu za dojenčke, vadba za nosečnice in mamice, pilates — od doma.',
                who: 'Od doma',
              },
            ]}
          />
        </div>
      </section>

      {/* Partnership — present but not headlined */}
      <section className="bg-cream py-[70px] md:py-[90px]">
        <div className="mx-auto max-w-wide px-5 md:px-10">
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            <Reveal>
              <div>
                <p className="eyebrow mb-3.5">Skupna zgodba</p>
                <h2 className="font-display uppercase tracking-[0.02em] text-[clamp(26px,3vw,38px)] leading-[1.15] text-teal-dark">
                  Zakaj delava skupaj
                </h2>
                <div className="mt-4 max-w-[520px] space-y-3.5 text-[15px] text-ink-soft">
                  <p>
                    Polona je kraniosakralna terapevtka in certificirana mentorica metode
                    Pedosana. Sabina je inštruktorica klasičnega pilatesa po metodi Contrology,
                    izobražena tudi za Chi Nei Tsang in Tok Sen.
                  </p>
                  <p>
                    Z leti sva ugotovili, da se najine metode ne le ne prekrivajo — potrebujeta
                    se. Kraniosakralna terapija odpre, pilates dogovori. Sprostitev, ki jo telo
                    najde na terapiji, se skozi gibanje zasidra.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="ph-warm relative aspect-[3/4] overflow-hidden rounded-xl">
                  <span className="pointer-events-none absolute bottom-2 left-2.5 font-mono text-[9px] uppercase tracking-[0.06em] opacity-70">
                    placeholder · polona_portrait.jpg
                  </span>
                </div>
                <div className="ph-sage relative mt-10 aspect-[3/4] overflow-hidden rounded-xl">
                  <span className="pointer-events-none absolute bottom-2 left-2.5 font-mono text-[9px] uppercase tracking-[0.06em] opacity-70">
                    placeholder · sabina_portrait.jpg
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials — editorial, top-rule, italic serif */}
      <section className="bg-white py-[90px]">
        <div className="mx-auto max-w-wide px-5 md:px-10">
          <Reveal>
            <p className="eyebrow mb-7 text-center">Kar pravijo</p>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            <Reveal delay={0}>
              <Testimonial
                quote="Prišla sem izčrpana in prepričana, da je z menoj nekaj narobe. Odšla sem s tišino, ki je nisem poznala. Tudi mali je tisti dan prvič v tednih zaspal brez joka."
                author="Mamica z dojenčkom"
                role="pričevanje objavljeno s soglasjem"
              />
            </Reveal>
            <Reveal delay={90}>
              <Testimonial
                quote="Prvi porod sem preživela. Drugi sem doživela. Razlika je bila v tem, da sem se pripravljala — ne z načrti, ampak z ušesi na svojem telesu."
                author="Po drugem porodu"
                role="pričevanje objavljeno s soglasjem"
              />
            </Reveal>
            <Reveal delay={180}>
              <Testimonial
                quote="Hodim že četrto sezono. Ni vadba, ki te izčrpa — je vadba, ki te postavi nazaj v tvoje telo."
                author="Pilates"
                role="pričevanje objavljeno s soglasjem"
              />
            </Reveal>
          </div>
          <p className="mt-10 text-center text-xs text-ink-mute">
            Vse pričevanja so objavljena s pisnim soglasjem njihovih avtorjev.
          </p>
        </div>
      </section>

      {/* Info strip — Kje / Kdaj / Cena / SMS */}
      <section className="bg-paper py-[60px]">
        <div className="mx-auto max-w-wide px-5 md:px-10">
          <div className="grid gap-8 md:grid-cols-4 md:gap-6">
            <div>
              <p className="eyebrow mb-2.5">Kje smo</p>
              <p className="serif-display text-[17px] leading-[1.35] text-teal-dark">
                {ADDRESS_LINE}
              </p>
              <Link
                href="/kontakt"
                className="mt-2.5 inline-block text-[13px] font-semibold text-teal-deep"
              >
                Poglej zemljevid →
              </Link>
            </div>
            <div>
              <p className="eyebrow mb-2.5">Kdaj</p>
              <p className="text-[15px] leading-[1.6] text-ink">
                Po dogovoru.
                <br />
                Termine potrjujeva po SMS-u.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2.5">Cena</p>
              <p className="text-[15px] leading-[1.6] text-ink">
                Odvisna od storitve.
                <br />
                <Link
                  href="/cenik"
                  className="border-b border-teal-deep font-semibold text-teal-deep no-underline"
                >
                  Poglej cenik
                </Link>
              </p>
            </div>
            <div>
              <p className="eyebrow mb-2.5">SMS</p>
              <a
                href={smsHref('default')}
                className="block text-[17px] font-semibold text-teal-deep no-underline"
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-[13px] text-ink-soft">Odgovoriva v dnevu.</p>
            </div>
          </div>
        </div>
      </section>

      <PrviKorak />
    </>
  );
}
