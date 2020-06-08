import React, { useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography } from "@material-ui/core";

export interface Layer { id: number; type: string; width: number; activation: string }

export interface Network {
    name: string,
    description: string,
    creator: string,
    id: string,
    layers: Layer[],
}

const style = {
    marginBottom: ".5rem",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    flexGrow: 0,
    flexBasis: 360,
    margin: 10,
    padding: "0px 25px 10px 25px",
    boxShadow: "0px 0px 12px rgba(0,0,0,0.25)",
    backgroundColor: "#fff",
} as React.CSSProperties;


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

    const writeLayer = (
        layer: { id: number; type: string; width: number; activation: string }
    ) => {
        return (
            <tr>
                <td>{layer.type}</td>
                <td>{layer.width}</td>
                <td>{layer.activation}</td>
            </tr>
        );
    };

    return (
        <Card style={style}>
            <h2>{network.name}</h2>
            <h4>by {network.creator}</h4>
            {network.description}
            <h3>Layers:</h3>
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