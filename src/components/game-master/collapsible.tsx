import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type GameMasterCollapsibleProps = React.ComponentProps<typeof Collapsible> & {
  label: string;
};

export const GameMasterCollapsible: React.FC<GameMasterCollapsibleProps> = ({
  className,
  label,
  children,
  ...props
}) => {
  return (
    <Collapsible
      className={cn('bg-card rounded-sm border px-4 py-2', className)}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant='ghost'
          className='flex w-full items-center justify-between'
        >
          <Label>{label}</Label>
          <ChevronDown />
          <span className='sr-only'>Toggle</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>{children}</CollapsibleContent>
    </Collapsible>
  );
};
