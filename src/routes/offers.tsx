import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { offers } from "@/lib/mock-data";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Discounts & offers — Sokoni" },
      { name: "description", content: "Live discounts, weekend deals and loyalty offers from Naivas, Quickmart, Shoprite, Carrefour and Chandarana." },
      { property: "og:title", content: "Discounts & offers — Sokoni" },
      { property: "og:description", content: "Never miss a Kenyan supermarket bargain." },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-gradient-hero py-14 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Live now</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Discounts & offers</h1>
          <p className="mt-3 max-w-2xl text-white/85">Rotating deals across Kenya's top supermarket chains. Save the trip when there's nothing on sale for you.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <article key={o.id} className="group relative overflow-hidden rounded-3xl border border-border shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className={`bg-gradient-to-br ${o.color} p-6 text-white`}>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/80">{o.supermarket}</p>
                <p className="mt-3 font-display text-3xl font-bold">{o.discount}</p>
              </div>
              <div className="bg-card p-6">
                <h3 className="font-display text-lg font-bold leading-tight">{o.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{o.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs font-medium text-muted-foreground">Valid: {o.validUntil}</span>
                  <Link to="/supermarkets" className="text-xs font-semibold text-primary hover:underline">Find branch →</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
