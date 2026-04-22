import Image from 'next/image';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';

export const metadata: Metadata = {
  title: 'O naju · Polona in Sabina',
  description:
    'Polona je kraniosakralna terapevtka in mentorica metode Pedosana. Sabina kraniosakralna terapevtka, inštruktorica klasičnega pilatesa, Chi Nei Tsang in Tok Sen. Biasana od leta 2012.',
};

const ARTICLES = [
  {
    source: 'Svet24.si',
    title: 'Bitka Sabine Miklavčič: „Moja pot iz brezna …"',
    desc: 'Dolgi intervju s Sabino o osebni poti, odnosu do telesa in nastanku Biasane.',
    href: '#',
  },
  {
    source: 'Bibaleze.si',
    title: 'Prednosti kraniosakralne terapije za dojenčke',
    desc: 'Članek o tem, zakaj in kdaj se odločiti za kraniosakralno terapijo pri dojenčku.',
    href: '#',
  },
  {
    source: 'Zon.si',
    title: 'Bolezni izhajajo tudi iz naše nepovezanosti s samim seboj',
    desc: 'Pogovor o filozofiji celostnega pristopa, ki stoji za Biasano.',
    href: '#',
  },
];

export default function ONajuPage() {
  return (
    <>
      <PageHero
        tone="cream"
        titleVariant="serif"
        eyebrow="O naju"
        title={<>Dve roki,<br />dve poti,<br />en prostor.</>}
        glory="Telo ve. Vabiva ga."
        lede={
          <p>
            Biasano vodiva skupaj. Polona iz ročnega, biodinamičnega dela; Sabina iz strukture
            gibanja in moči. Dopolnjujeva se — zato, da ti lahko ponudiva celo, ne le polovico.
          </p>
        }
        image={{ src: '/photos/sabina.jpg', alt: 'Polona in Sabina' }}
      />

      <Section
        eyebrow="Polona Skerbinek Miklavčič"
        title="Kraniosakralna terapevtka, mentorica metode Pedosana"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/photos/foto-102.jpg"
                alt="Polona Skerbinek Miklavčič"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Veliko delam z dojenčki, nosečnicami in otroki. S tistimi, ki besed še nimajo, in s
              tistimi, ki jih več ne najdejo. Kraniosakralna terapija v biodinamičnem pristopu je
              moj jezik — subtilen, počasen, zaupanja vreden. Zelo rada pa pomagam tudi odraslim
              odkriti, kako jim kraniosakralna terapija lahko pomaga.
            </p>
            <p>
              Certificirana sem za metodo <strong className="text-teal-dark">Pedosana</strong>,
              gibalno-razvojni pristop k delu z dojenčki. Specializirana za podporo pri dojenju,
              porodnem stresu, priraščenem jeziku, stisnjeni čeljusti in zgodnjem gibalnem razvoju.
            </p>
            <div className="pt-3">
              <p className="font-display text-lg text-teal-dark">Delam z:</p>
              <ul className="mt-3 space-y-2">
                <li>— nosečnicami (priprava na porod, sproščanje diafragme in medenice)</li>
                <li>— mamicami in dojenčki hkrati (v paru s Sabino ali s kolegico)</li>
                <li>— dojenčki in malčki (individualno in v skupini na gibalnih uricah)</li>
                <li>— otroki in mladostniki (čustvena podpora, spanje, šolski stres)</li>
                <li>— odraslimi (šport, bolečine, nespečnost)</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Sabina Skerbinek Miklavčič"
        title="Inštruktorica klasičnega pilatesa, Chi Nei Tsang, Tok Sen"
        className="bg-sage-paper/60"
      >
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div className="md:col-span-7 md:order-1 order-2 space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Moje delo je gibanje, ki telesu vrne njegovo lastno inteligenco. Pilates poučujem
              po metodi <strong className="text-teal-dark">Contrology</strong> — izvirni šoli
              Josepha H. Pilatesa, na originalnih napravah, v skupinah največ treh oseb. Ne gre
              za trening za izgorevanje. Gre za reorganizacijo telesa, čustev in duha.
            </p>
            <p>
              Dopolnilno sem izobražena za <strong className="text-teal-dark">Chi Nei Tsang</strong>{' '}
              (taoistično detoks masažo trebuha) in <strong className="text-teal-dark">Tok Sen</strong>{' '}
              (masažo z zdravilnimi vibracijami) pod mentorstvom Nataše Kovač.
            </p>
            <div className="pt-3">
              <p className="font-display text-lg text-teal-dark">Delam z:</p>
              <ul className="mt-3 space-y-2">
                <li>— pilates vadečimi v studiu (začetniki, napredni, posebne potrebe hrbtenice)</li>
                <li>— nosečnicami in mamicami po porodu (online vadba in svetovanje)</li>
                <li>— odraslimi, ki iščejo globljo povezavo s telesom skozi Chi Nei Tsang in Tok Sen</li>
              </ul>
            </div>
          </div>
          <div className="md:col-span-5 md:order-2 order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-card">
              <Image
                src="/photos/foto-144.jpg"
                alt="Sabina Skerbinek Miklavčič"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Skupaj" title="Dve metodi, ki se potrebujeta">
        <div className="max-w-[720px] space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
          <p>
            Z leti sva ugotovili, da se najine metode ne le ne prekrivajo — potrebujeta se.
            Kraniosakralna terapija odpre, pilates dogovori. Dihanje, ki ga usvojiš na vadbi,
            postane rešilno v dnevu, ko te kaj stisne. Sprostitev, ki jo telo najde na terapiji,
            se skozi gibanje zasidra.
          </p>
          <p>
            Leta 2024 sva postali tudi mami sinu Jakob Aljažu. Materinstvo je najino razumevanje
            dela z mladimi družinami poglobilo — za drobne stvari, ki se jih iz knjige ni dalo
            naučiti, sva sedaj bolj pozorni.
          </p>
        </div>
      </Section>

      <Section eyebrow="V medijih" title="Kaj so pisali o Biasani" className="bg-sage-paper/60">
        <ul className="grid gap-4 md:grid-cols-3">
          {ARTICLES.map((a) => (
            <li key={a.source}>
              <a
                href={a.href}
                rel="noopener"
                target="_blank"
                className="group flex h-full flex-col rounded-[20px] border border-teal-deep/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
              >
                <span className="eyebrow">{a.source}</span>
                <p className="mt-3 font-display text-xl text-teal-dark group-hover:text-teal-deep">
                  {a.title}
                </p>
                <p className="mt-3 text-sm text-ink-soft">{a.desc}</p>
                <span className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
                  Preberi članek →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <PrviKorak />
    </>
  );
}
