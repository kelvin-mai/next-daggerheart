'use client';

import { useState } from 'react';
import { AdversaryForm } from './form';

export const AdversaryCreateContainer = () => {
  const [adversary, setAdversary] = useState({});
  return (
    <>
      <AdversaryForm />
    </>
  );
};
