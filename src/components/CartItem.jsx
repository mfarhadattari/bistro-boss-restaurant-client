import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";

const CartItem = ({ cartItem, no }) => {
  const { refetchCart } = useCart();
  const { _id, name, price, quantity, image } = cartItem;

  /* ---------------------------------------------------------------
  !-------------------------- DELETE ITEM HANDLER ------------- */
  const deleteItem = (id) => {
    Swal.fire({
      icon: "question",
      title: "Want to remove?",
      showConfirmButton: true,
      confirmButtonText: "Yes",
      confirmButtonColor: "red",
      showCancelButton: true,
      cancelButtonColor: "Green",
      cancelButtonText: "No",
    }).then((res) => {
      if (res.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetchCart();
            }
          });
      }
    });
  };

  return (
    <tr className="text-lg font-semibold">
      <th className="text-center">
        <label>{no + 1}</label>
      </th>
      <td className="text-center">
        <div className="avatar">
          <div className="rounded-lg  w-20 h-20">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td className="text-center">{name}</td>
      {/* @TODO : Update Quantity*/}
      <td className="text-center">
        <p>Price: ${price}</p>
        <div className="flex gap-2 items-center justify-center mt-2">
          <span>
            <FaMinus></FaMinus>
          </span>
          <input
            type="text"
            className="border w-12 rounded-md text-center"
            defaultValue={quantity}
            readOnly
          />
          <span>
            <FaPlus></FaPlus>
          </span>
        </div>
      </td>
      <th className="text-center">
        <button
          className="btn btn-square text-xl bg-red-600 border-0"
          onClick={() => deleteItem(_id)}
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </th>
    </tr>
  );
};

export default CartItem;
