'use client';

import type { CardType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FormField } from '@/components/common';
import { type DaggerHeartCardProps } from '@/components/daggerheart-card';
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

type CardCreationFormProps = {
  card: DaggerHeartCardProps;
  className?: string;
  onChange: (card: DaggerHeartCardProps) => void;
  onChangeType: (type: CardType) => void;
};

export const CardCreationForm: React.FC<CardCreationFormProps> = ({
  card,
  className,
  onChange,
  onChangeType,
}) => {
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
      onChange({ ...card, image });
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
            defaultValue={card.type}
            onValueChange={(e) => onChangeType(e as CardType)}
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
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <FormField label='Title' htmlFor='title'>
          <Input
            id='title'
            placeholder='Title'
            defaultValue={card.title}
            onChange={(e) => onChange({ ...card, title: e.target.value })}
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
          defaultValue={card.artist}
          onChange={(e) => onChange({ ...card, artist: e.target.value })}
        />
      </FormField>
      {card.type === 'domain' ? (
        <CardCreationDomainForm card={card} onChange={onChange} />
      ) : null}
      {card.type === 'subclass' ? (
        <CardCreationSubclassForm card={card} onChange={onChange} />
      ) : null}
      <CardCreationTextForm card={card} onChange={onChange} />
    </form>
  );
};
