import * as React from 'react';
import { ChevronDown } from 'lucide-react';

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
        'bg-card rounded-sm border px-4 py-2',
        collapsible && 'group/collapsible',
        className,
      )}
      {...props}
    >
      {collapsible ? (
        <CollapsibleTrigger className='flex h-8 w-full items-center justify-between'>
          <Label>{title}</Label>
          <div>
            <ChevronDown className='size-4 group-data-[state=open]/collapsible:rotate-180' />
            <span className='sr-only'>Toggle</span>
          </div>
        </CollapsibleTrigger>
      ) : (
        <Label className='h-8'>{title}</Label>
      )}
      {children}
    </Component>
  );
};
