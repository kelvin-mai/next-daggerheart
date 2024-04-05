'use client';

import { useCard, useCardActions } from '@/store';
import { traits, equipmentTypes, ranges } from '@/constants/rules-texts';
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

type CardCreationEquipmentFormProps = {};

export const CardCreationEquipmentForm: React.FC<
  CardCreationEquipmentFormProps
> = () => {
  const { subtitle, armor, hands, weapon } = useCard();
  const {
    changeCardStringProperty,
    changeCardNumberProperty,
    changeWeaponProperty,
  } = useCardActions();
  const changeEquipmentType = (value: string) => {
    changeCardStringProperty({
      property: 'subtitle',
      value,
    });
    if (value === 'armor') {
      changeCardNumberProperty({ property: 'armor', value: '0' });
    }
    if (value === 'secondary weapon') {
      changeCardNumberProperty({ property: 'hands', value: '1' });
    }
    if (value === 'primary weapon' || value === 'secondary weapon') {
      changeWeaponProperty({ property: 'placeholder', value: 'FIXME' });
    }
  };
  return (
    <>
      <FormField label='Equipment Type' htmlFor='subtitle'>
        <Select value={subtitle} onValueChange={(e) => changeEquipmentType(e)}>
          <SelectTrigger id='subtitle' className='capitalize'>
            <SelectValue placeholder='Equipment Type' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Equipment Type</SelectLabel>
              {equipmentTypes.map((t) => (
                <SelectItem key={t} className='capitalize' value={t}>
                  {t}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      {subtitle === 'armor' ? (
        <FormField label='Armor Base Score' htmlFor='armor'>
          <Input
            id='armor'
            placeholder='Base Score'
            type='number'
            value={armor}
            min={0}
            onChange={(e) =>
              changeCardNumberProperty({
                property: 'armor',
                value: e.target.value,
              })
            }
          />
        </FormField>
      ) : null}
      {(subtitle === 'primary weapon' || subtitle === 'secondary weapon') &&
      weapon ? (
        <>
          <div className='flex gap-2'>
            {subtitle === 'primary weapon' ? (
              <FormField label='Hands' htmlFor='hands'>
                <Select
                  value={String(hands)}
                  onValueChange={(e) =>
                    changeCardNumberProperty({ property: 'hands', value: e })
                  }
                >
                  <SelectTrigger id='hands'>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Hands</SelectLabel>
                      <SelectItem value='1'>One-Handed</SelectItem>
                      <SelectItem value='2'>Two-Handed</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormField>
            ) : null}
            <FormField label='Trait' htmlFor='trait'>
              <Select
                value={weapon.trait}
                onValueChange={(e) =>
                  changeWeaponProperty({ property: 'trait', value: e })
                }
              >
                <SelectTrigger id='trait' className='capitalize'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Trait</SelectLabel>
                    {traits.map((t) => (
                      <SelectItem key={t} className='capitalize' value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormField>
            <FormField label='Distance' htmlFor='distance'>
              <Select
                value={weapon.distance}
                onValueChange={(e) =>
                  changeWeaponProperty({ property: 'distance', value: e })
                }
              >
                <SelectTrigger id='distance' className='capitalize'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Distance</SelectLabel>
                    {ranges.map((t) => (
                      <SelectItem key={t} className='capitalize' value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormField>
          </div>
          <div className='grid grid-cols-2 gap-2'>
            <FormField label='Damage Amount' htmlFor='damage-amount'>
              <Input
                id='damage-amount'
                placeholder='d8+5...'
                value={weapon.damageAmount}
                onChange={(e) =>
                  changeWeaponProperty({
                    property: 'damageAmount',
                    value: e.target.value,
                  })
                }
              />
            </FormField>
            <FormField label='Damage Type' htmlFor='damage-type'>
              <Select
                value={weapon.damageType}
                onValueChange={(e) =>
                  changeWeaponProperty({ property: 'damageType', value: e })
                }
              >
                <SelectTrigger id='damage-type' className='capitalize'>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Distance</SelectLabel>
                    {['physical', 'magical'].map((t) => (
                      <SelectItem key={t} className='capitalize' value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormField>
          </div>
        </>
      ) : null}
    </>
  );
};
