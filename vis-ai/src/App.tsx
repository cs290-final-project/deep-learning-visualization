import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { render } from "@testing-library/react";
import { Container, Row, Col } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Layer from "./Components/layer/Layer";
import Example from "./Components/network/Network";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4}>
            <h1>Layer Selector</h1>
          </Col>
          <Col md={4}>
            <h1>Network</h1>
            <DndProvider backend={Backend}>
              <Example />
            </DndProvider>
          </Col>
          <Col md={4}>
            <h1>Control Buttons</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
