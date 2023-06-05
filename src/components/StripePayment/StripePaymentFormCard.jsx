import { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import ErrorMessage from "./../Message/ErrorMessage";
import "./StripePaymentFormCard.css";
import { useEffect } from "react";
import useSecureAxios from "./../../hooks/useSecureAxios";
import ConfirmationAlert from "./../Message/ConfirmationAlert";
import useAuthContext from "../../hooks/useAuthContext";
import ErrorAlert from "./../Message/ErrorAlert";
import useCart from "../../hooks/useCart";
import moment from "moment/moment";
import SuccessAlert from "./../Message/SuccessAlert";

const StripePaymentFormCard = ({ price }) => {
  const stripe = useStripe();
  const element = useElements();

  const { axiosSecure } = useSecureAxios();
  const { authUser } = useAuthContext();
  const { carts } = useCart();

  const [clientSecret, setClientSecret] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure
        .post("/user/create-payment-intent", { price })
        .then(({ data }) => {
          setClientSecret(data.clientSecret);
        });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !stripe ||
      !element ||
      !clientSecret ||
      paymentProcessing ||
      price < 1
    ) {
      return;
    }

    const card = element.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setPaymentError(error.message);
      return;
    }

    setPaymentError("");
    setPaymentProcessing(true);
    ConfirmationAlert(`Sure to payment $${price}?`).then((res) => {
      if (res.isConfirmed) {
        stripe
          .confirmCardPayment(clientSecret, {
            payment_method: {
              card,
              billing_details: {
                name: authUser.displayName,
                email: authUser.email,
              },
            },
          })
          .then((res) => {
            if (res?.paymentIntent?.status === "succeeded") {
              const paymentInfo = {
                name: authUser.displayName,
                email: authUser.email,
                transitionId: res.paymentIntent.id,
                amount: price,
                orderStatus: "Pending",
                paymentTime: moment().format("MMMM DD YYYY , HH:mm:ss"),
                cartInfo: carts.map((item) => {
                  return {
                    _id: item._id,
                    name: item.name,
                    foodID: item.foodID,
                    price: item.price,
                    quantity: item.quantity,
                  };
                }),
              };
              axiosSecure
                .post("/user/payment-confirmation", paymentInfo)
                .then(({ data }) => {
                  if (
                    data.deleteConfirmation.deletedCount > 0 &&
                    data.paymentConfirmation.insertedId
                  ) {
                    SuccessAlert("Payment Successfully");
                  }
                });
            }
            if (res.error) {
              ErrorAlert(res.error.message);
            }
            setPaymentProcessing(false);
          });
      } else {
        setPaymentProcessing(false);
      }
    });
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
      <button
        type="submit"
        disabled={!stripe || !clientSecret || paymentProcessing}
        className="bg-pink-600"
      >
        Pay
      </button>
    </form>
  );
};

export default StripePaymentFormCard;
