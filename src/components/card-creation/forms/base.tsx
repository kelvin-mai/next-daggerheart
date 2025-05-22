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
import { fileToBase64 } from '@/lib/utils';
import { cardTypes } from '@/lib/types/card-creation';
import { useCardStore, useCardActions } from '@/store';

export const BaseForm = () => {
  const { card } = useCardStore();
  const { setImage, setCardDetails } = useCardActions();
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
            onValueChange={(v) => setCardDetails({ type: v })}
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
      <CollapsibleContent className='space-y-2'>
        <FormInput
          id='image'
          type='file'
          accept='image/png, image/jpeg, image/webp, image/jpg'
          onChange={async (e) => {
            if (e.target.files?.length) {
              const image = await fileToBase64(e.target.files[0]);
              setImage(image);
            }
          }}
        />
        <FormInput
          id='artist'
          type='text'
          value={card.name}
          onChange={(e) => setCardDetails({ name: e.target.value })}
        />
      </CollapsibleContent>
    </FormContainer>
  );
};
