import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Cover from "../../components/cover";
import SetTitle from "./../../components/SetTitle";
import coverBg from "../../assets/shop/banner.jpg";
import { useState } from "react";

const Shop = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
      ></Cover>
      <section className="my-20 md:w-3/4 mx-auto">
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

          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </section>
    </main>
  );
};

export default Shop;
