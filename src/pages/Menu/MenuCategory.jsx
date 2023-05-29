import MenuBtn from "../../components/Buttons/MenuBtn";
import MenuItem from "../../components/MenuItem";
import Cover from "../../components/cover";

const MenuCategory = ({ menuItems, bgImg, heading, subheading }) => {
  return (
    <section className="mt-20">
      {heading && (
        <Cover
          heading={heading}
          subheading={subheading}
          bgImg={bgImg}
          textBg="black"
          bgOpacity={60}
          textColor="white"
        ></Cover>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {menuItems.map((menuItem) => (
          <MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
        ))}
      </div>
      <div className="w-fit mx-auto mt-10">
        <MenuBtn>Order Your Favorite Food</MenuBtn>
      </div>
    </section>
  );
};

export default MenuCategory;
