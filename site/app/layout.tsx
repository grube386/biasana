import type { Metadata, Viewport } from 'next';
import { harabara, glory, openSans, fraunces, baloo2 } from './fonts';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { TouchVzorec } from '@/components/TouchVzorec';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://biasana.si'),
  title: {
    default: 'Biasana — Celosten center za dobro počutje v Zagorju',
    template: '%s · Biasana',
  },
  description:
    'Kraniosakralna terapija, klasični pilates in gibalno-razvojne urice za dojenčke v Zagorju ob Savi. Nežno, individualno, od leta 2012.',
  openGraph: {
    type: 'website',
    locale: 'sl_SI',
    siteName: 'Biasana',
    url: 'https://biasana.si',
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/brand/logo.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#04524c',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="sl"
      className={`${harabara.variable} ${openSans.variable} ${glory.variable} ${fraunces.variable} ${baloo2.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <TouchVzorec />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
