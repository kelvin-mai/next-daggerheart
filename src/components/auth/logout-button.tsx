'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { logout } from '@/lib/auth/client';

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
        onError: (ctx) => {
          toast(ctx.error.message);
        },
        onSuccess: () => {
          toast('You have been logged out. See you soon!');
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
