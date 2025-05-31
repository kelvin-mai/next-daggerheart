import {
  GameMasterBattle,
  GameMasterMisc,
  GameMasterRolls,
  GameMasterTables,
  GameMasterTraits,
} from '@/components/game-master';

export const metadata = {
  title: 'Game Master Screen',
  description: 'GM Screen with quick reference to common rules',
};

export default function Page() {
  return (
    <>
      <h1 className='font-eveleth-clean dark:text-primary-foreground text-2xl font-bold'>
        Game Master Screen
      </h1>
      <p className='text-muted-foreground'>
        GM Screen with quick reference to common rules
      </p>
      <div className='my-4 columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3'>
        <GameMasterTables />
        <GameMasterRolls />
        <GameMasterTraits />
        <GameMasterBattle />
        <GameMasterMisc />
      </div>
    </>
  );
}
