import { FaTrashAlt, FaUserShield } from "react-icons/fa";
const UserItem = ({ user, index, handelMakeAdmin, handelDeleteUser }) => {
  const { displayName, email, role } = user;

  return (
    <tr className="text-lg font-semibold">
      <th>{index + 1}</th>
      <td>{displayName}</td>
      <td>{email}</td>
      <td className="text-center">
        {role === "admin" ? (
          "Admin"
        ) : (
          <button
            className="btn bg-[#D1A054]  btn-square border-0 text-2xl"
            onClick={() => handelMakeAdmin(user)}
          >
            <FaUserShield></FaUserShield>
          </button>
        )}
      </td>
      <td className="text-center">
        {/* TODO: DELETE ACTION */}
        <button
          className="btn bg-red-600 btn-square border-0 text-xl"
          onClick={() => handelDeleteUser(user)}
        >
          <FaTrashAlt></FaTrashAlt>
        </button>
      </td>
    </tr>
  );
};

export default UserItem;
