'use client';

import { useState } from 'react';

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
      <FormField label='Subclass Name' htmlFor='subtitle'>
        <Input
          id='subtitle'
          defaultValue={card.subtitle}
          onChange={(e) => onChange({ ...card, subtitle: e.target.value })}
        />
      </FormField>
      <div className='flex gap-2'>
        <FormField label='Primary Domain' htmlFor='primary-domain'>
          <Select
            defaultValue={card.domain}
            onValueChange={(e) => onChange({ ...card, domain: e })}
          >
            <SelectTrigger id='primary-domain'>
              <SelectValue placeholder='Domain' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domain</SelectLabel>
                <SelectItem value='arcana'>Arcana</SelectItem>
                <SelectItem value='blade'>Blade</SelectItem>
                <SelectItem value='bone'>Bone</SelectItem>
                <SelectItem value='codex'>Codex</SelectItem>
                <SelectItem value='grace'>Grace</SelectItem>
                <SelectItem value='midnight'>Midnight</SelectItem>
                <SelectItem value='sage'>Sage</SelectItem>
                <SelectItem value='splendor'>Splendor</SelectItem>
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
            <SelectTrigger id='secondary-domain'>
              <SelectValue placeholder='Domain' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Domain</SelectLabel>
                <SelectItem value='arcana'>Arcana</SelectItem>
                <SelectItem value='blade'>Blade</SelectItem>
                <SelectItem value='bone'>Bone</SelectItem>
                <SelectItem value='codex'>Codex</SelectItem>
                <SelectItem value='grace'>Grace</SelectItem>
                <SelectItem value='midnight'>Midnight</SelectItem>
                <SelectItem value='sage'>Sage</SelectItem>
                <SelectItem value='splendor'>Splendor</SelectItem>
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
          <SelectTrigger id='spellcast-trait'>
            <SelectValue placeholder='Spellcast Trait' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Spellcast Trait</SelectLabel>
              <SelectItem value='agility'>Agility</SelectItem>
              <SelectItem value='strength'>Strength</SelectItem>
              <SelectItem value='finesse'>Finesse</SelectItem>
              <SelectItem value='instinct'>Instinct</SelectItem>
              <SelectItem value='presence'>Presence</SelectItem>
              <SelectItem value='knowledge'>Knowledge</SelectItem>
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
