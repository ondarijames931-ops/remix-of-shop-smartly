import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Compare Prices" },
  { to: "/offers", label: "Deals" },
  { to: "/supermarkets", label: "Nearby" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5">
         <img src={logo} alt="myKīla logo" width={56} height={56} />
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-primary">myKīla</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Yako Yote, Mahali Pamoja</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm font-semibold bg-secondary text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/supermarkets"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition hover:opacity-95"
        >
          Find near me
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" width={48} height={48} className="h-7 w-7" />
            <span className="font-display text-base font-bold text-primary">myKīla</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Window-shop Kenya's supermarkets from your couch. Compare prices, spot offers, plan your run.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/products" className="hover:text-primary">Compare Prices</Link></li>
            <li><Link to="/offers" className="hover:text-primary">Deals</Link></li>
            <li><Link to="/supermarkets" className="hover:text-primary">Stores</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Chains</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Naivas</li><li>Quickmart</li><li>Shoprite</li><li>Carrefour</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-foreground">Categories</h4>
<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
  <li>Banks</li>
  <li>Hospitals</li>
  <li>Pharmacies</li>
  <li>Restaurants</li>
  <li>Supermarkets</li>
  <li>Petrol Stations</li>
  <li>ATMs</li>
  <li>Hotels</li>
  <li>Schools</li>
</ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © 2026 myKīla ·Yako Yote, Mahali Pamoja
      </div>
    </footer>
  );
}
