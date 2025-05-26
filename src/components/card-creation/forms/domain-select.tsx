'use client';

import { HexColorPicker } from 'react-colorful';
import { Paintbrush, UploadIcon, X } from 'lucide-react';

import { CustomSelect } from '@/components/common/custom-select';
import { Label } from '@/components/ui/label';
import { useCardComputed, useCardStore } from '@/store';
import { cn } from '@/lib/utils';
import { formatBytes, useFileUpload } from '@/hooks/use-file-upload';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';

type DomainSelectProps = {
  id: string;
  label: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  color: string;
  onColorChange: (value: string) => void;
};

export const DomainSelect: React.FC<DomainSelectProps> = ({
  id,
  label,
  className,
  value,
  onChange,
  color,
  onColorChange,
}) => {
  const { domains } = useCardStore();
  const { domainColor } = useCardComputed();
  const domainOptions = domains!
    .reduce((acc: string[], curr) => {
      if (!acc.includes(curr.source)) {
        return [...acc, curr.source];
      }
      return acc;
    }, [])
    .map((source) => ({
      category: source,
      options: domains!.filter((d) => d.source === source).map((d) => d.name),
    }));
  const isCustom = value && !domains?.map((d) => d.name).includes(value);
  return (
    <div className={cn('space-y-2', className)}>
      <Label htmlFor={id}>{label}</Label>
      <CustomSelect
        id={id}
        placeholder='Select Domain'
        options={domainOptions}
        value={value}
        onChange={onChange}
        renderValue={(v) => (
          <div className='flex items-center gap-2'>
            <div
              className='size-3 rounded-full'
              style={{
                background: domainColor(v),
              }}
            />
            <span>{v}</span>
          </div>
        )}
      />
      {isCustom && (
        <div className='flex gap-2'>
          <CustomDomainLogo />
          <CustomDomainColor color={color} setColor={onColorChange} />
        </div>
      )}
    </div>
  );
};

const CustomDomainLogo = () => {
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({ accept: 'image/*' });
  const [file] = files;
  return (
    <>
      {file ? (
        <div className='bg-background flex grow items-center justify-between gap-2 rounded-md border p-2'>
          <div className='flex items-center gap-4 overflow-hidden'>
            <div className='bg-accent aspect-square shrink-0 rounded'>
              <img
                className='size-10 rounded-[inherit] object-cover'
                src={file.preview}
                alt={file.file.name}
              />
            </div>
            <div>
              <p className='truncate text-sm font-medium'>{file.file.name}</p>
              <p className='text-muted-foreground text-sm'>
                {formatBytes(file.file.size)}
              </p>
            </div>
          </div>
          <Button
            size='icon'
            variant='ghost'
            onClick={() => removeFile(file.id)}
            aria-label='Remove file'
          >
            <X aria-hidden='true' />
          </Button>
        </div>
      ) : (
        <Button
          variant='outline'
          className='h-14 grow'
          onClick={openFileDialog}
        >
          <UploadIcon className='size-3' />
          Add Logo
        </Button>
      )}
      <input
        {...getInputProps()}
        className='sr-only'
        aria-label='Upload image file'
        tabIndex={-1}
      />
    </>
  );
};

type CustomDomainColorProps = {
  color?: string;
  setColor: (color: string) => void;
};

export const CustomDomainColor: React.FC<CustomDomainColorProps> = ({
  color,
  setColor,
}) => {
  const presets = [
    '#E2E2E2',
    '#ff75c3',
    '#ffa647',
    '#ffe83f',
    '#9fff5b',
    '#70e2ff',
    '#cd93ff',
    '#09203f',
  ];
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' className='h-14 grow'>
          {color ? (
            <div className='size-4 rounded' style={{ background: color }} />
          ) : (
            <Paintbrush className='size-4' />
          )}
          Choose Color
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-64 min-w-[var(--radix-popover-trigger-width)]'>
        <Tabs>
          <TabsList defaultValue='picker'>
            <TabsTrigger value='picker'>Picker</TabsTrigger>
            <TabsTrigger value='preset'>Presets</TabsTrigger>
          </TabsList>
          <TabsContent value='picker' className='flex justify-center'>
            <HexColorPicker color={color || '#000000'} onChange={setColor} />
          </TabsContent>
          <TabsContent
            value='preset'
            className='flex flex-wrap justify-center gap-2'
          >
            {presets.map((p) => (
              <div
                key={p}
                style={{ background: p }}
                className='size-6 rounded'
                onClick={() => setColor(p)}
              />
            ))}
          </TabsContent>
        </Tabs>
        <Input
          className='my-2'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </PopoverContent>
    </Popover>
  );
};
