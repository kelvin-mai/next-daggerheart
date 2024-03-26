import { homebrewExamples, playtestExamples } from '@/constants/example-cards';
import { HeroParallax } from '@/components/common/hero-parallax';

export default function HomePage() {
  const cards = [...playtestExamples, ...homebrewExamples];
  return (
    <>
      <HeroParallax cards={cards} />
      <div className='h-screen bg-black' />
    </>
  );
}
