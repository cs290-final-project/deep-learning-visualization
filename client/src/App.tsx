import React from "react";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import { Container, Row, Col } from "react-bootstrap";
import Network from "./Components/network/Network";
import Community from "./Community"

const networks = [
    {
        name: "Test Network 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi et ullamcorper eleifend. Curabitur eu neque sollicitudin, pulvinar purus vitae, posuere metus.",
        creator: "Shaurya Gaur",
        id: "5198198098",
        layers: [
            {
                id: 1,
                type: "Conv2d",
                width: 128,
                activation: "ReLU",
            },
            {
                id: 2,
                type: "MaxPool2d",
                width: 64,
                activation: "Sigmoid",
            },
            {
                id: 3,
                type: "Linear",
                width: 10,
                activation: "Softmax",
            },
        ],
    },
    {
        name: "Test Network 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi et ullamcorper eleifend. Curabitur eu neque sollicitudin, pulvinar purus vitae, posuere metus.",
        creator: "Andrew Pynch",
        id: "5198198098",
        layers: [
            {
                id: 1,
                type: "Conv2d",
                width: 128,
                activation: "ReLU",
            },
            {
                id: 2,
                type: "MaxPool2d",
                width: 64,
                activation: "Sigmoid",
            },
            {
                id: 3,
                type: "Linear",
                width: 10,
                activation: "Softmax",
            },
        ],
    },
    {
        name: "Test Network 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque mi et ullamcorper eleifend. Curabitur eu neque sollicitudin, pulvinar purus vitae, posuere metus.",
        creator: "Philip Bindemann",
        id: "5198198098",
        layers: [
            {
                id: 1,
                type: "Conv2d",
                width: 128,
                activation: "ReLU",
            },
            {
                id: 2,
                type: "MaxPool2d",
                width: 64,
                activation: "Sigmoid",
            },
            {
                id: 3,
                type: "Linear",
                width: 10,
                activation: "Softmax",
            },
        ],
    },
];

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
                        <Community nets={networks} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;