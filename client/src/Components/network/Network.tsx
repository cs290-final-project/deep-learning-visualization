import update from "immutability-helper";
import React, { useCallback, useState } from "react";
import Layer from "../layer/Layer";
import { Container, Row, Col } from "react-bootstrap";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const style = {
    width: 400,
};

const buttonStyle = {
    backgroundColor: "#f00",
    cursor: "pointer",
    color: "#fff",
    boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
};

export interface Item {
    id: number;
    type: string;
    width: number;
    activation: string;
}

export interface NetworkState {
    layers: Item[];
}

const Network: React.FC = () => {
    const [layers, setLayers] = useState([
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
    ]);

    const moveLayer = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            const dragLayer = layers[dragIndex];
            setLayers(
                update(layers, {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragLayer],
                    ],
                })
            );
        },
        [layers]
    );

    const renderLayer = (
        layer: { id: number; type: string; width: number; activation: string },
        index: number
    ) => {
        return (
            <Layer
                key={layer.id}
                index={index}
                id={layer.id}
                type={layer.type}
                width={layer.width}
                activation={layer.activation}
                moveLayer={moveLayer}
            />
        );
    };

    const addLayer = () => {
        const newLayer = {
            id: layers.length + 1,
            type: "Conv2d",
            width: 128,
            activation: "ReLU",
        };
        setLayers([...layers, newLayer]);
    };

    return (
        <>
            <Container>
                <Row>
                    <h1>Network: {layers.length} Layers</h1>
                    <IconButton onClick={addLayer} style={buttonStyle}>
                        <AddIcon />
                    </IconButton>
                </Row>
                <div id="layerContainer" style={style}>
                    {layers.map((layer, i) => renderLayer(layer, i))}
                </div>
            </Container>
        </>
    );
};

export default Network;
