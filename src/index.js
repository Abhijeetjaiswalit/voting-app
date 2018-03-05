import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/app.container";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
ReactDOM.render(
  <BrowserRouter routes={Routes}>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
