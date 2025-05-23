import {
  BaseForm,
  RulesForm,
  SettingsForm,
} from '@/components/card-creation/forms';
import { CardPreview } from '@/components/card-creation/preview';
import { DownloadImageButton } from '@/components/card-creation/preview/download-image-button';

export default function Page() {
  return (
    <>
      <div className='container flex gap-2 py-4'>
        <div className='grow space-y-2'>
          <BaseForm />
          <RulesForm />
        </div>
        <div className='space-y-2'>
          <CardPreview />
          <DownloadImageButton />
          <SettingsForm />
        </div>
      </div>
    </>
  );
}
