import { Fragment } from 'react';

import type { CardTextListType, CardTextSection } from '@/lib/types';
import { cn } from '@/lib/utils';
import { rulesTextRegex, rulesTexts } from '@/constants/rules-texts';

type CardTextProps = CardTextSection & { listType?: CardTextListType };

const CardTextWithRules: React.FC<{ text: string }> = ({ text }) => {
  const textWithRules = text.replace(
    rulesTextRegex,
    '<span class="font-bold">$&</span>',
  );
  return <span dangerouslySetInnerHTML={{ __html: textWithRules }}></span>;
};

export const CardText: React.FC<CardTextProps> = ({ type, text, listType }) => {
  const listClasses = 'list-outside text-pretty text-card-content pl-4';
  return type === 'list' ? (
    listType === 'bullet' ? (
      <ul className={cn(listClasses, 'list-disc italic')}>
        {text.map((t, i) => (
          <li key={`card-text-list-${i}`}>
            <CardTextWithRules text={t} />
          </li>
        ))}
      </ul>
    ) : (
      <ol className={cn(listClasses, 'list-decimal')}>
        {text.map((t, i) => (
          <li key={`card-text-list-${i}`}>
            <CardTextWithRules text={t} />
          </li>
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
          <CardTextWithRules text={text.description} />
        </>
      ) : (
        <CardTextWithRules text={text} />
      )}
    </p>
  );
};
