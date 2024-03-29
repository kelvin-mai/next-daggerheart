import Image from 'next/image';

export const SectionDivider = () => {
  return (
    <div className='relative -mt-[20px] flex rotate-180 items-start justify-start object-cover'>
      <Image
        src='/assets/layout/divider-endcap.svg'
        className='max-w-full'
        height={30}
        width={170}
        alt=''
      />
      <div className='h-[14px] flex-1 bg-dh-gold-light' />
    </div>
  );
};
