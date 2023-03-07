import { Carousel, Image } from "antd";
import "./index.scss";

const CarouselBox = (props) => {
  const { data = {} } = props || {};

  return (
    <Carousel className="carousel" afterChange={() => {}} autoplay>
      {data?.images?.map((item, index) => (
        <div key={index}>
          <h3 className="carousel-item">
            <Image className="carousel-img" src={item} preview={false} />
          </h3>
        </div>
      ))}
    </Carousel>
  );
};
export default CarouselBox;
