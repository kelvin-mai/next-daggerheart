import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

import { barlow } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import './globals.css';

export const metadata: Metadata = {
  title: 'Daggerheart Homebrew',
  description: 'Create homebrew cards for the Daggerheart TTRPG',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full'>
      <body className={cn(barlow.variable, 'flex min-h-full flex-col')}>
        <main className='grow'>{children}</main>
        <Analytics />
        <footer className='bg-dh-dark-blue pb-4 pt-8 text-white'>
          <p className='text-center'>
            © {new Date().getFullYear()} Kelvin Mai
          </p>
        </footer>
      </body>
    </html>
  );
}
