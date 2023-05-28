import Banner from "./Banner";
import Categories from "./Categories";
import Contract from "./Contract";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Categories></Categories>
      <PopularMenu></PopularMenu>
      <Contract></Contract>
      <Featured></Featured>
    </div>
  );
};

export default Home;
