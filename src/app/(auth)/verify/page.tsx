import { redirect } from 'next/navigation';

import { AuthFormContainer, ResendVerificationForm } from '@/components/auth';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>;
}) {
  const error = (await searchParams).error;
  if (!error) {
    redirect('/profile');
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='container w-full'>
        <AuthFormContainer
          title='Verify Email Error'
          description='Your token is invalid or expired please enter your email to request a new one.'
        >
          <ResendVerificationForm />
        </AuthFormContainer>
      </div>
    </div>
  );
}
