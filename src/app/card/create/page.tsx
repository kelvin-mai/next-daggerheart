import {
  BaseForm,
  DomainPropertiesForm,
  ImageForm,
  RulesForm,
  SettingsForm,
} from '@/components/card-creation/forms';
import { CardPreview } from '@/components/card-creation/preview';
import { DownloadImageButton } from '@/components/card-creation/preview/download-image-button';

export default function Page() {
  return (
    <>
      <div className='container flex flex-col-reverse gap-2 py-4 md:flex-row'>
        <div className='grow space-y-2'>
          <BaseForm />
          <ImageForm />
          <DomainPropertiesForm />
          <RulesForm />
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <CardPreview />
          <DownloadImageButton className='w-full' />
          <SettingsForm />
        </div>
      </div>
    </>
  );
}
