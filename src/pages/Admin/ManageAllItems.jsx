import ConfirmationAlert from "../../components/Message/ConfirmationAlert";
import SuccessAlert from "../../components/Message/SuccessAlert";
import SectionHeader from "../../components/SectionHeader";
import SetTitle from "../../components/SetTitle";
import useAuthContext from "../../hooks/useAuthContext";
import useSecureAxios from "../../hooks/useSecureAxios";
import useMenu from "./../../hooks/useMenu";
import ManageItem from "../../components/ManageItem";

const ManageAllItems = () => {
  const { menu, refetch } = useMenu();
  const { authUser } = useAuthContext();
  const { axiosSecure } = useSecureAxios();

  const deleteItem = (id) => {
    ConfirmationAlert("Sure Want to remove?").then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/delete-item/${id}?email=${authUser.email}`)
          .then(({ data }) => {
            if (data.deletedCount > 0) {
              SuccessAlert("Your file has been deleted.");
              refetch();
            }
          });
      }
    });
  };

  // TODO : Have to Pagination
  // TODO : Have to update

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
                <ManageItem
                  key={item._id}
                  index={index}
                  item={item}
                  deleteItem={deleteItem}
                ></ManageItem>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageAllItems;
