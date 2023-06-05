import AddToCartBtn from "./Buttons/AddToCartBtn";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import SuccessAlert from "./Message/SuccessAlert";
import ConfirmationAlert from "./Message/ConfirmationAlert";

const FoodCard = ({ item }) => {
  const { authUser } = useAuthContext();
  const { image, name, price, recipe } = item;

  const navigate = useNavigate();
  const location = useLocation();

  const handelAddToCart = (menuItem) => {
    const { image, name, price, _id } = menuItem;
    if (!authUser) {
      ConfirmationAlert("Please Login for add food!").then((res) => {
        if (res.isConfirmed) {
          navigate("/login", {
            state: { from: location.pathname },
            replace: true,
          });
        }
      });
    }
    if (authUser && authUser.email) {
      const cartItem = {
        foodID: _id,
        name,
        image,
        price,
        email: authUser.email,
      };
      fetch("https://mfarhad-bistro-boss-restaurant.vercel.app/user/add-to-carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId || data.modifiedCount > 0) {
            SuccessAlert("Successfully added to cart");
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
