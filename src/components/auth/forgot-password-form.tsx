'use client';

import * as React from 'react';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormField } from '../common';
import { cn } from '@/lib/utils';
import { forgetPassword } from '@/lib/auth/client';

const emailSchema = z.object({
  email: z.string().email(),
});

export const ForgotPasswordForm = () => {
  const [pending, setPending] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [validation, setValidation] = React.useState<Partial<
    Record<keyof z.infer<typeof emailSchema>, string[]>
  > | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitted) {
      return;
    }
    const formData = new FormData(e.currentTarget);
    const validation = emailSchema.safeParse({
      email: formData.get('email'),
    });
    if (!validation.success) {
      setValidation(validation.error.flatten().fieldErrors);
    } else {
      await forgetPassword({
        email: validation.data.email,
        redirectTo: '/reset-password',
        fetchOptions: {
          onRequest: () => setPending(true),
          onResponse: () => setPending(false),
          onError: (ctx) => {
            toast.error(ctx.error.message || 'Internal server error');
          },
          onSuccess: () => {
            toast.success('A reset link has been sent to your email.');
            setSubmitted(true);
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <FormField id='email' errors={validation?.email}>
        <Input
          id='email'
          type='email'
          name='email'
          className={cn(validation?.email && 'border-destructive')}
        />
      </FormField>
      {submitted ? (
        <p className='text-muted-foreground'>
          A reset password link has been requested, please check your inbox.
        </p>
      ) : (
        <Button type='submit' disabled={pending}>
          {pending ? <Loader2 className='animate-spin' /> : null}
          Request reset password link
        </Button>
      )}
    </form>
  );
};
