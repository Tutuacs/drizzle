CREATE TABLE IF NOT EXISTS "test_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"test" text NOT NULL,
	"number" numeric NOT NULL,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phone" varchar(255),
	"address" text
);
