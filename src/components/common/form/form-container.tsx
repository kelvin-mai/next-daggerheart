import * as React from 'react';
import { ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormContainerProps = React.ComponentProps<typeof Collapsible> & {
  className?: string;
  title: string;
  children: React.ReactNode;
  collapsible?: boolean;
};

export const FormContainer: React.FC<FormContainerProps> = ({
  className,
  title,
  collapsible,
  children,
  ...props
}) => {
  const Component = collapsible ? Collapsible : 'div';
  return (
    <Component
      className={cn(
        'bg-card rounded-sm border px-4 pt-2 pb-4',
        collapsible && 'group/collapsible',
        className,
      )}
      {...props}
    >
      <div className='flex h-8 items-center justify-between'>
        <Label>{title}</Label>
        {collapsible ? (
          <CollapsibleTrigger asChild>
            <Button variant='ghost' size='sm'>
              <ChevronDown className='size-4 group-data-[state=open]/collapsible:rotate-180' />
              <span className='sr-only'>Toggle</span>
            </Button>
          </CollapsibleTrigger>
        ) : null}
      </div>
      <div className='space-y-2'>{children}</div>
    </Component>
  );
};
