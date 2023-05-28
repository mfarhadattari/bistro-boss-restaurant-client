const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-10 space-y-5">
      <p className="text-[#D99904] text-xl italic">--- {subHeading} ---</p>
      <h1 className="border-4 border-l-0 border-r-0 text-4xl p-5 md:w-2/4 mx-auto uppercase">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeader;
