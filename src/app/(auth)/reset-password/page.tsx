import { redirect } from 'next/navigation';

import { AuthFormContainer, ResetPasswordForm } from '@/components/auth';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ token: string }>;
}) {
  const token = (await searchParams).token;
  if (!token) {
    redirect('/login');
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='container w-full'>
        <AuthFormContainer
          title='Reset Password'
          description='Please enter your new password.'
        >
          <ResetPasswordForm token={token} />
        </AuthFormContainer>
      </div>
    </div>
  );
}
