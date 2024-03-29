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

type CardCreationEquipmentFormProps = {};

export const CardCreationEquipmentForm: React.FC<
  CardCreationEquipmentFormProps
> = () => {
  const { subtype } = useCard();
  const { changeCardStringProperty } = useCardActions();
  return (
    <>
      <FormField label='Equipment Type' htmlFor='subtype'>
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
    </>
  );
};
