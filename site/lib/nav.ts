export const NAV_PRIMARY = [
  { href: '/o-naju', label: 'O naju' },
  { href: '/za-nosecnice', label: 'Za nosečnice' },
  { href: '/za-mamice-in-dojencke', label: 'Mamice in dojenčki' },
  { href: '/za-otroke', label: 'Otroci in mladostniki' },
  { href: '/za-odrasle', label: 'Odrasli in športniki' },
  { href: '/pilates', label: 'Pilates' },
  { href: '/spletni-tecaji', label: 'Spletni tečaji' },
  { href: '/cenik', label: 'Cenik' },
  { href: '/kontakt', label: 'Kontakt' },
] as const;

export const NAV_SERVICES = NAV_PRIMARY.slice(1, 6);
