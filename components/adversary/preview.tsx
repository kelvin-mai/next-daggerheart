'use client';

import { useAdversary } from '@/store';
import { Thresholds } from '@/components/common';

export const AdversaryPreview = () => {
  const adversary = useAdversary();
  return (
    <div className='rounded-xl border-2 border-dh-gold-light bg-dh-off-white p-4 shadow-lg'>
      <div className='flex justify-between'>
        <div>
          <h3 className='text-xl font-bold'>{adversary.name}</h3>
          <p className='italic'>{adversary.flavor}</p>
        </div>
        <div className='text-right font-bold'>
          <p>Tier {adversary.tier}</p>
          <p>{adversary.role}</p>
        </div>
      </div>
      <p className='bg-dh-gray py-1 text-center'>
        <span className='font-bold'>Motives & Tactics: </span>
        {adversary.motives}
      </p>
      <div className='flex flex-col gap-2 md:flex-row'>
        <div className='p-2'>
          <h3 className='text-xl font-bold'>{adversary.attack}</h3>
          <p>{adversary.damage}</p>
          <div className='py-4'>
            <Thresholds thresholds={adversary.thresholds} />
          </div>
          <h3 className='text-xl font-bold'>Attributes</h3>
          <div className='flex justify-between'>
            <p>Attack Modifier</p>
            <p>+{adversary.modifier}</p>
          </div>
          <div className='flex justify-between'>
            <p>Difficulty</p>
            <p>{adversary.difficulty}</p>
          </div>
          <div className='flex justify-between'>
            <p>Hit Points</p>
            <p>{adversary.hp}</p>
          </div>
          <div className='flex justify-between'>
            <p>Stress</p>
            <p>{adversary.stress}</p>
          </div>
          <h3 className='text-xl font-bold'>Experiences</h3>
          {adversary.experiences.map((ex, i) => (
            <div key={`${ex.name}_${i}`} className='flex justify-between'>
              <p>{ex.name}</p>
              <p>+{ex.bonus}</p>
            </div>
          ))}
        </div>
        <div className='p-2'>
          <h3 className='text-xl font-bold'>Moves</h3>
          {adversary.moves.map((m, i) => (
            <p key={`${m.name}_${i}`}>
              <span className='font-bold'>{m.name}: </span>
              {m.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
