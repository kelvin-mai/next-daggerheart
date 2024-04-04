'use client';

import { domains, traits } from '@/constants/rules-texts';
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
import { useCard, useCardActions, useCardOptions } from '@/store';

type CardCreationSubclassFormProps = {};

export const CardCreationSubclassForm: React.FC<
  CardCreationSubclassFormProps
> = () => {
  const { subtype, subtitle, domain, domainSecondary, spellcast } = useCard();
  const { includeSpellcast } = useCardOptions();
  const { changeCardStringProperty, changeCardOption } = useCardActions();
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
                property: 'subtype',
                value: e.target.value,
              })
            }
          />
        </FormField>
      </div>
      <div className='flex gap-2'>
        <FormField label='Primary Domain' htmlFor='primary-domain'>
          <Select
            value={domain}
            onValueChange={(e) =>
              changeCardStringProperty({ property: 'domain', value: e })
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
            value={domainSecondary}
            onValueChange={(e) =>
              changeCardStringProperty({
                property: 'domainSecondary',
                value: e,
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
