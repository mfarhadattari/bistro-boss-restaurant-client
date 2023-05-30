import { Oval } from "react-loader-spinner";

const LoadingBtn = ({ children, type, className, loading }) => {
  return (
    <button type={type} className={`${className} flex gap-2 items-center`}>
      {loading && (
        <Oval
          height={20}
          width={20}
          color="white"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="white"
          strokeWidth={10}
          strokeWidthSecondary={5}
        />
      )}{" "}
      {children}
    </button>
  );
};

export default LoadingBtn;
