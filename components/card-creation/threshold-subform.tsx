'use client';

import { useState } from 'react';

import { FormField } from '@/components/common';
import { Checkbox, Input, Label } from '@/components/ui';
import { safeParseInt } from '@/lib/utils';
import { useCard, useCardActions, useCardOptions } from '@/store';

type CardCreationThresholdsFormProps = {};

export const CardCreationThresholdsForm: React.FC<
  CardCreationThresholdsFormProps
> = () => {
  const { thresholds: cardThresholds } = useCard();
  const { thresholdsAsText, showThresholds } = useCardOptions();
  const { changeCardOption, changeThresholds } = useCardActions();
  const thresholds = cardThresholds || [5, 10, 15];
  const onThresholdChange = (i: number, v: string) => {
    changeThresholds(
      thresholds.map((t, j) => (i === j ? safeParseInt(v) : t)) as [
        number,
        number,
        number,
      ],
    );
  };
  const [minor, major, severe] = thresholds;
  return (
    <>
      <Label>Rules Texts Includes Damage Thresholds?</Label>
      <div className='flex gap-2'>
        <FormField>
          <Input
            id='threshold-minor'
            placeholder='Minor'
            defaultValue={minor}
            onChange={(e) => onThresholdChange(0, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
        <FormField>
          <Input
            id='threshold-major'
            placeholder='Major'
            defaultValue={major}
            onChange={(e) => onThresholdChange(1, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
        <FormField>
          <Input
            id='threshold-severe'
            placeholder='Severe'
            defaultValue={severe}
            onChange={(e) => onThresholdChange(2, e.target.value)}
            type='number'
            min={0}
            max={99}
          />
        </FormField>
      </div>
      <div className='flex justify-end space-x-2 pr-4'>
        <div className='flex items-center justify-end space-x-2'>
          <Checkbox
            id='show-thresholds'
            checked={!!cardThresholds}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                if (e) {
                  changeThresholds(thresholds);
                } else {
                  changeThresholds(undefined);
                }
              }
            }}
          />
          <Label htmlFor='show-thresholds'>Show damage thresholds?</Label>
        </div>
        <div className='flex items-center justify-end space-x-2'>
          <Checkbox
            id='thresholds-as-text'
            checked={thresholdsAsText}
            onCheckedChange={(e) => {
              if (e !== 'indeterminate') {
                changeCardOption({ property: 'thresholdsAsText', value: e });
              }
            }}
          />
          <Label htmlFor='thresholds-as-text'>Show as text?</Label>
        </div>
      </div>
    </>
  );
};
