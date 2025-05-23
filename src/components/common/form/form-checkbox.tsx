import * as React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

type FormCheckbox = React.ComponentProps<typeof Checkbox> & {
  label: string;
};

export const FormCheckbox: React.FC<FormCheckbox> = ({
  id,
  label,
  ...props
}) => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id={id} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
};
