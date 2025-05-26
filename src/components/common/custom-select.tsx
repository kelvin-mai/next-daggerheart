'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type CustomSelectOption = {
  category: string;
  options: string[];
};

type CustomSelectProps = {
  id?: string;
  placeholder?: string;
  children?: React.ReactNode;
  renderValue?: (v: string) => React.ReactNode;
  options: CustomSelectOption[];
  value?: string;
  onChange?: (v: string) => void;
};

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id,
  placeholder,
  options,
  value,
  renderValue,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);
  const [isCustom, setIsCustom] = React.useState(false);
  const [custom, setCustom] = React.useState('');
  const handleSelectValue = (v: string) => {
    setOpen(false);
    setIsCustom(false);
    if (onChange) {
      onChange(v);
    }
  };
  const handleCustomValue = () => {
    setOpen(false);
    setIsCustom(true);
    if (onChange) {
      onChange(custom);
    }
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
              renderValue && !isCustom ? (
                renderValue(value)
              ) : (
                value
              )
            ) : (
              <span className='text-muted-foreground'>{placeholder}</span>
            )}
          </div>
          <ChevronDown className='text-muted-foreground size-4' />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className='min-w-[var(--radix-popover-trigger-width)] p-0'
        align='start'
      >
        <Command>
          <CommandInput placeholder={`Search ${placeholder}...`} />
          <CommandEmpty>
            <div className='text-center'>
              <p className='text-muted-foreground text-sm'>None found.</p>
            </div>
          </CommandEmpty>
          <CommandList>
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
            {options.map((option) => (
              <CommandGroup key={option.category} heading={option.category}>
                {option.options.map((option) => (
                  <CommandItem
                    key={option}
                    value={option}
                    className='capitalize'
                    onSelect={handleSelectValue}
                  >
                    {renderValue ? renderValue(option) : option}
                    <Check
                      className={cn(
                        'ml-auto size-4',
                        value === option ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
