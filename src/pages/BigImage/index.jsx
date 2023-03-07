import { Image } from "antd";

import "./index.scss";

const ImgBox = (props) => {
  const { data } = props || {};
  return (
    <div className="big-image">
      <Image className="img" src={data.url} preview={true} />
    </div>
  );
};
export default ImgBox;
