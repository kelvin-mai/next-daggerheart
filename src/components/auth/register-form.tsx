'use client';

import * as React from 'react';
import { Loader2 } from 'lucide-react';
import { redirect } from 'next/navigation';

import { register } from '@/actions/auth';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

export const RegisterForm = () => {
  const [state, action, pending] = React.useActionState(register, {
    success: false,
  });
  if (state.success) {
    redirect('/');
  }

  return (
    <form action={action} className='flex flex-col space-y-4'>
      {state.errors?.action ? (
        <div className='border-destructive text-destructive bg-destructive/10 rounded-lg border p-4'>
          <p>{state.errors.action}</p>
        </div>
      ) : null}
      <div className='space-y-2'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' name='name' />
        {state.errors?.validation?.name ? (
          <div className='text-destructive text-sm'>
            {state.errors.validation.name[0]}
          </div>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='email'>Email</Label>
        <Input id='email' type='email' name='email' />
        {state.errors?.validation?.email ? (
          <div className='text-destructive text-sm'>
            {state.errors.validation.email[0]}
          </div>
        ) : null}
      </div>
      <div className='space-y-2'>
        <Label htmlFor='password'>Password</Label>
        <Input id='password' type='password' name='password' />
        {state.errors?.validation?.password ? (
          <div className='text-destructive text-sm'>
            {state.errors.validation.password[0]}
          </div>
        ) : null}
      </div>
      <Button type='submit' disabled={pending}>
        {pending ? <Loader2 className='animate-spin' /> : null}
        Register
      </Button>
    </form>
  );
};
