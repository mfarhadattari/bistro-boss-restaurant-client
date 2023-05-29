import SetTitle from "../../components/SetTitle";
import Cover from "../../components/cover";
import banner from "../../assets/menu/banner.jpg";

const Menu = () => {
  return (
    <main className="mb-20">
      <SetTitle title="Menu - Bistro Boss Restaurant"></SetTitle>
      <Cover
        bgImg={banner}
        heading="OUR MENU"
        subheading="WOULD YOU LIKE TO TRY A DISH?"
      ></Cover>
    </main>
  );
};

export default Menu;
