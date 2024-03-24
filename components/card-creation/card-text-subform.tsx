'use client';
import { useState } from 'react';

import type { DaggerHeartCardProps } from '@/components/daggerheart-card';
import type {
  CardTextListType,
  CardTextSection,
  CardTextType,
} from '@/lib/types';
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

type CardCreationTextFormProps = {
  card: DaggerHeartCardProps;
  onChange: (card: DaggerHeartCardProps) => void;
};

export const CardCreationTextForm: React.FC<CardCreationTextFormProps> = ({
  card,
  onChange,
}) => {
  const [addTextType, setAddTextType] = useState<CardTextType>();
  const getDefaultText = (textType: CardTextType) => {
    switch (textType) {
      case 'flavor':
        return '';
      case 'feature':
        return { name: '', description: '' };
      case 'rules':
        return '';
      case 'list':
        return [''];
      default:
        return '';
    }
  };
  const addType = () => {
    if (addTextType) {
      onChange({
        ...card,
        sections: [
          ...card.sections,
          {
            type: addTextType,
            listType: 'bullet',
            text: getDefaultText(addTextType),
          } as CardTextSection,
        ],
      });
    }
  };
  return (
    <>
      <div className='flex items-center'>
        <div className='w-full border border-dh-gold' />
        <span className='text-eveleth-clean text-nowrap px-2 font-bold uppercase'>
          card text
        </span>
        <div className='w-full border border-dh-gold' />
      </div>
      {card.sections.map((s, i) => (
        <div key={i} className='space-y-2 rounded border-2 border-dh-gold p-2'>
          <Label>Card Text Section</Label>
          <CardCreationSectionFormField
            index={i}
            {...s}
            onChange={(text: any, listType?: CardTextListType) =>
              onChange({
                ...card,
                sections: card.sections.map((ss, ii) =>
                  ii === i ? { ...ss, listType, text } : ss,
                ) as CardTextSection[],
              })
            }
            onRemove={() =>
              onChange({
                ...card,
                sections: card.sections.filter((_, j) => j !== i),
              })
            }
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
