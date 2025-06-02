CREATE TABLE "class_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"domain_primary" text NOT NULL,
	"domain_secondary" text NOT NULL,
	"source" text NOT NULL,
	CONSTRAINT "class_options_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "domain_options" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"color" text NOT NULL,
	"source" text NOT NULL,
	CONSTRAINT "domain_options_name_unique" UNIQUE("name")
);
