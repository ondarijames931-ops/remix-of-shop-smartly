import flour from "@/assets/products/flour.jpg";
import sukuma from "@/assets/products/sukuma.jpg";
import chicken from "@/assets/products/chicken.jpg";
import milk from "@/assets/products/milk.jpg";
import cola from "@/assets/products/cola.jpg";
import bananas from "@/assets/products/bananas.jpg";
import detergent from "@/assets/products/detergent.jpg";
import bread from "@/assets/products/bread.jpg";
import tomatoes from "@/assets/products/tomatoes.jpg";
import margarine from "@/assets/products/margarine.jpg";
import beer from "@/assets/products/beer.jpg";
import speaker from "@/assets/products/speaker.jpg";
import rice from "@/assets/products/rice.jpg";
import avocado from "@/assets/products/avocado.jpg";
import toiletpaper from "@/assets/products/toiletpaper.jpg";
import croissant from "@/assets/products/croissant.jpg";
import eggs from "@/assets/products/eggs.jpg";
import oil from "@/assets/products/oil.jpg";
import sugar from "@/assets/products/sugar.jpg";
import tea from "@/assets/products/tea.jpg";
import soap from "@/assets/products/soap.jpg";
import toothpaste from "@/assets/products/toothpaste.jpg";
import kettle from "@/assets/products/kettle.jpg";
import charger from "@/assets/products/charger.jpg";
import onions from "@/assets/products/onions.jpg";
import beans from "@/assets/products/beans.jpg";
import salt from "@/assets/products/salt.jpg";
import spaghetti from "@/assets/products/spaghetti.jpg";
import honey from "@/assets/products/honey.jpg";
import coffee from "@/assets/products/coffee.jpg";
import yogurt from "@/assets/products/yogurt.jpg";
import cheese from "@/assets/products/cheese.jpg";
import cornflakes from "@/assets/products/cornflakes.jpg";
import peanutbutter from "@/assets/products/peanutbutter.jpg";
import diapers from "@/assets/products/diapers.jpg";
import biscuits from "@/assets/products/biscuits.jpg";
import ketchup from "@/assets/products/ketchup.jpg";
import tv from "@/assets/products/tv.jpg";
import microwave from "@/assets/products/microwave.jpg";
import blender from "@/assets/products/blender.jpg";
import fridge from "@/assets/products/fridge.jpg";
import washer from "@/assets/products/washer.jpg";
import phone from "@/assets/products/phone.jpg";
import laptop from "@/assets/products/laptop.jpg";
import airfryer from "@/assets/products/airfryer.jpg";
import iron from "@/assets/products/iron.jpg";
import gas from "@/assets/products/gas.jpg";
import cookware from "@/assets/products/cookware.jpg";
import matches from "@/assets/products/matches.jpg";
import candles from "@/assets/products/candles.jpg";
import notebook from "@/assets/products/notebook.jpg";
import pineapple from "@/assets/products/pineapple.jpg";
import carrots from "@/assets/products/carrots.jpg";
import fish from "@/assets/products/fish.jpg";
import beef from "@/assets/products/beef.jpg";
import wine from "@/assets/products/wine.jpg";
import juice from "@/assets/products/juice.jpg";
import water from "@/assets/products/water.jpg";
import shampoo from "@/assets/products/shampoo.jpg";
import lotion from "@/assets/products/lotion.jpg";
import deodorant from "@/assets/products/deodorant.jpg";
import mattress from "@/assets/products/mattress.jpg";

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
  "Fresh Produce", "Groceries", "Beverages", "Household", "Bakery", "Electronics", "Personal Care",
];

export const products: Product[] = [
  { id: "p1", name: "Ajab Wheat Flour", category: "Groceries", price: 175, originalPrice: 210, unit: "2kg", supermarket: "Naivas", image: flour },
  { id: "p2", name: "Fresh Sukuma Wiki", category: "Fresh Produce", price: 25, unit: "bunch", supermarket: "Chandarana", image: sukuma },
  { id: "p3", name: "Kenchic Whole Chicken", category: "Groceries", price: 720, originalPrice: 850, unit: "1.2kg", supermarket: "Quickmart", image: chicken },
  { id: "p4", name: "Brookside Fresh Milk", category: "Beverages", price: 65, unit: "500ml", supermarket: "Naivas", image: milk },
  { id: "p5", name: "Coca-Cola PET Bottle", category: "Beverages", price: 199, originalPrice: 240, unit: "2L", supermarket: "Carrefour", image: cola },
  { id: "p6", name: "Ripe Sweet Bananas", category: "Fresh Produce", price: 120, unit: "kg", supermarket: "Shoprite", image: bananas },
  { id: "p7", name: "Lander Laundry Powder", category: "Household", price: 480, originalPrice: 550, unit: "1kg", supermarket: "Quickmart", image: detergent },
  { id: "p8", name: "Whole Wheat Brown Loaf", category: "Bakery", price: 75, unit: "400g", supermarket: "Naivas", image: bread },
  { id: "p9", name: "Vine Ripe Tomatoes", category: "Fresh Produce", price: 95, unit: "kg", supermarket: "Chandarana", image: tomatoes },
  { id: "p10", name: "Blue Band Margarine", category: "Groceries", price: 210, unit: "500g", supermarket: "Shoprite", image: margarine },
  { id: "p11", name: "Legend Lager 6-Pack", category: "Beverages", price: 990, originalPrice: 1200, unit: "6×500ml", supermarket: "Carrefour", image: beer },
  { id: "p12", name: "Portable Bluetooth Speaker", category: "Electronics", price: 2499, originalPrice: 3200, unit: "1pc", supermarket: "Quickmart", image: speaker },
  { id: "p13", name: "Premium Basmati Rice", category: "Groceries", price: 320, unit: "1kg", supermarket: "Naivas", image: rice },
  { id: "p14", name: "Fresh Hass Avocados", category: "Fresh Produce", price: 40, unit: "each", supermarket: "Shoprite", image: avocado },
  { id: "p15", name: "Soft Toilet Paper 10-Pack", category: "Household", price: 550, originalPrice: 650, unit: "10 rolls", supermarket: "Carrefour", image: toiletpaper },
  { id: "p16", name: "Butter Croissants", category: "Bakery", price: 180, unit: "4pcs", supermarket: "Chandarana", image: croissant },
  { id: "p17", name: "Farm Fresh Eggs", category: "Groceries", price: 480, originalPrice: 520, unit: "tray of 30", supermarket: "Naivas", image: eggs },
  { id: "p18", name: "Golden Sunflower Cooking Oil", category: "Groceries", price: 385, unit: "1L", supermarket: "Shoprite", image: oil },
  { id: "p19", name: "Kabras White Sugar", category: "Groceries", price: 340, originalPrice: 400, unit: "2kg", supermarket: "Quickmart", image: sugar },
  { id: "p20", name: "Kenya Black Tea Leaves", category: "Beverages", price: 260, unit: "250g", supermarket: "Naivas", image: tea },
  { id: "p21", name: "Moisturising Beauty Soap", category: "Personal Care", price: 120, unit: "125g bar", supermarket: "Chandarana", image: soap },
  { id: "p22", name: "Colgate Toothpaste", category: "Personal Care", price: 165, originalPrice: 195, unit: "100ml", supermarket: "Carrefour", image: toothpaste },
  { id: "p23", name: "Stainless Steel Kettle 1.7L", category: "Electronics", price: 3499, originalPrice: 4200, unit: "1pc", supermarket: "Quickmart", image: kettle },
  { id: "p24", name: "USB-C Phone Charger 20W", category: "Electronics", price: 899, unit: "1pc", supermarket: "Naivas", image: charger },
  { id: "p25", name: "Fresh Red Onions", category: "Fresh Produce", price: 140, unit: "kg", supermarket: "Shoprite", image: onions },
  { id: "p26", name: "Baked Beans in Tomato Sauce", category: "Groceries", price: 145, originalPrice: 175, unit: "400g tin", supermarket: "Carrefour", image: beans },

  // Groceries – flour, maize meal, rice, pasta
  { id: "p27", name: "Pembe Maize Flour", category: "Groceries", price: 165, unit: "2kg", supermarket: "Shoprite", image: flour },
  { id: "p28", name: "Jogoo Maize Meal", category: "Groceries", price: 180, originalPrice: 210, unit: "2kg", supermarket: "Quickmart", image: flour },
  { id: "p29", name: "Exe Wheat Flour", category: "Groceries", price: 195, unit: "2kg", supermarket: "Carrefour", image: flour },
  { id: "p30", name: "Dola Long Grain Rice", category: "Groceries", price: 285, originalPrice: 320, unit: "1kg", supermarket: "Quickmart", image: rice },
  { id: "p31", name: "Mwea Pishori Rice", category: "Groceries", price: 420, unit: "2kg", supermarket: "Naivas", image: rice },
  { id: "p32", name: "Daawat Basmati Rice", category: "Groceries", price: 850, originalPrice: 990, unit: "2kg", supermarket: "Carrefour", image: rice },
  { id: "p33", name: "Ndovu Sugar", category: "Groceries", price: 175, unit: "1kg", supermarket: "Shoprite", image: sugar },
  { id: "p34", name: "Mumias Brown Sugar", category: "Groceries", price: 195, unit: "1kg", supermarket: "Naivas", image: sugar },
  { id: "p35", name: "Elianto Cooking Oil", category: "Groceries", price: 720, originalPrice: 820, unit: "2L", supermarket: "Naivas", image: oil },
  { id: "p36", name: "Fresh Fri Vegetable Oil", category: "Groceries", price: 395, unit: "1L", supermarket: "Quickmart", image: oil },
  { id: "p37", name: "Rina Sunflower Oil", category: "Groceries", price: 410, unit: "1L", supermarket: "Chandarana", image: oil },
  { id: "p38", name: "Prestige Margarine", category: "Groceries", price: 190, originalPrice: 220, unit: "500g", supermarket: "Naivas", image: margarine },
  { id: "p39", name: "Blue Band Original", category: "Groceries", price: 240, unit: "500g", supermarket: "Carrefour", image: margarine },
  { id: "p40", name: "Heinz Baked Beans", category: "Groceries", price: 210, unit: "415g tin", supermarket: "Chandarana", image: beans },
  { id: "p41", name: "Trufoods Baked Beans", category: "Groceries", price: 135, originalPrice: 160, unit: "400g tin", supermarket: "Naivas", image: beans },
  { id: "p42", name: "Kenchic Chicken Drumsticks", category: "Groceries", price: 540, unit: "1kg", supermarket: "Naivas", image: chicken },
  { id: "p43", name: "Farmer's Choice Chicken Sausages", category: "Groceries", price: 380, originalPrice: 450, unit: "400g", supermarket: "Shoprite", image: chicken },
  { id: "p44", name: "Quail Farm Eggs", category: "Groceries", price: 260, unit: "tray of 12", supermarket: "Chandarana", image: eggs },
  { id: "p45", name: "Kenchic Eggs", category: "Groceries", price: 460, originalPrice: 500, unit: "tray of 30", supermarket: "Quickmart", image: eggs },

  // Fresh Produce
  { id: "p46", name: "Fresh Spinach Bunch", category: "Fresh Produce", price: 30, unit: "bunch", supermarket: "Naivas", image: sukuma },
  { id: "p47", name: "Green Kale (Sukuma)", category: "Fresh Produce", price: 25, unit: "bunch", supermarket: "Quickmart", image: sukuma },
  { id: "p48", name: "Managu Traditional Greens", category: "Fresh Produce", price: 40, unit: "bunch", supermarket: "Shoprite", image: sukuma },
  { id: "p49", name: "Roma Tomatoes", category: "Fresh Produce", price: 110, unit: "kg", supermarket: "Naivas", image: tomatoes },
  { id: "p50", name: "Cherry Tomatoes Punnet", category: "Fresh Produce", price: 180, originalPrice: 220, unit: "250g", supermarket: "Carrefour", image: tomatoes },
  { id: "p51", name: "White Onions", category: "Fresh Produce", price: 130, unit: "kg", supermarket: "Quickmart", image: onions },
  { id: "p52", name: "Spring Onions Bunch", category: "Fresh Produce", price: 45, unit: "bunch", supermarket: "Chandarana", image: onions },
  { id: "p53", name: "Sweet Yellow Bananas", category: "Fresh Produce", price: 100, unit: "kg", supermarket: "Naivas", image: bananas },
  { id: "p54", name: "Green Cooking Bananas", category: "Fresh Produce", price: 90, unit: "kg", supermarket: "Quickmart", image: bananas },
  { id: "p55", name: "Fuerte Avocados", category: "Fresh Produce", price: 35, unit: "each", supermarket: "Chandarana", image: avocado },
  { id: "p56", name: "Organic Hass Avocados", category: "Fresh Produce", price: 55, originalPrice: 70, unit: "each", supermarket: "Carrefour", image: avocado },

  // Beverages
  { id: "p57", name: "Tuskys Whole Milk", category: "Beverages", price: 60, unit: "500ml", supermarket: "Shoprite", image: milk },
  { id: "p58", name: "KCC Fresh Milk 1L", category: "Beverages", price: 125, originalPrice: 140, unit: "1L", supermarket: "Quickmart", image: milk },
  { id: "p59", name: "Ilara UHT Milk", category: "Beverages", price: 130, unit: "1L", supermarket: "Carrefour", image: milk },
  { id: "p60", name: "Daima Yoghurt Drink", category: "Beverages", price: 85, unit: "250ml", supermarket: "Chandarana", image: milk },
  { id: "p61", name: "Fanta Orange 2L", category: "Beverages", price: 195, unit: "2L", supermarket: "Naivas", image: cola },
  { id: "p62", name: "Sprite PET Bottle", category: "Beverages", price: 199, originalPrice: 235, unit: "2L", supermarket: "Quickmart", image: cola },
  { id: "p63", name: "Stoney Tangawizi", category: "Beverages", price: 90, unit: "500ml", supermarket: "Shoprite", image: cola },
  { id: "p64", name: "Ketepa Pride Tea", category: "Beverages", price: 220, unit: "250g", supermarket: "Quickmart", image: tea },
  { id: "p65", name: "Kericho Gold Tea", category: "Beverages", price: 340, originalPrice: 390, unit: "500g", supermarket: "Carrefour", image: tea },
  { id: "p66", name: "Tusker Lager 6-Pack", category: "Beverages", price: 1080, unit: "6×500ml", supermarket: "Naivas", image: beer },
  { id: "p67", name: "Guinness Smooth 6-Pack", category: "Beverages", price: 1350, originalPrice: 1500, unit: "6×500ml", supermarket: "Shoprite", image: beer },
  { id: "p68", name: "White Cap Lager", category: "Beverages", price: 220, unit: "500ml", supermarket: "Quickmart", image: beer },

  // Household
  { id: "p69", name: "Omo Auto Washing Powder", category: "Household", price: 520, unit: "1kg", supermarket: "Naivas", image: detergent },
  { id: "p70", name: "Ariel Detergent Powder", category: "Household", price: 640, originalPrice: 720, unit: "1kg", supermarket: "Shoprite", image: detergent },
  { id: "p71", name: "Sunlight Bar Soap", category: "Household", price: 90, unit: "800g bar", supermarket: "Quickmart", image: detergent },
  { id: "p72", name: "Rosy Kitchen Tissue", category: "Household", price: 220, unit: "2 rolls", supermarket: "Naivas", image: toiletpaper },
  { id: "p73", name: "Fay Toilet Paper 4-Pack", category: "Household", price: 260, originalPrice: 320, unit: "4 rolls", supermarket: "Quickmart", image: toiletpaper },
  { id: "p74", name: "Hanan Toilet Paper 12-Pack", category: "Household", price: 620, unit: "12 rolls", supermarket: "Shoprite", image: toiletpaper },

  // Bakery
  { id: "p75", name: "Superloaf White Bread", category: "Bakery", price: 65, unit: "400g", supermarket: "Quickmart", image: bread },
  { id: "p76", name: "Broadways Milk Loaf", category: "Bakery", price: 70, originalPrice: 85, unit: "400g", supermarket: "Shoprite", image: bread },
  { id: "p77", name: "Sliced Sourdough Loaf", category: "Bakery", price: 320, unit: "500g", supermarket: "Chandarana", image: bread },
  { id: "p78", name: "Chocolate Croissants", category: "Bakery", price: 220, originalPrice: 260, unit: "4pcs", supermarket: "Carrefour", image: croissant },
  { id: "p79", name: "Almond Croissants", category: "Bakery", price: 260, unit: "4pcs", supermarket: "Chandarana", image: croissant },

  // Personal Care
  { id: "p80", name: "Geisha Beauty Soap", category: "Personal Care", price: 95, unit: "125g bar", supermarket: "Naivas", image: soap },
  { id: "p81", name: "Dettol Original Soap", category: "Personal Care", price: 135, originalPrice: 160, unit: "175g bar", supermarket: "Shoprite", image: soap },
  { id: "p82", name: "Imperial Leather Soap", category: "Personal Care", price: 150, unit: "125g bar", supermarket: "Quickmart", image: soap },
  { id: "p83", name: "Close-Up Toothpaste", category: "Personal Care", price: 140, unit: "100ml", supermarket: "Naivas", image: toothpaste },
  { id: "p84", name: "Sensodyne Toothpaste", category: "Personal Care", price: 380, originalPrice: 450, unit: "75ml", supermarket: "Chandarana", image: toothpaste },
  { id: "p85", name: "Aquafresh Family Toothpaste", category: "Personal Care", price: 210, unit: "100ml", supermarket: "Quickmart", image: toothpaste },

  // Electronics
  { id: "p86", name: "JBL GO 3 Bluetooth Speaker", category: "Electronics", price: 5499, originalPrice: 6500, unit: "1pc", supermarket: "Carrefour", image: speaker },
  { id: "p87", name: "Oraimo SoundGo Speaker", category: "Electronics", price: 1899, unit: "1pc", supermarket: "Naivas", image: speaker },
  { id: "p88", name: "Ramtons Cordless Kettle 1.8L", category: "Electronics", price: 2999, originalPrice: 3600, unit: "1pc", supermarket: "Shoprite", image: kettle },
  { id: "p89", name: "Von Hotpoint Kettle", category: "Electronics", price: 3899, unit: "1pc", supermarket: "Carrefour", image: kettle },
  { id: "p90", name: "Anker 25W Fast Charger", category: "Electronics", price: 1899, originalPrice: 2200, unit: "1pc", supermarket: "Carrefour", image: charger },
  { id: "p91", name: "Oraimo Charger 20W", category: "Electronics", price: 799, unit: "1pc", supermarket: "Quickmart", image: charger },
  { id: "p92", name: "Samsung Travel Adapter 15W", category: "Electronics", price: 1299, unit: "1pc", supermarket: "Shoprite", image: charger },
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
