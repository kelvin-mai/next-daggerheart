import { Fragment } from 'react';

import type { CardType } from '@/lib/types';
import { cn } from '@/lib/utils';

type DividerProps = {
  domainPrimary?: string;
  domainSecondary?: string;
  text?: string;
};

export const CommunityDivider: React.FC<DividerProps> = () => {
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

export const AncestryDivider: React.FC<DividerProps> = () => {
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

export const DomainDivider: React.FC<DividerProps> = ({
  domainPrimary,
  text,
}) => {
  // bg-domain-arcana bg-domain-blade bg-domain-bone bg-domain-codex bg-domain-grace bg-domain-midnight bg-domain-sage bg-domain-splendor bg-domain-valor
  return (
    <>
      <div
        className={cn(
          'clip-card-type absolute left-1/2 top-[-12px] z-10 h-[18px] w-[120px] -translate-x-1/2 transform',
          domainPrimary ? `bg-domain-${domainPrimary}` : 'bg-black',
        )}
      />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/domain-divider.webp'
      />
      <div className='absolute left-1/2 top-[-12px] z-10 -translate-x-1/2 transform'>
        <p className='font-barlow text-xs font-bold uppercase text-white'>
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
  // from-domain-arcana from-domain-blade from-domain-bone from-domain-codex from-domain-grace from-domain-midnigt from-domain-sage from-domain-splendor from-domain-valor
  // to-domain-arcana to-domain-blade to-domain-bone to-domain-codex to-domain grace to-domain-midnight to-domain-sage to-domain-splendor to-domain-valor
  return (
    <>
      <div
        className={cn(
          'clip-card-type absolute left-1/2 top-[-12px] z-10 h-[18px] w-[120px] -translate-x-1/2 transform',
          `bg-domain-${domainPrimary}`,
          domainSecondary
            ? `bg-gradient-to-r from-domain-${domainPrimary} to-domain-${domainSecondary}`
            : `bg-domain-${domainPrimary}`,
        )}
      />
      <img
        className='absolute top-[-14px] z-10 h-[20px] w-full'
        src='/subclass-divider.webp'
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
    case 'domain':
      return DomainDivider;
    case 'subclass':
      return SubclassDivider;
    default:
      return Fragment;
  }
};
