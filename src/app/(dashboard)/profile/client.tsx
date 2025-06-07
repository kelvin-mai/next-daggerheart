'use client';

import * as React from 'react';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

import { sendVerificationEmail } from '@/lib/auth/client';
import { Button } from '@/components/ui/button';

export const ResendVerificationForm = ({ email }: { email: string }) => {
  const [pending, setPending] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = async () => {
    await sendVerificationEmail({
      email,
      fetchOptions: {
        onRequest: () => setPending(true),
        onResponse: () => setPending(false),
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success('Verification email sent successfully');
          setSubmitted(true);
        },
      },
    });
  };
  return (
    <div className='bg-card rounded-lg border p-4'>
      <h2 className='font-bold'>Verify Your Email Address</h2>
      <p className='text-muted-foreground mb-2'>
        {submitted
          ? 'Verification email has been requested, please check your inbox.'
          : 'Please verify your email address. Check your inbox for the verification email. If you haven&apos;t received the email, click the button below to resend.'}
      </p>
      {!submitted && (
        <Button onClick={handleSubmit} disabled={pending}>
          {pending ? <Loader2 className='animate-spin' /> : null}
          Resend Verification Email
        </Button>
      )}
    </div>
  );
};
