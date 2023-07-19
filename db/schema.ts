import { mysqlTable, serial, varchar, text, int, float, time, timestamp } from 'drizzle-orm/mysql-core'

export const user = mysqlTable('users', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    phone: varchar('phone', {length: 255}),
    address: text('address'),
});

export const testTable = mysqlTable('test_table', {
    id: serial('id').primaryKey(),
    test: text('test').notNull(),
    number: float('number').notNull(),
    createdAt: timestamp('created_at', {mode: 'date'})
});