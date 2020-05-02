import React from "react";
import "./App.css";

import Counter from "./Components/Counter";
import Layer from "./Components/layer/Layer";
import { render } from "@testing-library/react";

function App() {
  return (
    <div className="App">
      <Layer></Layer>
      <Layer></Layer>
    </div>
  );
}

export default App;
