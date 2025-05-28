'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';

import { register } from '@/actions/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField, PasswordInput } from '../common';
import { cn } from '@/lib/utils';
import { REDIRECT_LINK } from '@/lib/constants';

export const RegisterForm = () => {
  const [state, action, pending] = React.useActionState(register, {
    success: false,
  });
  if (state.success) {
    redirect(REDIRECT_LINK);
  }
  return (
    <form action={action} className='flex flex-col space-y-4'>
      {state.errors?.action ? (
        <div className='border-destructive text-destructive bg-destructive/10 rounded-lg border p-4'>
          <p>{state.errors.action}</p>
        </div>
      ) : null}
      <FormField
        id='name'
        label='Username'
        errors={state.errors?.validation?.name}
      >
        <Input
          id='name'
          name='name'
          className={cn(state.errors?.validation?.name && 'border-destructive')}
        />
      </FormField>
      <FormField id='email' errors={state.errors?.validation?.email}>
        <Input
          id='email'
          type='email'
          name='email'
          className={cn(
            state.errors?.validation?.email && 'border-destructive',
          )}
        />
      </FormField>
      <FormField id='password' errors={state.errors?.validation?.password}>
        <PasswordInput
          id='password'
          name='password'
          className={cn(
            state.errors?.validation?.password && 'border-destructive',
          )}
        />
      </FormField>
      <FormField
        id='confirm-password'
        errors={state.errors?.validation?.confirmPassword}
      >
        <PasswordInput
          id='confirm-password'
          name='confirm-password'
          className={cn(
            state.errors?.validation?.confirmPassword && 'border-destructive',
          )}
        />
      </FormField>
      <Button type='submit' disabled={pending}>
        {pending ? <Loader2 className='animate-spin' /> : null}
        Register
      </Button>
    </form>
  );
};
