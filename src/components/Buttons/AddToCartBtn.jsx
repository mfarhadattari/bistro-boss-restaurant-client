const AddToCartBtn = ({ children, onClick }) => {
  return (
    <button className="btn bg-[#E8E8E8] hover:bg-[#111827] border-[#BB8506] hover:border-[#BB8506] border-0 border-b-4  text-[#BB8506] hover:" onClick={onClick}>
      {children}
    </button>
  );
};

export default AddToCartBtn;
