import { ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';

export const SettingsForm = () => {
  return (
    <Collapsible className='bg-card rounded-sm border px-4 py-2'>
      <div className='flex items-center justify-between'>
        <Label>Settings</Label>
        <CollapsibleTrigger asChild>
          <Button variant='ghost' size='sm'>
            <ChevronsUpDown className='size-4' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent></CollapsibleContent>
    </Collapsible>
  );
};
