import { Image } from "antd";

import "./index.scss";

const About = (props) => {
  const { data } = props || {};
  return (
    <div className="about">
      <div className="message">
        <div className="title">{data.title}</div>
        <div className="text">{data.text}</div>
      </div>
      <div className="images-box">
        {data?.images?.length > 0 && (
          <div className="images">
            {data?.images?.map((url) =>
              url ? (
                <div className="img-container">
                  <Image className="img" key={url} src={url} preview={true} />
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default About;
