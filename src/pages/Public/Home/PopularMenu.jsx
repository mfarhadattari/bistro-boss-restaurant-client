import { Link } from "react-router-dom";
import Loader from "../../../components/Loader";
import SectionHeader from "../../../components/SectionHeader";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "./../../../components/MenuItem";
import MenuBtn from "./../../../components/Buttons/MenuBtn";

const PopularMenu = () => {
  const { loading } = useMenu();
  const menu = useMenu().menu.filter(
    (menuItem) => menuItem.category === "popular"
  );
  return (
    <section className="my-20">
      <SectionHeader
        subHeading="Check it out"
        heading="FROM OUR POPULAR MENU"
      ></SectionHeader>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {menu.map((menuItem) => (
              <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
            ))}
          </div>
          <div className="w-fit mx-auto mt-10">
            <Link to="/menu">
              <MenuBtn>View Full Menu</MenuBtn>
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularMenu;
