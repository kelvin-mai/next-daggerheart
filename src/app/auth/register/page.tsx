import * as React from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { AuthFormContainer, RegisterForm } from '@/components/auth';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export default async function Page() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (session?.session) {
    redirect('/');
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='container w-full'>
        <AuthFormContainer
          title='Register a new account'
          description='Enter your name and email below to register your account'
        >
          <RegisterForm />
        </AuthFormContainer>
        <div className='my-2 text-center text-sm'>
          Already have an account?{' '}
          <Link href='/auth/login' className='underline underline-offset-4'>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
