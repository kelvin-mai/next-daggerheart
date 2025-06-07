import Link from 'next/link';

import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='relative grid min-h-svh lg:grid-cols-2'>
      <header className='absolute top-4 left-4'>
        <Link
          href='/'
          className='font-eveleth-clean flex items-center gap-2 text-lg'
        >
          <Image
            className='size-8'
            src='/assets/images/dh-cgl-logo.png'
            alt='Daggerheart CGL Logo'
            height={32}
            width={32}
          />
          Daggerheart Brews
        </Link>
      </header>
      <main className='flex items-center justify-center'>{children}</main>
      <div className='bg-muted relative hidden lg:block'>
        <Image
          className='object-cover object-right'
          src='/assets/images/dh-keyart.jpg'
          alt='Daggerheart Key Art'
          fill
        />
      </div>
    </div>
  );
}
