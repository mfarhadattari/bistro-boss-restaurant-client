import { Helmet } from "react-helmet-async";

const SetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default SetTitle;
