import { Image } from "antd";
import "./index.scss";

const Banner3 = (props) => {
  const { data } = props || {};
  return (
    <div
      className="banner3"
      style={{ backgroundImage: "url(images/banner2_bg.jpg)" }}
    >
      <div className="info">
        <div className="title">{data.title}</div>
        <div className="text">{data.text}</div>
        <div className="desc">{data.desc}</div>
      </div>
      {data.images?.length > 0 && (
        <div className="image-container">
          {data.images?.map((url) => (
            <div key={url} className="image-outer">
              <Image className="img" src={url} preview={true} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Banner3;
