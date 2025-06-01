'use client';

import * as React from 'react';
import type { Editor } from '@tiptap/react';

import { useAdversaryActions, useAdversaryStore } from '@/store';
import { FormContainer, FormInput } from '@/components/common/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CollapsibleContent } from '@/components/ui/collapsible';
import {
  CustomSelect,
  RichTextEditor,
  useRichTextEditor,
} from '@/components/common';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export const AssistedFeatureText = ({ editor }: { editor: Editor }) => {
  const initialFeature = {
    name: '',
    description: '',
    type: '',
  };
  const [feature, setFeature] = React.useState(initialFeature);
  const handleClick = () => {
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
    if (editor) {
      const section = `<p><strong><em>${capitalize(feature.name)} - ${capitalize(feature.type)}: </em></strong> ${feature.description}</p>`;
      editor
        .chain()
        .focus()
        .insertContent('<p></p>')
        .insertContent(section)
        .run();
      setFeature(initialFeature);
    }
  };
  return (
    <div className='space-y-2'>
      <FormInput
        id='feature-name'
        label='Feature Name'
        placeholder='Feature name'
        value={feature.name}
        onChange={(e) => setFeature({ ...feature, name: e.target.value })}
      />
      <div className='flex items-end gap-2'>
        <div className='grow space-y-2'>
          <Label id='feature-type'>Action Type</Label>
          <CustomSelect
            id='feature-type'
            placeholder='Action Type'
            options={[
              {
                category: 'Action Type',
                options: ['passive', 'action', 'reaction'],
              },
            ]}
            value={feature.type}
            onChange={(v) => setFeature({ ...feature, type: v })}
          />
        </div>
        <Button variant='ghost' onClick={handleClick}>
          Add Feature
        </Button>
      </div>
      <div className='space-y-2'>
        <Label htmlFor='feature-description'>Feature Description</Label>
        <Textarea
          id='feature-description'
          value={feature.description}
          placeholder='Feature description'
          onChange={(e) =>
            setFeature({ ...feature, description: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export const RulesForm = () => {
  const {
    adversary: { text },
  } = useAdversaryStore();
  const { setAdversaryDetails } = useAdversaryActions();

  const editor = useRichTextEditor({
    defaultValue: text,
    onChange: (v) => setAdversaryDetails({ text: v }),
  });

  return (
    <FormContainer title='Features Text' collapsible defaultOpen>
      {editor && <RichTextEditor editor={editor} />}
      <CollapsibleContent>
        {editor && (
          <div className='space-y-2 pt-2'>
            <Label>Feature Text Assistance</Label>
            <AssistedFeatureText editor={editor} />
          </div>
        )}
      </CollapsibleContent>
    </FormContainer>
  );
};
