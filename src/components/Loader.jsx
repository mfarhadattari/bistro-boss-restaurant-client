import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
