import { domains } from '@/constants/rules-texts';
import { useCard, useCardActions } from '@/store';
import { FormField } from '@/components/common';
import {
  Input,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

type CardCreationDomainFormProps = {};

export const CardCreationDomainForm: React.FC<
  CardCreationDomainFormProps
> = () => {
  const { domain, subtype, cost, level } = useCard();
  const { changeCardNumberProperty, changeCardStringProperty } =
    useCardActions();
  return (
    <>
      <FormField label='Domain' htmlFor='domain'>
        <Select
          value={domain}
          onValueChange={(e) =>
            changeCardStringProperty({ property: 'domain', value: e })
          }
        >
          <SelectTrigger id='domain' className='capitalize'>
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
      <div className='flex gap-2'>
        <FormField label='Ability Type' htmlFor='ability-type'>
          <Select
            value={subtype}
            onValueChange={(e) =>
              changeCardStringProperty({ property: 'subtype', value: e })
            }
          >
            <SelectTrigger id='ability-type'>
              <SelectValue placeholder='Ability Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Ability Type</SelectLabel>
                <SelectItem value='ability'>Ability</SelectItem>
                <SelectItem value='spell'>Spell</SelectItem>
                <SelectItem value='grimoire'>Grimoire</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <FormField label='Stress Cost' htmlFor='ability-cost'>
          <Input
            id='ability-cost'
            placeholder='Stress Cost'
            type='number'
            value={cost}
            min={0}
            max={9}
            onChange={(e) =>
              changeCardNumberProperty({
                property: 'cost',
                value: e.target.value,
              })
            }
          />
        </FormField>
        <FormField label='Level' htmlFor='ability-level'>
          <Input
            id='ability-level'
            placeholder='Level'
            type='number'
            value={level}
            min={1}
            max={10}
            onChange={(e) =>
              changeCardNumberProperty({
                property: 'level',
                value: e.target.value,
              })
            }
          />
        </FormField>
      </div>
    </>
  );
};
