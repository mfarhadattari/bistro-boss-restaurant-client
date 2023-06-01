import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import SetTitle from "../../../components/SetTitle";
import UserItem from "../../../components/UserItem";
import Swal from "sweetalert2";
import useSecureAxios from "../../../hooks/useSecureAxios";

const AllUsers = () => {
  const { axiosSecure } = useSecureAxios();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure("/users");
      return res.data;
    },
  });

  const handelMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then(({ data }) => {
      if (data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${user.displayName} is Admin now!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
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
