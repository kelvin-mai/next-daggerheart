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
import { CustomSelect } from '@/components/common/custom-select';

export const DomainPropertiesForm = () => {
  const {
    card: { subtype, stress, level, domainPrimary },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Domain Properties' collapsible defaultOpen>
      <div className='space-y-2'>
        <DomainSelect
          id='domain'
          label='Domain'
          className='w-full'
          value={domainPrimary}
          onChange={(v) =>
            setCardDetails({ domainPrimary: v, domainSecondary: v })
          }
        />
        <CollapsibleContent className='flex gap-2'>
          <div className='w-full space-y-2'>
            <Label htmlFor='subtype'>Ability Type</Label>
            <CustomSelect
              id='subtype'
              placeholder='Ability Type'
              options={[
                {
                  category: 'Types',
                  options: ['ability', 'spell', 'grimoire'],
                },
              ]}
              value={subtype}
              onChange={(v) => setCardDetails({ subtype: v })}
            />
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
    card: { evasion, domainPrimary, domainSecondary },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  return (
    <FormContainer title='Class Properties'>
      <div className='space-y-2'>
        <DomainSelect
          id='domain'
          label='Primary Domain'
          className='w-full'
          value={domainPrimary}
          onChange={(v) => setCardDetails({ domainPrimary: v })}
        />
        <DomainSelect
          id='domain'
          label='Secondary Domain'
          className='w-full'
          value={domainSecondary}
          onChange={(v) => setCardDetails({ domainSecondary: v })}
        />
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
    classes,
    card: { subtype, subtitle, domainPrimary, domainSecondary },
    computed: { classColors, classDomains },
  } = useCardStore();
  const { setCardDetails } = useCardActions();
  const classOptions = classes!
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr.source)) {
        return [...acc, curr.source];
      }
      return acc;
    }, [])
    .map((source) => ({
      category: source,
      options: classes!.filter((c) => c.source === source).map((c) => c.name),
    }));
  return (
    <FormContainer title='Subclass Properties' collapsible>
      <div className='flex gap-2'>
        <div className='w-full space-y-2'>
          <Label htmlFor='class-name'>Class</Label>
          <CustomSelect
            id='class-name'
            placeholder='Class'
            options={classOptions}
            value={subtype}
            renderValue={(v) => (
              <div className='flex items-center gap-2'>
                <div
                  className='size-3 rounded-full'
                  style={{
                    background: classColors(v).primary,
                  }}
                />
                <div
                  className='size-3 rounded-full'
                  style={{
                    background: classColors(v).secondary,
                  }}
                />
                <span>{v}</span>
              </div>
            )}
            onChange={(v) => {
              if (classes!.map((c) => c.name).includes(v)) {
                setCardDetails({
                  subtype: v,
                  domainPrimary: classDomains(v).primary,
                  domainPrimaryColor: classColors(v).primary,
                  domainSecondary: classDomains(v).secondary,
                  domainSecondaryColor: classColors(v).secondary,
                });
              } else {
                setCardDetails({
                  subtype: v,
                  domainPrimary: 'custom',
                  domainSecondary: 'custom',
                });
              }
            }}
          />
        </div>
        <div className='w-full space-y-2'>
          <Label htmlFor='sub-feature'>Subclass Feature</Label>
          <CustomSelect
            id='sub-feature'
            placeholder='Feature'
            options={[
              {
                category: 'Features',
                options: ['foundation', 'specialization', 'mastery'],
              },
            ]}
            value={subtitle}
            onChange={(v) => setCardDetails({ subtitle: v })}
          />
        </div>
      </div>
      <CollapsibleContent className='space-y-2 pt-2'>
        {/* <DomainSelect
          id='domain'
          label='Primary Domain'
          className='w-full'
          value={domainPrimary}
          onChange={(v) =>
            setCardDetails({
              domainPrimary: v,
            })
          }
        />
        <DomainSelect
          id='domain'
          label='Secondary Domain'
          className='w-full'
          value={domainSecondary}
          onChange={(v) =>
            setCardDetails({
              domainSecondary: v,
            })
          }
        /> */}
      </CollapsibleContent>
    </FormContainer>
  );
};
