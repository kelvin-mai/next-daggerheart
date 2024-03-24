import { Fragment } from 'react';

import { cn } from '@/lib/utils';
import {
  ArcaneDomainIcon,
  BladeDomainIcon,
  BoneDomainIcon,
  CodexDomainIcon,
  GraceDomainIcon,
  MidnightDomainIcon,
  SageDomainIcon,
  SplendorDomainIcon,
  ValorDomainIcon,
} from '@/components/icons';

type CardBannerProps = {
  domainPrimary?: string;
  domainSecondary?: string;
  level?: number;
};

const getDomainIcon = (domain?: string) => {
  switch (domain) {
    case 'arcane':
      return ArcaneDomainIcon;
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
      return ArcaneDomainIcon;
  }
};

export const CardBanner: React.FC<CardBannerProps> = ({
  domainPrimary = 'arcana',
  domainSecondary,
  level,
}) => {
  const position = 'absolute left-[26px] top-0';
  const size = 'h-[120px] w-[59px]';
  const PrimaryIcon = getDomainIcon(domainPrimary);
  const SecondaryIcon = getDomainIcon(domainSecondary);
  return (
    <>
      <div className='absolute left-[24px] top-0 z-40'>
        <img className='h-[120px] w-[63px]' src='/banner.webp' />
      </div>
      <div
        className={cn(
          'absolute  z-50 -translate-x-1/2 transform',
          domainSecondary ? 'left-[56px] top-[20px]' : 'left-[56px] top-[58px]',
        )}
      >
        <PrimaryIcon className='h-[32px] w-[32px]' />
      </div>
      {domainSecondary ? (
        <div className='absolute left-[56px] top-[58px] z-50 -translate-x-1/2 transform'>
          <SecondaryIcon className='h-[32px] w-[32px]' />
        </div>
      ) : null}
      {level ? (
        <p className='text-eveleth-clean absolute left-[56px] top-[32px] z-50 -translate-x-1/2 transform text-card-title-lg font-bold text-white'>
          {level}
        </p>
      ) : null}
      <div
        className={cn(
          position,
          size,
          'clip-banner-fg z-30',
          `bg-domain-${domainPrimary}`,
        )}
      />
      <div
        className={cn(
          position,
          size,
          'clip-banner-bg z-20',
          domainSecondary
            ? `bg-domain-${domainSecondary}`
            : `bg-domain-${domainPrimary}`,
        )}
      />
    </>
  );
};
