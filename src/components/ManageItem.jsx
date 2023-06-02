import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItem = ({ item, index, deleteItem }) => {
  const { image, name, _id, price } = item;
  return (
    <tr className="text-lg font-semibold">
      <th className="text-center">
        <label>{index + 1}</label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded-lg  w-20 h-20">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td className="text-center">
        <p>${price}</p>
      </td>
      <td className="text-center">
        <div className="flex gap-5 justify-center items-center">
          <button className="btn btn-square text-xl bg-[#D1A054] border-0">
            <FaEdit></FaEdit>
          </button>
          <button
            className="btn btn-square text-xl bg-red-600 border-0"
            onClick={() => deleteItem(_id)}
          >
            <FaTrashAlt></FaTrashAlt>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ManageItem;
