'use client';

import * as React from 'react';

import { useCardStore } from '@/store';
import type { CardType } from '@/lib/types';
import { cn, getBrightness } from '@/lib/utils';

export const domains = [
  'arcana',
  'blade',
  'bone',
  'codex',
  'grace',
  'midnight',
  'sage',
  'splendor',
  'valor',
] as const;

export const domainColors: { [key: string]: string } = {
  arcana: '#664295',
  blade: '#b93035',
  bone: '#c1c7cc',
  codex: '#3370ab',
  grace: '#cb3b90',
  midnight: '#2c2c2c',
  sage: '#0e854d',
  splendor: '#d1b447',
  valor: '#dc7a27',
  dread: '#654294',
};

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

export const Divider = () => {
  const { card } = useCardStore();
  const { type, domainPrimary, domainSecondary } = card;
  const text = ['ancestry', 'community', 'equipment'].includes(type)
    ? type
    : card.subtype;
  const dividerBadge = ['class', 'subclass', 'domain'].includes(type);
  const background =
    domainPrimary === 'custom' ? '#000000' : domainColors[domainPrimary];
  // const backgroundV2 = `linear-gradient(to right, ${domainPrimary}, ${domainSecondary})`
  console.log({
    dividerBadge,
    text,
  });
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
          dividerBadge && getBrightness(background) < 128
            ? 'text-white'
            : 'text-black',
        )}
        style={titleStyle(type)}
      >
        {text}
      </div>
    </>
  );
};
