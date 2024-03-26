type CardStress = {
  cost?: number;
};

export const CardStress = ({ cost = 0 }) => {
  return (
    <>
      <div className='absolute right-6 top-6'>
        <img className='h-9 w-9' src='/assets/card/stress-cost-bg.webp' />
      </div>
      <div className='absolute right-[42px] top-[33px]'>
        <p className='text-sm font-bold text-white'>{cost}</p>
      </div>
    </>
  );
};
