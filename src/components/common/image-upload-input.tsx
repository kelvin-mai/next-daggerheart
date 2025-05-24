'use client';

import * as React from 'react';

import { formatBytes, useFileUpload } from '@/hooks/use-file-upload';
import { Button } from '@/components/ui/button';
import { UploadIcon, X } from 'lucide-react';
import { useCardActions } from '@/store';
import {
  ImageCropper,
  ImageCropperArea,
  ImageCropperImage,
} from './image-cropper';

export const ImageUploadInput: React.FC<any> = ({ id }) => {
  const { setCardDetails } = useCardActions();
  const [{ files }, { removeFile, openFileDialog, getInputProps }] =
    useFileUpload({ accept: 'image/*' });
  const [file] = files;
  React.useEffect(() => {
    if (file?.preview) {
      setCardDetails({ image: file.preview });
    }
  }, [file]);
  return (
    <div className='bg-background flex items-center justify-between gap-2 rounded-md border p-2'>
      <Button variant='outline' className='h-10' onClick={openFileDialog}>
        <UploadIcon className='size-3' />
        Add Image
      </Button>
      {file ? (
        <>
          <div className='flex items-center gap-4 overflow-hidden'>
            <div className='bg-accent aspect-square shrink-0 rounded'>
              <img
                className='size-10 rounded-[inherit] object-cover'
                src={file.preview}
                alt={file.file.name}
              />
            </div>
            <div>
              <p className='truncate text-sm font-medium'>{file.file.name}</p>
              <p className='text-muted-foreground text-sm'>
                {formatBytes(file.file.size)}
              </p>
            </div>
          </div>
          <Button
            size='icon'
            variant='ghost'
            onClick={() => removeFile(file.id)}
            aria-label='Remove file'
          >
            <X aria-hidden='true' />
          </Button>
        </>
      ) : null}
      <input
        id={id}
        {...getInputProps()}
        className='sr-only'
        aria-label='Upload image file'
        tabIndex={-1}
      />
      {file?.preview && (
        <ImageCropper
          image={file.preview}
          className='h-60'
          onCropChange={(e) => console.log(e)}
        >
          <ImageCropperImage />
          <ImageCropperArea />
        </ImageCropper>
      )}
    </div>
  );
};
