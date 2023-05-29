import Cover from "../../components/cover";
import SetTitle from "./../../components/SetTitle";
import coverBg from "../../assets/shop/banner.jpg";

const Shop = () => {
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
      <section className="my-20">

      </section>
    </main>
  );
};

export default Shop;
