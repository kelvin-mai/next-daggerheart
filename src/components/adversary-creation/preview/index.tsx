'use client';

import * as React from 'react';

import {
  useAdversaryActions,
  useAdversaryEffects,
  useAdversaryStore,
} from '@/store';
import { AdversaryPreviewStatblock } from './statblock';
import { Button } from '@/components/ui/button';

export const AdversaryCreationPreview = () => {
  const { adversary } = useAdversaryStore();
  const { setPreviewStatblockRef } = useAdversaryActions();
  const { downloadStatblock } = useAdversaryEffects();

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setPreviewStatblockRef(ref);
  }, [ref]);

  return (
    <div className='flex grow flex-col items-center space-y-2'>
      <AdversaryPreviewStatblock
        ref={ref}
        adversary={adversary}
        className='w-full'
      />
      <Button className='w-full' onClick={downloadStatblock}>
        Export Statblock as PNG
      </Button>
    </div>
  );
};
