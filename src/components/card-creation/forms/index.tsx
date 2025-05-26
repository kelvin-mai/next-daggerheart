'use client';

import * as React from 'react';

import { useCardEffects, useCardStore } from '@/store';
import { Skeleton } from '@/components/ui/skeleton';
import { BaseForm } from './base';
import { ImageForm } from './image';
import {
  ClassPropertiesForm,
  DomainPropertiesForm,
  SubClassPropertiesForm,
} from './properties';
import { RulesForm } from './rules';

export const CardCreationForms = () => {
  const store = useCardStore();
  const {
    loading,
    card: { type },
  } = store;
  const { loadOptions } = useCardEffects();
  console.log(store);
  React.useEffect(() => {
    loadOptions();
  }, []);
  if (loading) {
    return <Skeleton className='grow rounded-lg' />;
  }
  return (
    <div className='grow space-y-2'>
      <BaseForm />
      <ImageForm />
      {type === 'domain' && <DomainPropertiesForm />}
      {type === 'class' && <ClassPropertiesForm />}
      {type === 'subclass' && <SubClassPropertiesForm />}
      <RulesForm />
    </div>
  );
};

export * from './settings';
