import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
