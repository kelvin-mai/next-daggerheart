import type { CardType } from '@/lib/types';
import { cn } from '@/lib/utils';
import { FormField } from '@/components/common';
import { type DaggerHeartCardProps } from '@/components/daggerheart-card';
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
} from '@/components/ui';

export const CardCreationRulesForm = () => {
  return (
    <>
      <div>
        <Button>Remove Section</Button>
      </div>
      <FormField label='' htmlFor=''>
        <Textarea id='' />
      </FormField>
    </>
  );
};
