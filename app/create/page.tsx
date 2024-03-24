import { CardCreationContainer } from '@/components/card-creation';

export default function CreateCardPage() {
  return (
    <>
      <h1 className='text-eveleth-clean pt-4 text-center text-4xl font-bold uppercase'>
        Create a card
      </h1>
      <p className='text-center text-slate-500'>
        Create your very own homebrew Daggerheart card!
      </p>
      <main className='container py-8'>
        <CardCreationContainer />
      </main>
    </>
  );
}
