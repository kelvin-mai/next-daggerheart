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
import { cn, getBrightness } from '@/lib/utils';
import { useCardStore } from '@/store';

export const domainColors: { [key: string]: string } = {
  arcana: '#664295',
  blade: '#b93035',
  bone: '#c1c7cc',
  codex: '#3370ab',
  grace: '#cb3b90',
  midnight: '#2c2c2c',
  sage: '#0e854d',
  splendor: '#d1b447',
  valor: '#dc7a27',
  dread: '#654294',
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

export const Banner = () => {
  const {
    card: { type, level, domainPrimary, domainSecondary },
  } = useCardStore();
  const PrimaryIcon = getDomainIcon(domainPrimary);
  const SecondaryIcon = getDomainIcon(domainSecondary);
  const foregroundColor =
    getBrightness(
      domainPrimary === 'custom' ? '#000000' : domainColors[domainPrimary],
    ) < 128
      ? 'white'
      : 'black';
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
        {type === 'domain' ? (
          <p
            className='font-eveleth-clean'
            style={{ fontSize: '26px', color: foregroundColor }}
          >
            {level}
          </p>
        ) : domainPrimary !== domainSecondary ? (
          <PrimaryIcon
            style={{ height: '32px', width: '32px', color: foregroundColor }}
          />
        ) : null}
      </div>

      <div
        className='absolute z-50'
        style={{ transform: 'translateX(-50%)', left: '56px', top: '54px' }}
      >
        {['class', 'subclass'].includes(type) ? (
          <SecondaryIcon
            style={{ height: '32px', width: '32px', color: foregroundColor }}
          />
        ) : (
          <PrimaryIcon
            style={{ height: '32px', width: '32px', color: foregroundColor }}
          />
        )}
      </div>

      <div
        className={cn('clip-card-banner-fg absolute z-30')}
        style={{
          left: '26px',
          top: '-4px',
          height: '120px',
          width: '59px',
          background: domainColors[domainPrimary] ?? '#000000',
        }}
      />
      <div
        className={cn('clip-card-banner-bg absolute z-20')}
        style={{
          left: '26px',
          top: '-4px',
          height: '120px',
          width: '59px',
          background: domainColors[domainSecondary] ?? '#000000',
        }}
      />
    </>
  );
};
