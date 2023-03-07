import { Image } from "antd";
import "./index.scss";

const Banner = (props) => {
  const { data } = props || {};
  return (
    <div className="banner">
      <div className="info">
        <div className="title">{data.title}</div>
        <div className="text">{data.text}</div>
        <div className="desc">{data.desc}</div>
      </div>
      {data.images && (
        <div className="image-container">
          <Image
            className="img"
            key={data.images}
            src={data.images}
            preview={true}
          />
        </div>
      )}
    </div>
  );
};
export default Banner;
