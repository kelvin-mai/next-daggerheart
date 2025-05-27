import * as React from 'react';

type AuthFormContainerProps = React.PropsWithChildren & {
  title: string;
  description: string;
};

export const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className='space-y-4'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-muted-foreground text-sm text-balance'>
          {description}
        </p>
      </div>
      {children}
      <div className='after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t'>
        <span className='bg-background text-muted-foreground relative z-10 px-2'>
          Or continue with
        </span>
      </div>
    </div>
  );
};
