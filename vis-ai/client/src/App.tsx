import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { render } from "@testing-library/react";
import { Container, Row, Col } from "react-bootstrap";
import MyForm from "./Components/layer/MyForm";
import Network from "./Components/network/Network";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col md={4}>
            <h1>Layer Selector</h1>
          </Col>
          <Col md={4}>
            <DndProvider backend={Backend}>
              <Network />
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
