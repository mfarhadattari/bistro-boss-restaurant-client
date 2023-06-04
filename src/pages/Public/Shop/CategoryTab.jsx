import FoodCard from "./../../../components/FoodCard";

const CategoryTab = ({ items }) => {
  // TODO : PAGINATION
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default CategoryTab;
