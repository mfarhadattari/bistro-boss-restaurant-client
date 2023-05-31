import { Parallax } from "react-parallax";

const Cover = ({
  bgImg,
  heading,
  subheading,
  textBg,
  textColor,
  bgOpacity,
}) => {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={bgImg} strength={-200}>
      <div className={`hero h-[700px]` }>
        <div className="hero-overlay bg-opacity-20"></div>
        <div
          className={`hero-content text-center text-neutral-content bg-${textBg} bg-opacity-${bgOpacity} text-${textColor} md:w-3/4 mx-auto py-32`}
        >
          <div className="px-10">
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
            <p className="mb-5 text-xl">{subheading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
