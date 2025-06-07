'use client';

import * as React from 'react';
import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
} from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className='border-input flex flex-row items-center gap-1 border-t p-1'>
      <Toggle
        size='sm'
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className='h-4 w-4' />
      </Toggle>
      <Separator orientation='vertical' className='h-8 w-[1px]' />
      <Toggle
        size='sm'
        pressed={editor.isActive({ textAlign: 'left' })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign('left').run()
        }
      >
        <AlignLeft className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive({ textAlign: 'center' })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign('center').run()
        }
      >
        <AlignCenter className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive({ textAlign: 'right' })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign('right').run()
        }
      >
        <AlignRight className='h-4 w-4' />
      </Toggle>
      <Separator orientation='vertical' className='h-8 w-[1px]' />
      <Toggle
        size='sm'
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className='h-4 w-4' />
      </Toggle>
      <Toggle
        size='sm'
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className='h-4 w-4' />
      </Toggle>
    </div>
  );
};

export const useRichTextEditor = ({
  className,
  defaultValue,
  onChange,
}: {
  className?: string;
  defaultValue?: string;
  onChange?: (html: string) => void;
}) =>
  useEditor({
    editorProps: {
      attributes: {
        class: cn(
          'min-h-[80px] max-h-[180px] w-full bg-white dark:bg-input/30 px-3 py-2 border-input border-b-0 text-sm placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
          className,
        ),
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-outside list-decimal pl-4',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-outside list-disc pl-4',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: defaultValue,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
  });

export const RichTextEditor = ({
  className,
  editor,
}: {
  className?: string;
  editor: Editor;
}) => {
  return (
    <div
      className={cn(
        'border-input dark:bg-input/30 focus-within:border-ring overflow-hidden rounded-md border bg-white',
        className,
      )}
    >
      <EditorContent editor={editor} />
      {editor && <RichTextEditorToolbar editor={editor} />}
    </div>
  );
};
