import * as React from 'react';

import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

type FormFieldProps = React.ComponentProps<'div'> & {
  id: string;
  label?: string;
  errors?: string | string[];
};

export const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  className,
  children,
  errors,
  ...props
}) => {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      <Label htmlFor={id} className={cn(errors && 'text-destructive')}>
        {label || <span className='capitalize'>{id}</span>}
      </Label>
      {children}
      {errors ? (
        <div className='text-destructive text-sm'>
          {Array.isArray(errors) ? errors[0] : errors}
        </div>
      ) : null}
    </div>
  );
};
