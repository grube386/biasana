'use client';

import { SmsButton } from './SmsButton';
import { useReveal } from '@/lib/useReveal';
import { type SmsContext } from '@/lib/contact';
import { cn } from '@/lib/cn';

type Props = {
  context?: SmsContext;
  title?: string;
  lede?: string;
  glory?: string;
};

export function PrviKorak({
  context = 'default',
  title = 'Prvi korak je SMS.',
  lede = 'Piši, kaj te zanima. Oglasiva se, ko bo v urniku prostor. Brez obveznosti, brez forme — samo pogovor.',
  glory = 'Zaupaj si.',
}: Props) {
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      className="prvi-gradient relative overflow-hidden py-[50px] text-center text-white md:py-[50px]"
    >
      <div className="vz" aria-hidden />
      <div className="relative mx-auto max-w-wide px-5 md:px-10">
        <p
          className={cn('fade', shown && 'in', 'eyebrow eyebrow-white')}
          style={{ ['--d' as any]: '0ms' }}
        >
          Prvi korak
        </p>
        <h2
          className={cn(
            'fade',
            shown && 'in',
            'mx-auto mt-3 max-w-[640px] font-display tracking-[0.03em] text-white'
          )}
          style={{
            ['--d' as any]: '140ms',
            fontFamily: 'var(--font-harabara)',
            fontSize: 'clamp(30px, 4.4vw, 52px)',
            lineHeight: 1.05,
            fontWeight: 400,
          }}
        >
          {title}
        </h2>
        <p
          className={cn('fade', shown && 'in', 'mx-auto mt-[18px] max-w-[520px]')}
          style={{
            ['--d' as any]: '260ms',
            color: '#cfe3dd',
          }}
        >
          {lede}
        </p>
        <div
          className={cn('fade', shown && 'in', 'mt-7 flex flex-wrap justify-center gap-3.5')}
          style={{ ['--d' as any]: '380ms' }}
        >
          <SmsButton
            context={context}
            variant="white"
            className="text-base"
          />
        </div>
        <p
          className={cn('fade', shown && 'in', 'accent-md mt-4')}
          style={{
            ['--d' as any]: '500ms',
            color: '#cfe3dd',
          }}
        >
          {glory}
        </p>
      </div>
    </section>
  );
}
