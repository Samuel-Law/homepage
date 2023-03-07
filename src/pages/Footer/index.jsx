import "./index.scss";

const Header = (props) => {
  const { footer } = props?.data || {};
  return <div className="footer">{footer}</div>;
};
export default Header;
