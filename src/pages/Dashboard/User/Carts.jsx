import SectionHeader from "../../../components/SectionHeader";
import SetTitle from "../../../components/SetTitle";
import CartItem from "../../../components/CartItem";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";

const Carts = () => {
  const { carts } = useCart();

  const totalPrice = carts.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  return (
    <main className="px-5">
      <SetTitle title="My Cart - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionHeader>
      <section>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-semibold">
            TOTAL ORDERS: {carts.length}{" "}
          </h1>
          <h1 className="text-3xl font-semibold">
            TOTAL PRICE: ${totalPrice}{" "}
          </h1>
          <div>
            <Link to="/dashboard/payment" className="btn bg-[#D1A054] border-0">
              PAY
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full mb-5">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  <label>#</label>
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  ITEM IMAGE
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  ITEM NAME
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  PRICE & QUANTITY
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cartItem, index) => (
                <CartItem
                  key={cartItem._id}
                  no={index}
                  cartItem={cartItem}
                ></CartItem>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Carts;
