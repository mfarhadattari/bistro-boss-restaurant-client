import AddToCartBtn from "./Buttons/AddToCartBtn";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const FoodCard = ({ item }) => {
  const { authUser } = useAuthContext();
  const { image, name, price, recipe } = item;
  const { refetchCart } = useCart();

  const navigate = useNavigate();
  const location = useLocation();

  const handelAddToCart = (menuItem) => {
    const { image, name, price, _id } = menuItem;
    if (!authUser) {
      Swal.fire({
        icon: "warning",
        title: "Please Login for add food!",
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Ok",
        cancelButtonText: "No",
      }).then((res) => {
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
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          refetchCart();
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
