'use client';

import { FormInput, FormContainer } from '@/components/common/form';
import { CollapsibleContent } from '@/components/ui/collapsible';
import { useAdversaryActions, useAdversaryStore } from '@/store';

export const BaseForm = () => {
  const {
    adversary: { artist, credits },
  } = useAdversaryStore();
  const { setAdversaryDetails } = useAdversaryActions();
  return (
    <FormContainer title='Basic Details' collapsible defaultOpen>
      <CollapsibleContent className='space-y-2 pt-2'>
        <FormInput
          id='artist'
          type='text'
          placeholder='Artist Credit'
          value={artist}
          onChange={(e) => setAdversaryDetails({ artist: e.target.value })}
        />
        <FormInput
          id='credits'
          type='credits'
          placeholder='Daggerheart © Darrington Press 2025'
          value={credits}
          onChange={(e) => setAdversaryDetails({ credits: e.target.value })}
        />
      </CollapsibleContent>
    </FormContainer>
  );
};
