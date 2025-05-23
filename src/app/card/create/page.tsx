import {
  BaseForm,
  RulesForm,
  SettingsForm,
} from '@/components/card-creation/forms';
import { CardPreview } from '@/components/card-creation/preview';

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
          <SettingsForm />
        </div>
      </div>
    </>
  );
}
