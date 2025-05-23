'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useCardEffects } from '@/store';

type DownloadImageButtonProps = Omit<
  React.ComponentProps<typeof Button>,
  'onClick'
>;

export const DownloadImageButton: React.FC<DownloadImageButtonProps> = ({
  className,
  ...props
}) => {
  const { downloadImage } = useCardEffects();
  return (
    <Button className={cn(className)} {...props} onClick={downloadImage}>
      Export as PNG
    </Button>
  );
};
