import {
  ArcanaDomainIcon,
  BladeDomainIcon,
  BoneDomainIcon,
  CodexDomainIcon,
  DaggerheartIcon,
  GraceDomainIcon,
  MidnightDomainIcon,
  SageDomainIcon,
  SplendorDomainIcon,
  ValorDomainIcon,
} from '@/components/icons';
import { cn } from '@/lib/utils';
import { useCardStore } from '@/store';

const getDomainIcon = (domain?: string) => {
  switch (domain) {
    case 'arcana':
      return ArcanaDomainIcon;
    case 'blade':
      return BladeDomainIcon;
    case 'bone':
      return BoneDomainIcon;
    case 'codex':
      return CodexDomainIcon;
    case 'grace':
      return GraceDomainIcon;
    case 'midnight':
      return MidnightDomainIcon;
    case 'sage':
      return SageDomainIcon;
    case 'splendor':
      return SplendorDomainIcon;
    case 'valor':
      return ValorDomainIcon;
    default:
      return DaggerheartIcon;
  }
};

export const Banner = () => {
  const {
    card: { level },
  } = useCardStore();
  const PrimaryIcon = getDomainIcon();
  const SecondaryIcon = getDomainIcon();
  return (
    <>
      <div
        className='absolute z-40'
        style={{
          top: '-4px',
          left: '24px',
        }}
      >
        <img
          src='/assets/card/banner.webp'
          style={{
            height: '120px',
            width: '63px',
          }}
        />
      </div>

      <div
        className='absolute z-50'
        style={{ transform: 'translateX(-50%)', left: '56px', top: '16px' }}
      >
        {/* top */}
        {/* <PrimaryIcon style={{ height: '32px', width: '32px' }} /> */}
        <p className='font-bold' style={{ fontSize: '26px' }}>
          {level}
        </p>
      </div>

      <div
        className='absolute z-50'
        style={{ transform: 'translateX(-50%)', left: '56px', top: '54px' }}
      >
        {/* bottom */}
        {/* <SecondaryIcon style={{ height: '32px', width: '32px' }} /> */}
        <PrimaryIcon style={{ height: '32px', width: '32px' }} />
      </div>

      <div
        className={cn('clip-card-banner-fg absolute z-30')}
        style={{
          left: '26px',
          top: '-4px',
          height: '120px',
          width: '59px',
          background: '#c1c7cc',
        }}
      />
      <div
        className={cn('clip-card-banner-bg absolute z-20')}
        style={{
          left: '26px',
          top: '-4px',
          height: '120px',
          width: '59px',
          background: '#b93035',
        }}
      />
    </>
  );
};
