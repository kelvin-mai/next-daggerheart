'use client';

import { useToPng } from '@hugocxl/react-to-image';

import { useCard, useCardActions, useCardOptions } from '@/store';
import { DaggerHeartCard } from '@/components/daggerheart-card';
import { Button, Checkbox, Label } from '@/components/ui';
import { CardCreationForm } from './form';

export const CardCreationContainer = () => {
  const card = useCard();
  const options = useCardOptions();
  const { changeCardOption } = useCardActions();

  const [_, convert, ref] = useToPng({
    onSuccess: (data) => {
      const link = document.createElement('a');
      link.download = 'daggerheart-card.png';
      link.href = data;
      link.click();
    },
  });

  return (
    <div className='flex flex-col-reverse gap-4 md:flex-row'>
      <CardCreationForm className='flex-grow' />
      <div>
        <div className='flex justify-center'>
          <div ref={ref}>
            <DaggerHeartCard card={card} options={options} />
          </div>
        </div>
        <div className='mt-4 flex gap-2'>
          <Button className='w-full' onClick={convert}>
            Export as PNG
          </Button>
          <Button
            className='w-full'
            onClick={() =>
              changeCardOption({
                property: 'cardBorder',
                value: !options.cardBorder,
              })
            }
          >
            Toggle Card Border
          </Button>
        </div>
      </div>
    </div>
  );
};
