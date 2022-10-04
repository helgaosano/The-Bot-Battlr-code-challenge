
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import { DataProvider } from "./context/data";

ReactDOM.render(
  <DataProvider>
    <App />
  </DataProvider>,
  document.getElementById("root")
);