'use client';

import { useState } from 'react';

import type { CardTextListType, CardTextType } from '@/lib/types';
import { useCard, useCardActions } from '@/store';
import {
  Button,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
  Label,
} from '@/components/ui';
import { FormField } from '@/components/common';
import { CardCreationSectionFormField } from './card-text-formfield';

type CardCreationTextFormProps = {};

export const CardCreationTextForm: React.FC<CardCreationTextFormProps> = () => {
  const [addTextType, setAddTextType] = useState<CardTextType>();
  const { sections } = useCard();
  const { addCardTextSection, removeCardTextSection, changeCardTextSection } =
    useCardActions();
  const addType = () => {
    if (addTextType) {
      addCardTextSection(addTextType);
    }
  };
  return (
    <>
      {sections.map((s, i) => (
        <div key={i} className='space-y-2 rounded border-2 border-dh-gold p-2'>
          <Label>Card Text Section</Label>
          <CardCreationSectionFormField
            index={i}
            {...s}
            onChange={(text: any, listType?: CardTextListType) =>
              changeCardTextSection({ text, listType, index: i })
            }
            onRemove={() => removeCardTextSection(i)}
          />
        </div>
      ))}
      <div className='flex items-end gap-2 pt-2'>
        <FormField label='Add Card Text Section' htmlFor='section'>
          <Select
            value={addTextType}
            onValueChange={(e) => setAddTextType(e as CardTextType)}
          >
            <SelectTrigger id='section'>
              <SelectValue placeholder='Card Text Section Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Card Text Section</SelectLabel>
                <SelectItem value='flavor'>Flavor Text</SelectItem>
                <SelectItem value='feature'>Feature</SelectItem>
                <SelectItem value='rules'>Rules Text</SelectItem>
                <SelectItem value='list'>Rules Text List</SelectItem>
                <SelectItem value='custom'>Custom Rules Text</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <Button className='w-full' onClick={addType}>
          Add Card Text Section
        </Button>
      </div>
    </>
  );
};
