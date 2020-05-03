import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { render } from "@testing-library/react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Counter from "./Components/Counter";
import Layer from "./Components/layer/Layer";
import Example from "./Components/network/Network";

function App() {
  return (
    <div className="App">
      <DndProvider backend={Backend}>
        <Example />
      </DndProvider>
    </div>
  );
}

export default App;
