'use client';

import { useState } from 'react';
import { useToPng } from '@hugocxl/react-to-image';

import type { CardType, CardProperties } from '@/lib/types';
import { cn } from '@/lib/utils';
import {
  ancestry,
  community,
  domain,
  subclass,
} from '@/constants/initial-cards';
import { DaggerHeartCard } from '@/components/daggerheart-card';
import { Button, Checkbox, Label } from '@/components/ui';
import { CardCreationForm } from './form';

export const CardCreationContainer = () => {
  const [card, setCard] = useState<CardProperties>(ancestry);
  const [cardBorder, setCardBorder] = useState(true);
  const [boldRulesText, setBoldRulesText] = useState(true);

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
    <div className='flex flex-col-reverse gap-4 md:flex-row'>
      <CardCreationForm
        className='flex-grow'
        card={card}
        onChange={setCard}
        onChangeType={handleChangeType}
      />
      <div>
        <div className='flex justify-center'>
          <div
            className={cn(
              'w-[340px]',
              cardBorder &&
                'overflow-hidden rounded-xl border-2 border-dh-gold-light shadow-lg',
            )}
          >
            <div ref={ref}>
              <DaggerHeartCard {...card} boldRulesText={boldRulesText} />
            </div>
          </div>
        </div>
        <div className='mt-2 flex items-center justify-end space-x-2'>
          <Checkbox
            id='bold-rules-text'
            checked={boldRulesText}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                setBoldRulesText(e);
              }
            }}
          />
          <Label htmlFor='spellcast'>Bold rules text?</Label>
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
