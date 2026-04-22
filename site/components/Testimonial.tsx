import { cn } from '@/lib/cn';

type Props = {
  quote: string;
  author: string;
  role?: string;
  className?: string;
};

/**
 * Editorial testimonial figure — top hairline rule, italic serif quote,
 * tracked-uppercase attribution.
 */
export function Testimonial({ quote, author, role, className }: Props) {
  return (
    <figure
      className={cn(
        'border-t border-rule px-1 pt-7 pb-2',
        className
      )}
    >
      <blockquote className="serif-display italic text-[1.25rem] md:text-[1.35rem] leading-[1.35] text-teal-dark">
        „{quote}”
      </blockquote>
      <figcaption className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted">
        <span className="text-ink">{author}</span>
        {role ? <span> · {role}</span> : null}
      </figcaption>
    </figure>
  );
}
