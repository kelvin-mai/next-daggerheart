'use client';

import Image from 'next/image';
import { ImageIcon } from 'lucide-react';

import type {
  AdversaryDetails,
  CardDetails,
  UserAdversary,
  UserCard,
} from '@/lib/types';
import { useRouter } from 'next/navigation';
import { useAdversaryActions, useCardActions } from '@/store';
import { Button } from '../ui/button';
import { ResponsiveDialog } from '../common';
import { CardPreview } from '../card-creation/preview';
import { AdversaryPreviewStatblock } from '../adversary-creation/preview/statblock';

type PersonalCardProps = React.ComponentProps<'div'> & {
  cardPreview: CardDetails;
  userCard: UserCard;
};

export const PersonalCard: React.FC<PersonalCardProps> = ({
  cardPreview,
  userCard,
  ...props
}) => {
  const router = useRouter();
  const { setUserCard, setCardDetails } = useCardActions();
  const handleTemplate = () => {
    setUserCard(userCard);
    setCardDetails(cardPreview);
    router.push('/card/create');
  };
  return (
    <div className='bg-card flex items-start rounded-lg border p-4' {...props}>
      <div className='flex items-center gap-4'>
        {cardPreview.image ? (
          <Image
            src={cardPreview.image}
            alt={`Preview image ${userCard.id}`}
            className='overflow-hidden rounded'
            width={32}
            height={32}
          />
        ) : (
          <ImageIcon className='text-muted-foreground size-8' />
        )}
        <div>
          <p className='font-bold'>{cardPreview.name || 'Untitled'}</p>
          <p className='text-muted-foreground text-sm'>
            <span className='capitalize'>{cardPreview.type}</span>
          </p>
        </div>
      </div>
      <div className='ml-auto flex flex-col gap-2'>
        <ResponsiveDialog label='Preview'>
          <div className='flex items-center justify-center'>
            <CardPreview
              card={cardPreview}
              settings={{
                border: true,
                boldRulesText: true,
                artist: true,
                credits: true,
                placeholderImage: true,
              }}
            />
          </div>
        </ResponsiveDialog>
        <Button variant='secondary' onClick={handleTemplate}>
          Edit
        </Button>
      </div>
    </div>
  );
};

type PersonalAdversaryProps = React.ComponentProps<'div'> & {
  adversaryPreview: AdversaryDetails;
  userAdversary: UserAdversary;
};

export const PersonalAdversary: React.FC<PersonalAdversaryProps> = ({
  adversaryPreview,
  userAdversary,
  ...props
}) => {
  const { setAdversaryDetails, setUserAdversary } = useAdversaryActions();
  const router = useRouter();
  const handleTemplate = () => {
    setUserAdversary(userAdversary);
    setAdversaryDetails(adversaryPreview);
    router.push('/adversary/create');
  };
  return (
    <div className='bg-card flex items-start rounded-lg border p-4' {...props}>
      <div className='flex items-center gap-4'>
        {adversaryPreview.image ? (
          <Image
            src={adversaryPreview.image}
            alt={`Preview image ${userAdversary.id}`}
            className='overflow-hidden rounded'
            width={32}
            height={32}
          />
        ) : (
          <ImageIcon className='text-muted-foreground size-8' />
        )}
        <div>
          <p className='font-bold'>{adversaryPreview.name || 'Untitled'}</p>
          <p className='text-muted-foreground text-sm'>
            <span className='capitalize'>{adversaryPreview.type}</span>
          </p>
        </div>
      </div>
      <div className='ml-auto flex flex-col gap-2'>
        <ResponsiveDialog label='Preview'>
          <div className='flex items-center justify-center'>
            <AdversaryPreviewStatblock adversary={adversaryPreview} />
          </div>
        </ResponsiveDialog>
        <Button variant='secondary' onClick={handleTemplate}>
          Use as template
        </Button>
      </div>
    </div>
  );
};
