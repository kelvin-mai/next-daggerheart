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
import { cardTypes, domainAbilityTypes } from '@/lib/types/card-creation';
import { useCardStore, useCardActions } from '@/store';

export const domains = [
  'arcana',
  'blade',
  'bone',
  'codex',
  'grace',
  'midnight',
  'sage',
  'splendor',
  'valor',
];

export const DomainPropertiesForm = () => {
  const {
    card: { subtype, stress, level },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Domain Properties'>
      <div className='space-y-2'>
        <div className='flex gap-2'>
          <div className='w-full space-y-2'>
            <Label htmlFor='subtype'>Domain</Label>
            <Select>
              <SelectTrigger id='subtype' className='w-full capitalize'>
                <SelectValue placeholder='Domain' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Official Domains</SelectLabel>
                  {domains.map((t) => (
                    <SelectItem key={t} value={t} className='capitalize'>
                      {t}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='w-full space-y-2'>
            <Label htmlFor='subtype'>Ability Type</Label>
            <Select
              value={subtype}
              onValueChange={(v) => setCardDetails({ subtype: v })}
            >
              <SelectTrigger id='subtype' className='w-full capitalize'>
                <SelectValue placeholder='Ability Type' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Ability Type</SelectLabel>
                  {domainAbilityTypes.map((t) => (
                    <SelectItem key={t} value={t} className='capitalize'>
                      {t}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='flex gap-2'>
          <FormInput
            className='w-full'
            id='stress'
            type='number'
            min={0}
            max={9}
            value={stress}
            onChange={(e) => setCardDetails({ stress: Number(e.target.value) })}
          />
          <FormInput
            className='w-full'
            id='level'
            type='number'
            min={0}
            max={9}
            value={level}
            onChange={(e) => setCardDetails({ level: Number(e.target.value) })}
          />
        </div>
      </div>
    </FormContainer>
  );
};

export const PropertiesForm = () => {
  const { card } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Card Properties' collapsible>
      <FormInput
        className='w-full'
        id='subtype'
        type='text'
        value={card.subtype}
        onChange={(e) => setCardDetails({ subtype: e.target.value })}
      />
      <CollapsibleContent className='space-y-2'>
        <div className='flex gap-2'>
          <FormInput
            className='w-full'
            id='stress'
            type='number'
            min={0}
            max={9}
            value={card.stress}
            onChange={(e) => setCardDetails({ stress: Number(e.target.value) })}
          />
          <FormInput
            className='w-full'
            id='level'
            type='number'
            min={0}
            max={9}
            value={card.level}
            onChange={(e) => setCardDetails({ level: Number(e.target.value) })}
          />
        </div>
      </CollapsibleContent>
    </FormContainer>
  );
};
