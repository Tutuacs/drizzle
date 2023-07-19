import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import { migrate } from "drizzle-orm/mysql2/migrator"
 
const connection = mysql.createPool({    
  host: "localhost",
  user: "root",
  password: "Tutuacs34!",
  database: "drizzle",
  port: 3306,
});
 
export const db = drizzle(connection);


async function main() {
    console.log("Migrating database...");
    await migrate(db, { migrationsFolder: "drizzle" });
    console.log("Migrated database.");
  }

main().catch((err) => {console.error(err); process.exit(1);});
