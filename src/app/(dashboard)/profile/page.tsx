import { headers } from 'next/headers';

import { auth } from '@/lib/auth';
import { LogoutButton } from '@/components/auth';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div>
      <h1 className='font-eveleth-clean text-2xl font-bold'>Profile</h1>
      <p className='text-muted-foreground'>These are your profile settings</p>
      <LogoutButton />

      <pre className='text-wrap'>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
}
