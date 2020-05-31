import React, { useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export interface Layer { id: number; type: string; width: number; activation: string }

export interface Network {
    name: string,
    description: string,
    creator: string,
    id: string,
    layers: Layer[],
}

const style = {
    border: "1px dashed gray",
    padding: "0.5rem .5rem",
    marginBottom: ".5rem",
    backgroundColor: "white",
    cursor: "pointer",
    width: 600
};



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
        <div style={style}>
            <Container>
                <Row>
                    <Col md={3}><h2>{network.name}</h2></Col>
                    <Col md={3}><h3>{network.creator}</h3></Col>
                </Row>
                <Row xs={1} md={2}>
                    <Col md={3}>{network.description}</Col>
                    <Col md={3}>
                        <h4>Layers:</h4>
                        <table style={{ width: "100%" }}>
                            <tr>
                                <th>Type</th>
                                <th>Width</th>
                                <th>Activation</th>
                            </tr>
                            {network.layers.map((layer) => writeLayer(layer))}
                        </table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ComNetwork;