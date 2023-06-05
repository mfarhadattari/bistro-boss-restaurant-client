import useAuthContext from "./../../hooks/useAuthContext";
import SetTitle from "./../../components/SetTitle";
import useMenu from "./../../hooks/useMenu";
import useUsers from "../../hooks/useUsers";
import usePayments from "../../hooks/usePayments";
import { FaTruck, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
const AdminHome = () => {
  // TODO Complete Admin Home
  const { authUser } = useAuthContext();

  const { menu } = useMenu();
  const { users } = useUsers();
  const { payments } = usePayments();

  const revenue = payments.reduce((sum, item) => sum + item.amount, 0);
  const orders = payments.reduce(
    (totalOrders, item) => totalOrders + item.cartInfo.length,
    0
  );

  return (
    <section>
      <SetTitle title="Admin Home - Bistro Boss Restaurant"></SetTitle>
      <div className="p-5">
        <h1 className="text-2xl">Hi, {authUser.displayName} !</h1>
        <div className="stats shadow my-5">
          <div className="stat flex items-center">
            <div className="text-3xl">
              <FaWallet></FaWallet>
            </div>
            <div className="text-center">
              <div className="stat-value">${revenue}</div>
              <div className="stat-title">Revenue</div>
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="text-3xl">
              <FaUsers></FaUsers>
            </div>
            <div className="text-center">
              <div className="stat-value">{users.length}</div>
              <div className="stat-title">Customer</div>
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="text-3xl">
              <FaUtensils></FaUtensils>
            </div>
            <div className="text-center">
              <div className="stat-value">{menu.length}</div>
              <div className="stat-title">Product</div>
            </div>
          </div>

          <div className="stat flex items-center">
            <div className="text-3xl">
              <FaTruck></FaTruck>
            </div>
            <div className="text-center">
              <div className="stat-value">{orders}</div>
              <div className="stat-title">Orders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
