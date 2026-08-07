import {
  pgTable,
  text,
  timestamp,
  uuid,
  decimal,
  boolean,
  jsonb,
  integer,
  pgEnum,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

// ENUMS & ROLES

export const userRoleEnum = pgEnum("user_role", [
  "CUSTOMER",
  "BUSINESS_OWNER",
  "ADMIN",
]);

export const businessStatusEnum = pgEnum("business_status", [
  "PENDING",
  "APPROVED",
  "REJECTED",
]);

// 1. USERS TABLE (Actors: Customer, Business Owner, Admin)

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  phone: text("phone").notNull().unique(),
  fullName: text("full_name").notNull(),
  role: userRoleEnum("role").notNull().default("CUSTOMER"),
  kycStatus: text("kyc_status").notNull().default("PENDING"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 2. BUSINESSES TABLE (through Admin)

export const businesses = pgTable("businesses", {
  id: uuid("id").primaryKey().defaultRandom(),
  ownerId: uuid("owner_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  approvedById: uuid("approved_by_id").references(() => users.id, {
    onDelete: "set null",
  }), // Admin foreign key
  status: businessStatusEnum("status").notNull().default("PENDING"),
  name: text("name").notNull(),
  type: text("type").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  county: text("county").notNull(),
  phone: text("phone").notNull(),
  website: text("website"),
  rating: decimal("rating", { precision: 3, scale: 2 }).default("0.00"),
  delivery: boolean("delivery").default(false),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  openingHours: text("opening_hours"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 3. PAYMENTS SERVICE

export const payments = pgTable("payments", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  checkoutRequestId: text("checkout_request_id").notNull().unique(),
  merchantRequestId: text("merchant_request_id").notNull(),
  phoneNumber: text("phone_number").notNull(),
  amount: decimal("amount", { precision: 10, scale: 2 }).notNull(),
  status: text("status").notNull().default("PENDING"),
  mpesaReceipt: text("mpesa_receipt"),
  rawCallback: jsonb("raw_callback"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 4. NASHA ENGINE LOGS

export const nashaLogs = pgTable("nasha_logs", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "set null" }),
  searchQuery: text("search_query").notNull(),
  category: text("category").notNull(),
  locationContext: text("location_context"),
  wasFound: boolean("was_found").notNull().default(false),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

// 5. HOMES SERVICE

export const homes = pgTable("homes", {
  id: uuid("id").primaryKey().defaultRandom(),
  agentId: uuid("agent_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  description: text("description"),
  price: decimal("price", { precision: 12, scale: 2 }).notNull(),
  bedrooms: integer("bedrooms"),
  county: text("county").notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 7 }),
  longitude: decimal("longitude", { precision: 10, scale: 7 }),
  isAvailable: boolean("is_available").default(true),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 6. EVENTS SERVICE

export const events = pgTable("events", {
  id: uuid("id").primaryKey().defaultRandom(),
  promoterId: uuid("promoter_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  title: text("title").notNull(),
  date: timestamp("date").notNull(),
  location: text("location").notNull(),
  ticketPrice: decimal("ticket_price", { precision: 10, scale: 2 }).notNull(),
  totalTickets: integer("total_tickets").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 7. RIDES SERVICE

export const rides = pgTable("rides", {
  id: uuid("id").primaryKey().defaultRandom(),
  driverId: uuid("driver_id").references(() => users.id, {
    onDelete: "set null",
  }),
  passengerId: uuid("passenger_id")
    .references(() => users.id, { onDelete: "cascade" })
    .notNull(),
  pickupLocation: text("pickup_location").notNull(),
  dropoffLocation: text("dropoff_location").notNull(),
  fareAmount: decimal("fare_amount", { precision: 10, scale: 2 }).notNull(),
  status: text("status").notNull().default("SEARCHING"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// DRIZZLE RELATIONS 

export const usersRelations = relations(users, ({ many }) => ({
  ownedBusinesses: many(businesses, { relationName: "business_owner" }),
  approvedBusinesses: many(businesses, { relationName: "admin_approver" }),
  payments: many(payments),
  nashaLogs: many(nashaLogs),
  homes: many(homes),
  events: many(events),
  passengerRides: many(rides, { relationName: "passenger_rides" }),
  driverRides: many(rides, { relationName: "driver_rides" }),
}));

export const businessesRelations = relations(businesses, ({ one }) => ({
  owner: one(users, {
    fields: [businesses.ownerId],
    references: [users.id],
    relationName: "business_owner",
  }),
  approvedBy: one(users, {
    fields: [businesses.approvedById],
    references: [users.id],
    relationName: "admin_approver",
  }),
}));

export const paymentsRelations = relations(payments, ({ one }) => ({
  user: one(users, {
    fields: [payments.userId],
    references: [users.id],
  }),
}));

export const nashaLogsRelations = relations(nashaLogs, ({ one }) => ({
  user: one(users, {
    fields: [nashaLogs.userId],
    references: [users.id],
  }),
}));

export const homesRelations = relations(homes, ({ one }) => ({
  agent: one(users, {
    fields: [homes.agentId],
    references: [users.id],
  }),
}));

export const eventsRelations = relations(events, ({ one }) => ({
  promoter: one(users, {
    fields: [events.promoterId],
    references: [users.id],
  }),
}));

export const ridesRelations = relations(rides, ({ one }) => ({
  passenger: one(users, {
    fields: [rides.passengerId],
    references: [users.id],
    relationName: "passenger_rides",
  }),
  driver: one(users, {
    fields: [rides.driverId],
    references: [users.id],
    relationName: "driver_rides",
  }),
}));