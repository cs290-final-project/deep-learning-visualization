import React, { useCallback, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ComNetwork from "./Components/network/ComNetwork";
import { CircularProgress, LinearProgress } from "@material-ui/core";
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
const Community: React.FC = () => {
    const [networks, useNetworks] = useState([]);
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        const FetchData = async () => {
            const response = await axios.get('/api/networks');
            console.log(response.data);
            console.log("Hey this function is run");
            useNetworks(response.data);
            setLoading(false);
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
        <>
            <Container>

                {loading ? <LinearProgress /> : <h1>Community Networks</h1>}
                {networks.map((net) => renderNetwork(net))}
            </Container>
        </>
    );
};

export default Community;
