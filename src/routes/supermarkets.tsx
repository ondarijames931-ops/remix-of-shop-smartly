import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { supermarkets, type Supermarket } from "@/lib/mock-data";

export const Route = createFileRoute("/supermarkets")({
  head: () => ({
    meta: [
      { title: "Supermarkets near you — Sokoni" },
      { name: "description", content: "Locate Naivas, Quickmart, Shoprite, Carrefour and Chandarana branches across Kenya on an interactive map." },
      { property: "og:title", content: "Supermarkets near you — Sokoni" },
      { property: "og:description", content: "Interactive map of Kenya's supermarkets with hours, contacts and ratings." },
    ],
  }),
  component: SupermarketsPage,
});

declare global {
  interface Window {
    google?: any;
    initSokoniMap?: () => void;
  }
}

const cities = ["All", "Nairobi", "Mombasa", "Kisumu"];

function SupermarketsPage() {
  const [city, setCity] = useState("All");
  const [activeId, setActiveId] = useState<string>(supermarkets[0].id);
  const mapEl = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  const filtered = useMemo(
    () => supermarkets.filter((s) => city === "All" || s.city === city),
    [city],
  );

  // Load Google Maps JS with async callback
  useEffect(() => {
    const key = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_BROWSER_KEY;
    const channel = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_MAPS_TRACKING_ID;
    if (!key) return;

    if (window.google?.maps) {
      initMap();
      return;
    }
    window.initSokoniMap = () => initMap();
    const existing = document.querySelector<HTMLScriptElement>("script[data-sokoni-gmaps]");
    if (existing) return;
    const s = document.createElement("script");
    s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&loading=async&callback=initSokoniMap&channel=${channel ?? ""}`;
    s.async = true;
    s.defer = true;
    s.dataset.sokoniGmaps = "1";
    document.head.appendChild(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function initMap() {
    if (!mapEl.current || !window.google?.maps) return;
    mapRef.current = new window.google.maps.Map(mapEl.current, {
      center: { lat: -1.286, lng: 36.817 },
      zoom: 11,
      disableDefaultUI: true,
      zoomControl: true,
      styles: mapStyle,
    });
    renderMarkers(supermarkets);
  }

  function renderMarkers(list: Supermarket[]) {
    if (!mapRef.current || !window.google?.maps) return;
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = list.map((s) => {
      const marker = new window.google.maps.Marker({
        position: { lat: s.lat, lng: s.lng },
        map: mapRef.current,
        title: `${s.name} — ${s.branch}`,
      });
      marker.addListener("click", () => setActiveId(s.id));
      return marker;
    });
  }

  useEffect(() => {
    if (!mapRef.current) return;
    renderMarkers(filtered);
    if (filtered.length) {
      const bounds = new window.google.maps.LatLngBounds();
      filtered.forEach((s) => bounds.extend({ lat: s.lat, lng: s.lng }));
      mapRef.current.fitBounds(bounds, 60);
    }
  }, [filtered]);

  useEffect(() => {
    if (!mapRef.current) return;
    const s = supermarkets.find((x) => x.id === activeId);
    if (s) mapRef.current.panTo({ lat: s.lat, lng: s.lng });
  }, [activeId]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border/60 bg-gradient-hero py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">Store finder</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Supermarkets near you</h1>
          <p className="mt-3 max-w-2xl text-white/85">Naivas, Quickmart, Shoprite, Carrefour and Chandarana branches across Kenya.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  city === c ? "bg-white text-primary" : "border border-white/25 bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
          <div className="space-y-3 lg:max-h-[640px] lg:overflow-y-auto lg:pr-2">
            {filtered.map((s) => {
              const active = s.id === activeId;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`w-full rounded-2xl border p-5 text-left shadow-card transition ${
                    active ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">{s.name}</h3>
                      <p className="text-sm text-muted-foreground">{s.branch} · {s.city}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">★ {s.rating}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.address}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span>🕒 {s.hours}</span>
                    <span>📞 {s.phone}</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-card">
            <div ref={mapEl} className="h-[500px] w-full bg-secondary lg:h-[640px]" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

const mapStyle = [
  { elementType: "geometry", stylers: [{ color: "#eaf1fb" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#334c74" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { featureType: "water", stylers: [{ color: "#bfd8f2" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
];
