import { CardCreationForms } from '@/components/card-creation/forms';
import { CardCreationPreview } from '@/components/card-creation/preview';

export const metadata = {
  title: 'Create Card',
  description: 'Create your very own Daggerheart Card!',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Create a card
      </h1>
      <p className='text-muted-foreground'>
        Create your very own Daggerheart card!
      </p>
      <div className='flex flex-col-reverse gap-2 py-4 md:flex-row'>
        <CardCreationForms />
        <CardCreationPreview />
      </div>
    </>
  );
}
