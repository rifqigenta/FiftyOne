import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Dashboard } from "./pages/admin/Dashboard";
import Chart from "./components/Chart/Chart";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Chart /> */}
  </React.StrictMode>
);
