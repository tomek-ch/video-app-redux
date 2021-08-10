import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { VideosContextProvider } from "./context/VideosContext";

ReactDOM.render(
  <VideosContextProvider>
    <App />
  </VideosContextProvider>,
  document.getElementById("root")
);
