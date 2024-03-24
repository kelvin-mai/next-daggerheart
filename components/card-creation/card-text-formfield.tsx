'use client';
import { Fragment } from 'react';

import type { CardTextListType, CardTextSection, Feature } from '@/lib/types';
import {
  Button,
  Input,
  Textarea,
  Select,
  SelectLabel,
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  SelectGroup,
} from '@/components/ui';
import { FormField } from '@/components/common';

type CardCreationSectionFormFieldProps = CardTextSection & {
  index: number;
  listType?: CardTextListType;
  onChange: (text: any) => void;
  onRemove: () => void;
};

type TextFormFieldProps = {
  index: number;
  label: string;
  text: string;
  onChange: (text: string) => void;
  onRemove: () => void;
};

const TextFormField: React.FC<TextFormFieldProps> = ({
  label,
  text,
  index,
  onChange,
  onRemove,
}) => {
  return (
    <>
      <FormField label={label} htmlFor={`card-section-${index}`}>
        <Textarea
          id={`card-section-${index}`}
          defaultValue={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </FormField>
      <Button variant='ghost' className='w-full' onClick={onRemove}>
        Remove
      </Button>
    </>
  );
};

type FeatureFormFieldProps = {
  index: number;
  text: Feature;
  onChange: (text: Feature) => void;
  onRemove: () => void;
};

const FeatureFormField: React.FC<FeatureFormFieldProps> = ({
  text,
  index,
  onChange,
  onRemove,
}) => {
  return (
    <>
      <div className='flex items-end gap-2'>
        <FormField label='Feature Name' htmlFor={`card-section-${index}-name`}>
          <Input
            id={`card-section-${index}-name`}
            defaultValue={text.name}
            onChange={(e) => onChange({ ...text, name: e.target.value })}
          />
        </FormField>
        <Button variant='ghost' onClick={() => onRemove()}>
          Remove Feature
        </Button>
      </div>
      <FormField
        label='Feature Description'
        htmlFor={`card-section-${index}-name`}
      >
        <Textarea
          id={`card-section-${index}-name`}
          defaultValue={text.description}
          onChange={(e) => onChange({ ...text, description: e.target.value })}
        />
      </FormField>
    </>
  );
};

type ListFormFieldProps = {
  index: number;
  text: string[];
  listType: CardTextListType;
  onChange: (text: string[], listType?: CardTextListType) => void;
  onRemove: () => void;
};

const ListFormField: React.FC<ListFormFieldProps> = ({
  index,
  text,
  listType,
  onChange,
  onRemove,
}) => {
  return (
    <>
      <div className='flex items-end gap-2'>
        <FormField
          label='List Type'
          htmlFor={`card-section-${index}-list-type`}
        >
          <Select
            defaultValue={listType}
            onValueChange={(e) => onChange(text, e as CardTextListType)}
          >
            <SelectTrigger id={`card-section-${index}-list-type`}>
              <SelectValue placeholder='List Type' />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>List Type</SelectLabel>
                <SelectItem value='number'>Numbered List</SelectItem>
                <SelectItem value='bullet'>Bulleted List</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormField>
        <Button
          variant='ghost'
          onClick={() => onChange([...text, ''], listType)}
        >
          Add Item
        </Button>
        <Button variant='ghost' onClick={() => onRemove()}>
          Remove Section
        </Button>
      </div>
      {text.map((t, i) => (
        <Fragment key={i}>
          <FormField
            label={`List item ${i + 1}`}
            htmlFor={`card-section-${index}-list-item-${i}`}
          >
            <Textarea
              defaultValue={t}
              onChange={(e) =>
                onChange(
                  text.map((tt, j) => (j === i ? e.target.value : tt)),
                  listType,
                )
              }
            />
          </FormField>
          <Button
            variant='ghost'
            className='w-full'
            onClick={() =>
              onChange(
                text.filter((_, j) => j !== i),
                listType,
              )
            }
          >
            Remove Item
          </Button>
        </Fragment>
      ))}
    </>
  );
};

export const CardCreationSectionFormField: React.FC<
  CardCreationSectionFormFieldProps
> = ({ type, text, listType, ...props }) => {
  switch (type) {
    case 'flavor':
      return <TextFormField label='Flavor Text' text={text} {...props} />;
    case 'feature':
      return <FeatureFormField text={text} {...props} />;
    case 'rules':
      return <TextFormField label='Rules Text' text={text} {...props} />;
    case 'list':
      return <ListFormField listType={listType} text={text} {...props} />;
    default:
      return null;
  }
};
