import SectionHeader from "../../components/SectionHeader";
import featuredImg from "../../assets/home/featured.jpg";
import moment from "moment";

const Featured = () => {
  return (
    <section className="my-20 bg-fixed bg-center bg-cover bg-featured-img  text-white">
      <div className="bg-black py-10 bg-opacity-60">
        <SectionHeader
          heading="Featured Menu"
          subHeading="Check it out"
        ></SectionHeader>
        <div className="flex w-3/4 mx-auto">
          <div className="w-full p-5">
            <img src={featuredImg} className="w-full mx-auto" />
          </div>
          <div className="w-full p-5 space-y-2">
            <h3 className="text-2xl">{moment().format("MMMM DD, YYYY")}</h3>
            <h2 className="uppercase text-2xl">Where Can i get some?</h2>
            <p className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident rerum vel enim iste, blanditiis magni eos reprehenderit
              amet, fugit corporis quae officia quisquam adipisci nesciunt in
              ipsam optio eius nihil!
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
