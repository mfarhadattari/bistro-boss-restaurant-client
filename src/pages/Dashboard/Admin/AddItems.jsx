import SetTitle from "./../../../components/SetTitle";
import SectionHeader from "./../../../components/SectionHeader";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  return (
    <section className="container mx-auto">
      <SetTitle title="Add Item - Bistro Boss Restaurant"></SetTitle>
      <SectionHeader
        heading="ADD AN ITEM"
        subHeading="What's new?"
      ></SectionHeader>
      <div className="card bg-gray-100 w-4/5 mx-auto my-10">
        <form className="card-body space-y-2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                <option>SALAD</option>
                <option>PIZZA</option>
                <option>DESSERT</option>
                <option>SOUP</option>
                <option>DRINK</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              rows={6}
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              type="file"
              className="file-input w-full max-w-xs bg-gray-200"
            />
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
