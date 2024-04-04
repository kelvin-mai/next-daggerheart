type CardArmorProps = {
  score?: number;
};

export const CardArmor: React.FC<CardArmorProps> = ({ score = 0 }) => {
  return (
    <>
      <div className='absolute right-6 top-6'>
        <div className='relative flex h-9 w-9 items-center justify-center'>
          <img
            className='absolute right-0 top-0 w-full'
            src='/assets/card/dh-armor-bg.webp'
          />
          <p className='z-10 text-xl font-bold text-black'>{score}</p>
        </div>
      </div>
    </>
  );
};
