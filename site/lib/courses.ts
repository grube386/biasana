export type CourseMeta = {
  slug: string;
  title: string;
  tag: string;
  description: string;
  teacher: 'Polona' | 'Sabina';
  image: { src: string; alt: string };
  emailOwner: 'polona' | 'sabina';
  emailSubject: string;
};

/**
 * Ordered list of online courses, used by the /spletni-tecaji listing.
 * Each entry has a matching MDX page at app/spletni-tecaji/<slug>/page.mdx.
 */
export const COURSES: CourseMeta[] = [
  {
    slug: 'shiatsu-masaza-za-dojencke',
    title: 'Shiatsu masaža za dojenčke',
    tag: '4-tedenski tečaj',
    description:
      'Nežni prijemi in akupresurne točke — za krčke, napete trebuščke, neumirjeno spanje. Z dojenčkom v naročju, iz domačega naslonjača.',
    teacher: 'Polona',
    image: { src: '/photos/foto-128.jpg', alt: 'Shiatsu masaža za dojenčke' },
    emailOwner: 'polona',
    emailSubject: 'Prijava — Shiatsu tečaj za dojenčke',
  },
  {
    slug: 'vadba-za-nosecnice',
    title: 'Celostna vadba in svetovanje za nosečnice',
    tag: 'Celotna nosečnost',
    description:
      'Gibanje, dihanje in priprava telesa na porod — skozi celo nosečnost. Online podpora, ki ne potrebuje prevoza.',
    teacher: 'Sabina',
    image: { src: '/photos/nosecnice-vadba.jpg', alt: 'Celostna vadba za nosečnice' },
    emailOwner: 'sabina',
    emailSubject: 'Prijava — Celostna vadba za nosečnice',
  },
  {
    slug: 'vadba-za-mamice',
    title: 'Celostna vadba in svetovanje za mamice po porodu',
    tag: 'Postpartum',
    description:
      'Postpartum vadba in pogovor o dojenju, spanju, krčkih, odnosih, strahovih. Za prvih dvanajst mesecev in dlje.',
    teacher: 'Sabina',
    image: { src: '/photos/foto-144.jpg', alt: 'Celostna vadba za mamice po porodu' },
    emailOwner: 'sabina',
    emailSubject: 'Prijava — Celostna vadba za mamice po porodu',
  },
  {
    slug: 'pilates-za-zdravo-hrbtenico',
    title: 'Online pilates za zdravo hrbtenico',
    tag: 'Za vsakogar',
    description:
      'Odprt za vsakogar, ki želi redno skrbeti za držo in gibljivost hrbtenice. Brez predznanja pilatesa.',
    teacher: 'Sabina',
    image: { src: '/photos/foto-102.jpg', alt: 'Pilates za zdravo hrbtenico' },
    emailOwner: 'sabina',
    emailSubject: 'Prijava — Online pilates za zdravo hrbtenico',
  },
  {
    slug: 'pilates-za-vadece',
    title: 'Online pilates za obstoječe vadeče',
    tag: 'Nadaljevanje',
    description:
      'Za tiste, ki v studiu že vadite in želite nadaljevati doma — z vajami, prilagojenimi napredku v skupini.',
    teacher: 'Sabina',
    image: { src: '/photos/pilates.jpg', alt: 'Pilates za obstoječe vadeče' },
    emailOwner: 'sabina',
    emailSubject: 'Prijava — Online pilates za obstoječe vadeče',
  },
];
