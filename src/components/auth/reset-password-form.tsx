'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { FormField, PasswordInput, PasswordStrengthMeter } from '../common';
import { cn } from '@/lib/utils';
import { resetPassword } from '@/lib/auth/client';
import { passwordRequirements } from '@/lib/constants';

type ResetPasswordFormProps = {
  token: string;
};

const passwordSchemea = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(128, 'Password must be less than 128 characters'),
    confirmPassword: z.string(),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
  });

export const ResetPasswordForm: React.FC<ResetPasswordFormProps> = ({
  token,
}) => {
  const router = useRouter();
  const [password, setPassword] = React.useState('');
  const [pending, setPending] = React.useState(false);
  const [validation, setValidation] = React.useState<Partial<
    Record<keyof z.infer<typeof passwordSchemea>, string[]>
  > | null>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validation = passwordSchemea.safeParse({
      password: formData.get('password'),
      confirmPassword: formData.get('confirm-password'),
    });
    if (!validation.success) {
      setValidation(validation.error.flatten().fieldErrors);
    } else {
      await resetPassword({
        newPassword: validation.data.password,
        token,
        fetchOptions: {
          onRequest: () => setPending(true),
          onResponse: () => setPending(false),
          onError: (ctx) => {
            toast.error(ctx.error.message || 'Internal server error.');
          },
          onSuccess: () => {
            toast.success('A reset link has been sent to your email.');
            router.push('/profile');
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
      <FormField id='password' errors={validation?.password}>
        <PasswordInput
          id='password'
          name='password'
          value={password}
          className={cn(validation?.password && 'border-destructive')}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField
        id='confirm-password'
        label='Confirm Password'
        errors={validation?.confirmPassword}
      >
        <PasswordInput
          id='confirm-password'
          name='confirm-password'
          className={cn(validation?.confirmPassword && 'border-destructive')}
        />
      </FormField>
      <PasswordStrengthMeter
        password={password}
        requirements={passwordRequirements}
      />
      <Button type='submit' disabled={pending}>
        {pending ? <Loader2 className='animate-spin' /> : null}
        Reset Password
      </Button>
    </form>
  );
};
