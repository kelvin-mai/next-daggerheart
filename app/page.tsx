import { homebrewExamples, playtestExamples } from '@/constants/example-cards';
import { CardStack, HeroParallax, SectionDivider } from '@/components/common';

export default function HomePage() {
  const cards = [...playtestExamples, ...homebrewExamples];
  return (
    <>
      <main className='bg-gradient-to-b from-dh-off-white to-dh-purple'>
        <HeroParallax cards={cards} />
      </main>
      <SectionDivider />
      <section className='bg-gradient-to-b from-dh-purple to-dh-dark-blue'>
        <div className='container flex min-h-[500px] flex-col items-center justify-center gap-16 pb-8 pt-24 sm:flex-row sm:items-start sm:gap-10'>
          <div className='max-w-2xl'>
            <h3 className='text-2xl font-bold text-dh-gold-light'>
              Based on Real Playtest Cards
            </h3>
            <p className='hidden pt-4 text-lg text-dh-gold sm:block'>
              Card design and text formatting inspired by the original{' '}
              <a
                className='hover:text-dh-gold-light hover:underline'
                href='https://darringtonpress.com/daggerheart/'
                target='_blank'
              >
                Daggerheart
              </a>{' '}
              playtest cards. Tested by using what I thought was the most
              difficult cards to transfer over without an image software.
            </p>
          </div>
          <div className=''>
            <CardStack items={playtestExamples} />
          </div>
        </div>
        <div className='container flex min-h-[500px] flex-col-reverse items-center justify-center gap-16 pb-8 pt-24 sm:flex-row sm:items-start sm:gap-10'>
          <div className=''>
            <CardStack items={homebrewExamples} />
          </div>
          <div className='max-w-2xl'>
            <h3 className='text-2xl font-bold text-dh-gold-light'>
              Example Cards
            </h3>
            <p className='hidden pt-4 text-lg text-dh-gold sm:block'>
              Here is a collection of homebrew cards that are possible with the
              use of this web application. They are, of course, untested and
              likely unbalanced so use them at your own play group's discretion
              or as inspiration to generate your own.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
