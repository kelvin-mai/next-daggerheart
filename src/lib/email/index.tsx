import { Resend } from 'resend';

import { env } from '@/lib/env';
import { ResetPasswordEmail, VerificationEmail } from '@/components/email';

export const resend = new Resend(env.RESEND_API_KEY);

type AuthEmailParams = {
  user: { name: string; email: string };
  url: string;
};

export const sendVerificationEmail = async ({ user, url }: AuthEmailParams) => {
  return await resend.emails.send({
    from: 'no-reply@daggerheartbrews.com',
    to: [user.email],
    subject: '[Action Required] Verify your email',
    react: <VerificationEmail user={user} url={url} />,
  });
};

export const sendResetPasswordEmail = async ({
  user,
  url,
}: AuthEmailParams) => {
  return await resend.emails.send({
    from: 'no-reply@daggerheartbrews.com',
    to: [user.email],
    subject: '[Action Required] Reset your password',
    react: <ResetPasswordEmail user={user} url={url} />,
  });
};
