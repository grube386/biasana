export const PHONE_DISPLAY = '040 454 462';
export const PHONE_INTL_DISPLAY = '+386 40 454 462';
export const PHONE_SMS = '+38640454462';

export const EMAIL_POLONA = 'polona.biasana@gmail.com';
export const EMAIL_SABINA = 'biasana.sabina@gmail.com';

export const ADDRESS_LINE = 'Cesta Borisa Kidriča 17, 1410 Zagorje ob Savi, Slovenija';

export const SOCIAL = {
  facebook: 'https://www.facebook.com/BiasanaCenter/',
  instagram: 'https://www.instagram.com/biasana_/',
} as const;

export type SmsContext =
  | 'default'
  | 'pregnancy'
  | 'mother-baby'
  | 'children'
  | 'adults'
  | 'pilates';

const SMS_BODIES: Record<SmsContext, string> = {
  default: 'Pozdrav, zanima me termin v Biasani.',
  pregnancy: 'Pozdrav, zanima me kraniosakralna terapija v nosečnosti.',
  'mother-baby': 'Pozdrav, zanima me termin za kraniosakralno terapijo za mamico in dojenčka.',
  children: 'Pozdrav, zanima me termin za otroka.',
  adults: 'Pozdrav, zanima me kraniosakralna terapija zame.',
  pilates: 'Pozdrav, zanima me pilates v studiu.',
};

export function smsHref(context: SmsContext = 'default') {
  const body = encodeURIComponent(SMS_BODIES[context]);
  return `sms:${PHONE_SMS}?body=${body}`;
}

export function mailtoHref(to: 'polona' | 'sabina', subject?: string) {
  const address = to === 'polona' ? EMAIL_POLONA : EMAIL_SABINA;
  const qs = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${address}${qs}`;
}
