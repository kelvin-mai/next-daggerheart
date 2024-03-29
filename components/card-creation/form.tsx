'use client';

import type { CardType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FormField } from '@/components/common';
import {
  Input,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
} from '@/components/ui';
import { CardCreationDomainForm } from './domain-subform';
import { CardCreationTextForm } from './card-text-subform';
import { CardCreationSubclassForm } from './subclass-subform';
import { CardCreationThresholdsForm } from './threshold-subform';
import { CardCreationEquipmentForm } from './equipment-subform';
import { useCard, useCardActions } from '@/store';

type CardCreationFormProps = {
  className?: string;
};

export const CardCreationForm: React.FC<CardCreationFormProps> = ({
  className,
}) => {
  const { title, type: cardType, artist } = useCard();
  const { changeCardType, changeCardStringProperty } = useCardActions();
  const fileToBase64 = (file: Blob): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  const handleImageChange = async (e: any) => {
    if (e.target.files.length) {
      const image = await fileToBase64(e.target.files[0]);
      changeCardStringProperty({ property: 'image', value: image });
    }
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        'space-y-2 rounded-xl border-2 border-dh-gold-light p-4 shadow-lg',
        className,
      )}
    >
      <div className='flex gap-2'>
        <FormField label='Card Type' htmlFor='type'>
          <Select
            value={cardType}
            onValueChange={(e) => changeCardType(e as CardType)}
          >
            <SelectTrigger id='type'>
              <SelectValue placeholder='Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Type</SelectLabel>
                <SelectItem value='ancestry'>Ancestry</SelectItem>
                <SelectItem value='community'>Community</SelectItem>
                <SelectItem value='domain'>Domain</SelectItem>
                <SelectItem value='subclass'>Subclass</SelectItem>
                <SelectItem value='equipment'>Equipment</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <FormField label='Title' htmlFor='title'>
          <Input
            id='title'
            placeholder='Title'
            value={title}
            onChange={(e) =>
              changeCardStringProperty({
                property: 'title',
                value: e.target.value,
              })
            }
          />
        </FormField>
      </div>
      <FormField label='Card Image' htmlFor='image'>
        <Input
          id='image'
          type='file'
          accept='image/png, image/jpeg, image/webp, image/jpg'
          onChange={handleImageChange}
        />
      </FormField>
      <FormField label='Artist Name' htmlFor='artist'>
        <Input
          id='artist'
          placeholder='Artist Name'
          value={artist || ''}
          onChange={(e) =>
            changeCardStringProperty({
              property: 'artist',
              value: e.target.value,
            })
          }
        />
      </FormField>
      {cardType === 'domain' ||
      cardType === 'subclass' ||
      cardType === 'equipment' ? (
        <div className='flex items-center'>
          <div className='w-full border border-dh-gold' />
          <span className='text-eveleth-clean text-nowrap px-2 font-bold uppercase text-dh-gold'>
            card properties
          </span>
          <div className='w-full border border-dh-gold' />
        </div>
      ) : null}
      {cardType === 'domain' ? <CardCreationDomainForm /> : null}
      {cardType === 'subclass' ? <CardCreationSubclassForm /> : null}
      {cardType === 'equipment' ? <CardCreationEquipmentForm /> : null}
      <div className='flex items-center'>
        <div className='w-full border border-dh-gold' />
        <span className='text-eveleth-clean text-nowrap px-2 font-bold uppercase text-dh-gold'>
          card text
        </span>
        <div className='w-full border border-dh-gold' />
      </div>
      <CardCreationTextForm />
    </form>
  );
};
