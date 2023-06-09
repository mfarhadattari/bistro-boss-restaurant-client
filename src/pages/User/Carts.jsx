import { Link } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import SetTitle from "../../components/SetTitle";
import useCart from "../../hooks/useCart";
import CartItem from "../../components/CartItem";
import useSecureAxios from "../../hooks/useSecureAxios";
import ConfirmationAlert from "./../../components/Message/ConfirmationAlert";
import SuccessAlert from "./../../components/Message/SuccessAlert";

const Carts = () => {
  const { carts, refetchCart } = useCart();
  const { axiosSecure } = useSecureAxios();

  const totalPrice = carts.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );

  /* ---------------------------------------------------------------
  !-------------------------- DELETE ITEM HANDLER ------------- */
  const deleteItem = (id) => {
    ConfirmationAlert("Want to remove?").then((res) => {
      if (res.isConfirmed) {
        axiosSecure.delete(`/user/delete-from-carts/${id}`).then(({ data }) => {
          if (data.deletedCount > 0) {
            SuccessAlert("Delete Item Successfully");
            refetchCart();
          }
        });
      }
    });
  };

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
            <Link className="btn bg-[#D1A054] border-0" to="/dashboard/payment">
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
                  deleteItem={deleteItem}
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
