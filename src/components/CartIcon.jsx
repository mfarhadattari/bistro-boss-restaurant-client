import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const [quantity, setQuantity] = useState(0);
  return (
    <div className="relative">
      <div className="avatar">
        <div className="w-12 h-12 rounded-full bg-green-700 border-2 border-[#D1A054]">
          <div className="flex justify-center items-center h-full w-full">
            <FaShoppingCart className="text-3xl"></FaShoppingCart>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-1 -right-2 text-2xl font-bold bg-red-600 rounded-full h-7 w-7 flex justify-center items-center">
        {quantity}
      </div>
    </div>
  );
};

export default CartIcon;
