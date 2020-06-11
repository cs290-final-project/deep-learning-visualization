import React, { useCallback, useState } from "react";
import { Card } from "@material-ui/core";
import { Layer, Network } from "../../Interfaces";
import "../../index.css";

const ComNetwork: React.FC<Network> = ({
    name, description, creator, id, layers
}) => {
    const [network, useNetwork] = useState({
        name: name,
        description: description,
        creator: creator,
        id: id,
        layers: layers,
    });

    const writeLayer = (layer: Layer) => {
        return (
            <tr>
                <td>{layer.type}</td>
                <td>{layer.width}</td>
                <td>{layer.activation}</td>
            </tr>
        );
    };

    return (
        <Card className="community network">
            <h2 className="red">{network.name}</h2>
            <h4>by {network.creator}</h4>
            {network.description}
            <h3 className="red">Layers:</h3>
            <table style={{ width: "100%" }}>
                <tr>
                    <th>Type</th>
                    <th>Width</th>
                    <th>Activation</th>
                </tr>
                {network.layers.map((layer) => writeLayer(layer))}
            </table>
        </Card>
    );
};

export default ComNetwork;