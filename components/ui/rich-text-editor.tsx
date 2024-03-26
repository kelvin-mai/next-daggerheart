'use client';

import { useEditor, EditorContent, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Toggle } from './toggle';
import { Separator } from './separator';

export const RichTextEditor = ({ className }: { className?: string }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'min-h-[80px] max-h-[180px] w-full bg-white px-3 py-2 border-b-0 text-sm focus-visible:ring-offset-2 ring-offset-white placeholder:text-slate-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: '',
  });

  return (
    <div
      className={cn('rounded-md border border-slate-200 bg-white', className)}
    >
      <EditorContent editor={editor} />
      {editor ? <RichTextEditorToolbar editor={editor} /> : null}
    </div>
  );
};

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className='flex flex-row items-center gap-1 border-t border-slate-200 p-1'>
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
        pressed={editor.isActive({ textAlign: 'center' })}
        onPressedChange={() =>
          editor.chain().focus().setTextAlign('center').run()
        }
      >
        <AlignCenter className='h-4 w-4' />
      </Toggle>
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