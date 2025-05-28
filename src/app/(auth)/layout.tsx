import Link from 'next/link';
import { ImagePlus } from 'lucide-react';

import { DaggerheartBrewsIcon } from '@/components/icons';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative grid min-h-svh lg:grid-cols-2'>
      <header className='absolute top-4 left-4'>
        <Link
          href='/'
          className='font-eveleth-clean flex items-center gap-2 text-lg'
        >
          <DaggerheartBrewsIcon className='size-8' />
          Daggerheart Brews
        </Link>
      </header>
      <main className='flex items-center justify-center'>{children}</main>
      <div className='bg-muted relative hidden lg:block'>
        <div className='bg-muted-foreground flex h-full w-full items-center justify-center'>
          <ImagePlus className='text-white' />
        </div>
      </div>
    </div>
  );
}
