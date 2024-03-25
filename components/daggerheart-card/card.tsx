import type { CardType, CardTextSection } from '@/lib/types';
import { cn } from '@/lib/utils';
import { getDivider } from './card-divider';
import { CardStress } from './card-stress';
import { CardBanner } from './card-banner';
import { CardText } from './card-text';

export type DaggerHeartCardProps = {
  type: CardType;
  title: string;
  image: string;
  artist?: string;
  domain?: string;
  domainSecondary?: string;
  subtype?: string;
  level?: number;
  cost?: number;
  subtitle?: string;
  spellcast?: string;
  sections: CardTextSection[];
};

export const DaggerHeartCard: React.FC<DaggerHeartCardProps> = ({
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
  sections,
}) => {
  const Divider = getDivider(type);
  return (
    <div className='h-[476px] w-[340px] overflow-hidden'>
      <div className='relative flex h-full flex-col bg-white'>
        {type === 'domain' || type === 'subclass' ? (
          <CardBanner
            domainPrimary={domain}
            domainSecondary={domainSecondary}
            level={level}
          />
        ) : null}
        {type === 'domain' ? <CardStress cost={cost} /> : null}
        <div className='h-[240px] overflow-hidden'>
          <img
            className='-z-10 w-full object-cover object-center-top'
            src={image}
          />
        </div>
        <div className='flex-start absolute bottom-[36px] flex min-h-[200px] w-full flex-col items-center gap-1.5 bg-white px-6'>
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
          {type === 'subclass' ? (
            <p className='text-card-subtitle font-semibold capitalize italic'>
              {subtitle}
            </p>
          ) : null}
          {spellcast ? (
            <p className='text-card-subtitle uppercase'>
              <span className='font-bold'>Spellcast: </span>
              {spellcast}
            </p>
          ) : null}
          <div className='my-2 w-full space-y-2 text-left'>
            {sections.map((s, i) => (
              <CardText key={i} {...s} />
            ))}
          </div>
        </div>
        {artist ? (
          <div className='text-card-credits absolute bottom-2 left-2 text-xs italic text-slate-400'>
            {artist}
          </div>
        ) : null}
        <div className='text-card-credits absolute bottom-2 right-2 text-xs italic text-slate-400'>
          © 2024 Daggerheart v1.2 Open Beta
        </div>
      </div>
    </div>
  );
};
