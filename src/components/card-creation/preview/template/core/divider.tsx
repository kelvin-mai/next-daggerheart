'use client';

import * as React from 'react';

import type { CardDetails, CardType } from '@/lib/types';
import { cn, getBrightness } from '@/lib/utils';

const imgStyle = (type: CardType): React.CSSProperties => {
  switch (type) {
    case 'ancestry':
      return { top: '-24px', height: '80px' };
    case 'community':
      return { top: '-76px' };
    case 'equipment':
      return { top: '-76px' };
    case 'domain':
      return { top: '-14px', height: '20px' };
    case 'class':
    case 'subclass':
    default:
      return { top: '-14px', height: '20px' };
  }
};

const titleStyle = (type: CardType): React.CSSProperties => {
  switch (type) {
    case 'ancestry':
      return {
        top: '-6px',
        right: '14px',
        letterSpacing: '2px',
        fontSize: '12px',
      };
    case 'community':
      return {
        right: '32px',
        top: '-36px',
        letterSpacing: '1px',
        fontSize: '12px',
      };
    case 'equipment':
      return {
        left: '35px',
        top: '-36px',
        letterSpacing: '1px',
        fontSize: '12px',
      };
    case 'domain':
    case 'class':
    case 'subclass':
      return {
        left: '50%',
        top: '-11px',
        transform: 'translateX(-50%)',
        fontWeight: 700,
      };
  }
};

type DivederProps = {
  card: CardDetails;
};

export const Divider: React.FC<DivederProps> = ({ card }) => {
  const { type, subtype, domainPrimaryColor, domainSecondaryColor } = card;
  const subtypeText = ['ancestry', 'community', 'equipment', 'class'].includes(
    type,
  )
    ? type
    : subtype;
  const dividerBadge = ['class', 'subclass', 'domain'].includes(type);
  const background = `linear-gradient(to right, ${domainPrimaryColor}, ${domainSecondaryColor})`;
  return (
    <>
      {dividerBadge ? (
        <div
          className={cn('clip-card-divider absolute')}
          style={{
            background,
            left: '50%',
            top: '-12px',
            height: '18px',
            width: '300px',
            transform: 'translateX(-50%)',
          }}
        />
      ) : null}
      <img
        src={`/assets/card/divider-${type === 'subclass' ? 'class' : type}.webp`}
        className='absolute w-full'
        style={imgStyle(type)}
      />
      <div
        className={cn(
          'absolute z-10 text-xs tracking-[1px] uppercase',
          type === 'domain' &&
            dividerBadge &&
            getBrightness(domainPrimaryColor) < 128
            ? 'text-white'
            : 'text-black',
          ['class', 'subclass'].includes(type) && 'text-[#fef790]',
        )}
        style={titleStyle(type)}
      >
        {subtypeText}
      </div>
    </>
  );
};
