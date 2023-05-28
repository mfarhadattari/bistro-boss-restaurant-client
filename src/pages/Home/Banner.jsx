import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// banner image
import banner1 from "../../assets/home/banners/01.jpg";
import banner2 from "../../assets/home/banners/02.jpg";
import banner3 from "../../assets/home/banners/03.png";
import banner4 from "../../assets/home/banners/04.jpg";
import banner5 from "../../assets/home/banners/05.png";
import banner6 from "../../assets/home/banners/06.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
      <div>
        <img src={banner6} />
      </div>
    </Carousel>
  );
};

export default Banner;
