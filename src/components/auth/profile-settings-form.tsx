'use client';

import * as React from 'react';
import { CheckCircle, Loader2 } from 'lucide-react';

import type { User } from '@/lib/types';
import { useSession } from '@/lib/auth/client';
import { updateProfile } from '@/actions/profile';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '../common';

type ProfileSettingsFormProps = {
  user: User;
};

export const ProfileSettingsForm: React.FC<ProfileSettingsFormProps> = ({
  user,
}) => {
  const { refetch } = useSession();
  const [state, action, pending] = React.useActionState(updateProfile, {
    success: false,
  });

  React.useEffect(() => {
    if (state.success) {
      refetch();
    }
  }, [state.success]);

  return (
    <form action={action} className='flex flex-col space-y-4'>
      {state.errors?.action ? (
        <div className='border-destructive text-destructive bg-destructive/10 rounded-lg border px-4 py-2'>
          <p>{state.errors.action}</p>
        </div>
      ) : null}
      <FormField id='email'>
        <Input
          id='email'
          type='email'
          defaultValue={user.email}
          name='email'
          disabled
        />
        <input className='hidden' defaultValue={user.email} name='email' />
      </FormField>
      <FormField
        id='name'
        label='Username'
        errors={state.errors?.validation?.name}
      >
        <Input
          id='name'
          name='name'
          defaultValue={user.name}
          disabled={state.success}
        />
      </FormField>
      {state.success ? (
        <div className='flex items-center justify-center gap-2'>
          <CheckCircle className='size-4 text-emerald-500' />
          <p className='text-muted-foreground text-sm'>
            Your profile settings have been updated
          </p>
        </div>
      ) : (
        <Button type='submit' disabled={pending}>
          {pending ? <Loader2 className='animate-spin' /> : null}
          Edit Settings
        </Button>
      )}
    </form>
  );
};
