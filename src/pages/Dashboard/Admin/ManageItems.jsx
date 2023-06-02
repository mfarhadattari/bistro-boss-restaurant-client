import SetTitle from "./../../../components/SetTitle";
import SectionHeader from "./../../../components/SectionHeader";
import useMenu from "../../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const { menu } = useMenu();

  const deleteItem = (id) => {
    console.log(id);
  };

  return (
    <section>
      <SetTitle title="Manage Items - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="MANAGE ALL ITEMS"
        subHeading="Hurry Up!"
      ></SectionHeader>
      <div className="p-5">
        <h1 className="text-3xl font-semibold">TOTAL ITEMS: {menu.length}</h1>
        <div className="overflow-x-auto mt-5">
          <table className="table w-full mb-5">
            <thead>
              <tr className="text-xl font-semibold">
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  #
                </th>
                <th className="bg-[#D1A054] text-white text-lg">ITEMS IMAGE</th>
                <th className="bg-[#D1A054] text-white text-lg">ITEMS NAME</th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  PRICE
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id} className="text-lg font-semibold">
                  <th className="text-center">
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="avatar">
                      <div className="rounded-lg  w-20 h-20">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-center">
                    <p>${item.price}</p>
                  </td>
                  <th className="text-center flex gap-5 justify-center items-center">
                    <button className="btn btn-square text-xl bg-[#D1A054] border-0">
                      <FaEdit></FaEdit>
                    </button>
                    <button
                      className="btn btn-square text-xl bg-red-600 border-0"
                      onClick={() => deleteItem(item._id)}
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
