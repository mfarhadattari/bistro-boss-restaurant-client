import PrimaryBtn from "./Buttons/PrimaryBtn";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;

  return (
    <div className="card bg-[#F3F3F3] shadow-xl rounded-none">
      <div className="relative">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="absolute top-5 right-5 bg-[#111827] text-white px-3 py-1 font-medium text-xl">
          ${price}
        </p>
      </div>
      <div className="card-body">
        <h2 className="card-title w-fit mx-auto">{name}</h2>
        <p className="text-lg font-normal text-left text-[#737373]">{recipe}</p>
        <PrimaryBtn>Add To Cart</PrimaryBtn>
      </div>
    </div>
  );
};

export default FoodCard;
