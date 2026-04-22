import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';

type Props = {
  href: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  index?: number;
  className?: string;
};

export function ServiceCard({
  href,
  eyebrow,
  title,
  description,
  image,
  index = 0,
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-[22px] bg-white border border-teal-deep/8 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card',
        className
      )}
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/55 via-teal-deep/10 to-transparent" />
        {eyebrow ? (
          <span className="absolute left-5 top-5 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-teal-deep">
            {eyebrow}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
        <h3 className="font-display text-2xl text-teal-dark leading-tight">{title}</h3>
        <p className="text-[0.95rem] text-ink-soft">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-3 text-sm font-semibold text-teal-deep">
          Preberi več
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
        </span>
      </div>
    </Link>
  );
}
