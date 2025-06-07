import { boolean, pgTable, uuid } from 'drizzle-orm/pg-core';

import { timestamps, uuidPrimaryKey } from './columns.helpers';
import { users } from './auth.sql';
import { adversaryPreviews, cardPreviews } from './constants.sql';

export const userCards = pgTable('user_cards', {
  ...uuidPrimaryKey,
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  public: boolean('public').default(false),
  cardPreviewId: uuid('card_preview_id')
    .notNull()
    .references(() => cardPreviews.id, { onDelete: 'cascade' }),
  ...timestamps,
});

export const userAdversaries = pgTable('user_adversaries', {
  ...uuidPrimaryKey,
  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  public: boolean('public').default(false),
  adversaryPreviewId: uuid('adversary_preview_id')
    .notNull()
    .references(() => adversaryPreviews.id, { onDelete: 'cascade' }),
  ...timestamps,
});
