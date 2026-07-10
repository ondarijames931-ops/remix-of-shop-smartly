import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { products, categories, formatKES } from "@/lib/mock-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Browse goods & prices — Sokoni" },
      { name: "description", content: "Window shop groceries, fresh produce, household items and more across Kenyan supermarkets with live prices in KES." },
      { property: "og:title", content: "Browse goods & prices — Sokoni" },
      { property: "og:description", content: "Compare prices from Naivas, Quickmart, Shoprite and Carrefour." },
    ],
  }),
  component: ProductsPage,
});

const chains = ["All", "Naivas", "Quickmart", "Shoprite", "Carrefour", "Chandarana"];

const BRAND_ALIASES: Record<string, string> = {
  "coca-cola": "Coca-Cola",
  "coca": "Coca-Cola",
  "head": "Head & Shoulders",
  "johnnie": "Johnnie Walker",
  "kenya": "Kenya Brand",
  "farm": "Farm Fresh",
  "fresh": "Fresh Pick",
  "premium": "Premium",
  "ripe": "Fresh Pick",
  "vine": "Fresh Pick",
  "whole": "Bakers Choice",
  "soft": "Softcare",
  "butter": "Bakers Choice",
  "golden": "Golden",
  "moisturising": "Beauty Care",
  "stainless": "HomePro",
  "portable": "AudioPro",
  "usb-c": "TechPro",
  "in-store": "Sokoni Services",
  "free": "Sokoni Services",
  "home": "Sokoni Services",
  "loyalty": "Sokoni Services",
  "gift": "Sokoni Services",
  "bill": "Sokoni Services",
  "airtime": "Sokoni Services",
  "m-pesa": "M-Pesa",
  "photocopy": "Sokoni Services",
};

function getBrand(name: string): string {
  const first = name.split(/\s+/)[0] ?? "";
  const key = first.toLowerCase().replace(/[^a-z0-9-]/g, "");
  if (BRAND_ALIASES[key]) return BRAND_ALIASES[key];
  // Two-word brands for common patterns
  const two = name.split(/\s+/).slice(0, 2).join(" ");
  if (/^(Blue Band|Red Bull|Four Cousins|Farmer's Choice|Golden Morn|Bio Yogurt)/i.test(two)) return two;
  return first || "Generic";
}

const BRAND_PALETTE = [
  { bg: "#E63946", fg: "#ffffff" },
  { bg: "#1D3557", fg: "#ffffff" },
  { bg: "#F4A261", fg: "#1a1a1a" },
  { bg: "#2A9D8F", fg: "#ffffff" },
  { bg: "#264653", fg: "#ffffff" },
  { bg: "#E9C46A", fg: "#1a1a1a" },
  { bg: "#8338EC", fg: "#ffffff" },
  { bg: "#FB5607", fg: "#ffffff" },
  { bg: "#3A86FF", fg: "#ffffff" },
  { bg: "#06A77D", fg: "#ffffff" },
  { bg: "#D62828", fg: "#ffffff" },
  { bg: "#5F0F40", fg: "#ffffff" },
];

function brandColor(brand: string): { bg: string; fg: string } {
  let hash = 0;
  for (let i = 0; i < brand.length; i++) hash = (hash * 31 + brand.charCodeAt(i)) >>> 0;
  return BRAND_PALETTE[hash % BRAND_PALETTE.length];
}

const PRICE_MIN = 0;
const PRICE_MAX = Math.max(...products.map((p) => p.price));

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [chain, setChain] = useState<string>("All");
  const [minPrice, setMinPrice] = useState<number>(PRICE_MIN);
  const [maxPrice, setMaxPrice] = useState<number>(PRICE_MAX);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (cat !== "All" && p.category !== cat) return false;
      if (chain !== "All" && p.supermarket !== chain) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      return true;
    });
  }, [q, cat, chain, minPrice, maxPrice]);

  const cats = ["All", ...categories];
  const resetFilters = () => {
    setQ(""); setCat("All"); setChain("All");
    setMinPrice(PRICE_MIN); setMaxPrice(PRICE_MAX);
  };
  const activeFilters =
    (q ? 1 : 0) + (cat !== "All" ? 1 : 0) + (chain !== "All" ? 1 : 0) +
    (minPrice !== PRICE_MIN || maxPrice !== PRICE_MAX ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border/60 bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Catalog</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Browse goods & services</h1>
          <p className="mt-3 max-w-2xl text-white/85">Every item priced in KES, straight from the shelves of Kenya's biggest chains.</p>
          <div className="mt-6 max-w-xl">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search for milk, rice, detergent..."
              className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white placeholder:text-white/60 backdrop-blur focus:border-white/60 focus:outline-none"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                cat === c ? "bg-primary text-primary-foreground shadow-card" : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {chains.map((c) => (
            <button
              key={c}
              onClick={() => setChain(c)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                chain === c ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-card">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-foreground">Price range</p>
              <p className="text-xs text-muted-foreground">
                {formatKES(minPrice)} — {formatKES(maxPrice)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs text-muted-foreground">Min</label>
              <input
                type="number"
                min={PRICE_MIN}
                max={maxPrice}
                value={minPrice}
                onChange={(e) => setMinPrice(Math.max(PRICE_MIN, Math.min(maxPrice, Number(e.target.value) || 0)))}
                className="w-24 rounded-lg border border-border bg-background px-2 py-1 text-sm focus:border-primary focus:outline-none"
              />
              <label className="text-xs text-muted-foreground">Max</label>
              <input
                type="number"
                min={minPrice}
                max={PRICE_MAX}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Math.min(PRICE_MAX, Math.max(minPrice, Number(e.target.value) || 0)))}
                className="w-24 rounded-lg border border-border bg-background px-2 py-1 text-sm focus:border-primary focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div>
              <input
                type="range" min={PRICE_MIN} max={PRICE_MAX} value={minPrice}
                onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                className="w-full accent-primary"
              />
              <p className="mt-1 text-[11px] text-muted-foreground">Minimum</p>
            </div>
            <div>
              <input
                type="range" min={PRICE_MIN} max={PRICE_MAX} value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                className="w-full accent-primary"
              />
              <p className="mt-1 text-[11px] text-muted-foreground">Maximum</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filtered.length} item{filtered.length === 1 ? "" : "s"}
            {activeFilters > 0 && <span className="ml-2 text-xs text-primary">· {activeFilters} filter{activeFilters === 1 ? "" : "s"} active</span>}
          </p>
          {activeFilters > 0 && (
            <button onClick={resetFilters} className="text-xs font-semibold text-primary hover:underline">
              Clear all
            </button>
          )}
        </div>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => {
            const off = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
            const brand = getBrand(p.name);
            const brandStyle = brandColor(brand);
            return (
              <div key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="relative aspect-square overflow-hidden bg-secondary/40">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 max-w-[70%] truncate rounded-md px-2 py-1 text-[10px] font-bold uppercase tracking-wider shadow-card ring-1 ring-white/40 backdrop-blur"
                    style={{ background: brandStyle.bg, color: brandStyle.fg }}
                    title={`Brand: ${brand}`}
                  >
                    {brand}
                  </span>
                  {off > 0 && (
                    <span className="absolute right-3 top-3 rounded-full bg-success px-2.5 py-1 text-xs font-bold text-success-foreground shadow-card">-{off}%</span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <span
                      className="inline-block h-2 w-2 rounded-full"
                      style={{ background: brandStyle.bg }}
                      aria-hidden
                    />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{brand}</span>
                  </div>
                  <h3 className="mt-1 line-clamp-2 text-base font-semibold leading-tight">{p.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.category} · {p.unit}</p>
                  <div className="mt-auto pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-xl font-bold text-primary">{formatKES(p.price)}</span>
                      {p.originalPrice && <span className="text-sm text-muted-foreground line-through">{formatKES(p.originalPrice)}</span>}
                    </div>
                    <p className="mt-1 text-xs font-medium text-muted-foreground">at {p.supermarket}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="mt-16 rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
            No items match those filters yet. Try a different search.
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}
