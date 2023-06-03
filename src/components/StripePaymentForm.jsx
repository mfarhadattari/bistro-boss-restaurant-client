import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import ErrorMessage from "./Message/ErrorMessage";
import { useEffect } from "react";
import useSecureAxios from "../hooks/useSecureAxios";
import useAuthContext from "../hooks/useAuthContext";
import SuccessAlert from "./Message/SuccessAlert";

const StripePaymentForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { axiosSecure } = useSecureAxios();
  const { authUser } = useAuthContext();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", {
        price,
      })
      .then(({ data }) => {
        setClientSecret(data.clientSecret);
      });
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error);
    } else {
      setCardError("");
    }

    stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: authUser.email || "unknown",
            name: authUser.displayName || "anonymous",
          },
        },
      })
      .then(({ paymentIntent }) => {
        if (paymentIntent?.status === "succeeded") {
          SuccessAlert("Payment Successfully");
        }
      });
  };

  /*
   * Install stripe and react stripe
   * Create a checkout form with card element (card element contains: card number , expiration date, cvs , zip code)
   * Create account and get Publishable key
   */

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-3/4 m-8 border p-5 rounded-lg">
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
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn my-10"
        >
          Pay
        </button>
      </form>
      <ErrorMessage message={cardError}></ErrorMessage>
    </div>
  );
};

export default StripePaymentForm;
