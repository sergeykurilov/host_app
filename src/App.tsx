import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/app1/*" element={<CounterAppOne />} />
      <Route path="/app2/*" element={<CounterAppTwo />} />
    </Routes>
  </>
);

export default App;
