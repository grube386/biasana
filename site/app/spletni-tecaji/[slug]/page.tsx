import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ReactNode } from 'react';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { PrviKorak } from '@/components/PrviKorak';
import { mailtoHref } from '@/lib/contact';
import { COURSES } from '../page';

type TeacherKey = 'polona' | 'sabina';

type CourseContent = {
  emailTo: TeacherKey;
  emailSubject: string;
  image: { src: string; alt: string };
  headline: ReactNode;
  glory?: string;
  intro: ReactNode;
  sections: { eyebrow?: string; title: string; tone?: 'white' | 'sage'; body: ReactNode }[];
};

const CONTENT: Record<string, CourseContent> = {
  'shiatsu-masaza-za-dojencke': {
    emailTo: 'polona',
    emailSubject: 'Prijava — Shiatsu tečaj za dojenčke',
    image: { src: '/photos/foto-128.jpg', alt: 'Shiatsu masaža za dojenčke' },
    headline: <>Kako se z otrokom pogovarjaš<br />skozi dotik.</>,
    glory: 'Štiritedenski spletni tečaj.',
    intro: (
      <p>
        Za čas pred spanjem. Za krčke. Za trenutke, ko ne veš, kaj narediti — in bi rada imela
        nekaj, kar deluje.
      </p>
    ),
    sections: [
      {
        eyebrow: 'Metoda',
        title: 'Kaj je Shiatsu za dojenčke',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft">
            <p>
              Shiatsu je japonska nežna masaža, ki temelji na akupresurnih točkah in pretoku
              energije skozi telo. Dojenčkov sistem je zelo odziven — dotik na pravi točki, v
              pravem tempu, dela razliko, ki se pozna v nekaj minutah.
            </p>
            <p>
              Tečaj je zasnovan tako, da ga lahko uporabljaš doma, z otrokom v naročju, na preprogi,
              po kopeli — kadarkoli ti ustreza. Ničesar ne potrebuješ, razen toplih rok.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Kaj boš znala',
        title: 'Po tečaju',
        tone: 'sage',
        body: (
          <ul className="grid gap-4 md:grid-cols-2 text-[0.98rem] text-ink-soft">
            {[
              ['Krčki in napet trebušček', 'Prijemi, ki zanesljivo pomagajo.'],
              ['Umirjanje pred spanjem', 'Zaporedje, ki postane del večerne rutine.'],
              ['Napetosti v vratu in ramenih', 'Za dojenčke, ki veliko ležijo ali so imeli težji porod.'],
              ['Stimulacija prebave', 'Za zaprtje, redek stol, neumirjenost po hranjenju.'],
              ['Povezava mama–otrok', 'Najbolj dragocen „stranski učinek".'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-[16px] bg-white p-5 shadow-soft">
                <p className="font-display text-lg text-teal-dark">{t}</p>
                <p className="mt-1 text-sm">{d}</p>
              </li>
            ))}
          </ul>
        ),
      },
      {
        eyebrow: 'Potek',
        title: 'Kako poteka',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            <p>
              <strong className="text-teal-dark">Štirje tedni, enkrat tedensko, preko Zoom-a.</strong>{' '}
              Ura traja približno 75 minut — del za demonstracijo, del za skupno vajo, del za
              vprašanja. Posnetki sreč so ti na voljo še 2 tedna po zaključku.
            </p>
            <p>
              Skupine so majhne, da imam čas za tvoja vprašanja. Tečaj teče večkrat letno — termine
              dobiš v odgovoru na prijavo.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Komu je namenjen',
        title: 'Za mamice (in očete)',
        tone: 'sage',
        body: (
          <p className="text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            Mamice dojenčkov od rojstva do približno enega leta. Brez predznanja. Tudi za očete,
            če ga želita delati skupaj. Primerno tudi, če tečaj poteka v času, ko je dojenček že
            malo starejši — tehnike se prilagodijo.
          </p>
        ),
      },
    ],
  },
  'vadba-za-nosecnice': {
    emailTo: 'sabina',
    emailSubject: 'Prijava — Celostna vadba za nosečnice',
    image: { src: '/photos/nosecnice-vadba.jpg', alt: 'Celostna vadba za nosečnice' },
    headline: <>Skozi celo nosečnost.<br />Online, iz dnevne sobe.</>,
    glory: 'Gibanje, dihanje, pogovor.',
    intro: (
      <p>
        Vse troje enako pomembno. Telo, ki se pripravlja na največji gibalni podvig svojega
        življenja, potrebuje gibanje, ki se tega zaveda.
      </p>
    ),
    sections: [
      {
        eyebrow: 'Filozofija',
        title: 'Zakaj vadba, ki ne obremenjuje',
        body: (
          <p className="text-[1.02rem] leading-[1.7] text-ink-soft max-w-[720px]">
            Nosečnost ni čas za izvajanje istih vaj, le „previdneje". Je čas, ko se telo
            pripravlja na največji gibalni podvig svojega življenja — in potrebuje gibanje, ki se
            tega zaveda. Diafragma, medenično dno, prsni koš, hrbtenica — vsak del telesa ima
            svojo nalogo pri porodu, in vsak se naučiš ozavestiti.
          </p>
        ),
      },
      {
        eyebrow: 'Vsebina',
        title: 'Kaj delamo',
        tone: 'sage',
        body: (
          <ul className="grid gap-4 md:grid-cols-2 text-[0.98rem] text-ink-soft">
            {[
              ['Dihanje', 'Ki bo rešilno v porodu in v dneh po njem.'],
              ['Gibljivost medenice in kolkov', 'Odpiramo prostor za otroka in za rojstvo.'],
              ['Stabilizacija trupa in hrbtenice', 'Ko težišče vsak mesec malo drugače.'],
              ['Medenično dno', 'Razumevanje, sproščanje, krepitev — ne enkratno izvajanje.'],
              ['Svetovanje', 'O spancu, slabosti, strahovih, odnosu, pripravi partnerja.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-[16px] bg-white p-5 shadow-soft">
                <p className="font-display text-lg text-teal-dark">{t}</p>
                <p className="mt-1 text-sm">{d}</p>
              </li>
            ))}
          </ul>
        ),
      },
      {
        eyebrow: 'Potek',
        title: 'Kako poteka',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            <p>
              Ura v živo preko Zoom-a, enkrat tedensko. Skupina je majhna, da se vidimo. Po vsaki
              uri imaš možnost poslati vprašanje v pisni obliki, na katero dobiš odgovor v pisnem
              ali video odgovoru.
            </p>
            <p>
              Pridružiš se lahko kadar koli v nosečnosti — termini se vrtijo kontinuirano. Za
              podrobnosti o urniku, ceni in Zoom povezavi piši v prijavi.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Primerno za',
        title: 'Komu je namenjen',
        tone: 'sage',
        body: (
          <ul className="space-y-2 text-[0.98rem] text-ink-soft">
            <li>— nosečnice od 12. tedna dalje (za prvo trimesečje pred začetkom se posvetujmo)</li>
            <li>— prve noseče, ki iščejo pripravo; ponovno noseče, ki bi rade to nosečnost doživele drugače</li>
            <li>— nosečnice, ki ne morejo priti v studio zaradi oddaljenosti, dela ali drugih otrok</li>
          </ul>
        ),
      },
    ],
  },
  'vadba-za-mamice': {
    emailTo: 'sabina',
    emailSubject: 'Prijava — Celostna vadba za mamice po porodu',
    image: { src: '/photos/foto-144.jpg', alt: 'Celostna vadba za mamice po porodu' },
    headline: <>Postpartum ni šest tednov.<br />Je leto, včasih več.</>,
    glory: 'Novo telo, ne „nazaj v formo".',
    intro: (
      <p>
        Vadba, ki to razume, ni vadba, ki te „spravi nazaj v formo" — je vadba, ki ti vrne telo v
        novo obliko.
      </p>
    ),
    sections: [
      {
        eyebrow: 'Začetek',
        title: 'Kdaj začeti',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[720px]">
            <p>
              <strong className="text-teal-dark">Prej kot misliš, pozneje kot čakaš.</strong> Nežno
              gibanje (dihanje, drobne aktivacije, stoje) lahko začneš zelo kmalu po porodu — tudi
              po carskem rezu, po posvetu. Polno vadbo z bolj izzivalnimi vajami ponavadi okrog
              8.–12. tedna, ko so tkiva že vsaj deloma zaceljena.
            </p>
            <p>
              Vsaka mamica vstopi s svojim tempom. V skupino se lahko vključiš po 6. tednu od
              poroda — po predhodnem kratkem pogovoru, da uskladiva izhodišča.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Posebnost',
        title: 'Kaj je drugače od „običajne vadbe"',
        tone: 'sage',
        body: (
          <ul className="grid gap-4 md:grid-cols-2 text-[0.98rem] text-ink-soft">
            {[
              ['Diastaza in medenično dno', 'Pregled in delo, ki ne ponavlja napak.'],
              ['Drža', 'Ki se je skrivila skozi nosečnost in nošenje — ramena nazaj, dihanje v prsni koš.'],
              ['Hormoni, izčrpanost, dojenje', 'Vadba je prilagojena energiji, ki je tisti dan na voljo.'],
              ['Pogovor', 'O spanju, o krčkih, o partnerju, o strahu. Skupina, v kateri se ne delamo, da je vse v redu.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-[16px] bg-white p-5 shadow-soft">
                <p className="font-display text-lg text-teal-dark">{t}</p>
                <p className="mt-1 text-sm">{d}</p>
              </li>
            ))}
          </ul>
        ),
      },
      {
        eyebrow: 'Potek',
        title: 'Kako poteka',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            <p>
              Ura v živo preko Zoom-a, enkrat tedensko, okrog 60 minut. Tvoj dojenček je
              dobrodošel v kadru — skupina je nastrojena na to, da se ure včasih „preselijo" na
              preprogo ali ustavijo za dojenje.
            </p>
            <p>
              Posnetki ur so ti na voljo za primer, ko ti dan pač ne dopušča ure v živo.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Primerno za',
        title: 'Za koga',
        tone: 'sage',
        body: (
          <ul className="space-y-2 text-[0.98rem] text-ink-soft">
            <li>— mamice po porodu (naraven porod, carski rez — oba po predhodnem pogovoru)</li>
            <li>— mamice, ki vadijo prvič po letih (brez izkušenj s pilatesom)</li>
            <li>— mamice z diastazo ali oslabljenim medeničnim dnom, ki iščejo pristop, ki ne škodi</li>
            <li>— mamice, ki še dojijo; mamice, ki so že odstavile — program se prilagodi</li>
          </ul>
        ),
      },
    ],
  },
  'pilates-za-zdravo-hrbtenico': {
    emailTo: 'sabina',
    emailSubject: 'Prijava — Online pilates za zdravo hrbtenico',
    image: { src: '/photos/foto-102.jpg', alt: 'Pilates za zdravo hrbtenico' },
    headline: <>Za vse, ki bi radi<br />redno skrbeli za hrbtenico.</>,
    glory: 'Brez predznanja pilatesa.',
    intro: (
      <p>
        V skupini, ki se ti prilagaja. Za držo in gibljivost hrbtenice — z delom, ne s časom.
      </p>
    ),
    sections: [
      {
        eyebrow: 'Za koga',
        title: 'Komu je program namenjen',
        body: (
          <ul className="grid gap-4 md:grid-cols-2 text-[0.98rem] text-ink-soft">
            {[
              ['Dolgo sediš', 'Pisarna, računalnik, avto. Vrat, ramena, križ že govorijo.'],
              ['Si bila aktivna', 'Pa je življenje vmes drugače obrnilo. In bi rada začela, ne da bi se poškodovala.'],
              ['Imaš stari problem s hrbtenico', 'Izpah, blaga spondiloza, stari zlomi — ki ti je zaprl marsikatero vadbo.'],
              ['Si nosila otroke', 'In jih še vedno nosiš — in veš, da se drža vrača šele z delom, ne s časom.'],
            ].map(([t, d]) => (
              <li key={t} className="rounded-[16px] bg-sage-paper p-5">
                <p className="font-display text-lg text-teal-dark">{t}</p>
                <p className="mt-1 text-sm">{d}</p>
              </li>
            ))}
          </ul>
        ),
      },
      {
        eyebrow: 'Vsebina',
        title: 'Kaj bomo delali',
        tone: 'sage',
        body: (
          <div className="space-y-4 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[720px]">
            <p>Ne bomo delali vaj „za trebuh v 20 minutah". Bomo delali:</p>
            <ul className="space-y-2">
              <li>— <strong className="text-teal-dark">mobilizacijo vseh segmentov hrbtenice</strong> — vrat, prsni koš, ledveni del, križ</li>
              <li>— <strong className="text-teal-dark">stabilizacijo skozi globoko mišično vezje</strong> (transverzus, prepona, medenično dno)</li>
              <li>— <strong className="text-teal-dark">dihanje, ki sodeluje</strong>, ne ovira</li>
              <li>— <strong className="text-teal-dark">usklajevanje — roka, rama, lopatica</strong> (zato, da se breme pravilno razporedi)</li>
              <li>— <strong className="text-teal-dark">postopno povečevanje izziva</strong> — po nekaj srečanjih boš presenečena, kaj zmore telo, ki zna dihati</li>
            </ul>
          </div>
        ),
      },
      {
        eyebrow: 'Potek',
        title: 'Kako poteka',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            <p>
              Ura v živo preko Zoom-a, enkrat tedensko, 55 minut. Za doma potrebuješ le blazino in
              malo prostora; napredno tudi majhno žogo ali elastiko (ob prijavi dobiš seznam).
            </p>
            <p>
              Program teče v sezonah (september–junij), s poletnim premorom. Število mest v
              skupini je omejeno, da te vidim v kadru.
            </p>
          </div>
        ),
      },
    ],
  },
  'pilates-za-vadece': {
    emailTo: 'sabina',
    emailSubject: 'Prijava — Online pilates za obstoječe vadeče',
    image: { src: '/photos/pilates.jpg', alt: 'Pilates za obstoječe vadeče' },
    headline: <>Nadaljevanje studia.<br />Doma.</>,
    glory: 'Ne paralelni tečaj.',
    intro: (
      <p>
        Za tebe, ki v studiu že vadiš pilates, pa bi rada imela tedensko uro tudi doma.
      </p>
    ),
    sections: [
      {
        eyebrow: 'Za koga',
        title: 'Ta program ni odprt javnosti',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[720px]">
            <p>
              Namenjen je <strong className="text-teal-dark">obstoječim vadečim Biasane</strong> —
              tebi, ki že poznaš osnovna načela Contrology-ja, veš, kaj pomeni „centriranje" in
              „pretočnost", in znaš popraviti svojo izvedbo, ko ti povem kako.
            </p>
            <p>
              Če naju še ne poznaš in bi rada začela z online pilatesom, sledi povezavi na{' '}
              <Link
                href="/spletni-tecaji/pilates-za-zdravo-hrbtenico"
                className="text-teal-deep underline underline-offset-4 font-semibold"
              >
                pilates za zdravo hrbtenico
              </Link>
              .
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Razlike',
        title: 'Kaj je drugače od studia',
        tone: 'sage',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[720px]">
            <p>
              Doma nimaš opreme — rezerva je blazina, blok, mala žoga, elastika. Zato so vaje
              preoblikovane tako, da ohranijo načelo in namen, ne le gib. Pogosto so celo
              zahtevnejše: brez naprave, ki bi ti pomagala, morajo sodelovati tiste iste mišice,
              ki jih na napravi razbremeniš.
            </p>
            <p>
              Teme, ki jih skupaj obdelujemo, se ujemajo s sezono v studiu — tako, da doma gradiš
              na istih temah, ki jih v studiu razvijamo.
            </p>
          </div>
        ),
      },
      {
        eyebrow: 'Potek',
        title: 'Kako poteka',
        body: (
          <div className="space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft max-w-[680px]">
            <p>
              Ura v živo preko Zoom-a, enkrat tedensko, 55 minut. Termini so izbrani tako, da se
              ne prekrivajo z urami v studiu. Posnetki so na voljo, če ne moreš v živo.
            </p>
            <p>
              Za prijavo napiši, na katero uro v studiu trenutno hodiš — program se prilagaja
              skupini.
            </p>
          </div>
        ),
      },
    ],
  },
};

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.d,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSES.find((c) => c.slug === slug);
  const content = CONTENT[slug];
  if (!course || !content) return notFound();

  return (
    <>
      <PageHero
        eyebrow={`Spletni tečaj · ${course.tag}`}
        title={content.headline}
        glory={content.glory}
        lede={content.intro}
        cta={
          <a
            href={mailtoHref(content.emailTo, content.emailSubject)}
            className="btn-primary"
          >
            Želim sodelovati
          </a>
        }
        image={content.image}
      />

      {content.sections.map((section, i) => (
        <Section
          key={i}
          eyebrow={section.eyebrow}
          title={section.title}
          className={section.tone === 'sage' ? 'bg-sage-paper/60' : undefined}
        >
          {section.body}
        </Section>
      ))}

      <Section className="text-center">
        <a
          href={mailtoHref(content.emailTo, content.emailSubject)}
          className="btn-primary"
        >
          Želim sodelovati
        </a>
        <div className="mt-8">
          <Link
            href="/spletni-tecaji"
            className="text-sm text-teal-deep underline underline-offset-4"
          >
            ← Vsi spletni tečaji
          </Link>
        </div>
      </Section>

      <PrviKorak
        title={`Zanima te „${course.title}"?`}
        lede="Pošlji e-pošto in dobiš odgovor o bližnjem ciklu, ceni in pogojih."
      />
    </>
  );
}
