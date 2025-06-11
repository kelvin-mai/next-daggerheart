import { beastforms } from '@/lib/constants';
import { FilteredBeastforms } from './client';

export const metadata = {
  title: 'Beastforms',
  description:
    'Reference to ancestries available in the System Reference Document',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Beastforms
      </h1>
      <p className='text-muted-foreground'>
        Reference to beastforms available in the System Reference Document
      </p>
      <FilteredBeastforms beastforms={beastforms} />
    </>
  );
}
