'use client';

import * as React from 'react';
import { Check, ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';

export const domains = [
  'arcana',
  'blade',
  'bone',
  'codex',
  'grace',
  'midnight',
  'sage',
  'splendor',
  'valor',
] as const;

export const domainColors: { [key: string]: string } = {
  arcana: '#664295',
  blade: '#b93035',
  bone: '#c1c7cc',
  codex: '#3370ab',
  grace: '#cb3b90',
  midnight: '#2c2c2c',
  sage: '#0e854d',
  splendor: '#d1b447',
  valor: '#dc7a27',
};

type DomainSelectProps = {
  id: string;
  label: string;
  value: string;
  className?: string;
  onChange?: (value: string) => void;
};

export const DomainSelect: React.FC<DomainSelectProps> = ({
  id,
  label,
  value,
  className,
  onChange,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (value: string) => {
    setOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id}>{label}</Label>
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
                <>
                  <div
                    className='size-3 rounded-full'
                    style={{
                      background: domainColors[value] ?? 'var(--primary)',
                    }}
                  />
                  {value}
                </>
              ) : (
                <span className='text-muted-foreground'>Domain</span>
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
            <CommandInput placeholder='Search domains...' />
            <CommandList>
              <CommandEmpty>
                <div className='text-center'>
                  <p className='text-muted-foreground text-sm'>
                    No domain found.
                  </p>
                </div>
              </CommandEmpty>
              <CommandGroup heading='Custom'>
                <CommandItem value='custom' onSelect={handleSelect}>
                  <div className='bg-primary size-3 rounded-full' />
                  Custom
                  <Check
                    className={cn(
                      'ml-auto size-4',
                      value === 'custom' ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading='Core Set'>
                {domains.map((d) => (
                  <CommandItem
                    key={d}
                    value={d}
                    className='flex items-center justify-between gap-2 capitalize'
                    onSelect={handleSelect}
                  >
                    <div
                      className='size-3 rounded-full'
                      style={{ background: domainColors[d] }}
                    />
                    {d}
                    <Check
                      className={cn(
                        'ml-auto size-4',
                        value === d ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};
