'use client';

import type { CardType } from '@/lib/types';
import { cn, fileToBase64 } from '@/lib/utils';
import { useCard, useCardActions, useCardOptions } from '@/store';
import { FormField } from '@/components/common';
import {
  Label,
  Input,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
  Checkbox,
} from '@/components/ui';
import { CardCreationDomainForm } from './domain-subform';
import { CardCreationTextForm } from './card-text-subform';
import { CardCreationSubclassForm } from './subclass-subform';
import { CardCreationThresholdsForm } from './threshold-subform';
import { CardCreationEquipmentForm } from './equipment-subform';
import { CardCreationClassForm } from './class-subform';

type CardCreationFormProps = {
  className?: string;
};

export const CardCreationForm: React.FC<CardCreationFormProps> = ({
  className,
}) => {
  const { title, type: cardType, artist } = useCard();
  const { boldRulesText } = useCardOptions();
  const { changeCardType, changeCardStringProperty, changeCardOption } =
    useCardActions();
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
        'space-y-2 rounded-xl border-2 border-dh-gold-light bg-dh-off-white p-4 shadow-lg',
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
                <SelectItem value='equipment'>Equipment</SelectItem>
                <SelectItem value='domain'>Domain</SelectItem>
                <SelectItem value='class'>Class</SelectItem>
                <SelectItem value='subclass'>Subclass</SelectItem>
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
      <div className='flex justify-end space-x-2 pr-4'>
        <div className='flex items-center justify-end space-x-2'>
          <Checkbox
            id='bold-rules-text'
            checked={!!boldRulesText}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                changeCardOption({ property: 'boldRulesText', value: e });
              }
            }}
          />
          <Label htmlFor='bold-rules-text'>Bold rules text?</Label>
        </div>
      </div>
      {cardType === 'domain' ||
      cardType === 'subclass' ||
      cardType === 'equipment' ||
      cardType === 'class' ? (
        <div className='flex items-center'>
          <div className='w-full border border-dh-gold' />
          <span className='text-eveleth-clean text-nowrap px-2 font-bold uppercase text-dh-gold'>
            card properties
          </span>
          <div className='w-full border border-dh-gold' />
        </div>
      ) : null}
      {cardType === 'domain' ? <CardCreationDomainForm /> : null}
      {cardType === 'class' ? <CardCreationClassForm /> : null}
      {cardType === 'subclass' ? <CardCreationSubclassForm /> : null}
      {cardType === 'equipment' ? <CardCreationEquipmentForm /> : null}
      <div className='flex items-center'>
        <div className='w-full border border-dh-gold' />
        <span className='text-eveleth-clean text-nowrap px-2 font-bold uppercase text-dh-gold'>
          card text
        </span>
        <div className='w-full border border-dh-gold' />
      </div>
      <CardCreationThresholdsForm />
      <CardCreationTextForm />
    </form>
  );
};
