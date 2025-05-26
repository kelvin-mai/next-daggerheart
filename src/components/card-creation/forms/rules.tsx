'use client';

import * as React from 'react';

import { RichTextEditor } from '@/components/common';
import { FormContainer } from '@/components/common/form';
import { Button } from '@/components/ui/button';
import { useCardActions, useCardStore } from '@/store';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const AssistedRulesText = () => {
  const [sectionType, setSectionType] = React.useState('');
  const {
    card: { text },
  } = useCardStore();
  const { setCardDetails } = useCardActions();

  const getSection = () => {
    switch (sectionType) {
      case 'flavor':
        return '<em>flavor text</em>';
      case 'feature':
        return '<strong><em>feature:</em></strong> description';
      case 'spellcast':
        return `<p style='text-align: center'><strong>SPELLCAST:</strong> trait</p>`;
        return '';
    }
  };

  const handleClick = () => {
    const section = getSection();
    setCardDetails({ text: text + '\n' + section });
  };
  return (
    <div className='flex gap-2'>
      <Select value={sectionType} onValueChange={(v) => setSectionType(v)}>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder='Rules Text Section Type' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Rules Text Section</SelectLabel>
            <SelectItem value='flavor'>Flavor</SelectItem>
            <SelectItem value='feature'>Feature</SelectItem>
            <SelectItem value='spellcast'>Spellcast</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={handleClick}>Add Section</Button>
    </div>
  );
};

export const RulesForm = () => {
  const { card } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Rules Text'>
      {/* <AssistedRulesText /> */}
      <RichTextEditor
        defaultValue={card.text}
        onChange={(e) => setCardDetails({ text: e })}
      />
    </FormContainer>
  );
};
