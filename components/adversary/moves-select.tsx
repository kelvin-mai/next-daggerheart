'use client';
import { useState } from 'react';

import { useAdversaryActions } from '@/store';
import {
  Button,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { commonMoves } from '@/constants/adversaries';
import { FormField } from '../common';

export const AdversaryMovesSelect = () => {
  const [move, setMove] = useState(commonMoves[0].name);
  const { addMove } = useAdversaryActions();
  const addCommonMove = () => {
    const selectedMove = commonMoves.find((m) => m.name === move);
    if (selectedMove) {
      addMove(selectedMove);
    }
  };
  return (
    <div className='flex items-center gap-2'>
      <FormField>
        <Select value={move} onValueChange={(v) => setMove(v)}>
          <SelectTrigger>
            <SelectValue placeholder='Common Moves' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Common Moves</SelectLabel>
              {commonMoves.map((m) => (
                <SelectItem key={m.name} className='capitalize' value={m.name}>
                  {m.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormField>
      <Button onClick={addCommonMove}>Add Common Move</Button>
    </div>
  );
};
