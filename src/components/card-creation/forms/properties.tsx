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

export const ClassPropertiesForm = () => {
  const {
    card: { evasion },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Class properties'>
      <div className='space-y-2'>
        <DomainSelect id='domain' label='Primary Domain' className='w-full' />
        <DomainSelect id='domain' label='Secondary Domain' className='w-full' />
        <FormInput
          id='evasion'
          label='Starting Evasion Score'
          className='w-full'
          type='number'
          min={0}
          value={evasion}
          onChange={(e) => setCardDetails({ evasion: Number(e.target.value) })}
        />
      </div>
    </FormContainer>
  );
};

export const SubClassPropertiesForm = () => {
  const {
    card: { subtype, subtitle },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Class properties' collapsible>
      <div className='flex gap-2'>
        <FormInput
          id='class-name'
          label='Class Name'
          className='w-full'
          value={subtype}
          onChange={(e) => setCardDetails({ subtype: e.target.value })}
        />
        <div className='w-full space-y-2'>
          <Label htmlFor='sub-feature'>Subclass Feature</Label>
          <Select
            value={subtitle}
            onValueChange={(v) => setCardDetails({ subtitle: v })}
          >
            <SelectTrigger id='sub-feature' className='w-full capitalize'>
              <SelectValue placeholder='Feature' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Features</SelectLabel>
                {['foundation', 'specialization', 'mastery'].map((f) => (
                  <SelectItem key={f} value={f} className='capitalize'>
                    {f}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CollapsibleContent className='space-y-2 pt-2'>
        <DomainSelect id='domain' label='Primary Domain' className='w-full' />
        <DomainSelect id='domain' label='Secondary Domain' className='w-full' />
      </CollapsibleContent>
    </FormContainer>
  );
};
