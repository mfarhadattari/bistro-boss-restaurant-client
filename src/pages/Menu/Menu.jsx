import SetTitle from "../../components/SetTitle";
import Cover from "../../components/cover";
import banner from "../../assets/menu/banner.jpg";
import useMenu from "../../hooks/useMenu";
import Loader from "./../../components/Loader";
import MenuCategory from "./MenuCategory";
import SectionHeader from "../../components/SectionHeader";

/* --------------------- bg cover ------------------- */
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const { menu, loading } = useMenu();
  const offers = menu.filter((menuItem) => menuItem.category === "offered");
  const desserts = menu.filter((menuItem) => menuItem.category === "dessert");
  const pizzas = menu.filter((menuItem) => menuItem.category === "pizza");
  const salads = menu.filter((menuItem) => menuItem.category === "salad");
  const soups = menu.filter((menuItem) => menuItem.category === "soup");

  return (
    <main className="mb-20">
      {loading ? (
        <div className="mt-40">
          <Loader></Loader>
        </div>
      ) : (
        <>
          <SetTitle title="Menu - Bistro Boss Restaurant"></SetTitle>

          {/* ----------  todays offer section------------- */}
          <section>
            <Cover
              bgImg={banner}
              heading="OUR MENU"
              subheading="WOULD YOU LIKE TO TRY A DISH?"
              textBg="black"
              textColor="white"
              bgOpacity={60}
            ></Cover>
            <SectionHeader
              heading="TODAY'S OFFER"
              subHeading="Don't miss"
            ></SectionHeader>
            <MenuCategory menuItems={offers}></MenuCategory>
          </section>
          {/* -------------- desserts menu section ------------ */}
          <MenuCategory
            menuItems={desserts}
            heading="Desserts"
            subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImg={dessertBg}
          ></MenuCategory>
          {/* -------------- pizzas menu section ------------ */}
          <MenuCategory
            menuItems={pizzas}
            heading="Pizza"
            subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImg={pizzaBg}
          ></MenuCategory>

          {/* --------------------- salads section ------------- */}
          <MenuCategory
            menuItems={salads}
            heading="Salads"
            subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImg={saladBg}
          ></MenuCategory>
          {/* --------------------- soups section ------------- */}
          <MenuCategory
            menuItems={soups}
            heading="Soups"
            subheading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            bgImg={soupBg}
          ></MenuCategory>
        </>
      )}
    </main>
  );
};

export default Menu;
