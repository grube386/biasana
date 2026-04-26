import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import NextLink from 'next/link';
import { Children, ReactNode, isValidElement } from 'react';

import { PageHero } from '@/components/PageHero';
import { HomeHero } from '@/components/HomeHero';
import { Section as SectionComp } from '@/components/Section';
import { Testimonial as TestimonialComp } from '@/components/Testimonial';
import { PrviKorak as PrviKorakComp } from '@/components/PrviKorak';
import { SmsButton } from '@/components/SmsButton';
import {
  smsHref,
  mailtoHref,
  PHONE_DISPLAY,
  PHONE_SMS,
  ADDRESS_LINE,
  SOCIAL,
  EMAIL_POLONA,
  EMAIL_SABINA,
  type SmsContext,
} from '@/lib/contact';
import { cn } from '@/lib/cn';

type ImgLike = string | { src: string; alt?: string };

function toImage(img: ImgLike | undefined, fallbackAlt: string) {
  if (!img) return undefined;
  if (typeof img === 'string') return { src: img, alt: fallbackAlt };
  return { src: img.src, alt: img.alt ?? fallbackAlt };
}

function variantToTone(variant?: string): 'white' | 'cream' | 'paper' | 'sage' {
  if (variant === 'sage') return 'sage';
  if (variant === 'teal') return 'paper';
  if (variant === 'cream') return 'cream';
  if (variant === 'paper') return 'paper';
  return 'white';
}

function heroToneMap(tone?: string): 'cream' | 'paper' | 'deep' {
  if (tone === 'deep') return 'deep';
  if (tone === 'paper') return 'paper';
  return 'cream';
}

function extractStringText(node: ReactNode): string {
  if (node == null || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractStringText).join('');
  if (isValidElement(node)) {
    return extractStringText((node.props as { children?: ReactNode })?.children);
  }
  return '';
}

// ─── <Hero> ───────────────────────────────────────────────────────
type HeroProps = {
  variant?: 'page' | 'home';
  image?: ImgLike;
  secondaryImage?: ImgLike;
  eyebrow?: string;
  title?: ReactNode;
  glory?: string;
  tone?: 'quiet' | 'cream' | 'paper' | 'deep';
  titleVariant?: 'display' | 'serif';
  cta?: ReactNode;
  stats?: { value: ReactNode; label: string }[];
  children?: ReactNode;
};

function Hero(props: HeroProps) {
  if (props.variant === 'home') {
    return (
      <HomeHero
        eyebrow={props.eyebrow}
        title={props.title}
        glory={props.glory}
      />
    );
  }
  const image = toImage(props.image, extractStringText(props.title) || 'Biasana');
  const secondaryImage = props.secondaryImage ? toImage(props.secondaryImage, '') : undefined;
  return (
    <PageHero
      eyebrow={props.eyebrow}
      title={props.title ?? null}
      glory={props.glory}
      lede={props.children}
      image={image}
      secondaryImage={secondaryImage}
      cta={props.cta}
      stats={props.stats}
      tone={heroToneMap(props.tone)}
      titleVariant={props.titleVariant ?? 'serif'}
    />
  );
}

// ─── <Section variant="teal|sage"> ────────────────────────────────
type SectionProps = {
  variant?: 'teal' | 'sage' | 'cream' | 'paper';
  eyebrow?: string;
  title?: ReactNode;
  lede?: ReactNode;
  id?: string;
  titleVariant?: 'display' | 'serif';
  className?: string;
  children?: ReactNode;
};

function Section({
  variant,
  eyebrow,
  title,
  lede,
  id,
  titleVariant,
  className,
  children,
}: SectionProps) {
  return (
    <SectionComp
      id={id}
      eyebrow={eyebrow}
      title={title}
      lede={lede}
      tone={variantToTone(variant)}
      titleVariant={titleVariant}
      className={className}
    >
      <div className="space-y-5 mt-[30px] mb-[30px]">{children}</div>
    </SectionComp>
  );
}

// ─── <CardGrid> / <Card> ──────────────────────────────────────────
// Children-based wrapper around the hairline services grid.
function CardGrid({ children }: { children?: ReactNode }) {
  return (
    <div className="grid gap-[2px] border border-rule bg-rule grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {Children.map(children, (child, i) => {
        if (!isValidElement(child)) return child;
        const props = child.props as Record<string, unknown>;
        return (
          <CardInner index={i} {...(props as any)} />
        );
      })}
    </div>
  );
}

type CardProps = {
  href: string;
  image?: ImgLike;
  who?: string;
  flagship?: boolean;
  index?: number;
  children?: ReactNode;
};

function Card(props: CardProps) {
  // Rendered standalone (not inside CardGrid); pipe through CardInner.
  return <CardInner {...props} />;
}

function CardInner({ href, image, who, flagship, index = 0, children }: CardProps) {
  const { title, description } = splitCardChildren(children);
  const img = toImage(image, extractStringText(title));
  return (
    <NextLink
      href={href}
      className="group relative flex min-h-[320px] flex-col gap-3.5 bg-white px-7 py-9 md:px-7 md:py-10 transition-colors duration-300 hover:bg-cream overflow-hidden"
      style={{ ['--d' as string]: `${index * 60}ms` }}
    >
      {img ? (
        <div className="relative -mx-7 -mt-9 mb-4 aspect-[5/4] overflow-hidden">
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/55 via-teal-deep/10 to-transparent" />
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-2">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
          {String(index + 1).padStart(2, '0')}
          {who ? <> · {who}</> : null}
        </span>
        {flagship ? (
          <span className="rounded-full border border-teal-bright px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.2em] text-teal-bright">
            Flagship
          </span>
        ) : null}
      </div>
      <h3 className="serif-display mt-auto text-[1.6rem] leading-[1.2] text-teal-dark">
        {title}
      </h3>
      {description ? (
        <div className="m-0 text-[0.92rem] leading-[1.55] text-ink-soft [&>p]:m-0">
          {description}
        </div>
      ) : null}
      <span className="mt-3 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-teal-deep">
        Več
        <svg
          aria-hidden
          viewBox="0 0 14 10"
          className="h-[10px] w-[14px] transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M1 5h12m-4-4l4 4-4 4" />
        </svg>
      </span>
    </NextLink>
  );
}

/** Card MDX body is like: `### Title\nDescription paragraph`. */
function splitCardChildren(children: ReactNode): {
  title: ReactNode;
  description: ReactNode | null;
} {
  let title: ReactNode = null;
  const rest: ReactNode[] = [];
  Children.forEach(children, (child) => {
    if (title == null && isValidElement(child)) {
      const t: unknown = child.type;
      const isStringHeading =
        typeof t === 'string' && /^h[1-4]$/i.test(t);
      const isComponentHeading =
        typeof t === 'function' &&
        /^h[1-4]$/i.test((t as { displayName?: string }).displayName ?? '');
      if (isStringHeading || isComponentHeading) {
        title = (child.props as { children?: ReactNode }).children;
        return;
      }
    }
    rest.push(child);
  });
  const description = rest.filter((c) => {
    if (typeof c === 'string') return c.trim().length > 0;
    return c != null;
  });
  return {
    title: title ?? '',
    description: description.length ? <>{description}</> : null,
  };
}

// ─── <TestimonialGrid> / <Testimonial> ────────────────────────────
function TestimonialGrid({ children }: { children?: ReactNode }) {
  return <div className="grid gap-10 md:grid-cols-2 md:gap-8">{children}</div>;
}

type TestimonialProps = {
  author?: string;
  context?: string;
  role?: string;
  quote?: string;
  children?: ReactNode;
};

function Testimonial({ author, context, role, quote, children }: TestimonialProps) {
  const finalQuote =
    quote ?? extractStringText(children).replace(/^[„""]+|[""]+$/g, '').trim();
  return (
    <TestimonialComp
      quote={finalQuote}
      author={author ?? ''}
      role={role ?? context}
    />
  );
}

// ─── <PersonBlock> ────────────────────────────────────────────────
type PersonBlockProps = {
  image?: ImgLike;
  name?: string;
  align?: 'left' | 'right';
  tone?: 'white' | 'sage';
  children?: ReactNode;
};

function PersonBlock({
  image,
  name,
  align = 'left',
  tone = 'white',
  children,
}: PersonBlockProps) {
  const img = toImage(image, name ?? 'Portret');
  const textColSpan = 'md:col-span-7';
  const imgColSpan = 'md:col-span-5';
  const bg = tone === 'sage' ? 'bg-sage-paper/60' : 'bg-white';
  return (
    <section className={cn('py-section-sm md:py-section', bg)}>
      <div className="mx-auto max-w-wide px-5 md:px-10">
        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <div
            className={cn(
              imgColSpan,
              align === 'right' ? 'order-1 md:order-2' : 'order-1'
            )}
          >
            {img ? (
              <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-card">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 36vw, 100vw"
                  className="object-cover"
                />
              </div>
            ) : null}
          </div>
          <div
            className={cn(
              textColSpan,
              align === 'right' ? 'order-2 md:order-1' : 'order-2',
              'space-y-5 text-[1.02rem] leading-[1.7] text-ink-soft'
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── <MediaList> / <MediaItem> ───────────────────────────────────
function MediaList({ children }: { children?: ReactNode }) {
  return <ul className="grid gap-4 md:grid-cols-3">{children}</ul>;
}

type MediaItemProps = {
  publisher: string;
  title: string;
  href?: string;
  children?: ReactNode;
};

function MediaItem({ publisher, title, href, children }: MediaItemProps) {
  const isPlaceholder = !href || href === '[link]' || href === '#';
  const Tag: 'a' | 'div' = isPlaceholder ? 'div' : 'a';
  const tagProps = isPlaceholder
    ? {}
    : { href, rel: 'noopener', target: '_blank' };
  return (
    <li>
      <Tag
        {...(tagProps as Record<string, string>)}
        className="group flex h-full flex-col rounded-[20px] border border-teal-deep/10 bg-white p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
      >
        <p className="font-display text-xl text-teal-dark group-hover:text-teal-deep">
          {title}
        </p>
        {children ? (
          <div className="mt-3 text-sm text-ink-soft">{children}</div>
        ) : null}
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
          {isPlaceholder ? 'Članek' : 'Preberi članek →'}
        </span>
      </Tag>
    </li>
  );
}

// ─── <SmsCta> / <EmailCta> / <SmsLink> ────────────────────────────
type SmsCtaProps = {
  context?: SmsContext;
  variant?: 'primary' | 'ghost' | 'white' | 'outline-white';
  showPhone?: boolean;
  children?: ReactNode;
};

function SmsCta({
  context = 'default',
  variant = 'primary',
  showPhone = true,
  children,
}: SmsCtaProps) {
  const label = extractStringText(children) || 'Piši mi SMS';
  return (
    <SmsButton
      context={context}
      variant={variant}
      label={label}
      showPhone={showPhone}
    />
  );
}

type EmailCtaProps = {
  email: string;
  subject?: string;
  large?: boolean;
  children?: ReactNode;
};

function EmailCta({ email, subject, large, children }: EmailCtaProps) {
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
  return (
    <a
      href={href}
      className={cn(
        large ? 'btn-primary text-base px-8 py-4' : 'btn-primary',
        'not-prose'
      )}
    >
      <span>{children ?? 'Želim sodelovati'}</span>
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

type SmsLinkProps = {
  number?: string;
  prefill?: string;
  children?: ReactNode;
};

function SmsLink({ number, prefill, children }: SmsLinkProps) {
  const smsNumber = number ? number.replace(/\s/g, '') : PHONE_SMS;
  const body = prefill ? `?body=${encodeURIComponent(prefill)}` : '';
  return (
    <a
      href={`sms:${smsNumber}${body}`}
      className="font-display text-3xl text-teal-dark underline decoration-teal-light/40 underline-offset-[6px] hover:decoration-teal-deep"
    >
      {children ?? PHONE_DISPLAY}
    </a>
  );
}

// ─── <ContactGroup> / <EmailContact> ─────────────────────────────
function ContactGroup({ children }: { children?: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>;
}

type EmailContactProps = {
  email: string;
  owner?: string;
  subject?: string;
  children?: ReactNode;
};

function EmailContact({ email, owner, subject, children }: EmailContactProps) {
  const href = subject
    ? `mailto:${email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${email}`;
  return (
    <div className="rounded-[22px] bg-white p-7 md:p-8 shadow-soft">
      {owner ? <p className="eyebrow text-teal-light">{owner}</p> : null}
      <div className="mt-3 space-y-3 text-sm text-ink-soft">{children}</div>
      <a
        href={href}
        className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-deep underline underline-offset-4"
      >
        {email}
      </a>
    </div>
  );
}

// ─── <Map> ───────────────────────────────────────────────────────
function Map({ address }: { address?: string }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-teal-deep/10 bg-sage-paper mt-4">
      <iframe
        title={address ? `Lokacija: ${address}` : 'Lokacija Biasane v Zagorju ob Savi'}
        src="https://www.openstreetmap.org/export/embed.html?bbox=14.998%2C46.129%2C15.018%2C46.138&amp;layer=mapnik&amp;marker=46.1335%2C15.0078"
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

// ─── <SocialLinks> / <Social> ────────────────────────────────────
function SocialLinks({ children }: { children?: ReactNode }) {
  return <div className="mt-3 flex gap-3">{children}</div>;
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" className="btn-ghost">
      {label}
    </a>
  );
}

// ─── <ProgramGrid> / <Program> ───────────────────────────────────
function ProgramGrid({ children }: { children?: ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{children}</div>;
}

function Program({ name, children }: { name: string; children?: ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-[20px] bg-white p-6 shadow-soft">
      <span className="absolute -right-3 -top-3 font-display text-6xl text-sage-mist/70 select-none">
        {name?.[0]}
      </span>
      <p className="eyebrow text-teal-light">Starostna skupina</p>
      <p className="mt-3 font-display text-2xl text-teal-dark">{name}</p>
      <div className="mt-3 text-sm text-ink-soft space-y-2">{children}</div>
    </div>
  );
}

// ─── <CourseGrid> / <CourseCard> ─────────────────────────────────
function CourseGrid({ children }: { children?: ReactNode }) {
  return <ul className="grid gap-6">{children}</ul>;
}

type CourseCardProps = {
  href: string;
  tag?: string;
  teacher?: string;
  children?: ReactNode;
};

function CourseCard({ href, tag, teacher, children }: CourseCardProps) {
  const { title, description } = splitCardChildren(children);
  return (
    <li>
      <NextLink
        href={href}
        className="group flex h-full flex-col rounded-[22px] border border-teal-deep/10 bg-white py-7 pr-7 pl-[38px] shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
      >
        <h3 className="font-display text-2xl text-teal-dark">{title}</h3>
        {description ? (
          <div className="mt-3 text-[0.95rem] text-ink-soft [&>p]:m-0">{description}</div>
        ) : null}
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-teal-deep">
          Preberi več →
        </span>
      </NextLink>
    </li>
  );
}

// ─── <PricingTables> ─────────────────────────────────────────────
type PriceItem = { label: string; price: string; note?: string };
type PriceGroup = { title: string; meta?: string; items: PriceItem[] };

// Each group's first item is shown as the "anchor price" — the conceptual
// entry-point for that category. Order the rest from most common to most
// committed (single → package → seasonal).
const PRICING_GROUPS: PriceGroup[] = [
  {
    title: 'Kraniosakralna terapija',
    meta: '60-minutna obravnava',
    items: [
      { label: 'Posamezna obravnava', price: '55 €' },
      { label: 'Paket 5 obravnav', price: '250 €', note: '50 €/obrav.' },
      { label: 'Paket 10 obravnav', price: '480 €', note: '48 €/obrav.' },
      { label: 'Otroška obravnava (do 7 let)', price: '45 €' },
      { label: 'Mamica in dojenček · dve terapevtki, hkrati', price: '85 €' },
      { label: 'Obravnava na domu — prve tedne po porodu', price: '75 €' },
    ],
  },
  {
    title: 'Pilates · Contrology',
    meta: 'Naprave · največ 3 v skupini',
    items: [
      { label: 'Prva individualna obravnava (60 min)', price: '45 €' },
      { label: 'Skupinska ura (55 min, posamezna)', price: '22 €' },
      { label: 'Mesečna karta · 1× tedensko', price: '80 €' },
      { label: 'Mesečna karta · 2× tedensko', price: '150 €' },
      { label: 'Sezonska karta · 1× tedensko (sep–jun)', price: '720 €' },
    ],
  },
  {
    title: 'Gibalne urice · metoda Pedosana',
    meta: '60 min · par mamica–dojenček',
    items: [
      { label: 'Posamezni obisk', price: '22 €' },
      { label: 'Mesečna karta (4 obiski)', price: '80 €' },
      { label: 'Sezonska karta (sep–jun)', price: '700 €' },
    ],
  },
  {
    title: 'Spletni tečaji',
    meta: 'Preko Zoom-a, na daljavo',
    items: [
      { label: 'Pilates za zdravo hrbtenico · mesečno', price: '45 €' },
      { label: 'Pilates za obstoječe vadeče · mesečno', price: '50 €' },
      { label: 'Vadba za nosečnice · mesečno', price: '60 €' },
      { label: 'Vadba za mamice po porodu · mesečno', price: '60 €' },
      { label: 'Shiatsu masaža za dojenčke · 4-tedenski tečaj', price: '90 €' },
    ],
  },
];

function PricingTables() {
  return (
    <div className="grid gap-[2px] border border-rule bg-rule sm:grid-cols-2">
      {PRICING_GROUPS.map((group, i) => {
        const [headline, ...rest] = group.items;
        return (
          <article
            key={group.title}
            className="flex flex-col bg-white px-7 py-9 md:px-9 md:py-10"
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              {String(i + 1).padStart(2, '0')}
              {group.meta ? <> · {group.meta}</> : null}
            </div>

            <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="serif-display text-[1.65rem] leading-[1.15] text-teal-dark">
                {group.title}
              </h3>
              <span className="font-display text-[2rem] leading-none text-teal-deep">
                {headline.price}
              </span>
            </div>
            <p className="mt-1 text-[0.85rem] text-ink-mute">
              {headline.label}
              {headline.note ? <> · {headline.note}</> : null}
            </p>

            {rest.length > 0 ? (
              <ul className="mt-7 divide-y divide-rule/70">
                {rest.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-baseline justify-between gap-5 py-3"
                  >
                    <span className="min-w-0 flex-1 text-[0.95rem] leading-snug text-ink-soft">
                      {item.label}
                    </span>
                    <div className="text-right">
                      <span className="whitespace-nowrap font-display text-lg text-teal-dark">
                        {item.price}
                      </span>
                      {item.note ? (
                        <span className="mt-0.5 block text-[0.7rem] text-ink-mute">
                          {item.note}
                        </span>
                      ) : null}
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}

// ─── <Peak> / <Note> ────────────────────────────────────────────
function Peak({ children }: { children?: ReactNode }) {
  return <p className="accent-md mt-5 text-teal-light">{children}</p>;
}

function Note({ children }: { children?: ReactNode }) {
  return (
    <p className="mt-6 text-sm text-ink-mute italic max-w-reading">
      {children}
    </p>
  );
}

// ─── <PrviKorak> ────────────────────────────────────────────────
type PrviKorakMdxProps = {
  context?: SmsContext;
  smsPrefill?: string;
  title?: string;
  lede?: string;
  glory?: string;
};

function PrviKorak({ context, title, lede, glory }: PrviKorakMdxProps) {
  return <PrviKorakComp context={context} title={title} lede={lede} glory={glory} />;
}

// ─── <Link> ─────────────────────────────────────────────────────
function Link({
  href,
  children,
  className,
}: {
  href: string;
  children?: ReactNode;
  className?: string;
}) {
  const isPlaceholder = href === '[link]' || !href;
  if (isPlaceholder) {
    return <span className={cn('text-ink-mute italic', className)}>{children}</span>;
  }
  const isExternal = /^https?:\/\//.test(href);
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className={cn('text-teal-deep underline underline-offset-4 font-semibold', className)}
      >
        {children}
      </a>
    );
  }
  return (
    <NextLink
      href={href}
      className={cn('text-teal-deep underline underline-offset-4 font-semibold', className)}
    >
      {children}
    </NextLink>
  );
}

// ─── Default element typography ─────────────────────────────────
const MdxH1 = ({ children, ...rest }: { children?: ReactNode }) => (
  <h1
    className="serif-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.08] text-teal-dark"
    {...rest}
  >
    {children}
  </h1>
);
MdxH1.displayName = 'h1';

const MdxH2 = ({ children, ...rest }: { children?: ReactNode }) => (
  <h2
    className="font-display tracking-[0.02em] text-display-lg text-teal-dark mt-0 mb-0"
    {...rest}
  >
    {children}
  </h2>
);
MdxH2.displayName = 'h2';

const MdxH3 = ({ children, ...rest }: { children?: ReactNode }) => (
  <h3 className="font-display text-2xl text-teal-dark mt-8 mb-3" {...rest}>
    {children}
  </h3>
);
MdxH3.displayName = 'h3';

const MdxH4 = ({ children, ...rest }: { children?: ReactNode }) => (
  <h4 className="font-display text-lg text-teal-dark mt-6 mb-2" {...rest}>
    {children}
  </h4>
);
MdxH4.displayName = 'h4';

const MdxP = ({ children, ...rest }: { children?: ReactNode }) => (
  <p className="text-[1.02rem] leading-[1.7] text-ink-soft max-w-reading" {...rest}>
    {children}
  </p>
);
MdxP.displayName = 'p';

const defaultComponents: MDXComponents = {
  h1: MdxH1,
  h2: MdxH2,
  h3: MdxH3,
  h4: MdxH4,
  p: MdxP,
  ul: ({ children, ...rest }) => (
    <ul
      className="space-y-2 text-[1.02rem] leading-[1.7] text-ink-soft max-w-reading [&>li]:relative [&>li]:pl-5 [&>li]:before:content-['—'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-teal-light"
      {...rest}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...rest }) => (
    <ol
      className="list-decimal list-inside space-y-2 text-[1.02rem] leading-[1.7] text-ink-soft max-w-reading"
      {...rest}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...rest }) => <li {...rest}>{children}</li>,
  strong: ({ children, ...rest }) => (
    <strong className="text-teal-dark font-semibold" {...rest}>
      {children}
    </strong>
  ),
  em: ({ children, ...rest }) => (
    <em className="italic" {...rest}>
      {children}
    </em>
  ),
  a: ({ href, children, ...rest }) => (
    <Link href={(href as string) ?? '#'} {...rest}>
      {children}
    </Link>
  ),
  blockquote: ({ children, ...rest }) => (
    <blockquote
      className="border-l-2 border-teal-light pl-5 italic serif-display text-teal-dark"
      {...rest}
    >
      {children}
    </blockquote>
  ),
  hr: (props) => <hr className="my-12 border-rule" {...props} />,
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Hero,
    HomeHero,
    Section,
    Card,
    CardGrid,
    Testimonial,
    TestimonialGrid,
    PersonBlock,
    MediaList,
    MediaItem,
    SmsCta,
    EmailCta,
    SmsLink,
    ContactGroup,
    EmailContact,
    Map,
    SocialLinks,
    Social,
    ProgramGrid,
    Program,
    CourseGrid,
    CourseCard,
    PricingTables,
    Peak,
    Note,
    PrviKorak,
    Link,
  };
}
