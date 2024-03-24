import type { CardTextListType, CardTextSection } from '@/lib/types';
import { cn } from '@/lib/utils';

type CardTextProps = CardTextSection & { listType?: CardTextListType };

export const CardText: React.FC<CardTextProps> = ({ type, text, listType }) => {
  const listClasses = 'list-outside text-pretty text-card-content pl-4';
  return type === 'list' ? (
    listType === 'bullet' ? (
      <ul className={cn(listClasses, 'list-disc italic')}>
        {text.map((t, i) => (
          <li key={`card-text-list-${i}`}>{t}</li>
        ))}
      </ul>
    ) : (
      <ol className={cn(listClasses, 'list-decimal')}>
        {text.map((t, i) => (
          <li key={`card-text-list-${i}`}>{t}</li>
        ))}
      </ol>
    )
  ) : (
    <p
      className={cn(
        'text-pretty text-card-content',
        type === 'flavor' && 'italic',
      )}
    >
      {type === 'feature' ? (
        <>
          <span className='font-bold italic'>{text.name}: </span>
          {text.description}
        </>
      ) : (
        text
      )}
    </p>
  );
};
