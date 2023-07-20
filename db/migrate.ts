import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import 'dotenv/config';

const pool = new Pool({
  // user: 'postgres',
  // host: 'localhost',
  // database: 'drizzle',
  // password: 'Tutuacs34',
  // port: 5432,
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log('Migrating database...');
  await migrate(db, { migrationsFolder: 'drizzle' });
  console.log('Migrated database.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
