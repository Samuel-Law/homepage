import { Image } from "antd";
import "./index.scss";

const Header = (props) => {
  const data = props?.data?.header || {};
  return (
    <>
      <div className="header-banner">欢迎光临本站</div>
      <div className="header">
        <div className="title">
          <div className="text">{data.title}</div>
          <div className="desc">{data.desc}</div>
        </div>
        {data.phone && (
          <div className="phone">
            <div className="phone-icon">
              <Image src="/images/phone.png" preview={false} />
            </div>
            <div className="phone-desc">
              <div>咨询服务热线</div>
              <div className="phone-number">{data.phone}</div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
