import SetTitle from "./../../../components/SetTitle";
import SectionHeader from "./../../../components/SectionHeader";
import { FaUtensils } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useSecureAxios from "../../../hooks/useSecureAxios";
import ErrorMessage from "../../../components/Message/ErrorMessage";
import useAuthContext from "../../../hooks/useAuthContext";
import SuccessAlert from "../../../components/Message/SuccessAlert";

const AddItems = () => {
  const { authUser } = useAuthContext();
  const { axiosSecure } = useSecureAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(import.meta.env.VITE_IMG_HOSTING, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, category, price, recipe } = data;
          const newItem = {
            name,
            category,
            price: parseFloat(price),
            recipe,
            image: imgURL,
          };
          axiosSecure
            .post(`/add-item?email=${authUser.email}`, newItem)
            .then(({ data }) => {
              if (data.insertedId) {
                SuccessAlert("Added Item Successfully!");
              }
            });
        }
      });
  };

  return (
    <section className="container mx-auto">
      <SetTitle title="Add Item - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="ADD AN ITEM"
        subHeading="What's new?"
      ></SectionHeader>
      <div className="card bg-gray-100 w-4/5 mx-auto my-10">
        <form className="card-body space-y-2" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <ErrorMessage message="Name is required"></ErrorMessage>
            )}
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("category", { required: true })}
              >
                <option>SALAD</option>
                <option>PIZZA</option>
                <option>DESSERT</option>
                <option>SOUP</option>
                <option>DRINK</option>
              </select>
              {errors.category && (
                <ErrorMessage message="Category is required"></ErrorMessage>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
              {errors.price && (
                <ErrorMessage message="Price is required"></ErrorMessage>
              )}
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered"
              rows={6}
              placeholder="Recipe Details"
            ></textarea>
            {errors.recipe && (
              <ErrorMessage message="Recipe Details is required"></ErrorMessage>
            )}
          </div>

          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs bg-gray-200"
            />
            {errors.image && (
              <ErrorMessage message="Image is required"></ErrorMessage>
            )}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary bg-[#D1A054] hover:bg-[#be8f47] border-0 rounded-none w-fit gap-5">
              Add Item <FaUtensils></FaUtensils>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItems;
