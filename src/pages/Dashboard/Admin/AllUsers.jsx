import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import SetTitle from "../../../components/SetTitle";

const AllUsers = () => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      return res.json();
    },
  });
  return (
    <section>
      <SetTitle title="Users - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="MANAGE ALL USERS"
        subHeading="How many?"
      ></SectionHeader>
      <div>{users.length}</div>
    </section>
  );
};

export default AllUsers;
