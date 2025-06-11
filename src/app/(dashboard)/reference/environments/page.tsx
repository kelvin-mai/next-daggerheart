import { environments } from '@/lib/constants/srd';
import { FilteredEnvironments } from './client';

export const metadata = {
  title: 'Environments',
  description:
    'Reference to environments available in the System Reference Document',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Environments
      </h1>
      <p className='text-muted-foreground'>
        Reference to environments available in the System Reference Document
      </p>
      <FilteredEnvironments environments={environments} />
    </>
  );
}
