import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import ErrorMessage from "./../Message/ErrorMessage";
import "./StripePaymentFormCard.css";
import { useEffect } from "react";
import useSecureAxios from "./../../hooks/useSecureAxios";

const StripePaymentFormCard = ({ price }) => {
  const stripe = useStripe();
  const element = useElements();

  const { axiosSecure } = useSecureAxios();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("create-payment-intent", { price }).then(({ data }) => {
        setClientSecret(data.clientSecret)
      });
    }
  }, [price, axiosSecure]);

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
      setPaymentError(error.message);
    } else {
      setPaymentError("");
      console.log("paymentMethod:", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
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
      <ErrorMessage message={paymentError}></ErrorMessage>
      <button type="submit" disabled={!stripe || !clientSecret} className="bg-pink-600">
        Pay
      </button>
    </form>
  );
};

export default StripePaymentFormCard;
