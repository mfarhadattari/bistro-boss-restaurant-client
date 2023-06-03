import { loadStripe } from "@stripe/stripe-js";
import SectionHeader from "../../../components/SectionHeader";
import SetTitle from "../../../components/SetTitle";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "../../../components/StripePaymentForm";
import useCart from "./../../../hooks/useCart";

// TODO: Provide Published key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const { carts } = useCart();
  const total = carts.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2))

  return (
    <section>
      <SetTitle title="Payment - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader heading="Payment" subHeading="Make your"></SectionHeader>
      <div className="w-3/4 mx-auto">
        <Elements stripe={stripePromise}>
          <StripePaymentForm price={price}></StripePaymentForm>
        </Elements>
      </div>
    </section>
  );
};

export default Payment;
