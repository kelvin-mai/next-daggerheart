'use client';

import * as React from 'react';

import { Button } from '../ui/button';
import { signIn } from '@/lib/auth/client';

type OauthButtonProps = React.ComponentProps<typeof Button> & {
  provider: 'discord' | 'google';
};

export const OauthButton: React.FC<OauthButtonProps> = ({
  provider,
  ...props
}) => {
  const [pending, setPending] = React.useState(false);

  const handleClick = async () => {
    setPending(true);
    await signIn.social({
      provider,
      callbackURL: '/',
      errorCallbackURL: '/error',
    });
    setPending(false);
  };

  return <Button onClick={handleClick} disabled={pending} {...props} />;
};
