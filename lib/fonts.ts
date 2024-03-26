import { Barlow, Space_Grotesk } from 'next/font/google';

export const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-barlow',
});

export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});
