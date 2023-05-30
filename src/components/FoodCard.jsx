import { useContext } from "react";
import AddToCartBtn from "./Buttons/AddToCartBtn";
import { AuthContext } from "./../providers/AuthProvider";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const { image, name, price, recipe } = item;

  const handelAddToCart = (menuItem) => {
    const { image, name, price, _id } = menuItem;
    if (user && user.email) {
      const cartItem = {
        foodID: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId || data.modifiedCount > 0) {
            Swal.fire({
              icon: "success",
              title: "Successful",
              text: "Successfully added to cart",
            });
          }
        });
    }
  };

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
        <AddToCartBtn onClick={() => handelAddToCart(item)}>
          Add To Cart
        </AddToCartBtn>
      </div>
    </div>
  );
};

export default FoodCard;
