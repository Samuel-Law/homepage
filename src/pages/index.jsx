import React, { useEffect, useState } from "react";
import Header from "./Header/index";
import Footer from "./Footer/index";
import RenderElement from "./RenderElement/index";

import "./index.css";

const Home = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const res = await fetch("/data.json");
    const data = await res.json();
    setData(data);
    return data;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="home">
      <Header data={data} />
      {data?.showList?.map((item, index) => (
        <RenderElement data={item} key={index} />
      ))}
      <Footer data={data} />
    </div>
  );
};

export default Home;
