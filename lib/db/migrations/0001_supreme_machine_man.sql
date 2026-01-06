CREATE TABLE "staff" (
	"id" serial PRIMARY KEY NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(50) NOT NULL,
	"position" varchar(255) NOT NULL,
	"department" varchar(255) NOT NULL,
	"salary" varchar(50),
	"hire_date" timestamp NOT NULL,
	"password" varchar(255) NOT NULL,
	"notes" text,
	"status" varchar(50) DEFAULT 'Active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "staff_email_unique" UNIQUE("email")
);
