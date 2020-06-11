import React, { useCallback, useState, useEffect } from "react";
import ComNetwork from "./Components/network/ComNetwork";
import { LinearProgress } from "@material-ui/core";
import { Layer, Network, Networks } from "./Interfaces";
import axios from 'axios';
import "./index.css";

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
            {loading ? <LinearProgress /> : null}
            <div className="community page">
                {networks.map((net) => renderNetwork(net))}
            </div>
        </>
    );
};

export default Community;
