import { SectionDivider } from '@/components/common';
import { DaggerHeartCard } from '@/components/daggerheart-card';
import { communities } from '@/constants/playtest-cards';

export default function CommunitiesGalleryPage() {
  return (
    <>
      <section className='bg-dh-purple'>
        <header className='container py-8'>
          <h1 className='text-eveleth-clean pt-4 text-4xl font-bold uppercase text-dh-gold-light'>
            Communities
          </h1>
        </header>
      </section>
      <SectionDivider />
      <section className='bg-gradient-to-b from-dh-purple to-dh-dark-blue py-8'>
        <div className='container grid grid-cols-1 justify-items-center gap-8 py-2 md:grid-cols-2 lg:grid-cols-3'>
          {communities.map((card) => (
            <DaggerHeartCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </>
  );
}
