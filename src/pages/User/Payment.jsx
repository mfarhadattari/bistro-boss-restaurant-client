import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";
import StripePaymentFormCard from './../../components/StripePayment/StripePaymentFormCard';
import SetTitle from "../../components/SetTitle";
import SectionHeader from "../../components/SectionHeader";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {

  const { carts } = useCart();
  const total = carts.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SetTitle title="Payment - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader heading="Payment" subHeading="Make your"></SectionHeader>
      <div className="w-3/4 mx-auto">
        <Elements stripe={stripePromise}>
          <StripePaymentFormCard price={price}></StripePaymentFormCard>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
