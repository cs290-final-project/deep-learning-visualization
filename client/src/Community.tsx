import React, { useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComNetwork from "./Components/network/ComNetwork";

export interface Layer { id: number; type: string; width: number; activation: string }

export interface Network {
    name: string,
    description: string,
    creator: string,
    id: string,
    layers: Layer[],
}
export interface Networks {
    nets: Network[];
}
const Community: React.FC = () => {
    const [networks, useNetworks] = useState([
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
    ]);

    const renderNetwork = (network: {
        name: string,
        description: string,
        creator: string,
        id: string,
        layers: Layer[],
    }) => {
        return (
            <ComNetwork
                name={network.name}
                description={network.description}
                creator={network.creator}
                id={network.id}
                layers={network.layers}
            />
        );
    };

    return (
        <>
            <Container>
                <h1>Community Networks</h1>
                {networks.map((net) => renderNetwork(net))}
            </Container>
        </>
    );
};

export default Community;
