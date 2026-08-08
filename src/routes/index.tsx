import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { supermarkets, products, offers, formatKES } from "@/lib/mock-data";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const featured = products.filter((p) => p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity" width={1600} height={1000} />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-28 md:pb-32">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" /> Kenya · Nairobi · Mombasa · Kisumu
            </span>
            <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Window shop Kenya's supermarkets.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              Peek inside Naivas, Quickmart, Shoprite and more. Compare prices, catch the day's discounts, and find the store closest to you — before you leave the house.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-glow transition hover:scale-[1.02]">
                Start browsing →
              </Link>
              <Link to="/supermarkets" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
                Find nearest store
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 text-white">
              {[
                { k: "8+", v: "Supermarkets" },
                { k: "500+", v: "Products listed" },
                { k: "Daily", v: "Fresh offers" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl font-bold">{s.k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-white/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FEATURED DEALS */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">Today's picks</p>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Deals worth the trip</h2>
          </div>
          <Link to="/offers" className="hidden text-sm font-medium text-primary hover:underline sm:inline">See all offers →</Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <div key={p.id} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative aspect-square overflow-hidden bg-secondary/40">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-success px-2.5 py-1 text-xs font-bold text-success-foreground shadow-card">
                  -{Math.round((1 - p.price / p.originalPrice!) * 100)}%
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold leading-tight">{p.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.supermarket} · {p.unit}</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-xl font-bold text-primary">{formatKES(p.price)}</span>
                  <span className="text-sm text-muted-foreground line-through">{formatKES(p.originalPrice!)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAINS STRIP */}
      <section className="border-y border-border/60 bg-secondary/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">Featured supermarket chains</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-display text-2xl font-bold text-primary/70 sm:text-3xl">
            <span>Naivas</span><span className="text-primary/30">·</span>
            <span>Quickmart</span><span className="text-primary/30">·</span>
            <span>Shoprite</span><span className="text-primary/30">·</span>
            <span>Carrefour</span><span className="text-primary/30">·</span>
            <span>Chandarana</span>
          </div>
        </div>
      </section>

      {/* NEAR YOU */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-glow">Locations</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Supermarkets near you</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">A quick look at some of the branches on the map. Open the finder for the full interactive experience.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {supermarkets.slice(0, 6).map((s) => (
            <div key={s.id} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-lg font-bold">{s.name}</h3>
                  <p className="text-sm text-muted-foreground">{s.branch}</p>
                </div>
                <span className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">★ {s.rating}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{s.address}, {s.city}</p>
              <p className="mt-1 text-xs text-muted-foreground">Open {s.hours}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/supermarkets" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card hover:bg-primary/90">
            Open the store finder →
          </Link>
        </div>
      </section>

      {/* OFFERS TEASE */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-gradient-hero p-8 text-white shadow-glow sm:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Live discounts</p>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{offers.length} offers running right now</h2>
              <p className="mt-3 text-white/85">From weekend fresh discounts at Naivas to Quickmart double points — never miss a bargain.</p>
              <Link to="/offers" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary hover:scale-[1.02]">
                See all offers →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {offers.slice(0, 4).map((o) => (
                <div key={o.id} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs uppercase tracking-wider text-cyan-200">{o.supermarket}</p>
                  <p className="mt-1 text-sm font-semibold">{o.title}</p>
                  <p className="mt-2 font-display text-xl font-bold">{o.discount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}