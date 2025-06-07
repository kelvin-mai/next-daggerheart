'use client';

import { useSession } from '@/lib/auth/client';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { cn } from '@/lib/utils';

export const SavePreviewButton: React.FC<
  React.ComponentProps<typeof Button>
> = ({ className, children, disabled, ...props }) => {
  const session = useSession();
  return session.data?.user ? (
    <Button {...props} className={className} disabled={disabled}>
      {children}
    </Button>
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <span tabIndex={0} className='grow'>
          <Button disabled className={cn('w-full', className)} {...props}>
            {children}
          </Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>Save feature is only available if you are logged in.</p>
      </TooltipContent>
    </Tooltip>
  );
};
