import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const CartItem = ({ cartItem, no }) => {
  const { _id, name, price, quantity, image } = cartItem;

  const deleteItem = (id) => {
    console.log(id);
  };

  return (
    <tr className="text-lg font-semibold">
      <th className="text-center">
        <label>{no + 1}</label>
      </th>
      <td className="text-center">
        <div className="avatar">
          <div className="rounded-lg  w-16 h-16">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td className="text-center">{name}</td>
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
