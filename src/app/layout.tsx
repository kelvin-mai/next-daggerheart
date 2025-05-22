import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';

import { fontVariables } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

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
    <html lang='en'>
      <body className={cn(fontVariables, 'antialiased')}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
