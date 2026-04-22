import { ReactNode } from 'react';

/**
 * Temporary marker visible only in development. Replaced by finalized MDX copy
 * from the owners during the content phase. Never ships to production.
 */
export function ContentPlaceholder({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children?: ReactNode;
}) {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <div className="my-4 rounded-xl border border-dashed border-teal-light/50 bg-sage-paper/70 p-5 text-sm text-teal-dark">
      <p className="font-semibold uppercase tracking-widest text-xs text-teal-light mb-1">
        Vsebina v pripravi
      </p>
      <p className="font-medium">{label}</p>
      {hint ? <p className="mt-1 text-ink-mute text-[0.82rem]">{hint}</p> : null}
      {children ? <div className="mt-3 text-ink-soft">{children}</div> : null}
    </div>
  );
}
