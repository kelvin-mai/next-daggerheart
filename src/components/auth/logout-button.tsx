'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { logout } from '@/lib/auth/client';
import { Loader2 } from 'lucide-react';

export const LogoutButton: React.FC<React.ComponentProps<typeof Button>> = ({
  ...props
}) => {
  const [pending, setPending] = React.useState(false);
  const router = useRouter();

  const handleClick = async () => {
    await logout({
      fetchOptions: {
        onRequest: () => setPending(true),
        onResponse: () => setPending(false),
        // onError: (ctx) => toast
        onSuccess: () => {
          // toast
          router.push('/auth/login');
        },
      },
    });
  };

  return (
    <Button onClick={handleClick} disabled={pending} {...props}>
      {pending && <Loader2 className='animate-spin' />}
      Logout
    </Button>
  );
};
