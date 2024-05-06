import { getDomainColor } from '@/constants/domain-colors';
import { cn, getBrightness } from '@/lib/utils';
import {
  ArcanaDomainIcon,
  BladeDomainIcon,
  BoneDomainIcon,
  CodexDomainIcon,
  GraceDomainIcon,
  MidnightDomainIcon,
  SageDomainIcon,
  SplendorDomainIcon,
  ValorDomainIcon,
} from '@/components/icons';
import { CardDomain } from '@/lib/types';
import { domains } from '@/constants/rules-texts';
import { DaggerheartIcon } from '../icons/daggerheart';

type CardBannerProps = {
  domainPrimary?: CardDomain;
  domainSecondary?: CardDomain;
  level?: number;
};

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

export const CardBanner: React.FC<CardBannerProps> = ({
  domainPrimary,
  domainSecondary,
  level,
}) => {
  const position = 'absolute left-[1.625rem] -top-1';
  const size = 'h-[7.5rem] w-[3.75rem]';
  const PrimaryIcon = getDomainIcon(domainPrimary?.name);
  const SecondaryIcon = getDomainIcon(domainSecondary?.name);

  const domainPrimaryColor =
    domainPrimary && domains.includes(domainPrimary.name)
      ? getDomainColor(domainPrimary.name)
      : domainPrimary?.color || '#ffffff';
  const domainSecondaryColor =
    domainSecondary && domains.includes(domainSecondary.name)
      ? getDomainColor(domainSecondary.name)
      : domainSecondary?.color || '#ffffff';
  const highBrightness = getBrightness(domainPrimaryColor) < 128;
  return (
    <>
      <div className='absolute -top-1 left-6 z-40'>
        <img className='h-[7.5rem] w-16' src='/assets/card/banner.webp' />
      </div>
      <div
        className={cn(
          'absolute  z-50 -translate-x-1/2 transform',
          domainSecondary ? 'left-14 top-4' : 'left-14 top-14',
        )}
      >
        {domainPrimary?.name === 'custom' && domainPrimary?.image ? (
          <img className='h-8 w-8' src={domainPrimary.image} />
        ) : (
          <PrimaryIcon
            className={cn(
              'h-8 w-8',
              highBrightness ? 'fill-white' : 'fill-black',
            )}
          />
        )}
      </div>
      {domainSecondary ? (
        <div className='absolute left-14 top-14 z-50 -translate-x-1/2 transform'>
          {domainSecondary.name === 'custom' && domainSecondary.image ? (
            <img className='h-8 w-8' src={domainSecondary.image} />
          ) : (
            <SecondaryIcon
              className={cn(
                'h-8 w-8',
                highBrightness ? 'fill-white' : 'fill-black',
              )}
            />
          )}
        </div>
      ) : null}
      {level ? (
        <p className='text-eveleth-clean absolute left-14 top-7 z-50 -translate-x-1/2 transform text-card-title-lg font-bold'>
          <span className={cn(highBrightness ? 'text-white' : 'text-black')}>
            {level}
          </span>
        </p>
      ) : null}
      <div
        className={cn(position, size, 'clip-banner-fg z-30')}
        style={{ background: domainPrimaryColor }}
      />
      <div
        className={cn(position, size, 'clip-banner-bg z-20')}
        style={{
          background: domainSecondary
            ? domainSecondaryColor
            : domainPrimaryColor,
        }}
      />
    </>
  );
};
