import React, { useCallback, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComNetwork from "./Components/network/ComNetwork";
import axios from 'axios';

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

const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    padding: "50px 10%",
    backgroundColor: "#ddd"
};

const Community: React.FC = () => {
    const [networks, useNetworks] = useState([]);

    React.useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get('/api/networks');
            console.log(response.data);
            console.log("Hey this function is run");
            useNetworks(response.data);
        }

        FetchData();
    }, []);

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
        <div style={containerStyle}>
            {networks.map((net) => renderNetwork(net))}
        </div>
    );
};

export default Community;