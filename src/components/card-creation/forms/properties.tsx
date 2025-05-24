'use client';

import * as React from 'react';

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
import { cn, fileToBase64 } from '@/lib/utils';
import { cardTypes, domainAbilityTypes } from '@/lib/types/card-creation';
import { useCardStore, useCardActions } from '@/store';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Check, ChevronDown } from 'lucide-react';
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { DomainSelect } from '@/components/common/domain-select';
import { Input } from '@/components/ui/input';

export const DomainPropertiesForm = () => {
  const {
    card: { subtype, stress, level },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Domain Properties' collapsible defaultOpen>
      <div className='space-y-2'>
        <DomainSelect id='domain' label='Domain' className='w-full' />
        <CollapsibleContent className='flex gap-2'>
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
        </CollapsibleContent>
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
