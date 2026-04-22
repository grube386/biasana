import { smsHref, type SmsContext, PHONE_DISPLAY } from '@/lib/contact';
import { cn } from '@/lib/cn';

type Props = {
  context?: SmsContext;
  variant?: 'primary' | 'ghost' | 'white' | 'outline-white';
  label?: string;
  showPhone?: boolean;
  className?: string;
};

const VARIANT_CLASS: Record<NonNullable<Props['variant']>, string> = {
  primary: 'btn-primary',
  ghost: 'btn-ghost',
  white: 'btn-white',
  'outline-white': 'btn-outline-white',
};

export function SmsButton({
  context = 'default',
  variant = 'primary',
  label = 'Piši mi SMS',
  showPhone = true,
  className,
}: Props) {
  return (
    <a
      href={smsHref(context)}
      className={cn(VARIANT_CLASS[variant], className)}
      aria-label={`Pošlji SMS na ${PHONE_DISPLAY}`}
    >
      <span>{label}</span>
      {showPhone ? (
        <span className="opacity-70 font-normal" aria-hidden>
          · {PHONE_DISPLAY}
        </span>
      ) : null}
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
      >
        <path
          d="M5 12h13m-5-5 5 5-5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
