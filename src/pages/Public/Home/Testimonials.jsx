import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "../../../components/SectionHeader";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-24">
      <SectionHeader
        heading="TESTIMONIALS"
        subHeading="What Our Client Say"
      ></SectionHeader>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper my-10"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center w-1/2 mx-auto">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <FaQuoteLeft className="text-[100px] my-5"></FaQuoteLeft>
              <p className="text-xl text-gray-800 text-center mt-5">
                {review.details}
              </p>
              <h3 className="text-3xl font-medium text-[#CD9003] mt-3">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
