import { CardCreationContainer } from '@/components/card-creation';
import {
  BuyMeCofffeeBanner,
  SectionDivider,
  WeMovedBanner,
} from '@/components/common';

export default function CreateCardPage() {
  return (
    <>
      <div className='bg-dh-purple'>
        <header className='container pb-2 pt-8'>
          <h1 className='text-eveleth-clean pt-4 text-4xl font-bold uppercase text-dh-gold-light'>
            Create a card
          </h1>
          <p className='text-dh-gold'>
            Create your very own homebrew Daggerheart card!
          </p>
          <WeMovedBanner />
        </header>
        <section className='container py-8'>
          <CardCreationContainer />
        </section>
        <section className='container pb-8'>
          <BuyMeCofffeeBanner />
        </section>
      </div>
      <SectionDivider />
    </>
  );
}
