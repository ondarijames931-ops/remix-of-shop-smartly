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

function ProductsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [chain, setChain] = useState<string>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (cat !== "All" && p.category !== cat) return false;
      if (chain !== "All" && p.supermarket !== chain) return false;
      return true;
    });
  }, [q, cat, chain]);

  const cats = ["All", ...categories];

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

        <p className="mt-6 text-sm text-muted-foreground">{filtered.length} items</p>

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p) => {
            const off = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;
            return (
              <div key={p.id} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="flex items-start justify-between">
                  <span className="text-5xl leading-none">{p.image}</span>
                  {off > 0 && (
                    <span className="rounded-full bg-success/10 px-2.5 py-1 text-xs font-bold text-success">-{off}%</span>
                  )}
                </div>
                <h3 className="mt-4 line-clamp-2 text-base font-semibold leading-tight">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.category} · {p.unit}</p>
                <div className="mt-auto pt-4">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-xl font-bold text-primary">{formatKES(p.price)}</span>
                    {p.originalPrice && <span className="text-sm text-muted-foreground line-through">{formatKES(p.originalPrice)}</span>}
                  </div>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">at {p.supermarket}</p>
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
