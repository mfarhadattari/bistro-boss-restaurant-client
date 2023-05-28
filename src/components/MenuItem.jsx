const MenuItem = ({ menuItem }) => {
  const { image, name, price, recipe } = menuItem;
  return (
    <div className="flex gap-3 items-start">
      <img
        src={image}
        className="border w-[118px] h-[104px] rounded-r-[200px] rounded-b-[200px]"
      />
      <div className="w-3/4">
        <h3 className="flex justify-between text-xl ">
          <span className="uppercase">{name}</span>
          <span className="text-[#BB8506]">${price}</span>
        </h3>
        <p className="text-[#737373] ">{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
