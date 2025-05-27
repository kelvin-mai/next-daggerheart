import { createAuthClient } from 'better-auth/react';
import { inferAdditionalFields } from 'better-auth/client/plugins';

import type { auth } from '@/lib/auth';

const { signOut, useSession } = createAuthClient({
  baseURL: 'http://localhost:3000',
  plugins: [inferAdditionalFields<typeof auth>()],
});

export const logout = signOut;

export { useSession };
