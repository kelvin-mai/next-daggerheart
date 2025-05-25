import { Barlow, Geist, Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';

import { cn } from './utils';

const barlow = Barlow({
  variable: '--font-barlow',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
});

const evelethClean = localFont({
  src: [
    {
      path: '../../public/assets/fonts/Eveleth-Clean-Regular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-eveleth-clean',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const fontVariables = cn(
  barlow.variable,
  evelethClean.variable,
  geist.variable,
  geistMono.variable,
);
