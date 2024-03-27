import { homebrewExamples, playtestExamples } from '@/constants/example-cards';
import { HeroParallax } from '@/components/common';

export default function HomePage() {
  const cards = [...playtestExamples, ...homebrewExamples];
  return (
    <>
      <main className='bg-gradient-to-b from-dh-off-white to-dh-dark-blue'>
        <HeroParallax cards={cards} />
      </main>
    </>
  );
}
