'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { useCardStore } from '@/store/card';
import {
  Banner,
  Divider,
  Equipment,
  Evasion,
  Stress,
  Thresholds,
} from './template/core';

type CardPreviewProps = React.ComponentProps<'div'>;

export const CardPreview: React.FC<CardPreviewProps> = ({
  className,
  ...props
}) => {
  const store = useCardStore();

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    store.actions.setPreviewRef(ref);
  }, [ref]);

  return (
    <div
      className={cn(
        'aspect-card w-[340px] overflow-hidden',
        store.settings.border && 'rounded-lg border-2 border-amber-300 shadow',
        className,
      )}
      ref={ref}
      {...props}
    >
      <div className='relative flex h-full flex-col bg-white'>
        {['domain', 'class', 'subclass'].includes(store.card.type) && (
          <Banner />
        )}
        {store.card.type === 'domain' && <Stress />}
        {store.card.type === 'class' && <Evasion />}
        {store.card.type === 'equipment' && <Equipment />}
        <div className='overflow-hidden'>
          {store.card.image && (
            <img
              className='object-center-top -z-10 w-full object-cover'
              src={store.card.image}
            />
          )}
        </div>
        <div className='flex-start absolute bottom-9 flex min-h-[200px] w-full flex-col items-center gap-1.5 bg-white'>
          <Divider />
          <p
            className={cn(
              'font-eveleth-clean z-20 w-full px-6 pt-4',
              ['ancestry', 'community'].includes(store.card.type)
                ? 'text-2xl'
                : 'text-center text-base',
            )}
          >
            {store.card.name}
          </p>
          {['class', 'subclass', 'equipment'].includes(store.card.type) ? (
            <p
              className='font-semibold capitalize italic'
              style={{ fontSize: '12px' }}
            >
              {store.card.type === 'class'
                ? 'Class Features'
                : store.card.subtitle}
            </p>
          ) : null}
          <div
            className='z-20 w-full space-y-2 px-6 text-sm leading-none text-pretty'
            dangerouslySetInnerHTML={{ __html: store.card.text }}
          />
          <Thresholds />
        </div>
        <div
          className='absolute italic'
          style={{
            bottom: '8px',
            left: '10px',
            fontSize: '10px',
          }}
        >
          {store.settings.artist && store.card.artist}
        </div>
        <div
          className='absolute italic'
          style={{
            bottom: '8px',
            right: '10px',
            fontSize: '10px',
          }}
        >
          {store.settings.credits && store.card.credits}
        </div>
      </div>
    </div>
  );
};
