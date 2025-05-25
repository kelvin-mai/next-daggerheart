'use client';

import * as React from 'react';

import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../ui/command';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '../ui/input';

type CustomSelectProps = {
  id?: string;
  placeholder?: string;
  children?: React.ReactNode;
  options: string[];
  heading: string;
  value?: string;
  onChange: (v: string) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  placeholder,
  options,
  heading,
  value,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [isCustom, setIsCustom] = React.useState(false);
  const [custom, setCustom] = React.useState('');
  const handleSelectValue = (v: string) => {
    setOpen(false);
    onChange(v);
    setIsCustom(false);
  };
  const handleCustomValue = () => {
    setOpen(false);
    setIsCustom(true);
    onChange(custom);
  };
  const handleCustomKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCustomValue();
    }
  };
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-full justify-between font-normal'
        >
          <div className='flex items-center gap-2 capitalize'>
            {value ? (
              value
            ) : (
              <span className='text-muted-foreground'>{placeholder}</span>
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='min-w-[var(--radix-popover-trigger-width)] p-0'
        align='start'
      >
        <Command>
          <CommandInput placeholder={`Search ${heading}...`} />
          <CommandEmpty>
            <div className='text-center'>
              <p className='text-muted-foreground text-sm'>None found.</p>
            </div>
          </CommandEmpty>
          <CommandGroup heading={heading}>
            {options.map((option) => (
              <CommandItem
                key={option}
                value={option}
                className='capitalize'
                onSelect={handleSelectValue}
              >
                {option}
                <Check
                  className={cn(
                    'ml-auto size-4',
                    value === option ? 'opacity-100' : 'opacity-0',
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading='Custom'>
            <CommandItem>
              <Input
                placeholder='Custom value'
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleCustomKeydown}
              />
              <Button
                size='sm'
                onClick={(e) => {
                  e.stopPropagation();
                  handleCustomValue();
                }}
              >
                Use
              </Button>
              <Check
                className={cn(
                  'ml-auto size-4',
                  isCustom ? 'opacity-100' : 'opacity-0',
                )}
              />
            </CommandItem>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
