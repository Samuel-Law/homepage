import React, { useEffect, useRef } from "react";
import Carousel from "../Carousel/index";
import ImgBox from "../ImgBox/index";
import Banner from "../Banner/index";
import Banner2 from "../Banner2/index";
import Example from "../Example/index";
import About from "../About/index";
import BigImage from "../BigImage/index";
import Bussiness from "../Bussiness/index";
import "./animate.min.css";
import "./index.scss";
import { WOW } from "wowjs";

const RenderElements = (props) => {
  const ref = useRef();
  let observer = null;
  const { data } = props;
  const { animation = "fadeInDown" } = data;

  const renderElement = (item) => {
    const renderEl = {
      carousel: <Carousel key={item.type} data={item} />,
      imgBox: <ImgBox key={item.type} data={item} />,
      banner: <Banner key={item.type} data={item} />,
      banner2: <Banner2 key={item.type} data={item} />,
      example: <Example key={item.type} data={item} />,
      about: <About key={item.type} data={item} />,
      bussiness: <Bussiness key={item.type} data={item} />,
      bigImage: <BigImage key={item.type} data={item} />,
    };
    const element = (
      <div
        ref={ref}
        className={`wow ${animation || ""}`}
        data-wow-duration="1s"
      >
        {renderEl[item.type] || null}
      </div>
    );
    // const element = (
    //   <div ref={ref} className={`fadeInDown ${animation ? "animation" : ""}`}>
    //     {renderEl[item.type] || null}
    //   </div>
    // );
    return element;
  };

  useEffect(() => {
    console.log(WOW);
    new WOW().init();

    if (animation) {
      //   observerElement();
    }
    return () => {
      observer?.disconnect();
    };
  }, []);

  return <>{renderElement(data)}</>;
};

export default RenderElements;
