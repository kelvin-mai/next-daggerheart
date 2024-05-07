import type { CardProperties } from '@/lib/types';
import { daggerheartVersion } from '@/constants/version';
import { cn } from '@/lib/utils';
import { getDivider } from './card-divider';
import { CardStress } from './card-stress';
import { CardBanner } from './card-banner';
import { CardText } from './card-text';
import { CardThresholds } from './card-thresholds';
import { CardArmor } from './card-armor';
import { CardHands } from './card-hands';
import { CardEvasion } from './card-evasion';
import { CardTier } from './card-tier';

export type DaggerHeartCardProps = {
  card: CardProperties;
  options?: any;
};

export const defaultOptions = {
  cardBorder: true,
  boldRulesText: true,
  thresholdsAsText: false,
  includeSpellcast: true,
};

export const DaggerHeartCard: React.FC<DaggerHeartCardProps> = ({
  card: {
    type,
    title,
    subtitle,
    image,
    artist,
    domain,
    domainSecondary,
    subtype,
    spellcast,
    cost,
    level,
    armor,
    hands,
    evasion,
    sections,
    thresholds,
    weapon,
  },
  options: {
    boldRulesText,
    cardBorder,
    thresholdsAsText,
    includeSpellcast,
    includeEquipmentTier,
  } = defaultOptions,
}) => {
  const Divider = getDivider(type);
  return (
    <div
      className={cn(
        'h-[476px] w-[340px] overflow-hidden',
        cardBorder && 'rounded-xl border-2 border-dh-gold-light shadow-lg',
      )}
    >
      <div className='relative flex h-full flex-col bg-white'>
        {type === 'domain' || type === 'subclass' || type === 'class' ? (
          <CardBanner
            domainPrimary={domain}
            domainSecondary={domainSecondary}
            level={level}
          />
        ) : null}
        {type === 'domain' ? <CardStress cost={cost} /> : null}
        {type === 'equipment' && subtitle === 'armor' ? (
          <CardArmor score={armor} />
        ) : null}
        {type === 'equipment' &&
        (subtitle === 'primary weapon' || subtitle === 'secondary weapon') ? (
          <CardHands hands={hands} />
        ) : null}
        {type === 'equipment' && includeEquipmentTier ? (
          <CardTier level={level} />
        ) : null}
        {type === 'class' && <CardEvasion score={evasion} />}
        <div className='h-[240px] overflow-hidden'>
          <img
            className='-z-10 w-full object-cover object-center-top'
            src={image}
          />
        </div>
        <div className='flex-start absolute bottom-9 flex min-h-[200px] w-full flex-col items-center gap-1.5 bg-white px-6 font-barlow font-medium'>
          <Divider
            domainPrimary={domain}
            domainSecondary={domainSecondary}
            text={subtype}
          />
          <p
            className={cn(
              'z-20 w-full pt-4 font-eveleth-clean text-2xl',
              type === 'ancestry' || type === 'community'
                ? 'text-card-title-lg'
                : 'text-center text-card-title-sm',
            )}
          >
            {title}
          </p>
          {type === 'subclass' || type === 'equipment' || type === 'class' ? (
            <p className='text-card-subtitle font-semibold capitalize italic'>
              {subtitle}
            </p>
          ) : null}
          {spellcast && includeSpellcast ? (
            <p className='text-card-subtitle uppercase'>
              <span className='font-bold'>Spellcast: </span>
              {spellcast}
            </p>
          ) : null}

          {(subtitle === 'primary weapon' || subtitle === 'secondary weapon') &&
          weapon ? (
            <p className='text-card-subtitle'>
              <span className='font-bold capitalize'>
                {weapon.trait} {weapon.distance}
              </span>
              <span> - </span>
              <span>
                {weapon.damageAmount}{' '}
                <span className='capitalize'>({weapon.damageType})</span>
              </span>
            </p>
          ) : null}
          <div className='my-2 w-full space-y-2 text-left'>
            {sections.map((s, i) => (
              <CardText key={i} {...s} boldRulesText={boldRulesText} />
            ))}
          </div>
          {thresholds ? (
            <CardThresholds thresholds={thresholds} asText={thresholdsAsText} />
          ) : null}
        </div>
        {artist ? (
          <div className='absolute bottom-2 left-2 text-card-credits italic text-slate-400'>
            {artist}
          </div>
        ) : null}
        <div className='absolute bottom-2 right-2 text-card-credits italic text-slate-400'>
          © 2024 {daggerheartVersion}
        </div>
      </div>
    </div>
  );
};
