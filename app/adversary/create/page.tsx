import { AdversaryForm } from '@/components/adversary';
import { AdversaryPreview } from '@/components/adversary/preview';
import { SectionDivider } from '@/components/common/section-divider';
import Link from 'next/link';

export default function CreateAdversaryPage() {
  return (
    <>
      <section className='bg-gradient-to-b from-dh-purple to-dh-dark-blue'>
        <div className='container py-8'>
          <header className='space-y-4 pb-8'>
            <h1 className='text-eveleth-clean pt-4 text-4xl font-bold uppercase text-dh-gold-light'>
              Create an adversary
            </h1>
            <p className='text-dh-gold'>
              Create your very own homebrew Daggerheart adversary! If you need
              help or inspiration in creating an adversary, you can use this
              handy{' '}
              <Link
                href='/adversary/reference'
                className='text-dh-gold-light hover:underline'
              >
                reference page.
              </Link>
            </p>
          </header>
          <div className='space-y-4'>
            <AdversaryPreview />
            <AdversaryForm />
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}
