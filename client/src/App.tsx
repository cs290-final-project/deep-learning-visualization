import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Container, Row, Col } from "react-bootstrap";
import Network from "./Components/network/Network";
import Community from "./Community"

function App() {
    return (
        <div className="App">
            <Container fluid>
                <Row>
                    <Col md={4}>
                        <DndProvider backend={Backend}>
                            <Network />
                        </DndProvider>
                    </Col>
                    <Col md={4}>
                        <Community />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;