import coverImg from "../../..//assets/home/chef-service.jpg";
import SetTitle from "../../../components/SetTitle";
import Cover from "./../../../components/Cover";

import Banner from "./Banner";
import Categories from "./Categories";
import PopularMenu from "./PopularMenu";
import Contract from "./Contract";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <SetTitle title="Bistro Boss Restaurant"></SetTitle>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Cover
        bgImg={coverImg}
        heading="Bistro Boss"
        subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
      ></Cover>
      <Contract></Contract>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </main>
  );
};

export default Home;
