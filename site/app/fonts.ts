import localFont from 'next/font/local';
import { Open_Sans, Fraunces } from 'next/font/google';

export const harabara = localFont({
  src: [
    {
      path: '../public/fonts/Harabara-Mais.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-harabara',
  display: 'swap',
  preload: true,
  fallback: ['Georgia', 'serif'],
});

export const glory = localFont({
  src: [
    {
      path: '../public/fonts/GiveYouGlory.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-glory',
  display: 'swap',
  preload: false,
  fallback: ['cursive'],
});

export const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-opensans',
});

export const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});
