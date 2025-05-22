'use client';

import { RichTextEditor } from '@/components/common';
import { FormContainer } from '@/components/common/form';
import { useCardActions, useCardStore } from '@/store';

export const RulesForm = () => {
  const { card } = useCardStore();
  const { setCardText } = useCardActions();
  return (
    <FormContainer title='Rules Text'>
      <RichTextEditor
        defaultValue={card.text}
        onChange={(e) => setCardText(e)}
      />
    </FormContainer>
  );
};
