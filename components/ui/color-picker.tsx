import { Paintbrush } from 'lucide-react';
import { HexColorPicker } from 'react-colorful';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export function ColorPicker({
  color,
  setColor,
  className,
}: {
  color?: string;
  setColor: (color: string) => void;
  className?: string;
}) {
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
        <Button
          variant='outline'
          className={cn(!color && 'text-slate-500', className)}
        >
          <div className='flex w-full items-center gap-2'>
            {color ? (
              <div
                className={cn(
                  'h-4 w-4 rounded !bg-cover !bg-center transition-all',
                )}
                style={{ background: color }}
              />
            ) : (
              <Paintbrush className='h-4 w-4' />
            )}
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-64'>
        <Tabs defaultValue='preset' className='w-full'>
          <TabsList className='mb-4 w-full'>
            <TabsTrigger className='flex-1' value='preset'>
              Presets
            </TabsTrigger>
            <TabsTrigger className='flex-1' value='picker'>
              Picker
            </TabsTrigger>
          </TabsList>

          <TabsContent value='preset' className='mt-0 flex flex-wrap gap-1'>
            {presets.map((p) => (
              <div
                key={p}
                style={{ background: p }}
                className='h-6 w-6 cursor-pointer rounded-md active:scale-105'
                onClick={() => setColor(p)}
              />
            ))}
          </TabsContent>

          <TabsContent value='picker' className='mt-0 flex justify-center'>
            <HexColorPicker color={color} onChange={setColor} />
          </TabsContent>
        </Tabs>

        <Input
          id='custom'
          value={color}
          className='col-span-2 mt-4 h-8'
          onChange={(e) => setColor(e.currentTarget.value)}
        />
      </PopoverContent>
    </Popover>
  );
}
