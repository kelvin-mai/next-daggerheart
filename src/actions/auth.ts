'use server';

import { auth } from '@/lib/auth';

export const login = async () => {
  await auth.api.signInEmail({
    body: {
      email: 'me@kelvinmai.io',
      password: 'Password123',
    },
  });
};

export const register = async () => {
  await auth.api.signUpEmail({
    body: {
      email: 'me@kelvinmai.io',
      name: 'Kelvin Mai',
      password: 'Password123',
    },
  });
};
