import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-header";
import { formatKES } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
});

function CheckoutPage() {
  const [step, setStep] = useState<"review" | "mpesa" | "success">("review");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock cart items for standalone checkout route testing
  const cartItems = [
    { id: 1, name: "Soko Maize Meal 2kg", price: 220, qty: 2 },
    { id: 2, name: "Menengai Bar Soap", price: 150, qty: 1 }
  ];
  const cartTotal = 590;

  const handleMpesaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate Daraja STK Push network response delay
    setTimeout(() => {
      setIsProcessing(false);
      setStep("success");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1 mx-auto max-w-3xl w-full px-6 py-12">
        <h1 className="font-display text-3xl font-bold tracking-tight mb-8">Checkout</h1>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-card md:p-8">
          {step === "review" && (
            <div>
              <h2 className="text-lg font-semibold mb-4">Review Your Order</h2>
              <div className="divide-y divide-border mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-3 flex justify-between items-center">
                    <div>
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.qty}</p>
                    </div>
                    <span className="font-semibold text-sm">{formatKES(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center border-t border-border pt-4 mb-8 font-bold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatKES(cartTotal)}</span>
              </div>
              <button
                onClick={() => setStep("mpesa")}
                className="w-full rounded-full bg-primary py-4 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition shadow-glow"
              >
                Proceed to M-Pesa Payment →
              </button>
            </div>
          )}

          {step === "mpesa" && (
            <form onSubmit={handleMpesaSubmit} className="space-y-6">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-center">
                <p className="text-sm text-muted-foreground">Total Amount</p>
                <p className="font-display text-3xl font-bold text-primary">{formatKES(cartTotal)}</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">M-Pesa Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 0712345678"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground">An STK push prompt will appear on your phone.</p>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setStep("review")}
                  className="w-1/3 rounded-full border border-input py-4 text-sm font-semibold hover:bg-secondary transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-2/3 flex items-center justify-center rounded-full bg-success py-4 text-sm font-semibold text-success-foreground hover:bg-success/90 transition shadow-card disabled:opacity-70"
                >
                  {isProcessing ? "Sending STK Push..." : "Pay with M-Pesa"}
                </button>
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-success/20 text-success text-2xl">
                ✓
              </div>
              <h2 className="font-display text-2xl font-bold">STK Push Sent Successfully</h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-sm">
                Enter your M-Pesa PIN on your phone to authorize payment of <strong className="text-foreground">{formatKES(cartTotal)}</strong>.
              </p>
              <Link
                to="/"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:bg-primary/90 transition"
              >
                Return Home
              </Link>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}