import { Image } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./index.scss";

const ImgBox = (props) => {
  const { data } = props || {};

  // 设置keyframes属性
  function addKeyFrames(y) {
    var style = document.createElement("style");
    style.type = "text/css";
    var keyFrames = `
      @-webkit-keyframes rowup {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(A_DYNAMIC_VALUE, 0, 0);
          transform: translate3d(A_DYNAMIC_VALUE, 0, 0);
        }
      }
      @keyframes rowup {
        0% {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        100% {
          -webkit-transform: translate3d(A_DYNAMIC_VALUE, 0, 0);
          transform: translate3d(A_DYNAMIC_VALUE, 0, 0);
        }
      }`;
    style.innerHTML = keyFrames.replace(/A_DYNAMIC_VALUE/g, y);
    document.getElementsByTagName("head")[0].appendChild(style);
  }

  const renderImages = () => {
    const length = data?.images.length || 1;
    const element = data?.images?.map((url, index) =>
      url ? (
        <div className="img-outer">
          <Image className="img" key={index} src={url} preview={true} />
        </div>
      ) : null
    );
    if (data.roll) {
      // 动画偏移补全
      const num = Math.ceil(8 / length);
      const arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(element);
      }
      addKeyFrames("-" + 440 * num + "px");
      return arr;
    } else {
      return element;
    }
  };

  return (
    <div className="imgBox">
      <div className="title">
        <UnorderedListOutlined className="title-icon" />
        {data.title}
      </div>
      <div className={`images ${data.roll ? "rowup" : "scrollbar"}`}>
        {data?.images?.length > 0 && (
          <div className="img-container">{renderImages()}</div>
        )}
      </div>
    </div>
  );
};
export default ImgBox;
