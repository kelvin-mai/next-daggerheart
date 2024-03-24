'use client';

import { useState } from 'react';
import { useToPng } from '@hugocxl/react-to-image';

import { CardType } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  ancestry,
  community,
  domain,
  subclass,
} from '@/constants/initial-cards';
import {
  DaggerHeartCard,
  DaggerHeartCardProps,
} from '@/components/daggerheart-card';
import { Button } from '@/components/ui';
import { CardCreationForm } from './form';

export const CardCreationContainer = () => {
  const [card, setCard] = useState<DaggerHeartCardProps>(ancestry);
  const [cardBorder, setCardBorder] = useState(true);

  const [_, convert, ref] = useToPng({
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = 'daggerheart-card.png';
      link.href = data;
      link.click();
    },
  });

  const getInitialState = (t: CardType) => {
    switch (t) {
      case 'ancestry':
        return ancestry;
      case 'community':
        return community;
      case 'domain':
        return domain;
      case 'subclass':
        return subclass;
      default:
        return ancestry;
    }
  };

  const handleChangeType = (t: CardType) => {
    const initialState = getInitialState(t);
    setCard(initialState);
  };

  return (
    <div className='flex gap-4'>
      <CardCreationForm
        className='flex-grow'
        card={card}
        onChange={setCard}
        onChangeType={handleChangeType}
      />
      <div>
        <div
          className={cn(
            cardBorder &&
              'overflow-hidden rounded-xl border-2 border-dh-gold-light shadow-lg',
          )}
        >
          <div ref={ref}>
            <DaggerHeartCard {...card} />
          </div>
        </div>
        <div className='mt-4 flex gap-2'>
          <Button className='w-full' onClick={convert}>
            Export
          </Button>
          <Button className='w-full' onClick={() => setCardBorder(!cardBorder)}>
            Toggle Card Border
          </Button>
        </div>
      </div>
    </div>
  );
};
