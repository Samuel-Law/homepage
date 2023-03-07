import { Amap, Marker } from "@amap/amap-react";
import "./index.scss";

const Bussiness = (props) => {
  const { data } = props || {};
  return (
    <div className="bussiness">
      <div className="title">{data.title}</div>
      <div className="card">
        <div className="info">
          <div className="label">{data.label}</div>
          {data?.content?.map((item) => (
            <div className="msg">
              <span className="msg-label">{item.label}：</span>
              <span className="msg-text">{item.text}</span>
            </div>
          ))}
        </div>
        <div className="map">
          <Amap zoom={16} center={[113.280088, 22.167986]}>
            <Marker
              position={[113.280088, 22.167986]}
              label={{
                content: "珠海市佳创兴精密机械有限公司",
                direction: "bottom",
              }}
            />
          </Amap>
        </div>
      </div>
    </div>
  );
};
export default Bussiness;
