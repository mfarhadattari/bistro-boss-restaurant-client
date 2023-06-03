import SetTitle from "./../../../components/SetTitle";
import SectionHeader from "./../../../components/SectionHeader";
import StripePaymentFormCard from "../../../components/StripePayment/StripePaymentFormCard";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <div>
      <SetTitle title="Payment - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader heading="Payment" subHeading="Make your"></SectionHeader>
      <div>
        <Elements stripe={stripePromise}>
          <StripePaymentFormCard></StripePaymentFormCard>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
