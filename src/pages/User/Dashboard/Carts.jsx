import SetTitle from "../../../components/SetTitle";
import SectionHeader from "./../../../components/SectionHeader";
import useCart from "./../../../hooks/useCart";

const Carts = () => {
  const { carts } = useCart();

  const totalPrice = carts.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );


  return (
    <main className="px-5">
      <SetTitle title="My Cart - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="WANNA ADD MORE?"
        subHeading="My Cart"
      ></SectionHeader>
      <section>
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-semibold">
            TOTAL ORDERS: {carts.length}{" "}
          </h1>
          <h1 className="text-3xl font-semibold">
            TOTAL PRICE: ${totalPrice}{" "}
          </h1>
          <div>
            <button className="btn bg-[#D1A054] border-0">PAY</button>
          </div>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full ">
            {/* head */}
            <thead className="">
              <tr>
                <th className="bg-[#D1A054] text-white text-lg">
                  <label>#</label>
                </th>
                <th className="bg-[#D1A054] text-white text-lg">ITEM IMAGE</th>
                <th className="bg-[#D1A054] text-white text-lg">ITEM NAME</th>
                <th className="bg-[#D1A054] text-white text-lg">PRICE</th>
                <th className="bg-[#D1A054] text-white text-lg">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Carts;
