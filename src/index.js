import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import History from './History';
import App from "./containers/app.container";
import registerServiceWorker from "./registerServiceWorker";
import { Router } from "react-router-dom";
import { Routes } from "./routes";
ReactDOM.render(
  <Router routes={Routes} history={History}>
    <App />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();