import { Fragment } from 'react';

import type { CardTextListType, CardTextSection } from '@/lib/types';
import { cn } from '@/lib/utils';
import { rulesTextRegex } from '@/constants/rules-texts';

type CardTextProps = CardTextSection & {
  listType?: CardTextListType;
  boldRulesText?: boolean;
};

const CardTextWithRules: React.FC<{
  text: string;
  boldRulesText?: boolean;
}> = ({ text, boldRulesText }) => {
  if (boldRulesText) {
    const textWithRules = text.replace(
      rulesTextRegex,
      '<span class="font-bold">$&</span>',
    );
    return <span dangerouslySetInnerHTML={{ __html: textWithRules }}></span>;
  }
  return <span>{text}</span>;
};

export const CardText: React.FC<CardTextProps> = ({
  type,
  text,
  listType,
  boldRulesText,
}) => {
  const listClasses = 'list-outside text-pretty text-card-content pl-4';
  switch (type) {
    case 'list':
      return listType === 'bullet' ? (
        <ul className={cn(listClasses, 'list-disc italic')}>
          {text.map((t, i) => (
            <li key={`card-text-list-${i}`}>
              <CardTextWithRules text={t} boldRulesText={boldRulesText} />
            </li>
          ))}
        </ul>
      ) : (
        <ol className={cn(listClasses, 'list-decimal')}>
          {text.map((t, i) => (
            <li key={`card-text-list-${i}`}>
              <CardTextWithRules text={t} boldRulesText={boldRulesText} />
            </li>
          ))}
        </ol>
      );
    case 'flavor':
      return (
        <p className={cn('text-pretty text-card-content italic')}>
          <CardTextWithRules text={text} boldRulesText={boldRulesText} />
        </p>
      );
    case 'feature':
      return (
        <p className={cn('text-pretty text-card-content')}>
          <>
            <span className='font-bold italic'>{text.name}: </span>
            <CardTextWithRules
              text={text.description}
              boldRulesText={boldRulesText}
            />
          </>
        </p>
      );
    case 'rules':
      return (
        <p className={cn('text-pretty text-card-content')}>
          <CardTextWithRules text={text} boldRulesText={boldRulesText} />
        </p>
      );
    case 'custom':
      return (
        <div
          className={cn('text-pretty text-card-content')}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      );
    default:
      return null;
  }
};
