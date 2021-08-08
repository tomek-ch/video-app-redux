import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { VideosContextProvider } from "./context/VideosContext";

ReactDOM.render(
  <React.StrictMode>
    <VideosContextProvider>
      <App />
    </VideosContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
