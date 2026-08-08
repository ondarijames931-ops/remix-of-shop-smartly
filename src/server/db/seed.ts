import "dotenv/config";
import { db } from "./index";
import { users, businesses, homes, events, rides } from "./schema";

async function seed() {
  console.log("🌱 Starting database migration/seed...");

  try {
    // 1. Insert Base Users (Actors)
    console.log("Inserting users...");
    const insertedUsers = await db.insert(users).values([
      {
        phone: "0711111111",
        fullName: "System Admin",
        role: "ADMIN",
        kycStatus: "APPROVED",
      },
      {
        phone: "0722222222",
        fullName: "Jane Merchant",
        role: "BUSINESS_OWNER",
        kycStatus: "APPROVED",
      },
      {
        phone: "0733333333",
        fullName: "John Customer",
        role: "CUSTOMER",
        kycStatus: "PENDING",
      },
    ]).returning();

    const admin = insertedUsers[0];
    const merchant = insertedUsers[1];
    const customer = insertedUsers[2];

    // 2. Insert Businesses
    console.log("Inserting businesses...");
    await db.insert(businesses).values([
      {
        ownerId: merchant.id,
        approvedById: admin.id,
        status: "APPROVED",
        name: "Mock Supermarket",
        type: "Retail",
        address: "123 Main Street",
        city: "Metropolis",
        county: "Central",
        phone: "0722222222",
        rating: "4.5",
        delivery: true,
      },
    ]);

    // 3. Insert Homes
    console.log("Inserting homes...");
    await db.insert(homes).values([
      {
        agentId: merchant.id,
        title: "2 Bedroom Apartment",
        description: "Spacious apartment with city views.",
        price: "45000.00",
        bedrooms: 2,
        county: "Central",
        isAvailable: true,
      },
    ]);

    // 4. Insert Events
    console.log("Inserting events...");
    await db.insert(events).values([
      {
        promoterId: merchant.id,
        title: "Tech Meetup 2026",
        date: new Date("2026-10-15T18:00:00Z"),
        location: "Convention Center",
        ticketPrice: "1500.00",
        totalTickets: 200,
      },
    ]);

    // 5. Insert Rides
    console.log("Inserting rides...");
    await db.insert(rides).values([
      {
        driverId: merchant.id, // Using merchant as driver for mock purposes
        passengerId: customer.id,
        pickupLocation: "Central Station",
        dropoffLocation: "Airport",
        fareAmount: "850.00",
        status: "COMPLETED",
      },
    ]);

    console.log("✅ Mock data migration complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error during migration:", error);
    process.exit(1);
  }
}

seed();