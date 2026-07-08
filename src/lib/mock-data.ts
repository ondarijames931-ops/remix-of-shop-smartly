export type Supermarket = {
  id: string;
  name: string;
  branch: string;
  city: string;
  address: string;
  lat: number;
  lng: number;
  hours: string;
  phone: string;
  rating: number;
  tags: string[];
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  unit: string;
  supermarket: string;
  image: string;
};

export type Offer = {
  id: string;
  title: string;
  supermarket: string;
  description: string;
  discount: string;
  validUntil: string;
  color: string;
};

// KES prices; coordinates in Kenya
export const supermarkets: Supermarket[] = [
  { id: "naivas-westgate", name: "Naivas", branch: "Westgate Mall", city: "Nairobi", address: "Mwanzi Rd, Westlands", lat: -1.2569, lng: 36.8033, hours: "8:00 - 22:00", phone: "+254 709 434000", rating: 4.6, tags: ["Groceries", "Household", "Fresh Produce"] },
  { id: "naivas-mombasa", name: "Naivas", branch: "Nyali Centre", city: "Mombasa", address: "Links Rd, Nyali", lat: -4.0261, lng: 39.7112, hours: "8:00 - 21:00", phone: "+254 709 434100", rating: 4.5, tags: ["Groceries", "Butchery"] },
  { id: "quickmart-thika", name: "Quickmart", branch: "Thika Road Mall", city: "Nairobi", address: "Thika Rd, Roasters", lat: -1.2197, lng: 36.8890, hours: "8:00 - 22:00", phone: "+254 709 550000", rating: 4.4, tags: ["Groceries", "Electronics"] },
  { id: "quickmart-kilimani", name: "Quickmart", branch: "Yaya Centre", city: "Nairobi", address: "Argwings Kodhek Rd, Kilimani", lat: -1.2921, lng: 36.7859, hours: "8:00 - 23:00", phone: "+254 709 550100", rating: 4.7, tags: ["Groceries", "Bakery"] },
  { id: "shoprite-kisumu", name: "Shoprite", branch: "West End Mall", city: "Kisumu", address: "Kisumu-Kakamega Rd", lat: -0.0917, lng: 34.7680, hours: "9:00 - 21:00", phone: "+254 703 070000", rating: 4.3, tags: ["Groceries", "Wholesale"] },
  { id: "shoprite-garden", name: "Shoprite", branch: "Garden City Mall", city: "Nairobi", address: "Thika Rd, Ruaraka", lat: -1.2325, lng: 36.8794, hours: "8:00 - 22:00", phone: "+254 703 070100", rating: 4.5, tags: ["Groceries", "Household"] },
  { id: "carrefour-twop", name: "Carrefour", branch: "Two Rivers Mall", city: "Nairobi", address: "Limuru Rd, Runda", lat: -1.2103, lng: 36.7995, hours: "9:00 - 22:00", phone: "+254 709 812000", rating: 4.7, tags: ["Groceries", "Imported"] },
  { id: "chandarana-lavington", name: "Chandarana Foodplus", branch: "Lavington Mall", city: "Nairobi", address: "James Gichuru Rd", lat: -1.2795, lng: 36.7714, hours: "8:00 - 21:00", phone: "+254 722 200000", rating: 4.6, tags: ["Gourmet", "Fresh Produce"] },
];

export const categories = [
  "Fresh Produce", "Groceries", "Beverages", "Household", "Bakery", "Electronics",
];

export const products: Product[] = [
  { id: "p1", name: "Unga wa Ngano (Ajab)", category: "Groceries", price: 175, originalPrice: 210, unit: "2kg", supermarket: "Naivas", image: "🌾" },
  { id: "p2", name: "Fresh Sukuma Wiki", category: "Fresh Produce", price: 25, unit: "bunch", supermarket: "Chandarana", image: "🥬" },
  { id: "p3", name: "Kenchic Chicken", category: "Groceries", price: 720, originalPrice: 850, unit: "1.2kg", supermarket: "Quickmart", image: "🍗" },
  { id: "p4", name: "Brookside Milk", category: "Beverages", price: 65, unit: "500ml", supermarket: "Naivas", image: "🥛" },
  { id: "p5", name: "Coca-Cola 2L", category: "Beverages", price: 199, originalPrice: 240, unit: "2L", supermarket: "Carrefour", image: "🥤" },
  { id: "p6", name: "Ripe Bananas", category: "Fresh Produce", price: 120, unit: "kg", supermarket: "Shoprite", image: "🍌" },
  { id: "p7", name: "Omo Detergent", category: "Household", price: 480, originalPrice: 550, unit: "1kg", supermarket: "Quickmart", image: "🧺" },
  { id: "p8", name: "Whole Wheat Bread", category: "Bakery", price: 75, unit: "400g", supermarket: "Naivas", image: "🍞" },
  { id: "p9", name: "Fresh Tomatoes", category: "Fresh Produce", price: 95, unit: "kg", supermarket: "Chandarana", image: "🍅" },
  { id: "p10", name: "Blueband Margarine", category: "Groceries", price: 210, unit: "500g", supermarket: "Shoprite", image: "🧈" },
  { id: "p11", name: "Tusker Lager 6-pack", category: "Beverages", price: 990, originalPrice: 1200, unit: "6x500ml", supermarket: "Carrefour", image: "🍺" },
  { id: "p12", name: "Bluetooth Speaker", category: "Electronics", price: 2499, originalPrice: 3200, unit: "1pc", supermarket: "Quickmart", image: "🔊" },
  { id: "p13", name: "Basmati Rice", category: "Groceries", price: 320, unit: "1kg", supermarket: "Naivas", image: "🍚" },
  { id: "p14", name: "Avocados", category: "Fresh Produce", price: 40, unit: "each", supermarket: "Shoprite", image: "🥑" },
  { id: "p15", name: "Toilet Paper 10-pack", category: "Household", price: 550, originalPrice: 650, unit: "10 rolls", supermarket: "Carrefour", image: "🧻" },
  { id: "p16", name: "Chocolate Croissants", category: "Bakery", price: 180, unit: "4pcs", supermarket: "Chandarana", image: "🥐" },
];

export const offers: Offer[] = [
  { id: "o1", title: "Weekend Fresh Deals", supermarket: "Naivas", description: "Up to 30% off fresh produce, meat and dairy every Saturday & Sunday.", discount: "30% OFF", validUntil: "Every weekend", color: "from-blue-600 to-cyan-500" },
  { id: "o2", title: "Quickmart Beba Points 2X", supermarket: "Quickmart", description: "Earn double loyalty points on all household essentials this month.", discount: "2X POINTS", validUntil: "Jul 31, 2026", color: "from-indigo-600 to-blue-500" },
  { id: "o3", title: "Shoprite Wholesale Wednesday", supermarket: "Shoprite", description: "Bulk discounts on rice, sugar, cooking oil and flour every Wednesday.", discount: "Save KES 500+", validUntil: "Wednesdays", color: "from-sky-600 to-blue-500" },
  { id: "o4", title: "Carrefour Imported Week", supermarket: "Carrefour", description: "20% off imported wines, cheeses and gourmet chocolates.", discount: "20% OFF", validUntil: "Jul 20, 2026", color: "from-blue-700 to-indigo-500" },
  { id: "o5", title: "Chandarana Bakery Hour", supermarket: "Chandarana", description: "Half price on all baked goods after 7pm daily.", discount: "50% OFF", validUntil: "Daily 7pm", color: "from-cyan-600 to-blue-500" },
  { id: "o6", title: "Naivas Back-to-School", supermarket: "Naivas", description: "Bundle savings on stationery, snacks and lunchboxes.", discount: "Bundles", validUntil: "Aug 15, 2026", color: "from-blue-600 to-indigo-500" },
];

export const formatKES = (n: number) =>
  `KES ${n.toLocaleString("en-KE", { maximumFractionDigits: 0 })}`;
