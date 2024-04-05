'use client';

import { useCard, useCardActions } from '@/store';
import { FormField } from '@/components/common';
import { Input } from '@/components/ui';
import { DomainFormField } from './domain-formfield';

type CardCreationClassFormProps = {};

export const CardCreationClassForm: React.FC<
  CardCreationClassFormProps
> = () => {
  const { domain, domainSecondary, evasion } = useCard();
  const { changeCardNumberProperty, changeCardDomain } = useCardActions();
  return (
    <>
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
      <FormField label='Starting Evasion Score' htmlFor='evasion'>
        <Input
          id='evasion'
          placeholder='Evasion Score'
          type='number'
          value={evasion}
          min={0}
          onChange={(e) =>
            changeCardNumberProperty({
              property: 'evasion',
              value: e.target.value,
            })
          }
        />
      </FormField>
    </>
  );
};
