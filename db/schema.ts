import { InferModel } from 'drizzle-orm';
import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  decimal,
  time,
  timestamp,
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  phone: varchar('phone', { length: 255 }),
  address: text('address'),
});

export const testTable = pgTable('test_table', {
  id: serial('id').primaryKey(),
  test: text('test').notNull(),
  number: decimal('number').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }),
});

type User = InferModel<typeof user, 'select'>;
type NewUser = InferModel<typeof user, 'insert'>;
