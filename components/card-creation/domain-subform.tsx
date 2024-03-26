import { domains } from '@/constants/rules-texts';
import type { DaggerHeartCardProps } from '@/components/daggerheart-card';
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

type CardCreationDomainFormProps = {
  card: DaggerHeartCardProps;
  onChange: (card: DaggerHeartCardProps) => void;
};

export const CardCreationDomainForm: React.FC<CardCreationDomainFormProps> = ({
  card,
  onChange,
}) => {
  return (
    <>
      <FormField label='Domain' htmlFor='domain'>
        <Select
          defaultValue={card.domain}
          onValueChange={(e) => onChange({ ...card, domain: e })}
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
            defaultValue={card.subtype}
            onValueChange={(e) => onChange({ ...card, subtype: e })}
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
            defaultValue={card.cost}
            min={0}
            max={9}
            onChange={(e) =>
              onChange({ ...card, cost: parseInt(e.target.value) })
            }
          />
        </FormField>
        <FormField label='Level' htmlFor='ability-level'>
          <Input
            id='ability-level'
            placeholder='Level'
            type='number'
            defaultValue={card.level}
            min={1}
            max={10}
            onChange={(e) =>
              onChange({ ...card, level: parseInt(e.target.value) })
            }
          />
        </FormField>
      </div>
    </>
  );
};
