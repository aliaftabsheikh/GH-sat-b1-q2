// Enable client-side rendering in Next.js (client components).
"use client";

// Import the CheckoutPage component and a helper function to convert amounts to subcurrency.
import CheckoutPage from "@/components/CheckoutPage";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

// Import Stripe-specific components and methods for creating and managing payments.
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Validate that the public Stripe key is defined in the environment variables.
if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

// Initialize the Stripe instance using the provided public key.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// Define the main component for the home page.
export default function Home() {
  // The amount requested for payment.
  const amount = 49.99;

  // Return the main content of the page.
  return (
    // Use Tailwind CSS classes for styling and layout.
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-slate-400 to-zinc-900">
      
      {/* A header section for displaying who requested payment and how much. */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Ali Aftab</h1>
        <h2 className="text-2xl">
          has requested
          <span className="font-bold"> ${amount}</span>
        </h2>
      </div>

      {/* Wrap the checkout page in Stripe's Elements component, which provides context 
          for Stripe Elements within this part of the application. */}
      <Elements
        stripe={stripePromise}       // The promise that resolves to a Stripe instance.
        options={{
          mode: "payment",           // The payment mode for Stripe Elements.
          amount: convertToSubcurrency(amount),  // Convert amount to subcurrency (e.g., cents).
          currency: "usd",           // The currency to use for the payment.
        }}
      >
        {/* Render the CheckoutPage component, passing the amount as a prop. */}
        <CheckoutPage amount={amount} />
      </Elements>
    </main>
  );
}
