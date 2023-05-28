import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../assets/home/foods/slide1.jpg";
import slide2 from "../../assets/home/foods/slide2.jpg";
import slide3 from "../../assets/home/foods/slide3.jpg";
import slide4 from "../../assets/home/foods/slide4.jpg";
import slide5 from "../../assets/home/foods/slide5.jpg";
import SectionHeader from "../../components/SectionHeader";

const Categories = () => {
  return (
    <section className="my-20">
      <SectionHeader
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      ></SectionHeader>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} />
          <h2 className="md:text-2xl lg:text-4xl uppercase -mt-16  text-center  text-white">
            Salads
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} />
          <h2 className="md:text-2xl lg:text-4xl uppercase -mt-16  text-center  text-white">
            pizzas
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} />
          <h2 className="md:text-2xl lg:text-4xl uppercase -mt-16  text-center  text-white">
            Soups
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} />
          <h2 className="md:text-2xl lg:text-4xl uppercase -mt-16  text-center  text-white">
            Desserts
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} />
          <h2 className=" md:text-2xl lg:text-4xl uppercase -mt-16  text-center  text-white">
            Salads
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
