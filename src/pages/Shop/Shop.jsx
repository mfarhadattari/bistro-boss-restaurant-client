import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Cover from "../../components/cover";
import SetTitle from "./../../components/SetTitle";
import coverBg from "../../assets/shop/banner.jpg";
import { useState } from "react";
import CategoryTab from "./CategoryTab";
import useMenu from "./../../hooks/useMenu";
import Loader from "./../../components/Loader";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { menu, loading } = useMenu();
  const drinks = menu.filter((menuItem) => menuItem.category === "drinks");
  const desserts = menu.filter((menuItem) => menuItem.category === "dessert");
  const pizzas = menu.filter((menuItem) => menuItem.category === "pizza");
  const salads = menu.filter((menuItem) => menuItem.category === "salad");
  const soups = menu.filter((menuItem) => menuItem.category === "soup");

  return (
    <main>
      <SetTitle title="Shop - Bistro Boos Restaurant"></SetTitle>
      <Cover
        bgImg={coverBg}
        heading="OUR SHOP"
        subheading="WOULD YOU TO TRY A DISH"
        textBg="black"
        textColor="white"
        bgOpacity={60}
        height="700px"
      ></Cover>
      <section className="my-20 md:w-3/4 mx-auto">
        {loading ? (
          <Loader></Loader>
        ) : (
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
            className="text-center text-2xl font-bold"
            selectedTabClassName="text-[#BB8506] border-[#BB8506] border-b-4 outline-0"
          >
            <TabList className="border-0 flex gap-5 justify-center">
              <Tab className="border-0 uppercase">
                <button className="uppercase">Salad</button>
              </Tab>
              <Tab className="border-0">
                <button className="uppercase">Pizza</button>
              </Tab>
              <Tab className="border-0">
                <button className="uppercase">Dessert</button>
              </Tab>
              <Tab className="border-0">
                <button className="uppercase">Soup</button>
              </Tab>
              <Tab className="border-0">
                <button className="uppercase">Drink</button>
              </Tab>
            </TabList>

            <TabPanel>
              <CategoryTab items={salads}></CategoryTab>
            </TabPanel>
            <TabPanel>
              <CategoryTab items={pizzas}></CategoryTab>
            </TabPanel>
            <TabPanel>
              <CategoryTab items={desserts}></CategoryTab>
            </TabPanel>
            <TabPanel>
              <CategoryTab items={soups}></CategoryTab>
            </TabPanel>
            <TabPanel>
              <CategoryTab items={drinks}></CategoryTab>
            </TabPanel>
          </Tabs>
        )}
      </section>
    </main>
  );
};

export default Shop;
