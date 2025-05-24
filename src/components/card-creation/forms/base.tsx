'use client';

import { FormInput, FormContainer } from '@/components/common/form';
import { CollapsibleContent } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { type CardType, cardTypes } from '@/lib/types/card-creation';
import { useCardStore, useCardActions } from '@/store';

export const BaseForm = () => {
  const { card } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Basic Details' collapsible defaultOpen>
      <div className='flex gap-2'>
        <FormInput
          className='w-full'
          id='name'
          type='text'
          value={card.name}
          onChange={(e) => setCardDetails({ name: e.target.value })}
        />
        <div className='w-full space-y-2'>
          <Label htmlFor='type'>Type</Label>
          <Select
            value={card.type}
            onValueChange={(v: CardType) => setCardDetails({ type: v })}
          >
            <SelectTrigger id='type' className='w-full capitalize'>
              <SelectValue placeholder='Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                {cardTypes.map((t) => (
                  <SelectItem key={t} value={t} className='capitalize'>
                    {t}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CollapsibleContent className='space-y-2 pt-2'>
        <FormInput
          id='artist'
          type='text'
          value={card.artist}
          onChange={(e) => setCardDetails({ artist: e.target.value })}
        />
        <FormInput
          id='credits'
          type='credits'
          value={card.credits}
          onChange={(e) => setCardDetails({ credits: e.target.value })}
        />
      </CollapsibleContent>
    </FormContainer>
  );
};
