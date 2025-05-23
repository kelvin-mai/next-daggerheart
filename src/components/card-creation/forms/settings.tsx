'use client';

import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { useCardActions, useCardStore } from '@/store';
import { FormCheckbox } from '@/components/common/form/form-checkbox';

export const SettingsForm = () => {
  const { settings } = useCardStore();
  const { setSettings } = useCardActions();
  return (
    <Collapsible className='bg-card rounded-sm border px-4 py-2'>
      <div className='flex items-center justify-between'>
        <Label>Display Settings</Label>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='sm'>
            <ChevronsUpDown className='size-4' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className='grid grid-cols-2 gap-2'>
          <FormCheckbox
            id='bold-rules-text'
            label='Bold rules text?'
            checked={settings.boldRulesText}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ boldRulesText: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show border?'
            checked={settings.border}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ border: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show artist?'
            checked={settings.artist}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ artist: e });
              }
            }}
          />
          <FormCheckbox
            id='border'
            label='Show credits?'
            checked={settings.credits}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setSettings({ credits: e });
              }
            }}
          />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
