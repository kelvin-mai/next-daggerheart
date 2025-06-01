'use client';

import { useAdversaryStore } from '@/store';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';

export const AdversaryPreviewStatblock = () => {
  const {
    adversary: {
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
    },
  } = useAdversaryStore();
  const formatThresholds = (n: number) => (n === 0 ? 'None' : n);
  return (
    <div className='rounded-md border p-4 text-black'>
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
      <div className='border-t border-b bg-white p-4'>
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
        className='space-y-2'
        dangerouslySetInnerHTML={{ __html: text || '' }}
      />
    </div>
  );
};
