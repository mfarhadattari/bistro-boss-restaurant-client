const PrimaryBtn = ({ children, onClick }) => {
  return (
    <button className="btn bg-[#111827] border-[#BB8506] border-0 border-b-4  text-[#BB8506]" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryBtn;
