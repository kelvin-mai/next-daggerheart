type CardTierProps = {
  level?: number;
};

export const CardTier: React.FC<CardTierProps> = ({ level = 0 }) => {
  return (
    <>
      <div className='absolute left-6 top-6'>
        <div className='relative flex h-10 w-10 items-center justify-center'>
          <img
            className='absolute left-0 right-0 w-full'
            src='/assets/card/level-bg.webp'
          />
          <p className='text-eveleth-clean z-10 text-card-title-lg font-bold text-black'>
            {level}
          </p>
        </div>
      </div>
    </>
  );
};
