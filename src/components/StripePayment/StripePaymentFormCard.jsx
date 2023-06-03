import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import ErrorMessage from "./../Message/ErrorMessage";
import "./StripePaymentFormCard.css";

const StripePaymentFormCard = () => {
  const stripe = useStripe();
  const element = useElements();

  const [paymentError, setPaymentError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !element) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error(error);
      setPaymentError(error);
    } else {
      console.log("paymentMethod:", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      <button type="submit" disabled={!stripe} className="bg-pink-600">
        Pay
      </button>
      <ErrorMessage message={paymentError}></ErrorMessage>
    </form>
  );
};

export default StripePaymentFormCard;
