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
        className='absolute top-[-4.75rem] h-20 w-full'
        src='/assets/card/card-divider-communities.webp'
      />
      <div className='absolute -top-8 right-8 z-10'>
        <p className='text-xs uppercase tracking-[1px]'>community</p>
      </div>
    </>
  );
};

export const EquipmentDivider: React.FC<DividerProps> = () => {
  return (
    <>
      <img
        className='absolute top-[-5.5rem] h-20 w-full'
        src='/assets/card/card-divider-equipment.webp'
      />
      <div className='absolute -top-11 left-9 z-10'>
        <p className='text-xs uppercase tracking-[1px]'>equipment</p>
      </div>
    </>
  );
};

export const AncestryDivider: React.FC<DividerProps> = () => {
  return (
    <>
      <img
        className='absolute top-[-1.625rem] z-10 h-20 w-full'
        src='/assets/card/card-divider-ancestries.png'
      />
      <div className='absolute -top-2 right-4 z-10'>
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
          'clip-card-domain-subtype absolute -top-3 left-1/2 z-10 h-[1.125rem] w-64 -translate-x-1/2 transform',
        )}
        style={{
          background,
        }}
      />
      <img
        className='absolute -top-3.5 z-10 h-5 w-full'
        src='/assets/card/domain-divider.webp'
      />
      <div className='absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform'>
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
          'clip-card-class-subtype absolute -top-3 left-1/2 z-10 h-[1.125rem] w-64 -translate-x-1/2 transform',
        )}
        style={{ background }}
      />
      <img
        className='absolute -top-3.5 z-10 h-5 w-full'
        src='/assets/card/subclass-divider.webp'
      />
      <div className='absolute -top-3 left-1/2 z-10 -translate-x-1/2 transform'>
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
