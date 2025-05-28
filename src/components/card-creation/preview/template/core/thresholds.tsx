'use client';
import * as React from 'react';

import { useCardStore } from '@/store';
import { cn } from '@/lib/utils';

export const Thresholds: React.FC = () => {
  const {
    card: { thresholds, thresholdsEnabled },
  } = useCardStore();
  const labels = ['minor', 'major', 'severe'];
  if (!thresholdsEnabled) {
    return null;
  }
  return (
    <div
      className='relative my-1 flex items-center justify-center rounded bg-black px-2'
      style={{ height: '15px' }}
    >
      {labels.map((label, i) => (
        <React.Fragment key={label}>
          <div
            className={cn(
              'relative flex items-center',
              thresholds && i < thresholds.length && 'pr-2',
            )}
          >
            <span
              className='font-eveleth-clean font-bold text-white'
              style={{ fontSize: '10px' }}
            >
              {label}
            </span>
            <span
              className='absolute text-nowrap text-black'
              style={{ fontSize: '8px', left: '4px', top: '24px' }}
            >
              Mark {i + 1} HP
            </span>
          </div>
          {thresholds && i < thresholds.length ? (
            <div
              className='relative flex items-center'
              style={{ left: '-4px' }}
            >
              <img
                className='absolute'
                src='/assets/card/damage-block.webp'
                style={{
                  left: '50%',
                  top: '50%',
                  height: '33px',
                  width: '33px',
                  transform: 'translate(-50%,-50%)',
                }}
              />
              <span
                className='text-eveleth-clean z-10 items-center justify-center text-center font-bold'
                style={{ width: '33px', fontSize: '16px' }}
              >
                {thresholds[i]}
              </span>
            </div>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};
