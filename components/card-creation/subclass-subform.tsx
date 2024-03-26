'use client';

import { useState } from 'react';

import { domains, traits } from '@/constants/rules-texts';
import type { DaggerHeartCardProps } from '@/components/daggerheart-card';
import { FormField } from '@/components/common';
import {
  Checkbox,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

type CardCreationSubclassFormProps = {
  card: DaggerHeartCardProps;
  onChange: (card: DaggerHeartCardProps) => void;
};

export const CardCreationSubclassForm: React.FC<
  CardCreationSubclassFormProps
> = ({ card, onChange }) => {
  const [spellcast, setSpellcast] = useState<string | undefined>(
    card.spellcast,
  );
  const [showSpellcast, setShowSpellcast] = useState<boolean>(!!card.spellcast);
  return (
    <>
      <div className='flex gap-2'>
        <FormField label='Class Name' htmlFor='subtype'>
          <Input
            id='subtype'
            defaultValue={card.subtype}
            onChange={(e) => onChange({ ...card, subtype: e.target.value })}
          />
        </FormField>
        <FormField label='Subclass Feature' htmlFor='subtitle'>
          <Input
            id='subtitle'
            defaultValue={card.subtitle}
            onChange={(e) => onChange({ ...card, subtitle: e.target.value })}
          />
        </FormField>
      </div>
      <div className='flex gap-2'>
        <FormField label='Primary Domain' htmlFor='primary-domain'>
          <Select
            defaultValue={card.domain}
            onValueChange={(e) =>
              onChange({
                ...card,
                domain: e,
                domainSecondary:
                  card.domainSecondary === e ? undefined : card.domainSecondary,
              })
            }
          >
            <SelectTrigger id='primary-domain' className='capitalize'>
              <SelectValue placeholder='Domain' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domain</SelectLabel>
                {domains.map((d) => (
                  <SelectItem key={d} className='capitalize' value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <FormField label='Secondary Domain' htmlFor='secondary-domain'>
          <Select
            defaultValue={card.domainSecondary}
            onValueChange={(e) =>
              onChange({
                ...card,
                domainSecondary: card.domain === e ? undefined : e,
              })
            }
          >
            <SelectTrigger id='secondary-domain' className='capitalize'>
              <SelectValue placeholder='Domain' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domain</SelectLabel>
                {domains.map((d) => (
                  <SelectItem key={d} className='capitalize' value={d}>
                    {d}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
      </div>
      <FormField label='Spellcast Trait' htmlFor='spellcast-trait'>
        <Select
          value={spellcast}
          onValueChange={(e) => {
            setSpellcast(e);
            if (showSpellcast) {
              onChange({ ...card, spellcast: e });
            }
          }}
        >
          <SelectTrigger id='spellcast-trait' className='capitalize'>
            <SelectValue placeholder='Spellcast Trait' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Spellcast Trait</SelectLabel>
              {traits.map((t) => (
                <SelectItem key={t} className='capitalize' value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      <div className='flex items-center justify-end space-x-2 pr-4'>
        <Checkbox
          id='spellcast'
          checked={showSpellcast}
          onCheckedChange={(e) => {
            if (e !== 'indeterminate') {
              setShowSpellcast(e);
              onChange({ ...card, spellcast: e ? spellcast : undefined });
            }
          }}
        />
        <Label htmlFor='spellcast'>Show spellcast trait?</Label>
      </div>
    </>
  );
};
