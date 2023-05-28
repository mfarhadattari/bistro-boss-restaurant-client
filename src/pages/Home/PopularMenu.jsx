import { useEffect, useState } from "react";
import SectionHeader from "./../../components/SectionHeader";
import MenuItem from "../../components/MenuItem";
import { Link } from "react-router-dom";
const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularMenu = data.filter(
          (menuItem) => menuItem.category === "popular"
        );
        setMenu(popularMenu);
      });
  }, []);

  return (
    <section className="my-20">
      <SectionHeader
        subHeading="Check it out"
        heading="FROM OUR POPULAR MENU"
      ></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {menu.map((menuItem) => (
          <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
        ))}
      </div>
      <div className="w-fit mx-auto mt-10">
        <Link className="btn btn-outline text-[#1F2937] border-0 border-b-4 ">View Full Menu</Link>
      </div>
    </section>
  );
};

export default PopularMenu;
