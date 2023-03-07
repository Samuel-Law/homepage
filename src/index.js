import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { config as AmapReactConfig } from "@amap/amap-react";

AmapReactConfig.version = "2.0"; // 默认2.0，这里可以不修改
AmapReactConfig.key = "9d4a00ad55358410967c76794b311345";
AmapReactConfig.plugins = [];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
