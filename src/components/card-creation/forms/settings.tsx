'use client';

import { CollapsibleContent } from '@/components/ui/collapsible';
import { useCardActions, useCardStore } from '@/store';
import { FormCheckbox } from '@/components/common/form/form-checkbox';
import { FormContainer } from '@/components/common/form';

export const SettingsForm = () => {
  const { settings } = useCardStore();
  const { setSettings } = useCardActions();
  return (
    <FormContainer className='w-full' title='Settings' collapsible>
      <CollapsibleContent>
        <div className='grid grid-cols-2 gap-2'>
          <FormCheckbox
            id='bold-rules-text'
            label='Bold rules text?'
            checked={settings.boldRulesText}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ boldRulesText: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show border?'
            checked={settings.border}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ border: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show artist?'
            checked={settings.artist}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ artist: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show credits?'
            checked={settings.credits}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ credits: e });
              }
            }}
          />
        </div>
      </CollapsibleContent>
    </FormContainer>
  );
};
