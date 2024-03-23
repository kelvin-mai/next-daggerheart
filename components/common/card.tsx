import type { Feature } from '@/constants/features';
import { Fragment } from 'react';

type CardType = 'ancestry' | 'community' | 'domain' | 'subclass';

type DaggerHeartCardProps = {
  name: string;
  flavor: string;
  features: Feature[];
  type: CardType;
};

export const DaggerHeartCard: React.FC<DaggerHeartCardProps> = ({
  name,
  flavor,
  features,
  type,
}) => {
  const getDivider = (type: CardType) => {
    switch (type) {
      case 'ancestry':
        return AncestryDivider;
      case 'community':
        return CommunityDivider;
      case 'domain':
        return DomainDivider;
      case 'subclass':
        return SubclassDivider;
      default:
        return Fragment;
    }
  };
  const Divider = getDivider(type);
  return (
    <div className='h-[476px] w-[340px] overflow-hidden rounded-xl border-2 border-slate-300 shadow-lg'>
      <div className='relative flex h-full flex-col bg-white'>
        <div className='min-h-[240px]'>
          <img
            className='object-center-top -z-10 w-[336px] object-cover'
            src='/highborne-playtest.webp'
          />
        </div>
        <div className='flex-start absolute bottom-[36px] flex min-h-[200px] flex-col items-center gap-1.5 bg-white px-6'>
          <Divider />
          <p className='text-card-title z-20 w-full pt-4 font-eveleth-clean text-2xl'>
            {name}
          </p>
          <div className='my-2 space-y-2'>
            <p className='text-card-content text-pretty'>
              <em>{flavor}</em>
            </p>
            {features.map((f) => (
              <p key={f.name} className='text-card-content text-pretty'>
                <strong>
                  <em>{f.name}: </em>
                </strong>
                {f.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const CommunityDivider = () => {
  return (
    <>
      <img
        className='absolute top-[-76px] h-[80px] w-full'
        src='/card-divider-communities.webp'
      />
      <div className='absolute right-[36px] top-[-32px] z-10'>
        <p className='text-xs uppercase tracking-[1px]'>community</p>
      </div>
    </>
  );
};

export const AncestryDivider = () => {
  return (
    <>
      <img
        className='absolute top-[-26px] z-10 h-[80px] w-[500px]'
        src='/card-divider-ancestries.png'
      />
      <div className='absolute right-[16px] top-[-8px] z-10'>
        <p className='text-xs uppercase tracking-[2px]'>ancestry</p>
      </div>
    </>
  );
};

export const DomainDivider = () => {
  return (
    <>
      <div className='clip-domain-ability absolute left-1/2 top-[-12px] z-10 h-[18px] w-[120px] -translate-x-1/2 transform bg-slate-500' />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/domain-divider.webp'
      />
      <div className='absolute left-1/2 top-[-12px] z-10 -translate-x-1/2 transform'>
        <p className='font-barlow text-xs font-bold uppercase text-white'>
          ability
        </p>
      </div>
    </>
  );
};

export const SubclassDivider = () => {
  return (
    <>
      <div className='clip-domain-ability absolute left-1/2 top-[-12px] z-10 h-[18px] w-[120px] -translate-x-1/2 transform bg-slate-500' />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/subclass-divider.webp'
      />
      <div className='absolute left-1/2 top-[-12px] z-10 -translate-x-1/2 transform'>
        <p className='text-dh-gold-light font-barlow text-xs font-bold uppercase'>
          Ranger
        </p>
      </div>
    </>
  );
};
