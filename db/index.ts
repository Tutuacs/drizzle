import * as schema from './schema';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import 'dotenv/config';

const client = new Client({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'drizzle',
  // password: 'Tutuacs34',
  // port: 5432,
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle(client, { schema });
