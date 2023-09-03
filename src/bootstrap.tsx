import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>,
);
