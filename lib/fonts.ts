import { Barlow } from 'next/font/google';

export const barlow = Barlow({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-barlow',
});
