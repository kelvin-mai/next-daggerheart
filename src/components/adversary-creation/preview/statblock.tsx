import * as React from 'react';

import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import type { AdversaryDetails } from '@/lib/types';

type AdversaryPreviewStatblockProps = React.ComponentProps<'div'> & {
  adversary: AdversaryDetails;
};

export const AdversaryPreviewStatblock: React.FC<
  AdversaryPreviewStatblockProps
> = ({ className, adversary, ...props }) => {
  const {
    name,
    type,
    subtype,
    tier,
    description,
    subDescription,
    experience,
    difficulty,
    thresholds,
    hp,
    stress,
    weapon,
    attack,
    distance,
    damageAmount,
    damageType,
    potential,
    text,
  } = adversary;
  const formatThresholds = (n: number) => (n === 0 ? 'None' : n);
  return (
    <div
      className={cn(
        'space-y-2 rounded-md border p-4 text-black',
        type === 'adversary' && 'border-[#bcab84] bg-[#f4f0e5]',
        type === 'environment' && 'border-[#aaa8a9] bg-[#ededed]',
        className,
      )}
      {...props}
    >
      <h3 className='font-eveleth-clean text-2xl'>{name}</h3>
      <p className='text-base font-bold capitalize'>
        <em>
          Tier {tier} {subtype}
        </em>
      </p>
      <p>
        <em>{description}</em>
      </p>
      <p>
        <strong>
          {type === 'adversary' ? 'Motives & Tactics' : 'Impulses'}:{' '}
        </strong>
        {subDescription}
      </p>
      <div
        className={cn(
          'border-t border-b bg-white p-4',
          type === 'adversary' && 'border-[#bcab84]',
          type === 'environment' && 'border-[#aaa8a9]',
        )}
      >
        {type === 'adversary' ? (
          <>
            <p>
              <strong>Difficulty: </strong>
              {difficulty} | <strong>Thresholds: </strong>
              {thresholds ? formatThresholds(thresholds[0]) : null} /{' '}
              {thresholds ? formatThresholds(thresholds[1]) : null} |{' '}
              <strong>HP: </strong>
              {hp} | <strong>Stress: </strong>
              {stress}
            </p>
            <p className='capitalize'>
              <strong>ATK: </strong>
              {attack} | <strong>{weapon}: </strong>
              {distance} | {damageAmount} ({damageType})
            </p>
            {experience ? (
              <>
                <Separator className='my-2' />
                <p>
                  <strong>Experience:</strong> {experience}
                </p>
              </>
            ) : null}
          </>
        ) : (
          <>
            <p>
              <strong>Difficulty: </strong>
              {difficulty}
            </p>
            <p className='capitalize'>
              <strong>Potential Adversaries: </strong>
              {potential || 'any'}
            </p>
          </>
        )}
      </div>
      <h3 className='font-eveleth-clean text-xl'>Features</h3>
      <div
        className='[&_p]:pl-4 [&_p]:-indent-4'
        dangerouslySetInnerHTML={{ __html: text || '' }}
      />
    </div>
  );
};
