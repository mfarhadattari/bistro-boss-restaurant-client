import SetTitle from "../../components/SetTitle";
import Banner from "./Banner";
import Categories from "./Categories";
import Contract from "./Contract";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <main>
      <SetTitle title="Bistro Boss Restaurant"></SetTitle>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Contract></Contract>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </main>
  );
};

export default Home;
