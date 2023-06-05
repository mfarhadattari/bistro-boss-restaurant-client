import useSecureAxios from "../../hooks/useSecureAxios";
import ConfirmationAlert from "../../components/Message/ConfirmationAlert";
import SuccessAlert from "../../components/Message/SuccessAlert";
import SetTitle from "../../components/SetTitle";
import SectionHeader from "../../components/SectionHeader";
import UserItem from "../../components/UserItem";
import useUsers from "../../hooks/useUsers";
import useAuthContext from "../../hooks/useAuthContext";

const AllUsers = () => {
  const { axiosSecure } = useSecureAxios();
  const { users, refetch } = useUsers();
  const { authUser } = useAuthContext();

  const handelMakeAdmin = (user) => {
    ConfirmationAlert(`Want to make "${user.displayName}" admin?`).then(
      (res) => {
        if (res.isConfirmed) {
          axiosSecure
            .patch(`/admin/make-admin/${user._id}?email=${authUser.email}`)
            .then(({ data }) => {
              if (data.modifiedCount > 0) {
                SuccessAlert(`${user.displayName} is now admin now!`);
                refetch();
              }
            });
        }
      }
    );
  };

  return (
    <section>
      <SetTitle title="Users - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="MANAGE ALL USERS"
        subHeading="How many?"
      ></SectionHeader>
      <div className="p-5">
        <h1 className="text-3xl font-semibold">TOTAL USERS: {users.length}</h1>
        <div className="overflow-x-auto mt-5">
          <table className="table w-full mb-5">
            <thead>
              <tr className="text-xl font-semibold">
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  #
                </th>
                <th className="bg-[#D1A054] text-white text-lg">Name</th>
                <th className="bg-[#D1A054] text-white text-lg">Email</th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  Role
                </th>
                <th className="bg-[#D1A054] text-white text-lg text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <UserItem
                  key={user._id}
                  index={index}
                  user={user}
                  handelMakeAdmin={handelMakeAdmin}
                ></UserItem>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllUsers;
