import { CommunityAdversaries } from './client';

export const metadata = {
  title: 'Community Adversaries',
  description: 'Check out homebrew adversaries created by the community',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Community Adversaries
      </h1>
      <p className='text-muted-foreground mb-4'>
        Check out homebrew adversaries created by the community
      </p>
      <CommunityAdversaries />
    </>
  );
}
