import {
  AdversaryCreateContainer,
  AdversaryReference,
} from '@/components/adversary';
import { SectionDivider } from '@/components/common/section-divider';

export default function AdversaryPage() {
  return (
    <>
      <section className='bg-dh-purple'>
        <div className='container py-8'>
          <header>
            <h1 className='text-eveleth-clean pt-4 text-4xl font-bold uppercase text-dh-gold-light'>
              Create an adversary
            </h1>
            <p className='pb-8 pt-4 text-dh-gold'>
              Create your very own homebrew Daggerheart adversary!
            </p>
          </header>
          <AdversaryCreateContainer />
        </div>
      </section>
      <SectionDivider />
      <section className='bg-gradient-to-b from-dh-purple to-dh-dark-blue'>
        <div className='container py-8'>
          <header>
            <h2 className='text-eveleth-clean text-4xl font-bold uppercase text-dh-gold-light'>
              Adversary Reference
            </h2>
            <p className='pb-8 pt-4 text-dh-gold'>
              This reference data is based on the collaboration from all the
              good folks on the{' '}
              <a
                className='hover:text-dh-gold-light hover:underline'
                href='https://www.reddit.com/r/daggerheart'
                target='_blank'
              >
                Daggerheart subreddit
              </a>
              , especially{' '}
              <a
                className='hover:text-dh-gold-light hover:underline'
                href='https://www.reddit.com/user/rightknighttofight/'
                target='_blank'
              >
                /u/rightknighttofight
              </a>{' '}
              for providing the first{' '}
              <a
                className='hover:text-dh-gold-light hover:underline'
                href='https://docs.google.com/spreadsheets/d/1fN2Y9tKDlay82GWhdEkMzP6OptmI-nJnhh_h8_rYEbg/edit?usp=sharing'
                target='_blank'
              >
                Google spreadsheet
              </a>{' '}
              to allow homebrew adversaries.
            </p>
          </header>
          <AdversaryReference />
        </div>
      </section>
    </>
  );
}
