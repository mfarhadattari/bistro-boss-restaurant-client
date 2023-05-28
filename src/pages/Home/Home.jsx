import Banner from "./Banner";
import Categories from "./Categories";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
    </div>
  );
};

export default Home;
