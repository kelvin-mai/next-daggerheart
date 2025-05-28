import { headers } from 'next/headers';

import { LogoutButton } from '@/components/auth';
import { auth } from '@/lib/auth';

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log({ session });
  return (
    <div>
      Hello world
      <LogoutButton />
    </div>
  );
}
