'use client';

import { FormInput, FormContainer } from '@/components/common/form';
import { CollapsibleContent } from '@/components/ui/collapsible';
import { useAdversaryActions, useAdversaryStore } from '@/store';

export const EnvironmentStatsForm = () => {
  const {
    adversary: { potential },
  } = useAdversaryStore();
  const { setAdversaryDetails } = useAdversaryActions();
  return (
    <FormContainer title='Environment Statistics' collapsible defaultOpen>
      <CollapsibleContent className='space-y-2 pt-2'>
        <FormInput
          id='adversaries'
          label='Potential Adversaries'
          placeholder='Any'
          value={potential}
          onChange={(e) => setAdversaryDetails({ potential: e.target.value })}
        />
      </CollapsibleContent>
    </FormContainer>
  );
};
