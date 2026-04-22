import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { SmsButton } from '@/components/SmsButton';

export default function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={<>Ta stran se je izmaknila.</>}
      glory="Se zgodi."
      lede={
        <p>
          Strani, ki jo iščeš, ni (več) tukaj. Morda poskusiš s{' '}
          <Link href="/">domačo stranjo</Link> ali mi pišeš SMS.
        </p>
      }
      cta={<SmsButton />}
    />
  );
}
