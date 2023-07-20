CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"phone" varchar(255),
	"address" text
);
--> statement-breakpoint
DROP TABLE "users";