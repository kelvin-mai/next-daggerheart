'use client';

import { useCardStore } from '@/store';
import { BaseForm } from './base';
import { ImageForm } from './image';
import {
  ClassPropertiesForm,
  DomainPropertiesForm,
  SubClassPropertiesForm,
} from './properties';
import { RulesForm } from './rules';

export const CardCreationForms = () => {
  const {
    card: { type },
  } = useCardStore();
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
