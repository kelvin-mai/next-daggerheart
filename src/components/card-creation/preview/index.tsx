'use client';

import * as React from 'react';

import {
  ImageCropper,
  ImageCropperArea,
  ImageCropperImage,
} from '@/components/common';
import { cn } from '@/lib/utils';
import { useCardStore } from '@/store/card';
import { Banner, Divider, Stress } from './template/core';

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
        <Banner />
        <Stress />
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
          <div className={cn('z-20 pt-4 text-2xl font-bold uppercase')}>
            {store.card.name}
          </div>
          <div
            className='z-20 w-full px-6 text-sm'
            dangerouslySetInnerHTML={{ __html: store.card.text }}
          />
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
