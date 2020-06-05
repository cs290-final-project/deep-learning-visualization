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
const Community: React.FC<Networks> = (nets) => {
    const [networks, useNetworks] = useState(nets);

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
                {networks.nets.map((net) => renderNetwork(net))}
            </Container>
        </>
    );
};

export default Community;
