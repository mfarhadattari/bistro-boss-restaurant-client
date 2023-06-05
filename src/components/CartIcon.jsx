import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";

const CartIcon = () => {
  const { carts } = useCart();

  return (
    <div className="relative w-fit h-fit">
      <div className="avatar">
        <div className="w-10 h-10 rounded-full bg-green-700 border-2 border-[#D1A054]">
          <div className="flex justify-center items-center h-full w-full">
            <FaShoppingCart className="text-3xl"></FaShoppingCart>
          </div>
        </div>
      </div>
      <div className="absolute  -bottom-1 -right-1 text-sm font-bold border-1 border-[#D1A054] bg-red-600 rounded-full h-7 w-7 flex justify-center items-center">
        {carts ? carts.length : 0}
      </div>
    </div>
  );
};

export default CartIcon;
