CREATE TABLE "businesses" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"owner_id" uuid,
	"name" text NOT NULL,
	"type" text NOT NULL,
	"address" text NOT NULL,
	"city" text NOT NULL,
	"county" text NOT NULL,
	"phone" text NOT NULL,
	"website" text,
	"rating" numeric(3, 2) DEFAULT '0.00',
	"delivery" boolean DEFAULT false,
	"latitude" numeric(10, 7),
	"longitude" numeric(10, 7),
	"opening_hours" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "events" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"promoter_id" uuid,
	"title" text NOT NULL,
	"date" timestamp NOT NULL,
	"location" text NOT NULL,
	"ticket_price" numeric(10, 2) NOT NULL,
	"total_tickets" integer NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "homes" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"agent_id" uuid,
	"title" text NOT NULL,
	"description" text,
	"price" numeric(12, 2) NOT NULL,
	"bedrooms" integer,
	"county" text NOT NULL,
	"latitude" numeric(10, 7),
	"longitude" numeric(10, 7),
	"is_available" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "nasha_logs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"search_query" text NOT NULL,
	"category" text NOT NULL,
	"location_context" text,
	"was_found" boolean DEFAULT false NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "payments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid,
	"checkout_request_id" text NOT NULL,
	"merchant_request_id" text NOT NULL,
	"phone_number" text NOT NULL,
	"amount" numeric(10, 2) NOT NULL,
	"status" text DEFAULT 'PENDING' NOT NULL,
	"mpesa_receipt" text,
	"raw_callback" jsonb,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "payments_checkout_request_id_unique" UNIQUE("checkout_request_id")
);
--> statement-breakpoint
CREATE TABLE "rides" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"driver_id" uuid,
	"passenger_id" uuid,
	"pickup_location" text NOT NULL,
	"dropoff_location" text NOT NULL,
	"fare_amount" numeric(10, 2) NOT NULL,
	"status" text DEFAULT 'SEARCHING' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"phone" text NOT NULL,
	"full_name" text NOT NULL,
	"kyc_status" text DEFAULT 'PENDING' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_phone_unique" UNIQUE("phone")
);
--> statement-breakpoint
ALTER TABLE "businesses" ADD CONSTRAINT "businesses_owner_id_users_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_promoter_id_users_id_fk" FOREIGN KEY ("promoter_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "homes" ADD CONSTRAINT "homes_agent_id_users_id_fk" FOREIGN KEY ("agent_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "nasha_logs" ADD CONSTRAINT "nasha_logs_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rides" ADD CONSTRAINT "rides_driver_id_users_id_fk" FOREIGN KEY ("driver_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "rides" ADD CONSTRAINT "rides_passenger_id_users_id_fk" FOREIGN KEY ("passenger_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;