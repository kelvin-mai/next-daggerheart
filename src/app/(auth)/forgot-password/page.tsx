import { AuthFormContainer, ForgotPasswordForm } from '@/components/auth';

export default async function Page() {
  return (
    <div className='flex items-center justify-center'>
      <div className='container w-full'>
        <AuthFormContainer
          title='Forgot password'
          description='Please enter your email address to receive a password reset link.'
        >
          <ForgotPasswordForm />
        </AuthFormContainer>
      </div>
    </div>
  );
}
