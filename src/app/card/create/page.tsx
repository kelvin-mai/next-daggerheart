import {
  BaseForm,
  RulesForm,
  SettingsForm,
} from '@/components/card-creation/forms';
import { CardPreview } from '@/components/card-creation/preview';

export default function Page() {
  return (
    <>
      <div className='container flex gap-2'>
        <div className='bg-card grow space-y-2 rounded p-4'>
          <BaseForm />
          <RulesForm />
          <SettingsForm />
        </div>
        <div>
          <CardPreview />
        </div>
      </div>
    </>
  );
}
