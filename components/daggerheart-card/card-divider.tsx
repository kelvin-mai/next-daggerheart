import { Fragment } from 'react';

import { domains } from '@/constants/rules-texts';
import { getDomainColor } from '@/constants/domain-colors';
import type { CardDomain, CardType } from '@/lib/types';
import { cn, getBrightness } from '@/lib/utils';

type DividerProps = {
  text?: string;
  domainPrimary?: CardDomain;
  domainSecondary?: CardDomain;
};

export const CommunityDivider: React.FC<DividerProps> = () => {
  return (
    <>
      <img
        className='absolute top-[-76px] h-[80px] w-full'
        src='/assets/card/card-divider-communities.webp'
      />
      <div className='absolute right-[36px] top-[-32px] z-10'>
        <p className='text-xs uppercase tracking-[1px]'>community</p>
      </div>
    </>
  );
};

export const EquipmentDivider: React.FC<DividerProps> = () => {
  return (
    <>
      <img
        className='absolute top-[-76px] h-[80px] w-full'
        src='/assets/card/card-divider-equipment.webp'
      />
      <div className='absolute left-[35px] top-[-32px] z-10'>
        <p className='text-xs uppercase tracking-[2px]'>equipment</p>
      </div>
    </>
  );
};

export const AncestryDivider: React.FC<DividerProps> = () => {
  return (
    <>
      <img
        className='absolute top-[-26px] z-10 h-[80px] w-[500px]'
        src='/assets/card/card-divider-ancestries.png'
      />
      <div className='absolute right-[16px] top-[-8px] z-10'>
        <p className='text-xs uppercase tracking-[2px]'>ancestry</p>
      </div>
    </>
  );
};

export const DomainDivider: React.FC<DividerProps> = ({
  domainPrimary,
  text,
}) => {
  const background =
    domainPrimary && domains.includes(domainPrimary.name)
      ? getDomainColor(domainPrimary.name)
      : domainPrimary?.color || '#ffffff';
  return (
    <>
      <div
        className={cn(
          'clip-card-domain-subtype absolute left-1/2 top-[-12px] z-10 h-[18px] w-[265px] -translate-x-1/2 transform',
        )}
        style={{
          background,
        }}
      />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/assets/card/domain-divider.webp'
      />
      <div className='absolute left-1/2 top-[-12px] z-10 -translate-x-1/2 transform'>
        <p
          className={cn(
            'font-barlow text-xs font-bold uppercase',
            getBrightness(background) < 128 ? 'text-white' : 'text-black',
          )}
        >
          {text}
        </p>
      </div>
    </>
  );
};

export const SubclassDivider: React.FC<DividerProps> = ({
  domainPrimary,
  domainSecondary,
  text,
}) => {
  const domainPrimaryColor =
    domainPrimary && domains.includes(domainPrimary.name)
      ? getDomainColor(domainPrimary.name)
      : domainPrimary?.color || '#ffffff';
  const domainSecondaryColor =
    domainSecondary && domains.includes(domainSecondary.name)
      ? getDomainColor(domainSecondary.name)
      : domainSecondary?.color || '#ffffff';
  const background = domainSecondary
    ? `linear-gradient(to right,${domainPrimaryColor},${domainSecondaryColor})`
    : domainPrimaryColor;
  return (
    <>
      <div
        className={cn(
          'clip-card-class-subtype absolute left-1/2 top-[-12px] z-10 h-[18px] w-[265px] -translate-x-1/2 transform',
        )}
        style={{ background }}
      />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/assets/card/subclass-divider.webp'
      />
      <div className='absolute left-1/2 top-[-12px] z-10 -translate-x-1/2 transform'>
        <p className='font-barlow text-xs font-bold uppercase text-dh-gold-light'>
          {text}
        </p>
      </div>
    </>
  );
};

export const getDivider = (type: CardType) => {
  switch (type) {
    case 'ancestry':
      return AncestryDivider;
    case 'community':
      return CommunityDivider;
    case 'equipment':
      return EquipmentDivider;
    case 'domain':
      return DomainDivider;
    case 'subclass':
      return SubclassDivider;
    case 'class':
      return SubclassDivider;
    default:
      return Fragment;
  }
};
