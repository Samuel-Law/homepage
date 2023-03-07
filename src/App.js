import "antd/dist/reset.css";
import "./App.css";
import Home from "./pages/index.jsx";
import zh_CN from "antd/lib/locale/zh_CN";
import { ConfigProvider } from "antd";

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zh_CN}>
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
