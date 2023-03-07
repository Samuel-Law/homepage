import { Image } from "antd";

import "./index.scss";

const Example = (props) => {
  const { data } = props || {};
  return (
    <div className="example">
      <div className="title">{data.title}</div>
      <div>
        {data?.images?.length > 0 && (
          <div className="images">
            {data?.images?.map((item) =>
              item.url ? (
                <div className="img-container">
                  <Image
                    className="img"
                    key={item.url}
                    src={item.url}
                    preview={true}
                  />
                  <div className="img-desc">{item.text}</div>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Example;
