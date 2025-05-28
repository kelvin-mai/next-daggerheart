import {
  CardCreationForms,
  SettingsForm,
} from '@/components/card-creation/forms';
import { CardPreview } from '@/components/card-creation/preview';
import { DownloadImageButton } from '@/components/card-creation/preview/download-image-button';

export default function Page() {
  return (
    <div>
      <h1 className='font-eveleth-clean text-2xl font-bold'>Create a card</h1>
      <p className='text-muted-foreground'>
        Create your very own Daggerheart card!
      </p>
      <div className='flex flex-col-reverse gap-2 py-4 md:flex-row'>
        <CardCreationForms />
        <div className='flex flex-col items-center space-y-2'>
          <CardPreview />
          <DownloadImageButton className='w-full' />
          <SettingsForm />
        </div>
      </div>
    </div>
  );
}
