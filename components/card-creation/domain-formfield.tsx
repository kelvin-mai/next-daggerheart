'use client';

import { useState } from 'react';

import { domains } from '@/constants/rules-texts';
import { getDomainColor } from '@/constants/domain-colors';
import { fileToBase64 } from '@/lib/utils';
import type { CardDomain } from '@/lib/types';
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
import { ColorPicker } from '@/components/ui';

type DomainFormFieldProps = {
  label?: string;
  id?: string;
  defaultValue?: CardDomain;
  onChange: (args: any) => void;
};

export const DomainFormField: React.FC<DomainFormFieldProps> = ({
  label = 'Domain',
  id = 'domain',
  defaultValue,
  onChange,
}) => {
  const [name, setName] = useState<string>(defaultValue?.name || 'arcana');
  const [color, setColor] = useState<string>(
    defaultValue?.name ? getDomainColor(defaultValue.name) : '#38227b',
  );
  const [image, setImage] = useState<string | undefined>();
  const handleImageChange = async (e: any) => {
    if (e.target.files.length) {
      const image = await fileToBase64(e.target.files[0]);
      setImage(image);
      onChange({ name, color, image });
    }
  };
  const handleSelect = (value: string) => {
    if (domains.includes(value)) {
      setName(value);
      const defaultColor = getDomainColor(value);
      setColor(defaultColor);
      onChange({ name: value, color: defaultColor, image });
    } else {
      setName(value);
      onChange({ name: value, color, image });
    }
  };
  const handleColor = (value: string) => {
    setColor(value);
    onChange({ name, color: value, image });
  };
  return (
    <>
      <FormField label={label} htmlFor={id}>
        <Select value={name} onValueChange={handleSelect}>
          <SelectTrigger id={id} className='capitalize'>
            <SelectValue placeholder='Domain' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Official Domains</SelectLabel>
              {domains.map((d) => (
                <SelectItem key={d} className='capitalize' value={d}>
                  {d}
                </SelectItem>
              ))}
              <SelectLabel>Custom Domains</SelectLabel>
              <SelectItem value='custom'>Custom</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      {name === 'custom' ? (
        <div className='flex items-end gap-2'>
          <FormField label='Name' htmlFor='custom-domain' className='grow'>
            <Input
              id='custom-domain'
              type='file'
              accept='image/png, image/jpeg, image/webp, image/jpg'
              onChange={handleImageChange}
            />
          </FormField>
          <FormField className='w-14'>
            <ColorPicker color={color} setColor={handleColor} />
          </FormField>
        </div>
      ) : null}
    </>
  );
};
