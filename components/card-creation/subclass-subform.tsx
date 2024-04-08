'use client';

import { useCard, useCardActions, useCardOptions } from '@/store';
import { traits } from '@/constants/rules-texts';
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
import { DomainFormField } from './domain-formfield';

type CardCreationSubclassFormProps = {};

export const CardCreationSubclassForm: React.FC<
  CardCreationSubclassFormProps
> = () => {
  const { subtype, subtitle, domain, domainSecondary, spellcast } = useCard();
  const { includeSpellcast } = useCardOptions();
  const { changeCardStringProperty, changeCardOption, changeCardDomain } =
    useCardActions();
  return (
    <>
      <div className='flex gap-2'>
        <FormField label='Class Name' htmlFor='subtype'>
          <Input
            id='subtype'
            value={subtype}
            onChange={(e) =>
              changeCardStringProperty({
                property: 'subtype',
                value: e.target.value,
              })
            }
          />
        </FormField>
        <FormField label='Subclass Feature' htmlFor='subtitle'>
          <Input
            id='subtitle'
            value={subtitle}
            onChange={(e) =>
              changeCardStringProperty({
                property: 'subtitle',
                value: e.target.value,
              })
            }
          />
        </FormField>
      </div>
      <DomainFormField
        label='Primary Domain'
        defaultValue={domain}
        onChange={(domain) => changeCardDomain({ property: 'domain', domain })}
      />
      <DomainFormField
        label='Secondary Domain'
        defaultValue={domainSecondary}
        onChange={(domain) =>
          changeCardDomain({ property: 'domainSecondary', domain })
        }
      />
      <FormField label='Spellcast Trait' htmlFor='spellcast-trait'>
        <Select
          value={spellcast}
          onValueChange={(e) =>
            changeCardStringProperty({ property: 'spellcast', value: e })
          }
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
          checked={includeSpellcast}
          onCheckedChange={(e) => {
            if (e !== 'indeterminate') {
              changeCardOption({ property: 'includeSpellcast', value: e });
            }
          }}
        />
        <Label htmlFor='spellcast'>Show spellcast trait?</Label>
      </div>
    </>
  );
};
