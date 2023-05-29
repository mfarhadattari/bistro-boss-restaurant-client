import { Parallax } from "react-parallax";

const Cover = ({ bgImg, heading, subheading }) => {
  return (
    <Parallax blur={{ min: -15, max: 15 }} bgImage={bgImg} strength={-200}>
      <div className="hero h-[700px]">
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="hero-content text-center text-neutral-content bg-black bg-opacity-70 md:w-2/4 mx-auto p-20">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
            <p className="mb-5">{subheading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
