import { CommunityCards } from './client';

export const metadata = {
  title: 'Community Cards',
  description: 'Check out homebrew cards created by the community',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Community Cards
      </h1>
      <p className='text-muted-foreground mb-4'>
        Check out homebrew cards created by the community
      </p>
      <CommunityCards />
    </>
  );
}
