import { Image } from "antd";
import "./index.scss";

const Banner2 = (props) => {
  const { data } = props || {};
  return (
    <div
      className="banner2"
      style={{ backgroundImage: "url(images/banner2_bg.jpg)" }}
    >
      <div className="info">
        <div className="title">{data.title}</div>
        <div className="text">{data.text}</div>
        <div className="desc">{data.desc}</div>
      </div>
      {data.images?.length > 0 && (
        <div className="image-container">
          {data.images?.map((item) => (
            <div key={item.url} className="image-outer">
              <Image className="img" src={item.url} preview={true} />
              <div className="img-msg">{item.text}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Banner2;
