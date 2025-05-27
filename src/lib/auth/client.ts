import { createAuthClient } from 'better-auth/client';
import { inferAdditionalFields } from 'better-auth/client/plugins';

import type { auth } from '@/lib/auth';

const { signOut } = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const logout = signOut;
