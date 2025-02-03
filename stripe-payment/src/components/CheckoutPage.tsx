// Enable client-side rendering in Next.js (client components).
"use client";

// Import React and necessary hooks and components from the React and Stripe libraries.
import React, { useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

// Import a custom helper function to convert the amount to a sub currency (e.g., cents).
import convertToSubcurrency from "@/lib/convertToSubcurrency";

// Define the CheckoutPage component, which receives an 'amount' prop.
const CheckoutPage = ({ amount }: { amount: number }) => {
  // Initialize the Stripe instance using the useStripe hook.
  const stripe = useStripe();
  
  // Initialize the Stripe Elements instance using the useElements hook.
  const elements = useElements();
  
  // useState hook to manage error messages.
  const [errorMessage, setErrorMessage] = useState<string>();
  
  // useState hook to store the client secret needed for the payment.
  const [clientSecret, setClientSecret] = useState("");
  
  // useState hook to track whether a payment is processing.
  const [loading, setLoading] = useState(false);

  // useEffect hook to create a PaymentIntent on the server as soon as the component mounts or 'amount' changes.
  useEffect(() => {
    // Call our API to create a PaymentIntent with the given amount.
    fetch("/api/create-payment-intent", {
      method: "POST", // Make a POST request to the API.
      headers: {
        "Content-Type": "application/json", // Specify that we're sending JSON.
      },
      // Convert the amount to subcurrency (e.g., cents) before sending to the server.
      body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
    })
      // Parse the JSON response.
      .then((res) => res.json())
      // Extract the clientSecret from the response and update state.
      .then((data) => setClientSecret(data.clientSecret));
  }, [amount]); // Re-run this effect if 'amount' changes.

  // Event handler for form submission (payment confirmation).
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submission behavior (page reload).
    event.preventDefault();
    
    // Indicate that the payment process is loading.
    setLoading(true);

    // If Stripe or Elements haven't initialized yet, exit early.
    if (!stripe || !elements) {
      return;
    }

    // Ask Stripe Elements to validate the card details or other payment elements.
    const { error: submitError } = await elements.submit();

    // If there's an error during the Elements submission, display it and reset loading.
    if (submitError) {
      setErrorMessage(submitError.message);
      setLoading(false);
      return;
    }

    // Confirm the payment on the server using Stripe.
    const { error } = await stripe.confirmPayment({
      elements,              // The Stripe Elements instance with the payment details.
      clientSecret,          // The client secret returned by the PaymentIntent creation.
      confirmParams: {
        // After payment completes successfully, the user will be redirected here.
        return_url: `http://www.localhost:3000/payment-success?amount=${amount}`,
      },
    });

    // If there's an immediate error during payment confirmation, set it in state.
    if (error) {
      // e.g., card details incomplete or invalid.
      setErrorMessage(error.message);
    } else {
      // No immediate error. The UI will handle showing a success message.
      // The user will then be redirected to the return URL set above.
    }

    // Reset the loading state after processing.
    setLoading(false);
  };

  // If the clientSecret, stripe, or elements aren't ready, show a loading spinner.
  if (!clientSecret || !stripe || !elements) {
    return (
      <div className="flex items-center justify-center">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  // Return the checkout form once everything is ready.
  return (
    // Attach the handleSubmit event handler to the form.
    <form onSubmit={handleSubmit} className="bg-white p-2 rounded-md">
      {/* If the client secret is available, render the Stripe PaymentElement. */}
      {clientSecret && <PaymentElement />}

      {/* Display any error messages returned from Stripe or the submission process. */}
      {errorMessage && <div>{errorMessage}</div>}

      {/* The payment button, disabled if Stripe isn't ready or if we're loading. */}
      <button
        disabled={!stripe || loading}
        className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
      >
        {/* If we're not loading, show the pay amount; otherwise, show a processing message. */}
        {!loading ? `Pay $${amount}` : "Processing..."}
      </button>
    </form>
  );
};

// Export the CheckoutPage component as the default export.
export default CheckoutPage;
