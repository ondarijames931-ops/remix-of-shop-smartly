import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import "dotenv/config";

const runMigrate = async () => {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

  // max: 1 limits connection overhead, prepare: false is required for Supabase Transaction Pooler
  const sql = postgres(process.env.DATABASE_URL, { max: 1, prepare: false });
  const db = drizzle(sql);

  console.log("Running migrations...");
  
  await migrate(db, { migrationsFolder: "./supabase/migrations" });
  
  console.log("Migrations complete! ✅");
  
  await sql.end();
  process.exit(0);
};

runMigrate();